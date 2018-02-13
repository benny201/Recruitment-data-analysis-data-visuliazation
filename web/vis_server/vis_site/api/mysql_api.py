# -*- coding: utf-8 -*-
from __future__ import unicode_literals
import MySQLdb
import csv
from django.http import HttpResponse, JsonResponse
import json
# connect mysql database

conn = MySQLdb.connect("127.0.0.1", "root", "12345", 'lagou', charset="utf8")
cursor = conn.cursor()


def get_company_population(request):

    popu_type = ['少于15人', '15-50人', '50-150人', '150-500人', '500-2000人', '2000人以上']
    # query_sql = " select count(*) from where population = {0}".format('1')
    res_type = {
        '少于15人': '<=15',
        '15-50人': '15-50',
        '50-150人': '50-150',
        '150-500人': '150-500',
        '500-2000人': '500-2000',
        '2000人以上': '>=2000'
    }
    result = []

    for type in popu_type:
        query_sql = """select count(*) from all_company_list where population=\'{0}\' """.format(type)
        cursor.execute(query_sql)
        # print(cursor.fetchone()[0])
        result.append({
            "range": res_type[type],
            "value": cursor.fetchone()[0]
        })

    # return result
    message = 'ok'
    if not result:
        message = 'Data Not Found'

    return JsonResponse({
        'message': message,
        'data': result
    })


# get_company_population()
# print(get_company_population())

# get job opportuinities
def get_job_opportunities(request):
    get_cities_list_query = """select distinct city_cn_name from lagou_all_data"""
    cursor.execute(get_cities_list_query)
    cities_list = cursor.fetchall()
    cities = []
    result = []
    for city in cities_list:
        cities.append(city[0])
    # print(cities)

    for city in cities:
        get_job_opportunities_query = """select count(*) from lagou_all_data where city_cn_name=\'{0}\' """.format(city)
        cursor.execute(get_job_opportunities_query)
        tempvalue = {
            'name': city,
            'value': cursor.fetchone()[0]
        }
        result.append(tempvalue)

    # return result
    message = 'ok'
    if not result:
        message = 'Data Not Found'

    return JsonResponse({
        'message': message,
        'data': result
    })

#get funding type data: 北京，上海，深圳，广州，杭州，成都
def get_funding_type(request):

    response = HttpResponse(content_type='text/csv')
    response['Content-Disposition'] = 'attachment; filename="data.csv"'
    writer = csv.writer(response)
    writer.writerow(['state', '', ''])


# mysql
# funding_type = ['不需要融资', '未融资', '天使轮', 'A轮', 'B轮', 'C轮', 'D轮及以上', '上市公司']
# cities_list = ['北京', '上海', '深圳', '广州', '杭州', '成都']
# for city in cities_list:
#     for type in funding_type:
#         query_sql = """
#             select count(*) from lagou_all_data where city_cn_name=\'{0}\' and funding_type=\'{1}\';
#         """.format(city, type)
#         cursor.execute(query_sql)
#         print(cursor.fetchone()[0])
#     print("\n")