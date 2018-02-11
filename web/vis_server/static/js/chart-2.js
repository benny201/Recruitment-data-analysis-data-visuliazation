// chart 2 - Map chart for job opportunities

var data = [
    {
      "name": "上海",
      "value": 22577
    },
    {
      "name": "西安",
      "value": 1925
    },
    {
      "name": "苏州",
      "value": 1687
    },
    {
      "name": "深圳",
      "value": 20776
    },
    {
      "name": "北京",
      "value": 38646
    },
    {
      "name": "广州",
      "value": 16665
    },
    {
      "name": "长沙",
      "value": 2085
    },
    {
      "name": "杭州",
      "value": 13068
    },
    {
      "name": "南京",
      "value": 2797
    },
    {
      "name": "武汉",
      "value": 4513
    },
    {
      "name": "天津",
      "value": 1237
    },
    {
      "name": "宁波",
      "value": 268
    },
    {
      "name": "成都",
      "value": 6800
    },
    {
      "name": "厦门",
      "value": 2209
    },
    {
      "name": "重庆",
      "value": 1418
    },
    {
      "name": "福州",
      "value": 647
    },
    {
      "name": "合肥",
      "value": 848
    },
    {
      "name": "无锡",
      "value": 319
    },
    {
      "name": "济南",
      "value": 772
    },
    {
      "name": "东莞",
      "value": 460
    },
    {
      "name": "郑州",
      "value": 1391
    },
    {
      "name": "佛山",
      "value": 534
    },
    {
      "name": "青岛",
      "value": 790
    },
    {
      "name": "珠海",
      "value": 306
    },
    {
      "name": "中山",
      "value": 59
    },
    {
      "name": "烟台",
      "value": 58
    },
    {
      "name": "泉州",
      "value": 72
    },
    {
      "name": "昆明",
      "value": 184
    },
    {
      "name": "大连",
      "value": 395
    },
    {
      "name": "南昌",
      "value": 240
    },
    {
      "name": "太原",
      "value": 157
    },
    {
      "name": "南宁",
      "value": 172
    },
    {
      "name": "河池",
      "value": 1
    },
    {
      "name": "新乡",
      "value": 4
    },
    {
      "name": "贵阳",
      "value": 112
    },
    {
      "name": "嘉兴",
      "value": 64
    },
    {
      "name": "石家庄",
      "value": 259
    },
    {
      "name": "临沂",
      "value": 53
    },
    {
      "name": "惠州",
      "value": 80
    },
    {
      "name": "潍坊",
      "value": 39
    },
    {
      "name": "沈阳",
      "value": 298
    },
    {
      "name": "海口",
      "value": 13
    },
    {
      "name": "廊坊",
      "value": 49
    },
    {
      "name": "广元",
      "value": 1
    },
    {
      "name": "湛江",
      "value": 9
    },
    {
      "name": "温州",
      "value": 77
    },
    {
      "name": "衢州",
      "value": 6
    },
    {
      "name": "德州",
      "value": 14
    },
    {
      "name": "哈尔滨",
      "value": 57
    },
    {
      "name": "镇江",
      "value": 13
    },
    {
      "name": "湖州",
      "value": 13
    },
    {
      "name": "保定",
      "value": 71
    },
    {
      "name": "常州",
      "value": 92
    },
    {
      "name": "桂林",
      "value": 26
    },
    {
      "name": "三亚",
      "value": 3
    },
    {
      "name": "丽水",
      "value": 7
    },
    {
      "name": "唐山",
      "value": 55
    },
    {
      "name": "南阳",
      "value": 18
    },
    {
      "name": "吉林",
      "value": 1
    },
    {
      "name": "金华",
      "value": 58
    },
    {
      "name": "扬州",
      "value": 24
    },
    {
      "name": "徐州",
      "value": 50
    },
    {
      "name": "赣州",
      "value": 4
    },
    {
      "name": "兰州",
      "value": 51
    },
    {
      "name": "梅州",
      "value": 4
    },
    {
      "name": "拉萨",
      "value": 2
    },
    {
      "name": "南通",
      "value": 30
    },
    {
      "name": "绵阳",
      "value": 9
    },
    {
      "name": "包头",
      "value": 13
    },
    {
      "name": "济宁",
      "value": 17
    },
    {
      "name": "抚州",
      "value": 3
    },
    {
      "name": "漳州",
      "value": 12
    },
    {
      "name": "遵义",
      "value": 7
    },
    {
      "name": "长春",
      "value": 44
    },
    {
      "name": "盐城",
      "value": 5
    },
    {
      "name": "威海",
      "value": 23
    },
    {
      "name": "绍兴",
      "value": 9
    },
    {
      "name": "呼和浩特",
      "value": 32
    },
    {
      "name": "淄博",
      "value": 16
    },
    {
      "name": "银川",
      "value": 9
    },
    {
      "name": "信阳",
      "value": 4
    },
    {
      "name": "黄山",
      "value": 1
    },
    {
      "name": "秦皇岛",
      "value": 7
    },
    {
      "name": "沧州",
      "value": 11
    },
    {
      "name": "衡阳",
      "value": 9
    },
    {
      "name": "邢台",
      "value": 4
    },
    {
      "name": "东营",
      "value": 5
    },
    {
      "name": "柳州",
      "value": 9
    },
    {
      "name": "台州",
      "value": 7
    },
    {
      "name": "宜昌",
      "value": 6
    },
    {
      "name": "永州",
      "value": 2
    },
    {
      "name": "乐山",
      "value": 1
    },
    {
      "name": "宿州",
      "value": 2
    },
    {
      "name": "常德",
      "value": 4
    },
    {
      "name": "开封",
      "value": 3
    },
    {
      "name": "盘锦",
      "value": 6
    },
    {
      "name": "洛阳",
      "value": 22
    },
    {
      "name": "芜湖",
      "value": 22
    },
    {
      "name": "西宁",
      "value": 2
    },
    {
      "name": "朝阳",
      "value": 2
    },
    {
      "name": "日照",
      "value": 1
    },
    {
      "name": "汕头",
      "value": 9
    },
    {
      "name": "揭阳",
      "value": 7
    },
    {
      "name": "遂宁",
      "value": 3
    },
    {
      "name": "邯郸",
      "value": 10
    },
    {
      "name": "鞍山",
      "value": 2
    },
    {
      "name": "蚌埠",
      "value": 5
    },
    {
      "name": "阜阳",
      "value": 2
    },
    {
      "name": "江门",
      "value": 6
    },
    {
      "name": "泰州",
      "value": 3
    },
    {
      "name": "淮安",
      "value": 13
    },
    {
      "name": "张家口",
      "value": 3
    },
    {
      "name": "咸阳",
      "value": 4
    },
    {
      "name": "乌鲁木齐",
      "value": 1
    },
    {
      "name": "荆州",
      "value": 2
    },
    {
      "name": "肇庆",
      "value": 13
    },
    {
      "name": "菏泽",
      "value": 5
    },
    {
      "name": "莆田",
      "value": 7
    },
    {
      "name": "商丘",
      "value": 6
    },
    {
      "name": "临汾",
      "value": 1
    },
    {
      "name": "上饶",
      "value": 4
    },
    {
      "name": "池州",
      "value": 1
    },
    {
      "name": "阳江",
      "value": 3
    },
    {
      "name": "营口",
      "value": 4
    },
    {
      "name": "梧州",
      "value": 2
    },
    {
      "name": "丹东",
      "value": 1
    },
    {
      "name": "滁州",
      "value": 7
    },
    {
      "name": "韶关",
      "value": 3
    },
    {
      "name": "赤峰",
      "value": 4
    },
    {
      "name": "榆林",
      "value": 5
    },
    {
      "name": "渭南",
      "value": 2
    },
    {
      "name": "延安",
      "value": 1
    },
    {
      "name": "清远",
      "value": 3
    },
    {
      "name": "河源",
      "value": 4
    },
    {
      "name": "十堰",
      "value": 2
    },
    {
      "name": "毕节",
      "value": 1
    },
    {
      "name": "黔南",
      "value": 1
    },
    {
      "name": "黔东南",
      "value": 3
    },
    {
      "name": "攀枝花",
      "value": 1
    },
    {
      "name": "淮南",
      "value": 4
    },
    {
      "name": "株洲",
      "value": 2
    },
    {
      "name": "滨州",
      "value": 4
    },
    {
      "name": "淮北",
      "value": 1
    },
    {
      "name": "宜宾",
      "value": 1
    },
    {
      "name": "贺州",
      "value": 1
    },
    {
      "name": "马鞍山",
      "value": 7
    },
    {
      "name": "舟山",
      "value": 3
    },
    {
      "name": "晋城",
      "value": 1
    },
    {
      "name": "泰安",
      "value": 3
    },
    {
      "name": "鹤壁",
      "value": 3
    },
    {
      "name": "连云港",
      "value": 5
    },
    {
      "name": "宝鸡",
      "value": 1
    },
    {
      "name": "德阳",
      "value": 1
    },
    {
      "name": "铜陵",
      "value": 1
    },
    {
      "name": "漯河",
      "value": 1
    },
    {
      "name": "北海",
      "value": 2
    },
    {
      "name": "锦州",
      "value": 1
    },
    {
      "name": "安阳",
      "value": 1
    },
    {
      "name": "大庆",
      "value": 1
    },
    {
      "name": "宿迁",
      "value": 1
    },
    {
      "name": "潮州",
      "value": 1
    },
    {
      "name": "云浮",
      "value": 1
    },
    {
      "name": "九江",
      "value": 2
    },
    {
      "name": "枣庄",
      "value": 1
    },
    {
      "name": "承德",
      "value": 1
    },
    {
      "name": "黄冈",
      "value": 1
    },
    {
      "name": "南充",
      "value": 3
    },
    {
      "name": "武威",
      "value": 1
    },
    {
      "name": "大同",
      "value": 1
    },
    {
      "name": "岳阳",
      "value": 1
    },
    {
      "name": "玉溪",
      "value": 1
    },
    {
      "name": "安康",
      "value": 2
    },
    {
      "name": "西双版纳",
      "value": 1
    },
    {
      "name": "咸宁",
      "value": 2
    },
    {
      "name": "郴州",
      "value": 3
    },
    {
      "name": "长治",
      "value": 1
    },
    {
      "name": "襄阳",
      "value": 1
    },
    {
      "name": "三门峡",
      "value": 1
    },
    {
      "name": "安顺",
      "value": 1
    },
    {
      "name": "晋中",
      "value": 5
    },
    {
      "name": "吉安",
      "value": 1
    },
    {
      "name": "怀化",
      "value": 1
    },
    {
      "name": "丽江",
      "value": 2
    },
    {
      "name": "龙岩",
      "value": 1
    },
    {
      "name": "宜春",
      "value": 1
    },
    {
      "name": "衡水",
      "value": 2
    },
    {
      "name": "贵港",
      "value": 1
    },
    {
      "name": "周口",
      "value": 3
    },
    {
      "name": "鄂州",
      "value": 1
    },
    {
      "name": "安庆",
      "value": 1
    },
    {
      "name": "运城",
      "value": 1
    },
    {
      "name": "宣城",
      "value": 1
    },
    {
      "name": "黔西南",
      "value": 2
    },
    {
      "name": "六安",
      "value": 1
    }
  ]


