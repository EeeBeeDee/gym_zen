from django.shortcuts import render, get_object_or_404
from .models import Category, Product
import random 

from django.contrib.auth.decorators import login_required, user_passes_test

# Create your views here.




def all_products(request):

    """
    View used to display all products and to also filter product selection.
    """

    products = Product.objects.all()
    categories = Category.objects.all()
    products_list = list(products)
    slideshow_products = random.sample(products_list, 3)
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

    products = list(Product.objects.all())
    recommended_products = random.sample(products, 3)

    context = {
        'product': product,
        'recommended_products': recommended_products,
    }

    return render(request, 'products/product_detail.html', context)


@login_required
@user_passes_test(lambda user: user.is_superuser)
def add_product(request):
    """
    Allows admin to add a product to the store.
    """
    

    return render(request, 'products/add_product.html')