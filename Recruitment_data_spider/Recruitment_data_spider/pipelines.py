# -*- coding: utf-8 -*-

# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://doc.scrapy.org/en/latest/topics/item-pipeline.html

import MySQLdb

# conn = MySQLdb.connect(host="127.0.0.1", user="root", passwd="12345", db="lagou", charset="utf8")
# cursor = conn.cursor()

class RecruitmentDataSpiderPipeline(object):
    def process_item(self, item, spider):
        return item


class MySqlPipeline(object):
    def __init__(self):
        self.conn = MySQLdb.connect(host="127.0.0.1", user="root", passwd="12345", db="lagou", charset="utf8", use_unicode=True)
        self.cursor = self.conn.cursor()

    def process_item(self, item, spider):
        insert_sql = """
                    insert into lagou_java_data(job_id, url, job_cn_name, company_name, salary, city_cn_name,
                    experience_requirement, degree_requirement, financing_situation, job_desc, population)
                    VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s) ON DUPLICATE KEY UPDATE job_desc=job_desc
        """
        self.cursor.execute(insert_sql, (item["job_id"], item["job_url"], item["job_cn_name"], item["company_name"],
                                         item["salary"], item["city_cn_name"], item["experience"], item["degree"],
                                         item["financing_situation"], item["job_desc"], item["population"]))
        self.conn.commit()

        # return item

class CompanyListPipeLine(object):
    def __init__(self):
        self.conn = MySQLdb.connect(host="127.0.0.1", user="root", passwd="12345", db="lagou", charset="utf8", use_unicode=True)
        self.cursor = self.conn.cursor()

    def process_item(self, item, spider):
        insert_sql = """
                    insert into company_list(company_name, city_cn_name, financing_situation, population)
                    VALUES (%s, %s, %s, %s) ON DUPLICATE KEY UPDATE financing_situation=financing_situation
        """
        self.cursor.execute(insert_sql, (item["company_name"], item["city_cn_name"], item["financing_situation"], item["population"]))
        self.conn.commit()


class LagouAllJobPipeline(object):
    def __init__(self):
        self.conn = MySQLdb.connect(host="127.0.0.1", user="root", passwd="12345", db="lagou", charset="utf8", use_unicode=True)
        self.cursor = self.conn.cursor()

    def process_item(self, item, spider):
        insert_sql = """
                    insert into lagou_all_data(job_id, url, job_cn_name, company_name, salary, city_cn_name,
                    experience_requirement, degree_requirement, financing_situation, job_desc, population)
                    VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s) ON DUPLICATE KEY UPDATE job_desc=job_desc
        """
        self.cursor.execute(insert_sql, (item["job_id"], item["job_url"], item["job_cn_name"], item["company_name"],
                                         item["salary"], item["city_cn_name"], item["experience"], item["degree"],
                                         item["financing_situation"], item["job_desc"], item["population"]))
        self.conn.commit()