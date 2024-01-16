from django.shortcuts import render, redirect
from django.urls import reverse
from django.contrib import messages


def view_bag(request):

    return render(request, 'bag/bag.html')


def add_to_bag(request, item_id):
    """
    Add a quantity of product to the shopping bag, used in product_detail.html
    and products.html found in the products app.
    """

    quantity = int(request.POST.get('quantity')) or 1
    redirect_url = request.POST.get('redirect_url')
    bag = request.session.get('bag', {})

    if item_id in list(bag.keys()):
        bag[item_id] += quantity
    else:
        bag[item_id] = quantity

    messages.success(request, 'Successfully added to your bag!')
    request.session['bag'] = bag
    return redirect(redirect_url)


def update_bag(request, item_id):
    """
    Update a quantity of product to the shopping bag, used in bag.html.
    """

    quantity = int(request.POST.get('quantity'))
    bag = request.session.get('bag', {})

    if quantity > 0:
        bag[item_id] = quantity
    else:
        bag.pop(item_id)

    messages.success(request, 'Your bag has been updated!')
    request.session['bag'] = bag
    return redirect(reverse('bag'))


def remove_from_bag(request, item_id):
    """
    Remove a quantity of product to the shopping bag, used in bag.html.
    """

    bag = request.session.get('bag', {})

    bag.pop(item_id)

    messages.success(request, 'Item removed from your bag!')
    request.session['bag'] = bag
    return redirect(reverse('bag'))
