from rest_framework.response import Response
from rest_framework.views import APIView
from api.models import TradeInfo, ApiStatus
from api.serializer import TradeInfoSerializer
from django.conf import settings
import requests
from api.utils import check_and_deploy, check_and_deploy2, baseurl, token, baseurl2, token2


class GetTradeInfo(APIView):
    serializer_class = TradeInfoSerializer
    def get(self, request):
        trade_info = TradeInfo.objects.all().order_by('-id')
        serilazer = TradeInfoSerializer(trade_info, many=True)
        return Response(serilazer.data)
     
    
class Get_equity_balance_date(APIView):
    def get(self, request):
        if check_and_deploy():
            eq_bal_url = f'{baseurl}/accountInformation'
            time_url = f'{baseurl}/server-time'
            eq_bal_url_res = requests.get(eq_bal_url, headers={'auth-token':token})
            time_url_res = requests.get(time_url, headers={'auth-token':token})
            print(eq_bal_url_res)
            print(eq_bal_url_res.json()['balance'], eq_bal_url_res.json()['equity'])
            print( time_url_res.json()['brokerTime'])
            time = (time_url_res.json()['brokerTime'].split(' ')[1]).split('.')[0]
            TradeInfo.objects.create(Equity=eq_bal_url_res.json()['equity'], 
                                    Balance=eq_bal_url_res.json()['balance'], 
                                    Time=time)
            serilazer = TradeInfoSerializer(TradeInfo.objects.all(), many=True)
            return Response({'data':serilazer.data})
        elif check_and_deploy2():
            eq_bal_url = f'{baseurl2}/accountInformation'
            time_url = f'{baseurl2}/server-time'
            eq_bal_url_res = requests.get(eq_bal_url, headers={'auth-token':token2})
            time_url_res = requests.get(time_url, headers={'auth-token':token2})
            print(eq_bal_url_res)
            print(eq_bal_url_res.json()['balance'], eq_bal_url_res.json()['equity'])
            print( time_url_res.json()['brokerTime'])
            time = (time_url_res.json()['brokerTime'].split(' ')[1]).split('.')[0]
            TradeInfo.objects.create(Equity=eq_bal_url_res.json()['equity'], 
                                    Balance=eq_bal_url_res.json()['balance'], 
                                    Time=time)
            serilazer = TradeInfoSerializer(TradeInfo.objects.all(), many=True)
            return Response({'data':serilazer.data})
        return Response({'message':'Real Time Updates currently unavaliable'})
    

class Get_api_status(APIView):
    def get(self, request):
        api_status = ApiStatus.objects.get_or_create(Name='Status')
        # api_status[0].Status = False
        # api_status[0].save()
        return Response({'status':api_status[0].Status})
    
    