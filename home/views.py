from django.shortcuts import render
from .models import WorkoutClass

def index(request):
    """
    View that renders the index/home page
    """

    return render(request, 'home/index.html')


def memberships(request):
    """
    View that renders the membership page
    """
    workout_classes = WorkoutClass.objects.all()

    context = {'workout_classes': workout_classes}

    return render(request, 'home/memberships.html', context)
