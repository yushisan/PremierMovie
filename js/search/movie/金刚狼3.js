
 var infor = {"content":[{"name":"name","value":"金刚狼3"},{"name":"导演","value":""},{"name":"编剧"},{"name":"主演","value":""},{"name":"类型","value":""},{"name":"上映日期"},{"name":"summary"},{"name":"评分","value":""},{"name":"image"},{"name":"id"}]}
 
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
                data: [12073,9929,9429,8703,8919,8954,8367,6566,7859,7711,7723,8020,8715,9172,15165,25809,10759,10001,10038,11911,11312,10921,10001,9022,7480,6727,7400,9468,11201,23,14273,11544,13227,13880,16867,20593,26749,26492,25471,27673,39251,61055,257876,353039,348791]
            }, ]
        };

        var word_list = [{"text":"衰老","weight":0.39893711758186784},{"text":"悲壮","weight":0.3074731463487184},{"text":"血腥","weight":0.5992816929022302},{"text":"孤单","weight":0.23748638279529047},{"text":"心疼","weight":0.3900671834150495},{"text":"很棒","weight":0.19192138403659958},{"text":"不悲","weight":0.17768533248290277},{"text":"落魄","weight":0.020959146706285334},{"text":"孤独","weight":0.04364496868152813},{"text":"深沉","weight":0.11636022638698366},{"text":"浓烈","weight":0.00801730335401557},{"text":"苍凉","weight":0.32603589266939403},{"text":"凄凉","weight":0.0730035514519481},{"text":"特效","weight":0.07034755954449275},{"text":"厉害","weight":0.036223637442274394},{"text":"粗暴","weight":0.23031575248343955},{"text":"暴躁","weight":0.11544706461509065},{"text":"生猛","weight":0.447811904636378},{"text":"平庸","weight":0.3607403143826863},{"text":"笨拙","weight":0.044744229914892755},{"text":"简单","weight":0.44410026231498406},{"text":"愚蠢","weight":0.4157898131190541},{"text":"凶狠","weight":0.2715554661830934},{"text":"强悍","weight":0.15833303358930756},{"text":"庞大","weight":0.210058591094117},{"text":"野蛮","weight":0.19450574193050288},{"text":"衰弱","weight":0.1486302267268923},{"text":"阴郁","weight":0.2976373684018179},{"text":"模糊","weight":0.3161842597179753},{"text":"自由","weight":0.1177455195617234},{"text":"寂寞","weight":0.12705658330155412},{"text":"复刻","weight":0.1094400301702579},{"text":"年轻","weight":0.04171850779251435},{"text":"憔悴","weight":0.02831344346356793},{"text":"不乐","weight":0.1170864741960793},{"text":"电影","weight":0.8140988794277844},{"text":"教授","weight":0.16280104410835233},{"text":"漫威","weight":0.07970784705238292},{"text":"变种","weight":0.013823840722546514},{"text":"战警","weight":0.16235998445603178},{"text":"情怀","weight":0.1684433002457645},{"text":"故事","weight":0.05301415177013191},{"text":"观众","weight":0.013146367296932525},{"text":"公路","weight":0.17946607707990153},{"text":"镜头","weight":0.1375724935631492},{"text":"萝莉","weight":0.04948666728824443},{"text":"结局","weight":0.09861200772071192},{"text":"角色","weight":0.13146011744099606},{"text":"剧情","weight":0.00006901911819595752},{"text":"人物","weight":0.11965754882799123},{"text":"西部片","weight":0.030292710605899283},{"text":"漫画","weight":0.18395711438594003},{"text":"场面","weight":0.009934013858500408},{"text":"时代","weight":0.10445312134537905},{"text":"演技","weight":0.07078260701536265},{"text":"结尾","weight":0.0939920040127042},{"text":"整体","weight":0.07015687464803565},{"text":"情感","weight":0.023900202877749938},{"text":"十字架","weight":0.077230927383825},{"text":"动作","weight":0.1252402234375684},{"text":"节奏","weight":0.06904744326353263},{"text":"小女孩","weight":0.0020465081437410983},{"text":"精彩","weight":0.1126821751575346},{"text":"时间","weight":0.04675720543272198},{"text":"悲情","weight":0.1235766288159967},{"text":"暴力","weight":0.003462033666803549},{"text":"人类","weight":0.08800863366626659},{"text":"风格","weight":0.08544364202080387},{"text":"家庭","weight":0.10689372164465111},{"text":"科幻","weight":0.05956117272298276},{"text":"","weight":null}];


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
        