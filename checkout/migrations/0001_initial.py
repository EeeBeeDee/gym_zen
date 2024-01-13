# Generated by Django 3.2.18 on 2024-01-07 20:06

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('order_number', models.UUIDField(default=uuid.uuid4, editable=False)),
                ('full_name', models.CharField(max_length=50)),
                ('email', models.EmailField(max_length=254)),
                ('phone_number', models.CharField(max_length=20)),
                ('eircode', models.CharField(blank=True, max_length=20, null=True)),
                ('city', models.CharField(max_length=40)),
                ('street_address', models.CharField(max_length=80)),
                ('county', models.CharField(blank=True, max_length=80, null=True)),
                ('country', models.CharField(max_length=40)),
                ('date', models.DateTimeField(auto_now_add=True)),
                ('grand_total', models.DecimalField(decimal_places=2, default=0, max_digits=10)),
            ],
        ),
    ]
