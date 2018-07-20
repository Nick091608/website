/*vue 初始化*/
var vm = new Vue({
    el: '#vueBox',
    data: {
        message: '最新案例',
        understand:'了解详情 GO >',
        release:'发布渠道：线上线下媒体',
        end:'创意设计',
        zh:true,
        textR:{
            textAlign:'end',
        },
        customerName:['招商银行','东方网力','招商银行','哈曼国际','澳资奶粉','汽车创新港'],
        indexLogo:['../img/index-item01-logo.png','../img/index-item01-logo.png','../img/index-item01-logo.png','../img/index-item01-logo.png','../img/index-item01-logo.png','../img/index-item01-logo.png',
        ],
        num:['01','02','03','04','05','06'],
        sup:['市场活动策划执行','空间互动创意','创意设计','设计平台创意传播','TVC品牌传播','市场活动策划执行'],
        indexTitle:['北虹桥商务区揭幕仪式','东方网力2017深圳安防展','招行质押贷款海报','哈曼汽车音响微信推送','澳滋奶粉最新海报','汽车创新港赢在中国巡回演讲'],
        introduce:['招商银行（China Merchants Bank）是中国第一家完全由企业法人持股的行于......','招商银行（China Merchants Bank）是中国第一家完全由企业法人持股的行于......','招商银行（China Merchants Bank）是中国第一家完全由企业法人持股的行于......','招商银行（China Merchants Bank）是中国第一家完全由企业法人持股的行于......','招商银行（China Merchants Bank）是中国第一家完全由企业法人持股的行于......','招商银行（China Merchants Bank）是中国第一家完全由企业法人持股的行于......'],
    },
    /*方法*/
    methods:{
        indexSwiper:function(){
            /*初始化 swiper*/
            var indexSwiper = new Swiper('.index-swiper',{
                direction:'vertical',
                mousewheelControl : true,
                pagination : '.index-pagination',
                slidesPerView :'auto',
                onImagesReady:function (swiper) {
                    $('.swiper-slide').removeClass('')
                    $(swiper.slides[swiper.realIndex]).addClass('')
                },
                 onSlideChangeEnd:function (swiper) {
                 $('.swiper-slide').removeClass('')
                 $(swiper.slides[swiper.realIndex]).addClass('')
                 },
            })
        },
        indexHover:function(){
            /*var indexSL = document.getElementById('index-slide-l');
            var indexSLDiv = indexSL.getElementsByTagName('div');
            var indexSR= document.getElementById('index-slide-r');
            var indexSRSpan = indexSR.getElementsByTagName('span');
            for(var i=0;i<indexSLDiv.length;i++){
                indexSLDiv[i].index = i;
                indexSLDiv[i].onmouseover = function(){
                    show(this.index);
                }
            }
            function show(a){
                for(var j=0;j<indexSLDiv.length;j++){
                    indexSLDiv[j].classList.remove('animt_item');
                    indexSRSpan[j].classList.remove('cur');
                }
                indexSLDiv[a].classList.add('animt_item');
                indexSRSpan[a].classList.add('cur');
            }*/
            function hover(liitem,num,under,title,con,rightDiv){
                liitem.hover(function(){
                    $(this).addClass('itemHover')
                    num.css({
                        'color':'#c7152d'
                    })
                    under.css({
                        'color':'#c7152d'
                    })
                    num.addClass('itemNum animit-item')
                    under.addClass('itemNum animit-item')
                    title.addClass('itemNum animit-item')
                    con.addClass('itemNum animit-item')
                    rightDiv.css({
                        'left':'50%',
                        'transition':'all .8s'
                    })
                    $('.index-slide-r01').hide()
                },function(){
                    $(this).removeClass('itemHover')
                    num.css({
                        'color':''
                    })
                    under.css({
                        'color':''
                    })
                    num.removeClass('itemNum animit-item')
                    under.removeClass('itemNum animit-item')
                    title.removeClass('itemNum animit-item')
                    con.removeClass('itemNum animit-item')
                    rightDiv.css({
                        'left':'100%',
                        'transition':'all .8s'
                    })
                    $('.index-slide-r01').show()
                })
            }
            hover($('.item01'),$('.item-num01'),$('.under01'),$('.indexTitle01'),$('.indexintroduce01'),$('.index-slide-r01'))
            hover($('.item02'),$('.item-num02'),$('.under02'),$('.indexTitle02'),$('.indexintroduce02'),$('.index-slide-r02'))
            hover($('.item03'),$('.item-num03'),$('.under03'),$('.indexTitle03'),$('.indexintroduce03'),$('.index-slide-r03'))
            hover($('.item04'),$('.item-num04'),$('.under04'),$('.indexTitle04'),$('.indexintroduce04'),$('.index-slide-r04'))
            hover($('.item05'),$('.item-num05'),$('.under05'),$('.indexTitle05'),$('.indexintroduce05'),$('.index-slide-r05'))
            hover($('.item06'),$('.item-num06'),$('.under06'),$('.indexTitle06'),$('.indexintroduce06'),$('.index-slide-r06'))
        },
    },
})
vm.indexSwiper();
vm.indexHover();
