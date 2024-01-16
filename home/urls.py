from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='home'),
    path('memberships/', views.memberships, name='memberships'),
    path('newsletter/', views.newsletter, name='newsletter'),
]
