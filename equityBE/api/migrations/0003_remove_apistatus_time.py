# Generated by Django 4.0.5 on 2022-06-25 23:25

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_apistatus'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='apistatus',
            name='Time',
        ),
    ]