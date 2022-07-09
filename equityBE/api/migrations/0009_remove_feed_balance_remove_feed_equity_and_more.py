# Generated by Django 4.0.5 on 2022-07-08 22:47

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0008_feed'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='feed',
            name='Balance',
        ),
        migrations.RemoveField(
            model_name='feed',
            name='Equity',
        ),
        migrations.RemoveField(
            model_name='feed',
            name='Time',
        ),
        migrations.RemoveField(
            model_name='feed',
            name='date',
        ),
        migrations.AddField(
            model_name='feed',
            name='feed',
            field=models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, to='api.tradeinfo'),
        ),
    ]