function get_job_opportunities(geo_data) {
    var mychart = echarts.init(document.getElementById('chart-2'));
    // 指定图表的配置项和数据
        var geoCoordMap = {
            "海门":[121.15,31.89],
            "鄂尔多斯":[109.781327,39.608266],
            "招远":[120.38,37.35],
            "舟山":[122.207216,29.985295],
            "齐齐哈尔":[123.97,47.33],
            "盐城":[120.13,33.38],
            "赤峰":[118.87,42.28],
            "青岛":[120.33,36.07],
            "乳山":[121.52,36.89],
            "金昌":[102.188043,38.520089],
            "泉州":[118.58,24.93],
            "莱西":[120.53,36.86],
            "日照":[119.46,35.42],
            "胶南":[119.97,35.88],
            "南通":[121.05,32.08],
            "拉萨":[91.11,29.97],
            "云浮":[112.02,22.93],
            "梅州":[116.1,24.55],
            "文登":[122.05,37.2],
            "上海":[121.48,31.22],
            "攀枝花":[101.718637,26.582347],
            "威海":[122.1,37.5],
            "承德":[117.93,40.97],
            "厦门":[118.1,24.46],
            "汕尾":[115.375279,22.786211],
            "潮州":[116.63,23.68],
            "丹东":[124.37,40.13],
            "太仓":[121.1,31.45],
            "曲靖":[103.79,25.51],
            "烟台":[121.39,37.52],
            "福州":[119.3,26.08],
            "瓦房店":[121.979603,39.627114],
            "即墨":[120.45,36.38],
            "抚顺":[123.97,41.97],
            "玉溪":[102.52,24.35],
            "张家口":[114.87,40.82],
            "阳泉":[113.57,37.85],
            "莱州":[119.942327,37.177017],
            "湖州":[120.1,30.86],
            "汕头":[116.69,23.39],
            "昆山":[120.95,31.39],
            "宁波":[121.56,29.86],
            "湛江":[110.359377,21.270708],
            "揭阳":[116.35,23.55],
            "荣成":[122.41,37.16],
            "连云港":[119.16,34.59],
            "葫芦岛":[120.836932,40.711052],
            "常熟":[120.74,31.64],
            "东莞":[113.75,23.04],
            "河源":[114.68,23.73],
            "淮安":[119.15,33.5],
            "泰州":[119.9,32.49],
            "南宁":[108.33,22.84],
            "营口":[122.18,40.65],
            "惠州":[114.4,23.09],
            "江阴":[120.26,31.91],
            "蓬莱":[120.75,37.8],
            "韶关":[113.62,24.84],
            "嘉峪关":[98.289152,39.77313],
            "广州":[113.23,23.16],
            "延安":[109.47,36.6],
            "太原":[112.53,37.87],
            "清远":[113.01,23.7],
            "中山":[113.38,22.52],
            "昆明":[102.73,25.04],
            "寿光":[118.73,36.86],
            "盘锦":[122.070714,41.119997],
            "长治":[113.08,36.18],
            "深圳":[114.07,22.62],
            "珠海":[113.52,22.3],
            "宿迁":[118.3,33.96],
            "咸阳":[108.72,34.36],
            "铜川":[109.11,35.09],
            "平度":[119.97,36.77],
            "佛山":[113.11,23.05],
            "海口":[110.35,20.02],
            "江门":[113.06,22.61],
            "章丘":[117.53,36.72],
            "肇庆":[112.44,23.05],
            "大连":[121.62,38.92],
            "临汾":[111.5,36.08],
            "吴江":[120.63,31.16],
            "石嘴山":[106.39,39.04],
            "沈阳":[123.38,41.8],
            "苏州":[120.62,31.32],
            "茂名":[110.88,21.68],
            "嘉兴":[120.76,30.77],
            "长春":[125.35,43.88],
            "胶州":[120.03336,36.264622],
            "银川":[106.27,38.47],
            "张家港":[120.555821,31.875428],
            "三门峡":[111.19,34.76],
            "锦州":[121.15,41.13],
            "南昌":[115.89,28.68],
            "柳州":[109.4,24.33],
            "三亚":[109.511909,18.252847],
            "自贡":[104.778442,29.33903],
            "吉林":[126.57,43.87],
            "阳江":[111.95,21.85],
            "泸州":[105.39,28.91],
            "西宁":[101.74,36.56],
            "宜宾":[104.56,29.77],
            "呼和浩特":[111.65,40.82],
            "成都":[104.06,30.67],
            "大同":[113.3,40.12],
            "镇江":[119.44,32.2],
            "桂林":[110.28,25.29],
            "张家界":[110.479191,29.117096],
            "宜兴":[119.82,31.36],
            "北海":[109.12,21.49],
            "西安":[108.95,34.27],
            "金坛":[119.56,31.74],
            "东营":[118.49,37.46],
            "牡丹江":[129.58,44.6],
            "遵义":[106.9,27.7],
            "绍兴":[120.58,30.01],
            "扬州":[119.42,32.39],
            "常州":[119.95,31.79],
            "潍坊":[119.1,36.62],
            "重庆":[106.54,29.59],
            "台州":[121.420757,28.656386],
            "南京":[118.78,32.04],
            "滨州":[118.03,37.36],
            "贵阳":[106.71,26.57],
            "无锡":[120.29,31.59],
            "本溪":[123.73,41.3],
            "克拉玛依":[84.77,45.59],
            "渭南":[109.5,34.52],
            "马鞍山":[118.48,31.56],
            "宝鸡":[107.15,34.38],
            "焦作":[113.21,35.24],
            "句容":[119.16,31.95],
            "北京":[116.46,39.92],
            "徐州":[117.2,34.26],
            "衡水":[115.72,37.72],
            "包头":[110,40.58],
            "绵阳":[104.73,31.48],
            "乌鲁木齐":[87.68,43.77],
            "枣庄":[117.57,34.86],
            "杭州":[120.19,30.26],
            "淄博":[118.05,36.78],
            "鞍山":[122.85,41.12],
            "溧阳":[119.48,31.43],
            "库尔勒":[86.06,41.68],
            "安阳":[114.35,36.1],
            "开封":[114.35,34.79],
            "济南":[117,36.65],
            "德阳":[104.37,31.13],
            "温州":[120.65,28.01],
            "九江":[115.97,29.71],
            "邯郸":[114.47,36.6],
            "临安":[119.72,30.23],
            "兰州":[103.73,36.03],
            "沧州":[116.83,38.33],
            "临沂":[118.35,35.05],
            "南充":[106.110698,30.837793],
            "天津":[117.2,39.13],
            "富阳":[119.95,30.07],
            "泰安":[117.13,36.18],
            "诸暨":[120.23,29.71],
            "郑州":[113.65,34.76],
            "哈尔滨":[126.63,45.75],
            "聊城":[115.97,36.45],
            "芜湖":[118.38,31.33],
            "唐山":[118.02,39.63],
            "平顶山":[113.29,33.75],
            "邢台":[114.48,37.05],
            "德州":[116.29,37.45],
            "济宁":[116.59,35.38],
            "荆州":[112.239741,30.335165],
            "宜昌":[111.3,30.7],
            "义乌":[120.06,29.32],
            "丽水":[119.92,28.45],
            "洛阳":[112.44,34.7],
            "秦皇岛":[119.57,39.95],
            "株洲":[113.16,27.83],
            "石家庄":[114.48,38.03],
            "莱芜":[117.67,36.19],
            "常德":[111.69,29.05],
            "保定":[115.48,38.85],
            "湘潭":[112.91,27.87],
            "金华":[119.64,29.12],
            "岳阳":[113.09,29.37],
            "长沙":[113,28.21],
            "衢州":[118.88,28.97],
            "廊坊":[116.7,39.53],
            "菏泽":[115.480656,35.23375],
            "合肥":[117.27,31.86],
            "武汉":[114.31,30.52],
            "大庆":[125.03,46.58]
        };

var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
            });
        }
    }
    return res;
};

