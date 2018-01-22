# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# https://doc.scrapy.org/en/latest/topics/items.html

import scrapy


class RecruitmentDataSpiderItem(scrapy.Item):
    # define the fields for your item here like:
    # name = scrapy.Field()
    pass


class LagouJobItem(scrapy.Item):
    job_url = scrapy.Field()
    job_id = scrapy.Field()
    job_cn_name = scrapy.Field()
    company_name = scrapy.Field()
    salary = scrapy.Field()
    city_cn_name = scrapy.Field()
    experience = scrapy.Field()
    degree = scrapy.Field()
    financing_situation = scrapy.Field()
    population = scrapy.Field()
    job_desc = scrapy.Field()

    # def get_insert_sql(self):
    #     insert_sql = """
    #         insert into lagou_data(job_id, url, job_cn_name, company_name, salary, city_cn_name,
    #         experience_requirement, degree_requirement, financing_situation, job_desc, population)
    #         VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s) ON DUPLICATE KEY UPDATE job_desc=job_desc
    #     """
    #     params = (self["job_id"], self["job_url"], self["job_cn_name"], self["company_name"],
    #               self["salary"], self["city_cn_name"], self["experience"], self["degree"],
    #               self["financing_situation"], self["job_desc"], self["population"])
    #
    #     return insert_sql, params

class Company_list_item(scrapy.Item):
    company_name = scrapy.Field()
    city_cn_name = scrapy.Field()
    financing_situation = scrapy.Field()
    population = scrapy.Field()