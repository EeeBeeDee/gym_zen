from django.db.models.signals import post_save, post_delete
from django.dispatch import receiver

from .models import OrderLineItem


@receiver(post_save, sender=OrderLineItem)
def update_on_save(sender, instance, created, **kwargs):
    """
    Listen for the post_save signal from the OrderLineItem model allows instances of orders to  have their grand total updated when a line item is added or updated through the admin.
    """

    instance.order.update_grand_total()

@receiver(post_delete, sender=OrderLineItem)
def update_on_delete(sender, instance, **kwargs):
    """
    Uses the same method as above, now listening for the post_delete signal.
    """
    instance.order.update_total()