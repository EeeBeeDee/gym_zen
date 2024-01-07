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
            'country': request.POST['country'],
            'postcode': request.POST['postcode'],
            'town_or_city': request.POST['town_or_city'],
            'street_address1': request.POST['street_address1'],
            'street_address2': request.POST['street_address2'],
            'county': request.POST['county'],
        }
        order_form = OrderForm(form_data)
        if order_form.is_valid():
            print('Order form is valid')

    return render(request, 'checkout/checkout.html')
