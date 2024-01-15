from django.shortcuts import render, redirect, get_object_or_404
from django.urls import reverse
from django.contrib import messages
from django.core.mail import send_mail
from django.template.loader import render_to_string
from django.conf import settings

import os
from .forms import OrderForm
from .models import Order, OrderLineItem
from products.models import Product
from bag.contexts import bag_contents

import stripe

# Create your views here.

def checkout(request):
    """
    A view to return the checkout page when GET request is made,
    and process the order when POST request is made.
    """
    stripe_public_key = os.environ.get('STRIPE_PUBLIC_KEY')
    stripe_secret_key = os.environ.get('STRIPE_SECRET_KEY')

    if request.method == 'POST':
        bag = request.session.get('bag', {})

        form_data = {
            'full_name': request.POST['full_name'],
            'email': request.POST['email'],
            'phone_number': request.POST['phone_number'],
            'city': request.POST['city'],
            'street_address': request.POST['street_address'],
            'county': request.POST['county'],
            'country': request.POST['country'],
            'eircode': request.POST['eircode'],
        }
        order_form = OrderForm(form_data)
        if order_form.is_valid():
            order = order_form.save()
            for item_id, item_data in bag.items():
                product = Product.objects.get(id=item_id)
                order_line_item = OrderLineItem(
                    order=order,
                    product=product,
                    quantity=item_data,
                )
                order_line_item.save()
                
        return redirect(reverse('checkout_success', args=[order.order_number]))
    else:
        bag = request.session.get('bag', {})
        if not bag:
            messages.error(request, "Your bag is empty at the moment!")
            return redirect(reverse('products'))

        current_bag = bag_contents(request)
        total = current_bag['total']
        stripe_total = round(total * 100)
        stripe.api_key = stripe_secret_key
        intent = stripe.PaymentIntent.create(
            amount=stripe_total,
            currency="eur",
        )
        order_form = OrderForm()

    context = {
        'order_form': order_form,
        'stripe_public_key': stripe_public_key,
        'stripe_client_secret': intent.client_secret,
    }

    return render(request, 'checkout/checkout.html', context)


def checkout_success(request, order_number):
    """
    Handle successful checkouts and send conformation email.
    """

    order = get_object_or_404(Order, order_number=order_number)
    messages.success(request, f'Your order went through succesfully \
                     A confirmation email is on its way to {order.email}')
    
    cust_email = order.email
    subject = render_to_string(
        'email/confirmation_subject.txt',
        {'order': order})
    email_body = render_to_string(
        'email/confirmation_body.txt',
        {'order': order})
    
    send_mail(
        subject,
        email_body,
        settings.DEFAULT_FROM_EMAIL,
        [cust_email]
        ) 
    
    if 'bag' in request.session:
        del request.session['bag']
    
    context = {
        'order': order
    }

    return render(request, 'checkout/checkout_success.html', context)