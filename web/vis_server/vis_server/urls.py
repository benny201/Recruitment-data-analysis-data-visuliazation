"""vis_server URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url
from django.contrib import admin
from vis_site import views

from vis_site.api import mysql_api

urlpatterns = [
    # url(r'^admin/', admin.site.urls),
    url(r'index/', views.index),
    url(r'chart4/', views.chart4),
    # company & population data
    url(r'get_company_population/', mysql_api.get_company_population),
    url(r'get_job_opportunities/', mysql_api.get_job_opportunities),
    url(r'get_java_requirement/', mysql_api.get_java_requirement)
]
