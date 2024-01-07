from django.shortcuts import render, redirect, get_object_or_404

from .forms import OrderForm
from .models import Order

# Create your views here.

def checkout(request):
    """
    A view to return the checkout page when GET request is made,
    and process the order when POST request is made.
    """

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
            print('Order form is valid')
    else:
        order_form = OrderForm()

    context = {
        'order_form': order_form,
    }

    return render(request, 'checkout/checkout.html', context)
