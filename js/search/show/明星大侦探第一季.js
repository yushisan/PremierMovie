
 var infor = {"content":[{"name":"name","value":"明星大侦探第一季"},{"name":"主演","value":"何炅 撒贝宁 乔振宇 王鸥 "},{"name":"类型","value":"犯罪 悬疑 真人秀"},{"name":"国家/地区","value":"中国大陆"},{"name":"开播日期","value":"2016"},{"name":"summary","value":"《明星大侦探》作为中国首档明星推理综艺秀，节目创意源自韩国《犯罪现场》，内容包括“30%跌宕剧情+40%综艺搞笑+30%智能推理”，堪称综艺版的《唐人街探案》。韩国原版付费频道收视1.54%(收费频道VS普通频道收视比率为10倍)，受众集中为高知、高收入人群。超高收视、超高人气及好口碑让节目组对本土化悬疑推理大IP《明星大侦探》的播出信心满满。\n另外，从《神探夏洛克》、《心理罪》、《唐人街探案》等悬疑推理题材电视剧、电影的热播情况来看，一大波忠实“悬疑推理”粉丝基础，佐证了《明星大侦探》的巨大市场潜力。\n据了解，每期节目6位嘉宾参与，1人扮演侦探，5人为嫌疑人。每期节目解决1起不可思议的杀人事件，真凶就在嫌疑人之中。6位玩家需在现场6-8个场景内，寻找线索指认真凶!据悉，节目将在芒果TV和芒果直播APP平台播出，网友可以全程参与互动竞猜嫌疑人，还可点播回看精彩剧情。"},{"name":"评分","value":8.6},{"name":"image","value":"https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2323006147.jpg"},{"name":"id","value":"26737158"}]}
 
        var bar_stack_option = {
            title: {
                x: 'left'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: { // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                data: ['热度变化', '百度指数', '评论数']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                data: ['2017-01-20','2017-01-21','2017-01-22','2017-01-23','2017-01-24','2017-01-25','2017-01-26','2017-01-27','2017-01-28','2017-01-29','2017-01-30','2017-01-31','2017-02-01','2017-02-02','2017-02-03','2017-02-04','2017-02-05','2017-02-06','2017-02-07','2017-02-08','2017-02-09','2017-02-10','2017-02-11','2017-02-12','2017-02-13','2017-02-14','2017-02-15','2017-02-16','2017-02-17','2017-02-18','2017-02-19','2017-02-20','2017-02-21','2017-02-22','2017-02-23','2017-02-24','2017-02-25','2017-02-26','2017-02-27','2017-02-28','2017-03-01','2017-03-02','2017-03-03','2017-03-04','2017-03-05']
            }],
            yAxis: [{
                name: '热度',
                type: 'value',
            }, {
                name: '评论数',
                type: 'value',
            }, {
                name: '百度指数',
                type: 'value',
                offset: 65
            }],
            series: [{
                name: '热度变化',
                type: 'line',
                data: []
            }, {
                name: '评论数',
                type: 'line',
                yAxisIndex: 1,
                data: []
            }, {
                name: '百度指数',
                type: 'line',
                yAxisIndex: 2,
                data: [1550,1718,1875,2044,2007,1960,1991,1702,2027,1894,1918,1794,1826,1866,1993,1847,1839,1841,1963,2051,1909,2027,1844,1824,1619,1551,1540,1616,1711,1786,1783,1495,1681,1690,1694,1787,1855,1813,1534,1493,1462,1516,1739,1804,1788]
            }, ]
        };

        var word_list = [{"text":"简单","weight":0.3657989734058304},{"text":"善良","weight":0.6196353540681588},{"text":"有趣","weight":0.5522798586808212},{"text":"舒服","weight":0.22954614035859927},{"text":"尴尬","weight":0.6348943748852185},{"text":"一星","weight":0.3170912294610119},{"text":"干净","weight":0.6617825396755858},{"text":"清新","weight":0.24437547832543363},{"text":"懒懒","weight":0.45938237023067563},{"text":"不错","weight":0.6550956750993112},{"text":"幽默","weight":0.4038363075036329},{"text":"无聊","weight":0.4407556309256394},{"text":"辛苦","weight":0.6516757086152514},{"text":"轻松","weight":0.39988412177222293},{"text":"挺好","weight":0.039536124064848806},{"text":"平淡","weight":0.0389603879962159},{"text":"和谐","weight":0.5050618575863737},{"text":"幸福","weight":0.24363258523835202},{"text":"浮躁","weight":0.5163549713265372},{"text":"庸俗","weight":0.15844049734595686},{"text":"最气","weight":0.3927672406420572},{"text":"最恨","weight":0.4265903831694576},{"text":"真诚","weight":0.43404692401046535},{"text":"爱和","weight":0.20567324407252366},{"text":"乐趣","weight":0.114202497856175},{"text":"很好","weight":0.008457804981795467},{"text":"年轻","weight":0.5257800891642244},{"text":"诚恳","weight":0.2180856066240444},{"text":"艰辛","weight":0.3440138054897467},{"text":"活好","weight":0.37026332670282874},{"text":"快乐","weight":0.04816926624940204},{"text":"美好","weight":0.2558558283182033},{"text":"疯狂","weight":0.2373352688173071},{"text":"纯美","weight":0.100983830467169},{"text":"精致","weight":0.13452028769628255},{"text":"节目","weight":0.8084212983567944},{"text":"老师","weight":0.8482479907615782},{"text":"综艺","weight":0.20136512282484018},{"text":"版权","weight":0.06550789199043747},{"text":"农村","weight":0.21266139411864782},{"text":"小厨","weight":0.10995484735965037},{"text":"做菜","weight":0.03132021863332076},{"text":"广告","weight":0.10133102694408161},{"text":"观众","weight":0.1690547353762516},{"text":"原创","weight":0.09977625798246555},{"text":"原版","weight":0.11650664597072705},{"text":"样子","weight":0.07430896400103253},{"text":"爸爸","weight":0.019070873767381917},{"text":"儿子","weight":0.12188399553688668},{"text":"姑娘","weight":0.031225696359933035},{"text":"评论","weight":0.11221406049657688},{"text":"房子","weight":0.1199869836697665},{"text":"评分","weight":0.010798834084467022},{"text":"人生","weight":0.0987538427657373},{"text":"学生","weight":0.08531858248359692},{"text":"动物","weight":0.10256882437593735},{"text":"国产","weight":0.05402413356359159},{"text":"类型","weight":0.056210239184687046},{"text":"自带","weight":0.10970861331108421},{"text":"朋友","weight":0.08395687611284956},{"text":"塑料","weight":0.0008304237421711486},{"text":"智商","weight":0.09147748125671376},{"text":"全程","weight":0.053194974067305674},{"text":"内容","weight":0.07260078245226739},{"text":"垃圾","weight":0.11129097924880123},{"text":"芒果","weight":0.06617540609727511},{"text":"太重","weight":0.02381237591376561},{"text":"一星","weight":0.06985969489093635},{"text":"时代","weight":0.0853261440361599},{"text":"画面","weight":0.09600999173918007},{"text":"","weight":null}];


        ///////////////////////////////////////////////////////////////////////

        $('.product-details').html('<h5>简介：</h5><p class="intro"></p>');
        for (var i = 0; i < infor.content.length; ++i) {
            if (infor.content[i].name === 'summary') {
                $('.intro').html(infor.content[i].value);
            } else if (infor.content[i].name === 'id') {
                continue;
            } else if (infor.content[i].name === 'image') {
                $('.product-image-large img').attr('src', infor.content[i].value);
            } else if (infor.content[i].name === 'name') {
                $('.section-breadcrumbs h1').html(infor.content[i].value);
                $('title').html('冠影 · PREMIER MOVIE - ' + infor.content[i].value);
            } else {
                if(infor.content[i].value != null)
                $('#tab2 table').append('<tr><td>' + infor.content[i].name + '</td><td>' + infor.content[i].value + '</td></tr>')
            }
        }


        var tab1 = document.getElementById('tab1');
        var bar_dom = document.getElementById('bar_dom');

        echarts.init(bar_dom).setOption(bar_stack_option, true);
        $('#key_dom').jQCloud(word_list);

        function randomData() {
            return Math.round(Math.random() * 1000);
        }
        