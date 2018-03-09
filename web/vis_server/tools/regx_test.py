
import re

# str = """
#     职位描述：
#     1. 参与产品后台服务端开发, 和高并发高压力服务端性能调优;
#     2. 参与大数据处理和数据分析工作;
#
#     任职要求: 
#     1. 本科以上学历，计算机及其相关专业，2年以上JAVA相关开发工作经验;
#     2. 熟练掌握Spring, Mybatis, Struts等相关技术, 能独立完成项目开发;
#     3. 熟悉MySQL和mongodb, redis等NOSQL DB, 要求有高并发, 高压力处理经验优先;
#     4. 有一定Ajax, JQuery, css等网页处理经验;
#     5.善于学习, 有良好的逻辑思维, 具有很强的分析问题和解决问题的能力, 具备良好的表达和沟通能力及团队合作精神;
#
#     下面我们说一些实在的：
#     下面我们说一些实在的：
#     年底13薪+，五险一金数根！买房贷款不愁~
#     工作日每天有餐补和交通补贴，一年1~2次加薪机会；
#     7天带薪病假，5-15天年假，世界那么大，随便去看看；
#     弹性工作时间，再也不用因为地铁故障，公交堵车而迟到扣钱；
#     充足的团建经费，撸串，K歌，烤全羊，massage，想想有点小激动呢~
# """
#
# pattern = 'Spring|Mybatis|Struts|MySQL|MYSQL|mongodb|Mongodb|redis|Redis|Ajax|JQuery|css|CSS|HTML|html|ibatis|spring|mysql|Linux|Ibatis|Hibernate|hibernate|JavaScript|javascript|Spring boot|SpringMVC|springmvc|springMVC|Memcache|J2EE|Tomcat|tomcat|XML|xml|Hadoop|hadoop|spark|Spark|Storm|storm|JDBC|oracle|Oracle|ORACLE|Spring Cloud|AngularJS|jquery|maven|MAVEN|ajax|JSP|jsp|Jsp|Kafka|ActiveMQ|spring mvc|hbase|Nginx|nginx|Scala|scala|Kotlin|kotlin|Shell|SHELL'

# res = re.findall('Spring|Mybatis|Struts|MySQL|MYSQL|mongodb|Mongodb|redis|Redis|Ajax|JQuery|css|CSS|HTML|html|ibatis|spring|mysql|Linux|Ibatis|Hibernate|hibernate|JavaScript|javascript|Spring boot|SpringMVC|springmvc|springMVC|Memcache|J2EE|Tomcat|tomcat|XML|xml|Hadoop|hadoop|spark|Spark|Storm|storm|JDBC|oracle|Oracle|ORACLE|Spring Cloud|AngularJS|jquery|maven|MAVEN|ajax|JSP|jsp|Jsp|Kafka|ActiveMQ|spring mvc|hbase|Nginx|nginx|Scala|scala|Kotlin|kotlin|Shell|SHELL', str)
# print(res)