from django.conf import settings
from django.contrib.auth.models import User
from decimal import Decimal


def bag_contents(request):

    bag_items = []
    total = 0
    product_count = 0

    # if user.is_member:


    context = {
        'bag_items': bag_items,
        'total': total,
        'product_count': product_count,
    }

    return context