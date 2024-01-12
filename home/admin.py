from django.contrib import admin
from .models import WorkoutClass


@admin.register(WorkoutClass)
class WorkoutClassAdmin(admin.ModelAdmin):
    model = WorkoutClass
    list_display = (
        'name',
        'tagline',
        'description',
        'image',
    )

    ordering = ('name',)


