# -*- coding: utf-8 -*-
from __future__ import unicode_literals
import MySQLdb
import csv
from django.http import HttpResponse, JsonResponse
import json
from django.views.decorators.csrf import csrf_exempt
# connect mysql database
import re

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

#experience
# 经验应届毕业生
# 经验1年以下
# 经验1 - 3年
# 经验3 - 5年
# 经验5 - 10年
# 经验10年以上
# 经验不限
# 经验不限年
# 经验1 - 3
def get_experience_salary_data():
    experience_type = ['经验1-3年', '经验5-10年', '经验3-5年', '经验不限', '经验应届毕业生', '经验1年以下', '经验10年以上', '经验不限年', '经验1-3']
    result = []
    result_dict = {
        '经验应届毕业生': [],
        '经验1年以下':[],
        '经验1-3年':[],
        '经验3-5年':[],
        '经验5-10年':[],
        '经验10年以上':[],
        '经验不限':[]
    }
    key_index = 0

    for key in result_dict:
        for idx in range(1, 101):
            result_dict[key].append([key_index, idx, 0])
        key_index += 1



    for item in experience_type:
        query_sql = """
                    select salary from lagou_all_data where experience_requirement=\'{0}\';
                """.format(item)
        cursor.execute(query_sql)

        key = item
        if item == '经验不限年':
            key = '经验不限'
        elif item == '经验1-3':
            key = '经验1-3年'


        for res in cursor.fetchall():
            index = int(res[0]) - 1
            array = result_dict[key]
            array[index][2] += 1

    for key in result_dict:
        print(result_dict[key])

    # print(result_dict['经验应届毕业生'])

# get_experience_salary_data()

@csrf_exempt
def get_java_requirement(request):
    # request_data = json.loads(request.body.decode('utf-8'))
    name = request.POST.get('name')

    query_sql = """
        
        select job_desc from lagou_java_data where company_name=\'{0}\';
        
    """.format(name)

    # print(name)

    cursor.execute(query_sql)
    res = cursor.fetchone()
    data = res[0]
    pattern = 'Spring|Mybatis|Struts|MySQL|MYSQL|mongodb|Mongodb|redis|Redis|Ajax|JQuery|css|CSS|HTML|html|ibatis|spring|mysql|Linux|Ibatis|Hibernate|hibernate|JavaScript|javascript|Spring boot|SpringMVC|springmvc|springMVC|Memcache|J2EE|Tomcat|tomcat|XML|xml|Hadoop|hadoop|spark|Spark|Storm|storm|JDBC|oracle|Oracle|ORACLE|Spring Cloud|AngularJS|jquery|maven|MAVEN|ajax|JSP|jsp|Jsp|Kafka|ActiveMQ|spring mvc|hbase|Nginx|nginx|Scala|scala|Kotlin|kotlin|Shell|SHELL'
    skills = re.findall(pattern, data)

    skills = list(set(skills))

    response_data = {"nodes": [], "links": []}
    response_data["nodes"].append({"id": name, "group": 1})
    for skill in skills:
        response_data["nodes"].append({"id": skill, "group": 2})
        # {"source": "Napoleon", "target": "Myriel", "value": 1}
        response_data["links"].append({"source": name, "target": skill, "value": 10})


    return JsonResponse({
        'data': response_data
    })

