from django.db import models

# Create your models here.


class WorkoutClass(models.Model):
    name = models.CharField(max_length=100)
    tagline = models.CharField(max_length=100)
    description = models.TextField(max_length=500)
    image = models.ImageField(upload_to='images/', default='')

    def __str__(self):
        return self.name
    
class Quote(models.Model):
    quote = models.TextField(max_length=200)
    origin = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.origin
