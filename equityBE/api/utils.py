from time import sleep
from django.conf import settings
import requests

accid = settings.ACC_ID
baseurl = f'https://mt-client-api-v1.london.agiliumtrade.ai/users/current/accounts/{accid}'
check_and_deploy_url = f'https://mt-provisioning-api-v1.agiliumtrade.agiliumtrade.ai/users/current/accounts/{accid}'
token = settings.TOKEN 

accid2 = settings.ACC_ID2
baseurl2 = f'https://mt-client-api-v1.london.agiliumtrade.ai/users/current/accounts/{accid2}'
check_and_deploy_url2 = f'https://mt-provisioning-api-v1.agiliumtrade.agiliumtrade.ai/users/current/accounts/{accid2}'
token2 = settings.TOKEN2 



def check_and_deploy():
    check_url = f'{check_and_deploy_url}/'
    deploy_url = f'{check_and_deploy_url}/deploy?executeForAllReplicas=true'
    deploy_url_res = requests.post(deploy_url, headers={'auth-token':token})
    if deploy_url_res.status_code ==  204:
        check_url_res = requests.get(check_url, headers={'auth-token':token})
        if check_url_res.json()['connectionStatus'] == "DISCONNECTED":
            print('could not connect to MT')
            return False
        else:
            print('check_and_deploy')
            return True
    else:
        return False
    
def check_and_deploy2():
    check_url = f'{check_and_deploy_url2}/'
    deploy_url = f'{check_and_deploy_url2}/deploy?executeForAllReplicas=true'
    deploy_url_res = requests.post(deploy_url, headers={'auth-token':token2})
    if deploy_url_res.status_code ==  204:
        sleep(5)
        check_url_res = requests.get(check_url, headers={'auth-token':token2})
        if check_url_res.json()['connectionStatus'] == "DISCONNECTED":
            print('could not connect to MT at all')
            return False
        else:
            print('check_and_deploy2')
            return True
    else:
        return False