from apscheduler.schedulers.background import BackgroundScheduler
from api.models import TradeInfo,ApiStatus
from api.utils import check_and_deploy, baseurl, token, check_and_deploy2, baseurl2, token2
import requests

def start():
    sche = BackgroundScheduler(timezone="Africa/Lagos")
    sche.add_job(check, 'interval', minutes=5)
    sche.start()

def check():
    if check_and_deploy():
        eq_bal_url = f'{baseurl}/accountInformation'
        time_url = f'{baseurl}/server-time'
        eq_bal_url_res = requests.get(eq_bal_url, headers={'auth-token':token})
        time_url_res = requests.get(time_url, headers={'auth-token':token})
        print(eq_bal_url_res.json()['balance'], eq_bal_url_res.json()['equity'])
        print(time_url_res.json()['brokerTime'])
        time = (time_url_res.json()['brokerTime'].split(' ')[1]).split('.')[0]
        date = (time_url_res.json()['brokerTime'].split(' ')[0])
        TradeInfo.objects.create(Equity=eq_bal_url_res.json()['equity'], 
                                Balance=eq_bal_url_res.json()['balance'], 
                                Time=time, date=date)
    elif check_and_deploy2():
        eq_bal_url = f'{baseurl2}/accountInformation'
        time_url = f'{baseurl2}/server-time'
        eq_bal_url_res = requests.get(eq_bal_url, headers={'auth-token':token2})
        time_url_res = requests.get(time_url, headers={'auth-token':token2})
        print(eq_bal_url_res.json()['balance'], eq_bal_url_res.json()['equity'])
        print( time_url_res.json()['brokerTime'])
        time = (time_url_res.json()['brokerTime'].split(' ')[1]).split('.')[0]
        date = (time_url_res.json()['brokerTime'].split(' ')[0])
        TradeInfo.objects.create(Equity=eq_bal_url_res.json()['equity'], 
                                Balance=eq_bal_url_res.json()['balance'], 
                                Time=time, date=date)
    else:
        api_status = ApiStatus.objects.get_or_create(Name='Status')
        api_status[0].Status = True
        api_status[0].save()
        print('wertyujkl')
          
            