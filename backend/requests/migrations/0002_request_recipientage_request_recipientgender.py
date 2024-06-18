# Generated by Django 5.0.6 on 2024-06-11 14:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('requests', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='request',
            name='recipientAge',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='request',
            name='recipientGender',
            field=models.CharField(choices=[('Male', 'Male'), ('Female', 'Female'), ('Not specified', 'Not specified')], default='Not specified', max_length=15),
        ),
    ]
