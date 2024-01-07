from django.shortcuts import render


def index(request):
    """
    View that renders the index/home page
    """

    return render(request, 'home/index.html')


def memberships(request):
    """
    View that renders the membership page
    """

    return render(request, 'home/memberships.html')
