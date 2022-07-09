from api import views
from django.urls import path

urlpatterns = [
    path('getinfo', views.GetTradeInfo.as_view()),
    path('get_eq_bal_date', views.Get_equity_balance_date.as_view()),
    path('check_and_deploy', views.check_and_deploy),
    path('get_status', views.Get_api_status.as_view()),
    path('get_trade_info_by_date', views.GetTradeInfoByDate.as_view()),
]

