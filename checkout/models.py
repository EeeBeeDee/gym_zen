import uuid
from django.db import models
from django.db.models import Sum
from products.models import Product

import logging

logger = logging.getLogger(__name__)


class Order(models.Model):
    order_number = models.UUIDField(default=uuid.uuid4, editable=False)
    full_name = models.CharField(max_length=50, null=False, blank=False)
    email = models.EmailField(max_length=254, null=False, blank=False)
    phone_number = models.CharField(max_length=20, null=False, blank=False)
    eircode = models.CharField(max_length=20, null=True, blank=True)
    city = models.CharField(max_length=40, null=False, blank=False)
    street_address = models.CharField(max_length=80, null=False, blank=False)
    county = models.CharField(max_length=80, null=True, blank=True)
    country = models.CharField(max_length=40, null=False, blank=False)
    date = models.DateTimeField(auto_now_add=True)
    grand_total = models.DecimalField(max_digits=10, decimal_places=2, null=False, default=0)

    def update_grand_total(self):
        """
        Update grand total when lineitems are changed after order is saved through form. Creates a query set of all line items in the order, then uses the aggregate method to sum the lineitem_total field of each line item.
        """

        try:
            self.grand_total = self.lineitems.aggregate(Sum('lineitem_total'))['lineitem_total__sum']
            self.save()
            print("Grand total updated successfully")
        except Exception as e:
            logger.exception("Error updating grand total for order %s: %s", self.order_number, e)

    def __str__(self):
        order_string = str(self.order_number)
        return order_string
    

class OrderLineItem(models.Model):
    order = models.ForeignKey(Order, null=False, blank=False, on_delete=models.CASCADE, related_name='lineitems')
    product = models.ForeignKey(Product, null=False, blank=False, on_delete=models.CASCADE)
    quantity = models.IntegerField(null=False, blank=False, default=0)
    lineitem_total = models.DecimalField(max_digits=6, decimal_places=2, null=False, blank=False, editable=False)

    def save(self, *args, **kwargs):
        """
        Add calulation of lineitem total within model instance, instead of in the view.
        """

        self.lineitem_total = self.product.price * self.quantity
        super().save()

    def __str__(self):
        return f'Item {self.product.id} on order {self.order.order_number}'
