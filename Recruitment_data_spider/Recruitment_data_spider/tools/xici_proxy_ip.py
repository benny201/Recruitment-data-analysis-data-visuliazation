# -*- coding: utf-8 -*-

import requests
import MySQLdb

from scrapy.selector import Selector

conn = MySQLdb.connect(host="127.0.0.1", user="root", passwd="12345", db="lagou", charset="utf8")
cursor = conn.cursor()


def get_proxy_ip():
    headers = {'User-Agent': "Mozilla/5.0 (Windows; U; Windows NT 6.0; en-us) AppleWebKit/531.9 (KHTML, like Gecko) Version/4.0.3 Safari/531.9"}

    proxies = {
        "http": 'http://f8310c05f6:jJqT75pf@104.227.62.143:4444',
        "http": 'http://f8310c05f6:jJqT75pf@104.227.6.47:4444',
        "http": 'http://f8310c05f6:jJqT75pf@104.227.62.143:4444',
        "http": 'http://f8310c05f6:jJqT75pf@107.152.198.15:4444',
        "http": 'http://f8310c05f6:jJqT75pf@107.152.254.94:4444',
        "http": 'http://f8310c05f6:jJqT75pf@198.20.178.247:4444',
        "http": 'http://f8310c05f6:jJqT75pf@198.20.180.214:4444',

    }

    for i in range(1600):
        re = requests.get("http://www.xicidaili.com/wt/{0}".format(i), headers=headers, proxies=proxies)
        selector = Selector(text=re.text)
        all_trs = selector.css('#ip_list tr')

        ip_list = []
        for tr in all_trs[1:]:
            speed = float(tr.css('.bar::attr(title)').extract()[0].split("秒")[0])
            all_text = tr.css("td::text").extract()
            proxy_ip = all_text[0]
            ip_port = all_text[1]
            proxy_type = all_text[5]

            ip_list.append((proxy_ip, ip_port, speed, proxy_type))
        print(ip_list)
        if ip_list.__len__() > 0:
            for item in ip_list:
                cursor.execute(
                    " insert proxy_ip(ip, ip_port, speed, proxy_type) values('{0}', '{1}', {2}, '{3}') ON DUPLICATE KEY UPDATE speed = {2}".format(item[0], item[1], item[2], item[3])
                )
                conn.commit()

# def get_random_ip():
#     ip = cursor.execute(
#         "SELECT ip, ip_port from proxy_ip ORDER BY RAND() LIMIT 1 "
#     )
#
#     return

class random_proxy_ip:

    def get_random_ip(self):
        # cursor.execute(
        #         "SELECT ip, ip_port from proxy_ip ORDER BY RAND() LIMIT 1 "
        #     )
        #
        # for item in cursor.fetchall():
        #     ip = item[0]
        #     ip_port = item[1]
        #
        http_test_url = "http://wwww.baidu.com"
        # cur_proxy_ip = "http://{0}:{1}".format(ip, ip_port)

        cur_proxy_ip = "https://60.5.41.251:80"
        proxies = {
            "http": cur_proxy_ip
        }

        response = requests.get(http_test_url, proxies=proxies)
        print(response.url)
        return response

# get_proxy_ip()

test_item = random_proxy_ip()
test_item.get_random_ip()