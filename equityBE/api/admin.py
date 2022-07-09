from django.contrib import admin

# Register your models here.
from api.models import TradeInfo, ApiStatus, Feeds

admin.site.register(TradeInfo)
admin.site.register(ApiStatus)
admin.site.register(Feeds)