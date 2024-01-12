from django.contrib import admin
from .models import Category, Product

# Register your models here.

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ("id", "name", "price",)
admin.site.register(Category)
