from django.db import models
import json
# Create your models here.

class TradeInfo(models.Model):
    Equity = models.FloatField()
    Balance = models.FloatField()
    Time = models.TimeField()
    date = models.DateField(default=None)
    
    
class ApiStatus(models.Model):
    Name = models.CharField(max_length=100, default='Status')
    Status = models.BooleanField(default=True)
    
    
class Feeds(models.Model):
    Feeds = models.CharField(max_length=100, default=None)
    
    def set_Feeds(self, x):
        self.Feeds = json.dumps(x)

    def get_Feeds(self):
        return json.loads(self.Feeds)