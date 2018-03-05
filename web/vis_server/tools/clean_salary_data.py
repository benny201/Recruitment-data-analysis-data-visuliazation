import MySQLdb
import re

conn = MySQLdb.connect("127.0.0.1", "root", "12345", 'lagou', charset="utf8")
cursor = conn.cursor()

query_sql = """
            select * from lagou_all_data
            """

update_sql = """
            insert into lagou_all_data(job_id, salary) 
            VALUES (%s, %s) ON DUPLICATE KEY UPDATE salary=VALUES(salary)
             """

query_salary_sql = """
                   select salary from lagou_all_data
                   """

regx_str = '(\d+)'
cursor.execute(query_salary_sql)
result = cursor.fetchall()
# print(result)
# index = 0
# for item in result:
#     res = re.search(regx_str, item[9])
#     # print(res.group(1))
#     cursor.execute(update_sql, (item[0], res.group(1)))
#     conn.commit()
#     index = index + 1
#     print(index)
count_10 = 0
count_20 = 0
count_30 = 0
count_40 = 0
count_50 = 0
count_60 = 0
count_70 = 0
count_80 = 0
count_90 = 0
count_100 = 0
count_100_more = 0

for item in result:
    # print(item[0])
    value = int(item[0])
    if value < 10 :
        count_10 = count_10 + 1
    elif value >= 10 and value < 20:
        count_20 = count_20 + 1
    elif value >= 20 and value < 30:
        count_30 = count_30 + 1
    elif value >= 30 and value < 40:
        count_40 = count_40 + 1
    elif value >= 40 and value < 50:
        count_50 = count_50 + 1
    elif value >= 50 and value < 60:
        count_60 = count_60 + 1
    elif value >= 60 and value < 70:
        count_70 = count_70 + 1
    elif value >= 70 and value < 80:
        count_80 = count_80 + 1
    elif value >= 80 and value < 90:
        count_90 = count_90 + 1
    elif value >= 90 and value < 100:
        count_100 = count_100 + 1
    elif value >= 100:
        count_100_more = count_100_more + 1

print(count_10)
print(count_20)
print(count_30)
print(count_40)
print(count_50)
print(count_60)
print(count_70)
print(count_80)
print(count_90)
print(count_100)
print(count_100_more)


# test_str = '500k-7k'
# # regx_str = '^/?(\d+)\.'
# regx_str = '(\d+)'
#
#
# res = re.search(regx_str, test_str)
#
# if res:
#     res = res.group(1)
#
# # replace_str = 'C轮\n  '
# # res = replace_str.strip()
#
# print(res)


