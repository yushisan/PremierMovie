
 var infor = {"content":[{"name":"name","value":"生化危机6"},{"name":"导演","value":""},{"name":"编剧"},{"name":"主演","value":""},{"name":"类型","value":""},{"name":"上映日期"},{"name":"summary"},{"name":"评分","value":""},{"name":"image"},{"name":"id"}]}
 
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
                data: ['2017-01-20','2017-01-21','2017-01-22','2017-01-23','2017-01-24','2017-01-25','2017-01-27','2017-01-28','2017-01-29','2017-01-30','2017-01-31','2017-02-01','2017-02-02','2017-02-03','2017-02-04','2017-02-05','2017-02-06','2017-02-07','2017-02-08','2017-02-09','2017-02-10','2017-02-11','2017-02-12','2017-02-13','2017-02-14','2017-02-15','2017-02-16','2017-02-17','2017-02-18','2017-02-19','2017-02-20','2017-02-21','2017-02-22','2017-02-23','2017-02-24','2017-02-25','2017-02-26','2017-02-27','2017-02-28','2017-03-01','2017-03-02','2017-03-03','2017-03-04','2017-03-05']
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
                data: [17136,18277,19973,20015,23705,27646,26554,35618,33489,31940,34072,37498,39934,43404,46674,45584,45852,48074,46893,42105,45315,43513,39012,35029,31708,34960,37745,44358,49934,46159,6,43094,49077,65790,191237,222010,183029,96358,72186,62956,54410,61977,83688,71235]
            }, ]
        };

        var word_list = [{"text":"细腻","weight":0.9131407199840493},{"text":"平淡","weight":0.1750704543139464},{"text":"善良","weight":0.0642434028747159},{"text":"沉闷","weight":0.09164819432225797},{"text":"惊悚","weight":0.39696710202961955},{"text":"焦虑","weight":0.2567727787891273},{"text":"伤害","weight":0.5456651963655058},{"text":"很小","weight":0.3171207198542977},{"text":"落后","weight":0.09959127994815897},{"text":"幽默","weight":0.179725334092093},{"text":"微妙","weight":0.23949831179499043},{"text":"不安","weight":0.12153578198027927},{"text":"尊严","weight":0.21684967418316423},{"text":"平凡","weight":0.0017466164719441412},{"text":"悲伤","weight":0.30841150008584445},{"text":"尊重","weight":0.193553003025624},{"text":"完美","weight":0.22860376290243695},{"text":"羞耻","weight":0.23825441160675745},{"text":"歡喜","weight":0.2953348110987561},{"text":"细微","weight":0.39323016002856465},{"text":"隐晦","weight":0.06140009736370163},{"text":"幸福","weight":0.1121993778166663},{"text":"犀利","weight":0.24461911602461697},{"text":"模糊","weight":0.1790441684990563},{"text":"揪心","weight":0.23916638904308665},{"text":"琐碎","weight":0.34397560275888545},{"text":"扎实","weight":0.21703760582118925},{"text":"巧妙","weight":0.0037164244462748776},{"text":"尴尬","weight":0.13092031586805242},{"text":"无聊","weight":0.21555116776099711},{"text":"可悲","weight":0.34576541052688714},{"text":"不急","weight":0.17544440558333838},{"text":"不慢","weight":0.13617463816976969},{"text":"有趣","weight":0.3787919414007384},{"text":"强大","weight":0.3435450994178123},{"text":"电影","weight":0.6021534774205859},{"text":"社会","weight":0.21935486882731295},{"text":"故事","weight":0.09519494357323703},{"text":"男主","weight":0.16964435762625027},{"text":"推销员","weight":0.17352254212586427},{"text":"困境","weight":0.2459788888680566},{"text":"妻子","weight":0.17116713238184944},{"text":"人性","weight":0.18025333867075755},{"text":"剧本","weight":0.21372372216208058},{"text":"剧情","weight":0.19698000553813813},{"text":"家庭","weight":0.05067296377083668},{"text":"戏中戏","weight":0.03092230830041056},{"text":"文化","weight":0.17803280425433868},{"text":"剧作","weight":0.22922770043594018},{"text":"关系","weight":0.11270762184011075},{"text":"现实","weight":0.13044039960863515},{"text":"女性","weight":0.06316465641154302},{"text":"宗教","weight":0.22555518616382117},{"text":"情感","weight":0.10600243438823134},{"text":"角色","weight":0.18564429555913062},{"text":"老头","weight":0.04183736285958907},{"text":"结尾","weight":0.1893304249730204},{"text":"人物","weight":0.00297627813459611},{"text":"互文","weight":0.12490228183993621},{"text":"戏剧","weight":0.19184495335328058},{"text":"细节","weight":0.04511031931487692},{"text":"影片","weight":0.010724102051996249},{"text":"观众","weight":0.06266079843468161},{"text":"情绪","weight":0.13304398157363134},{"text":"事件","weight":0.0838285595627336},{"text":"演员","weight":0.013675826519994657},{"text":"镜头","weight":0.10703982780310148},{"text":"精彩","weight":0.0805790156681872},{"text":"情节","weight":0.031714213604471526},{"text":"丈夫","weight":0.09162345505397784},{"text":"","weight":null}];


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
        