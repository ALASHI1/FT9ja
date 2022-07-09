from rest_framework import serializers

from api.models import TradeInfo,Feeds

class TradeInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = TradeInfo
        fields = ['Equity', 'Balance', 'Time']

class TradeDateInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = TradeInfo
        fields = ['date']
        
class FeedSerializer(serializers.ModelSerializer):
    class Meta:
        model = Feeds
        fields = ['Feeds']
