from django.shortcuts import render, get_object_or_404
from .models import Category, Product
import random 

# Create your views here.




def all_products(request):

    """
    View used to display all products and to also filter product selection.
    """

    products = Product.objects.all()
    categories = Category.objects.all()
    slideshow_products = [
        get_object_or_404(Product, pk=random.randint(1, 5)),
        get_object_or_404(Product, pk=random.randint(6, 10)),
        get_object_or_404(Product, pk=random.randint(11, 15)),
    ]
    merch_heading = ''

    if 'category' in request.GET:
        categories = None
        categories = request.GET['category'].split(',')
        products = products.filter(category__name__in=categories)
        categories = Category.objects.filter(name__in=categories)
    else:
        merch_heading = True

    context = {
        'products': products,
        'categories': categories,
        'slideshow_products': slideshow_products,
        'merch_heading': merch_heading,
    }

    return render(request, 'products/products.html', context)


def product_detail(request, product_id):

    product = get_object_or_404(Product, pk=product_id)
    recommended_products = [
        get_object_or_404(Product, pk=random.randint(1, 5)),
        get_object_or_404(Product, pk=random.randint(6, 10)),
        get_object_or_404(Product, pk=random.randint(11, 15)),
    ]

    context = {
        'product': product,
        'recommended_products': recommended_products,
    }

    return render(request, 'products/product_detail.html', context)


def add_product(request):
    

    return render(request, 'products/add_product.html')