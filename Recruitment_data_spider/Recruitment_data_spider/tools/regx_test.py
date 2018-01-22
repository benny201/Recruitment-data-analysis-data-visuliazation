import re

test_str = 'Java开发'
# regx_str = '^/?(\d+)\.'
regx_str = '([a-zA-z0-9]+)'


res = re.search(regx_str, test_str)
if res:
    res = res.group(1)

replace_str = 'C轮\n  '
res = replace_str.strip()

print(res)