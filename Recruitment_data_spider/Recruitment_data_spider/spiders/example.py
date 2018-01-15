# -*- coding: utf-8 -*-
import scrapy


class ExampleSpider(scrapy.Spider):
    name = 'example'
    allowed_domains = ['example.com']
    start_urls = ['www.baidu.com']

    def parse(self, response):
        print(1)
        pass

