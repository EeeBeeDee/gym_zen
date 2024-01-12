from django.shortcuts import render
import random

from .models import WorkoutClass, Quote

def index(request):
    """
    View that renders the index/home page
    """
    quotes = Quote.objects.all()
    random_quote = random.sample(quotes, 1)

    context = {'random_quote': random_quote}

    return render(request, 'home/index.html', context)


def memberships(request):
    """
    View that renders the membership page
    """
    workout_classes = WorkoutClass.objects.all()

    context = {'workout_classes': workout_classes}

    return render(request, 'home/memberships.html', context)
