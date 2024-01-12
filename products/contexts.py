from django.shortcuts import get_object_or_404
from .models import Product
import random

def media_base_url(request):
    """
    Return media base url
    """
    media_base_url = 'https://res.cloudinary.com/dtnj4czrm/image/upload/v1/'
    return {'MEDIA_BASE_URL': media_base_url}

def recommended_product(request):
    """
    Return recommended products
    """
    products = list(Product.objects.all())
    recommended_product = random.sample(products, 3)
    return {'recommended_product': recommended_product}