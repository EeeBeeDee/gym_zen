from django.shortcuts import render, get_object_or_404
from .models import Category, Product

# Create your views here.


def all_products(request):

    """
    View used to display all products and to also filter product selection.
    """

    products = Product.objects.all()
    categories = None

    if 'category' in request.GET:
        categories = request.GET['category'].split(',')
        products = products.filter(category__name__in=categories)
        categories = Category.objects.filter(name__in=categories)

    context = {
        'products': products,
    }

    return render(request, 'products/products.html', context)

def product_detail(request, product_id):

    product = get_object_or_404(Product, pk=product_id)

    context = {
        'product': product,
    }

    return render(request, 'products/product_detail.html', context)

