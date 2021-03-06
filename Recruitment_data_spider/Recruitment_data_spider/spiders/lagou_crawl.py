# -*- coding: utf-8 -*-
import scrapy
from scrapy.linkextractors import LinkExtractor
from scrapy.spiders import CrawlSpider, Rule

#itemlodaer
import re
from scrapy.http import Request
from urllib import parse
from scrapy.loader import ItemLoader
from Recruitment_data_spider.items import LagouJobItem, Company_list_item
from w3lib.html import remove_tags
import re



class LagouCrawlSpider(CrawlSpider):
    name = 'lagou_crawl'
    allowed_domains = ['www.lagou.com']
    start_urls = ['http://www.lagou.com/']

    custom_settings = {
        "COOKIES_ENABLED": False,
        "DOWNLOAD_DELAY": 0,
        'DEFAULT_REQUEST_HEADERS': {
            'Accept': 'application/json, text/javascript, */*; q=0.01',
            'Accept-Encoding': 'gzip, deflate, br',
            'Accept-Language': 'zh-CN,zh;q=0.8',
            'Connection': 'keep-alive',
            'Cookie': 'user_trace_token=20171015132411-12af3b52-3a51-466f-bfae-a98fc96b4f90; LGUID=20171015132412-13eaf40f-b169-11e7-960b-525400f775ce; SEARCH_ID=070e82cdbbc04cc8b97710c2c0159ce1; ab_test_random_num=0; X_HTTP_TOKEN=d1cf855aacf760c3965ee017e0d3eb96; showExpriedIndex=1; showExpriedCompanyHome=1; showExpriedMyPublish=1; hasDeliver=0; PRE_UTM=; PRE_HOST=www.baidu.com; PRE_SITE=https%3A%2F%2Fwww.baidu.com%2Flink%3Furl%3DsXIrWUxpNGLE2g_bKzlUCXPTRJMHxfCs6L20RqgCpUq%26wd%3D%26eqid%3Dee53adaf00026e940000000559e354cc; PRE_LAND=https%3A%2F%2Fwww.lagou.com%2F; index_location_city=%E5%85%A8%E5%9B%BD; TG-TRACK-CODE=index_hotjob; login=false; unick=""; _putrc=""; JSESSIONID=ABAAABAAAFCAAEG50060B788C4EED616EB9D1BF30380575; _gat=1; _ga=GA1.2.471681568.1508045060; LGSID=20171015203008-94e1afa5-b1a4-11e7-9788-525400f775ce; LGRID=20171015204552-c792b887-b1a6-11e7-9788-525400f775ce',
            'Host': 'www.lagou.com',
            'Origin': 'https://www.lagou.com',
            'Referer': 'https://www.lagou.com/',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36',
        }
    }

    rules = (

        # Rule(LinkExtractor(allow=('www.lagou.com/zhaopin/Java/',), )),

        Rule(LinkExtractor(allow=('www.lagou.com/jobs/',)), callback='parse_item', follow=True),
    )

    def parse_item(self, response):
        # company_name = response.xpath("//dl[@class='job_company']/dt/a/img/@alt").extract()[0]
        # city_cn_name = response.xpath("//dd[@class='job_request']/p[1]/span[2]/text()").extract()[0].replace("/", "").strip()
        # financing_situation = response.xpath("//i[@class='icon-glyph-trend']/../text()").extract()[1].strip()
        # population = response.xpath("//i[@class='icon-glyph-figure']/../text()").extract()[1].strip()
        #
        # company_list_item = Company_list_item()
        # company_list_item["company_name"] = company_name
        # company_list_item["city_cn_name"] = city_cn_name
        # company_list_item["financing_situation"] = financing_situation
        # company_list_item["population"] = population

        # yield company_list_item

        job_url = response.url
        job_id = re.search('jobs/(\d+)', job_url).group(1)
        company_name = response.xpath("//dl[@class='job_company']/dt/a/img/@alt").extract()[0]
        job_cn_name = response.css('.job-name::attr(title)').extract()[0]
        salary = response.css('.salary::text').extract()[0].strip()
        city_cn_name = response.xpath("//dd[@class='job_request']/p[1]/span[2]/text()").extract()[0].replace("/", "").strip()
        experience = response.xpath("//dd[@class='job_request']/p[1]/span[3]/text()").extract()[0].replace("/", "").strip()
        degree = response.xpath("//dd[@class='job_request']/p[1]/span[4]/text()").extract()[0].replace("/", "").strip()
        financing_situation = response.xpath("//i[@class='icon-glyph-trend']/../text()").extract()[1].strip()
        population = response.xpath("//i[@class='icon-glyph-figure']/../text()").extract()[1].strip()
        job_desc = remove_tags(response.xpath("//dd[@class='job_bt']/div").extract()[0]).strip()

        lagou_item = LagouJobItem()
        lagou_item["job_url"] = job_url
        lagou_item["job_id"] = job_id
        lagou_item["job_cn_name"] = job_cn_name
        lagou_item["company_name"] = company_name
        lagou_item["salary"] = salary
        lagou_item["city_cn_name"] = city_cn_name
        lagou_item["experience"] = experience
        lagou_item["degree"] = degree
        lagou_item["financing_situation"] = financing_situation
        lagou_item["population"] = population
        lagou_item["job_desc"] = job_desc

        yield lagou_item
