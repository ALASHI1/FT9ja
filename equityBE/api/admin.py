from django.contrib import admin

# Register your models here.
from api.models import TradeInfo, ApiStatus

admin.site.register(TradeInfo)
admin.site.register(ApiStatus)