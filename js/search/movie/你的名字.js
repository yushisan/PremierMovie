
 var infor = {"content":[{"name":"name","value":"你的名字"},{"name":"导演","value":""},{"name":"编剧"},{"name":"主演","value":""},{"name":"类型","value":""},{"name":"上映日期"},{"name":"summary"},{"name":"评分","value":""},{"name":"image"},{"name":"id"}]}
 
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
                data: [57737,57572,58011,56632,55539,56545,55482,45581,60936,57396,56502,56121,57072,56071,53434,51087,51492,47558,0,47417,44778,45167,44331,37368,27885,27027,26546,26394,31355,42390,37738,26212,25454,27034,27332,32477,43622,36790,23203,22451,22652,21946,27973,42004,38010]
            }, ]
        };

        var word_list = [{"text":"清新","weight":0.7593073291031615},{"text":"细腻","weight":0.619805191244993},{"text":"紧凑","weight":0.139597846622536},{"text":"唯美","weight":0.3204732720290181},{"text":"惊喜","weight":0.20917741892320338},{"text":"不错","weight":0.2735636087503471},{"text":"美好","weight":0.4441041740177574},{"text":"矫情","weight":0.18521742658795798},{"text":"细致","weight":0.06855266415837981},{"text":"成熟","weight":0.1822433131543226},{"text":"简单","weight":0.14155628522705055},{"text":"精美","weight":0.2774799857688391},{"text":"温柔","weight":0.1040334565201139},{"text":"成功","weight":0.33520602066033284},{"text":"单薄","weight":0.14203617082790812},{"text":"有趣","weight":0.1455613160575673},{"text":"忧郁","weight":0.1619083598346099},{"text":"流畅","weight":0.020464078736938764},{"text":"圆满","weight":0.007999044778671423},{"text":"遗憾","weight":0.151773037673931},{"text":"澄澈","weight":0.11809335871346192},{"text":"有灵","weight":0.23089233072525334},{"text":"尊重","weight":0.012103545313408428},{"text":"純真","weight":0.24533513901627593},{"text":"最美","weight":0.21008654058554127},{"text":"壮丽","weight":0.2936731946757874},{"text":"神秘","weight":0.10148395044511968},{"text":"幸运","weight":0.276579328518681},{"text":"坚韧","weight":0.2910086940929531},{"text":"神奇","weight":0.2519083559506926},{"text":"粗糙","weight":0.11949437020980197},{"text":"野蛮","weight":0.08532611122966269},{"text":"緊湊","weight":0.21236648421383336},{"text":"艱澀","weight":0.16379874626242744},{"text":"严严","weight":0.29638112088452334},{"text":"故事","weight":0.16151406989493194},{"text":"电影","weight":0.3191418633256636},{"text":"名字","weight":0.23587715398310766},{"text":"画面","weight":0.3437645739541767},{"text":"剧情","weight":0.05056293623063562},{"text":"动画","weight":0.08825889505506779},{"text":"时间","weight":0.24497440107996613},{"text":"时空","weight":0.2284941396118463},{"text":"爱情","weight":0.14980893080869667},{"text":"诚哥","weight":0.20875475701429522},{"text":"彗星","weight":0.11506711735701622},{"text":"世界","weight":0.19015535801220754},{"text":"作品","weight":0.008074778574679402},{"text":"结尾","weight":0.0010337305979940866},{"text":"身体","weight":0.18743654729992176},{"text":"电影院","weight":0.11539210360091139},{"text":"少女","weight":0.05541940601402416},{"text":"元素","weight":0.10692608294359426},{"text":"情节","weight":0.11056065027478433},{"text":"情感","weight":0.13918101036389427},{"text":"男女","weight":0.13059331782850878},{"text":"细节","weight":0.021324320906695407},{"text":"音乐","weight":0.13007304892460483},{"text":"剧本","weight":0.12476462496342626},{"text":"感情","weight":0.09313954454787014},{"text":"结局","weight":0.025840955632564007},{"text":"地方","weight":0.01654022988344332},{"text":"画风","weight":0.1292341567260114},{"text":"影院","weight":0.02216388097453707},{"text":"灾难","weight":0.09261086557824598},{"text":"壁纸","weight":0.07986843631499324},{"text":"票房","weight":0.09371732674072587},{"text":"科幻","weight":0.04627167202607976},{"text":"男主","weight":0.05380022129933406},{"text":"动画片","weight":0.09978868149775323},{"text":"","weight":null}];


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
        