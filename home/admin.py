from django.contrib import admin
from .models import WorkoutClass, Quote, Slide


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


@admin.register(Quote)
class QuoteAdmin(admin.ModelAdmin):
    model = Quote
    list_display = (
        'origin',
        'created_at'
    )

    ordering = ('created_at',)


@admin.register(Slide)
class SlideAdmin(admin.ModelAdmin):
    model = Slide
    list_display = (
        'heading',
        'description',
    )

    ordering = ('id',)
