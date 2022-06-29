from django.db import models

# Create your models here.

class TradeInfo(models.Model):
    Equity = models.FloatField()
    Balance = models.FloatField()
    Time = models.TimeField()
    
    
class ApiStatus(models.Model):
    Name = models.CharField(max_length=100, default='Status')
    Status = models.BooleanField(default=True)