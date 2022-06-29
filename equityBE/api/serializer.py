from rest_framework import serializers

from api.models import TradeInfo

class TradeInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = TradeInfo
        fields = ['Equity', 'Balance', 'Time']