option = {
    backgroundColor: '#404a59',
    title: {
        // text: '全国主要城市空气质量',
        x:'center',
        textStyle: {
            color: '#fff'
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: function (params) {
            return params.name + ' : ' + params.value[2];
        }
    },
    legend: {
        orient: 'vertical',
        y: 'bottom',
        x:'right',
        data:['pm2.5'],
        textStyle: {
            color: '#fff'
        }
    },
    visualMap: {
        type:'piecewise',
        min: 0,
        max: 40000,
        calculable: true,
        pieces: [
                    {min: 3000}, // 不指定 max，表示 max 为无限大（Infinity）。
                    {min: 1500, max: 3000},
                    {min: 500, max: 1500},
                    {min: 100, max: 500},
                    {min: 10, max: 100},
                    // {value: 123, label: '123（自定义特殊颜色）', color: 'grey'}, // 表示 value 等于 123 的情况。
                    {min:1, max: 10}     // 不指定 min，表示 min 为无限大（-Infinity）。
                ],
        inRange: {
            color: ['#e6ffff', '#ccffff', '#99ffff', "#ffbf00", "#ff8000", "#ff4000"]
        },
        textStyle: {
            color: '#fff'
        }
    },
    geo: {
        map: 'china',
        label: {
            emphasis: {
                show: false
            }
        },
        itemStyle: {
            normal: {
                areaColor: '#323c48',
                borderColor: '#111'
            },
            emphasis: {
                areaColor: '#2a333d'
            }
        }
    },
    series: [
        {
            // map:'china',
            name: 'Job opportunities',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: convertData(geo_data),
            symbolSize: 12,
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            itemStyle: {
                emphasis: {
                    borderColor: '#fff',
                    borderWidth: 1
                }
            },
            // layoutCenter: ['100%', '100%'],
            // layoutSize:100
        }
    ]
}

        // 使用刚指定的配置项和数据显示图表。
        mychart.setOption(option);
}

get_job_opportunities(data);

function get_chart_2_data() {
    $.ajax({
        type:'get',
        url:'http://127.0.0.1:8000/get_company_population/',
        success: function (data) {
            get_job_opportunities(data.data)
        }
    })
}





