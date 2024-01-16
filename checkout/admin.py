from django.contrib import admin
from .models import Order, OrderLineItem

# Register your models here.


class OrderLineItemAdmin(admin.TabularInline):
    readonly_fields = ('lineitem_total',)
    model = OrderLineItem


class OrderAdmin(admin.ModelAdmin):
    inlines = (OrderLineItemAdmin,)
    readonly_fields = ('order_number', 'date', 'grand_total')

    fields = ('order_number', 'full_name', 'email', 'phone_number', 'eircode',
              'city', 'street_address', 'county', 'country',
              'date', 'grand_total')

    list_display = ('order_number', 'date', 'full_name', 'grand_total')

    ordering = ('-date', )


admin.site.register(Order, OrderAdmin)
