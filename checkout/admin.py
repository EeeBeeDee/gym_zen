from django.contrib import admin
from .models import Order

# Register your models here.

class OrderAdmin(admin.ModelAdmin):
    # inlines = (OrderLineItemAdminInline,)
    readonly_fields = ('order_number', 'date', 'grand_total')

    fields = ('order_number', 'full_name', 'email', 'phone_number', 'eircode', 'city', 'street_address', 'county', 'country', 'date', 'grand_total')

    list_display = ('order_number', 'date', 'full_name', 'grand_total')

    ordering = ('-date', )


admin.site.register(Order, OrderAdmin)
