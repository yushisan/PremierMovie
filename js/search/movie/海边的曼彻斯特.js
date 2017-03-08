
 var infor = {"content":[{"name":"name","value":"海边的曼彻斯特"},{"name":"导演","value":"肯尼思·洛纳根,"},{"name":"编剧","value":"肯尼思·洛纳根,"},{"name":"主演","value":"卡西·阿弗莱克,卢卡斯·赫奇斯,米歇尔·威廉姆斯,C·J·威尔逊,凯尔·钱德勒,卡拉·海沃德,格瑞辰·摩尔,泰特·多诺万,埃里卡·麦克德莫特,希瑟·伯恩斯,蜜西·雅格,斯蒂芬·亨德森,约什·汉密尔顿,卡洛琳·皮克曼,肖恩·菲茨吉本,肯尼思·洛纳根,利亚姆·麦克尼尔,马修·布罗德里克,"},{"name":"类型","value":"剧情,家庭,"},{"name":"上映日期","value":"2016-09-08(多伦多电影节),2016-11-18(美国),"},{"name":"summary","value":"李（卡西·阿弗莱克 Casey Affleck 饰）是一名颓废压抑的修理工，在得知哥哥乔伊（凯尔·钱德勒 Kyle Chandler 饰）去世的消息后，李回到了故乡——海边的曼彻斯特处理乔伊的后事。根据乔伊的遗嘱，李将会成为乔伊的儿子帕特里克（卢卡斯·赫奇斯 Lucas Hedg es 饰）的监护人，李打算将帕特里克带回波士顿，但很显然帕特里克并不愿意离开家乡和朋友们，但李亦不愿在这片伤心地久留。原来，曼彻斯特埋藏着李的一段绝望的回忆，他的过失使得两个女儿葬身火海，妻子兰迪（米歇尔·威廉姆斯 Michelle Williams 饰）亦因此而离开了他。此次重回故乡，李再度见到了已经再婚并且即将做妈妈的兰迪，与此同时，帕特里克那失踪已久的母亲艾丽斯（格瑞辰·摩尔 Gretchen Mol 饰）亦联系上了帕特里克，希望他能够成为她的新家庭中的一员。"},{"name":"评分","value":8.6},{"name":"image","value":"https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2421855655.jpg"},{"name":"id","value":"25980443"}]}
 
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
                data: [1091,1076,1610,1660,2050,6586,5698,3155,3752,4243,4408,3595,4115,3462,3244,3080,3613,5410,5043,6136,6817,7118,8737,11063,9279,7566,8483,7115,8352,9339,9977,7782,8232,8127,9331,9153,10926,14118,58988,34262,24733,18851,18900,18443,16171]
            }, ]
        };

        var word_list = [{"text":"悲伤","weight":0.26731371248883234},{"text":"平静","weight":0.4200630223447014},{"text":"平淡","weight":0.3253275548084669},{"text":"遗憾","weight":0.017321478489749655},{"text":"沉重","weight":0.5551979603520898},{"text":"幽默","weight":0.38071378001361345},{"text":"细腻","weight":0.0068069826065370095},{"text":"忧郁","weight":0.14671180958097296},{"text":"温柔","weight":0.31874429570709006},{"text":"伤害","weight":0.1504044016854965},{"text":"孤独","weight":0.3231493061555098},{"text":"意外","weight":0.18878255735062513},{"text":"心疼","weight":0.2849241241446574},{"text":"灿烂","weight":0.286432980443051},{"text":"冷峻","weight":0.20293670537242184},{"text":"寒冷","weight":0.08923520891787835},{"text":"苦难","weight":0.006863246510143128},{"text":"充满","weight":0.11979241743309725},{"text":"不错","weight":0.05152759721534972},{"text":"平和","weight":0.23390905803237738},{"text":"烦躁","weight":0.06649683802249204},{"text":"颓废","weight":0.213689300429578},{"text":"快乐","weight":0.1206833349639922},{"text":"无聊","weight":0.10266858290452742},{"text":"潮湿","weight":0.18258069211021022},{"text":"清冷","weight":0.10786026280764888},{"text":"平靜","weight":0.15954247112441594},{"text":"美好","weight":0.2378262183568297},{"text":"悲傷","weight":0.13021242277336306},{"text":"冷静","weight":0.13133884253885972},{"text":"沉默","weight":0.22037501375296029},{"text":"伤痛","weight":0.09822080546118074},{"text":"肃穆","weight":0.1961411557413688},{"text":"平常","weight":0.04911529846172562},{"text":"残忍","weight":0.10712742762744187},{"text":"电影","weight":0.9478958964232186},{"text":"男主","weight":0.2863413406414666},{"text":"故事","weight":0.26460446357519274},{"text":"人生","weight":0.3527625849964022},{"text":"演技","weight":0.1591335230973276},{"text":"侄子","weight":0.1839115080191906},{"text":"剧情","weight":0.18155445084619629},{"text":"角色","weight":0.038038742966891644},{"text":"前妻","weight":0.12484115772786541},{"text":"情绪","weight":0.10637295253818385},{"text":"人物","weight":0.18856772773499855},{"text":"细节","weight":0.09585883608629428},{"text":"结尾","weight":0.09550167594920271},{"text":"情感","weight":0.1797633471901118},{"text":"经历","weight":0.026427305026657702},{"text":"演员","weight":0.12991569267378889},{"text":"孩子","weight":0.09764237864567488},{"text":"影片","weight":0.11639032367926906},{"text":"镜头","weight":0.1101496583274885},{"text":"剪辑","weight":0.1356361719602639},{"text":"男人","weight":0.1551380555952682},{"text":"内心","weight":0.11554185986988123},{"text":"影帝","weight":0.17894899970312947},{"text":"节奏","weight":0.012572097306349103},{"text":"悲剧","weight":0.06460112869864029},{"text":"全片","weight":0.15156604748143376},{"text":"眼神","weight":0.017081966421809903},{"text":"观众","weight":0.03055870356082655},{"text":"对话","weight":0.0365978128042605},{"text":"音乐","weight":0.07863558159902202},{"text":"时间","weight":0.1412022425192695},{"text":"主演","weight":0.059371090613200964},{"text":"家庭","weight":0.124819789396593},{"text":"主角","weight":0.12636357555108435},{"text":"世界","weight":0.06666584800356931},{"text":"","weight":null}];


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
        