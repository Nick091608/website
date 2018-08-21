/*页脚组件*/
var footComponent01 = {
    props:['todo'],
    template:'<li>{{todo.text1}}</li>'
};
var footComponent02 = {
    props:['todo'],
    template:'<li>{{todo.text2}}</li>'
};
var footComponent03 = {
    props:['todo'],
    template:'<li>{{todo.text3}}</li>'
};
var footComponent04 = {
    props:['todo'],
    template:'<li>{{todo.text4}}</li>'
};
var footComponent05 = {
    props:['todo'],
    template:'<li>{{todo.text5}}</li>'
};
var footComponent06 = {
    props:['todo'],
    template:'<li>{{todo.text6}}</li>'
};
/*作品组件*/
//left
var workLeftComponent = {
    props: ['todo'],
    template:`
    <div class="work-left">
        <p class="w-newFast">{{todo.newFast}}</p>
        <div class="work-under-l">
           <p class="w-title">{{todo.title}}</p>
           <p class="w-section">{{todo.section}}</p>
           <p class="w-under">{{todo.understand}}</p>
        </div>
        <div class="icon-total">
            <span class="icon_view">&#xe614;</span> <span class="view_num">241</span>
            <span class="icon_collect">&#xe60f;</span> <span class="collect_num">241</span>
            <span class="icon_follow">&#xe663;</span> <span class="follow_num">241</span>
        </div>
    </div>`
}
//center
var workCenterComponent = {
    template:`
    <div class="work-mark">
        <p>GO</p>
        <P>+</P>
        <P>点击了解详情</P>
    </div>`
}
/*vue 初始化*/
var vm = new Vue({
    el: '#vueBox',
    /*组件化*/
    components:{
        'foot-01':footComponent01,
        'foot-02':footComponent02,
        'foot-03':footComponent03,
        'foot-04':footComponent04,
        'foot-05':footComponent05,
        'foot-06':footComponent06,
        'work-left':workLeftComponent,
        'work-center':workCenterComponent,
    },
    /*数据*/
    data:{
        message: '最新案例',
        understand:'了解详情 GO >',
        release:'发布渠道：线上线下媒体',
        end:'创意设计',
        zh:true,
        ok:false,
        textR:{textAlign:'end',},
        textC:{textAlign:'center',},
        textL:{textAlign:'left',},
        /*作品部分*/
        /*第一屏*/
        wL01_l_01:[
            {id:0,newFast:'最新案例',title:'招行质押贷款海报',section:'招商银行（China Merchants Bank）是中国第一家完全由企业法人持股的股份制商业银行...',understand:'了解详情 GO >'},
        ],
        wL01_l_02:[
            {id:0,newFast:'最新案例',title:'招行质押贷款海报',section:'招商银行（China Merchants Bank）是中国第一家完全由企业法人持股的股份制商业银行...',understand:'了解详情 GO >'},
        ],
        wL01_l_03:[
            {id:0,newFast:'最新案例',title:'招行质押贷款海报',section:'招商银行（China Merchants Bank）是中国第一家完全由企业法人持股的股份制商业银行...',understand:'了解详情 GO >'},
        ],
        wL01_l_04:[
            {id:0,newFast:'最新案例',title:'招行质押贷款海报',section:'招商银行（China Merchants Bank）是中国第一家完全由企业法人持股的股份制商业银行...',understand:'了解详情 GO >'},
        ],
        wL01_l_05:[
            {id:0,newFast:'最新案例',title:'招行质押贷款海报',section:'招商银行（China Merchants Bank）是中国第一家完全由企业法人持股的股份制商业银行...',understand:'了解详情 GO >'},
        ],
        wL01_l_06:[
            {id:0,newFast:'最新案例',title:'招行质押贷款海报',section:'招商银行（China Merchants Bank）是中国第一家完全由企业法人持股的股份制商业银行...',understand:'了解详情 GO >'},
        ],
        /*第二屏*/
        wL02_l_01:[
            {id:0,newFast:'最新案例',title:'乐视体育',section:'乐视体育营销推介会5分钟纪念视频...',understand:'了解详情 GO >'},
        ],
        wL02_l_02:[
            {id:0,newFast:'最新案例',title:'康码唾液采集演示视频',section:'康码唾液采集演示视频...',understand:'了解详情 GO >'},
        ],
        wL02_l_03:[
            {id:0,newFast:'最新案例',title:'哈曼用户大会花絮视频',section:'哈曼用户大会花絮视频...',understand:'了解详情 GO >'},
        ],
        wL02_l_04:[
            {id:0,newFast:'最新案例',title:'北虹桥',section:'北虹桥时尚园开场视频...',understand:'了解详情 GO >'},
        ],
        wL02_l_05:[
            {id:0,newFast:'最新案例',title:'公安大数据',section:'公安大数据平台操作界面演示...',understand:'了解详情 GO >'},
        ],
        wL02_l_06:[
            {id:0,newFast:'最新案例',title:'FFI南通',section:'FFI南通新厂开业暨行业交流分享沙龙及晚宴开场视频及活动花絮...',understand:'了解详情 GO >'},
        ],
        /*第三屏*/
        wL03_l_01:[
            {id:0,newFast:'最新案例',title:'绿地集团',section:'绿地集团2015年年度盛典...',understand:'了解详情 GO >'},
        ],
        wL03_l_02:[
            {id:0,newFast:'最新案例',title:'乐视体育',section:'乐视体育营销推介会...',understand:'了解详情 GO >'},
        ],
        wL03_l_03:[
            {id:0,newFast:'最新案例',title:'东方网力',section:'东方网力第二届NFT大会...',understand:'了解详情 GO >'},
        ],
        wL03_l_04:[
            {id:0,newFast:'最新案例',title:'招商银行',section:'“良宵·引”新春民族音乐鉴赏沙龙...',understand:'了解详情 GO >'},
        ],
        wL03_l_05:[
            {id:0,newFast:'最新案例',title:'招商银行',section:'招商银行·私人银行2015年上半年投资策略报告会...',understand:'了解详情 GO >'},
        ],
        wL03_l_06:[
            {id:0,newFast:'最新案例',title:'招商银行',section:'招商银行2014年年底答谢系列音乐会...',understand:'了解详情 GO >'},
        ],
        /*第四屏*/
        wL04_l_01:[
            {id:0,newFast:'最新案例',title:'东方网力',section:'东方网力2015深圳安防展...',understand:'了解详情 GO >'},
        ],
        wL04_l_02:[
            {id:0,newFast:'最新案例',title:'东方网力',section:'东方网力企业体验厅...',understand:'了解详情 GO >'},
        ],
        wL04_l_03:[
            {id:0,newFast:'最新案例',title:'亚什兰 PCHi 展',section:'招亚什兰 PCHi 展...',understand:'了解详情 GO >'},
        ],
        wL04_l_04:[
            {id:0,newFast:'最新案例',title:'亚诗兰2015涂料展',section:'亚诗兰2015涂料展...',understand:'了解详情 GO >'},
        ],
        wL04_l_05:[
            {id:0,newFast:'最新案例',title:'中广国际展台设计',section:'中广国际展台设计...',understand:'了解详情 GO >'},
        ],
        wL04_l_06:[
            {id:0,newFast:'最新案例',title:'北虹桥',section:'北虹桥多媒体互动展示中心...',understand:'了解详情 GO >'},
        ],
        /*第五屏*/
        wL05_l_01:[
            {id:0,newFast:'最新案例',title:'EVCARD E家总动员',section:'EVCARD E家总动员 H5小游戏...',understand:'了解详情 GO >'},
        ],
        wL05_l_02:[
            {id:0,newFast:'最新案例',title:'JBL 70周年',section:'JBL 70周年 官方微信推广...',understand:'了解详情 GO >'},
        ],
        wL05_l_03:[
            {id:0,newFast:'最新案例',title:'哈曼汽车音响',section:'哈曼汽车音响微信公众号运营...',understand:'了解详情 GO >'},
        ],
        wL05_l_04:[
            {id:0,newFast:'最新案例',title:'H5与小游戏创意类',section:'H5与小游戏创意类...',understand:'了解详情 GO >'},
        ],
        wL05_l_05:[
            {id:0,newFast:'最新案例',title:'招行质押贷款海报',section:'招商银行（China Merchants Bank）是中国第一家完全由企业法人持股的股份制商业银行...',understand:'了解详情 GO >'},
        ],
        wL05_l_06:[
            {id:0,newFast:'最新案例',title:'招行质押贷款海报',section:'招商银行（China Merchants Bank）是中国第一家完全由企业法人持股的股份制商业银行...',understand:'了解详情 GO >'},
        ],
        /*第六屏*/
        wL06_l_01:[
            {id:0,newFast:'最新案例',title:'招行质押贷款海报',section:'招商银行（China Merchants Bank）是中国第一家完全由企业法人持股的股份制商业银行...',understand:'了解详情 GO >'},
        ],
        wL06_l_02:[
            {id:0,newFast:'最新案例',title:'招行质押贷款海报',section:'招商银行（China Merchants Bank）是中国第一家完全由企业法人持股的股份制商业银行...',understand:'了解详情 GO >'},
        ],
        wL06_l_03:[
            {id:0,newFast:'最新案例',title:'招行质押贷款海报',section:'招商银行（China Merchants Bank）是中国第一家完全由企业法人持股的股份制商业银行...',understand:'了解详情 GO >'},
        ],
        wL06_l_04:[
            {id:0,newFast:'最新案例',title:'招行质押贷款海报',section:'招商银行（China Merchants Bank）是中国第一家完全由企业法人持股的股份制商业银行...',understand:'了解详情 GO >'},
        ],
        wL06_l_05:[
            {id:0,newFast:'最新案例',title:'招行质押贷款海报',section:'招商银行（China Merchants Bank）是中国第一家完全由企业法人持股的股份制商业银行...',understand:'了解详情 GO >'},
        ],
        wL06_l_06:[
            {id:0,newFast:'最新案例',title:'招行质押贷款海报',section:'招商银行（China Merchants Bank）是中国第一家完全由企业法人持股的股份制商业银行...',understand:'了解详情 GO >'},
        ],

        /*页脚组件*/
        footCom:[
            {id1:0,text1:'品牌展厅规划设计',id2:0,text2:'企业内部传播活动',id3:0,text3:'新闻发布会',id4:0,text4:'企业VI系统设计',id5:0,text5:'品牌视频解决方案',id6:0,text6:'微信公众号运营及维护'},
            {id1:1,text1:'活动展馆三维设计',id2:1,text2:'开业仪式及庆典',id3:1,text3:'VIP访问策划/管理',id4:1,text4:'主画面设计及衍展设计',id5:1,text5:'品牌视频宣传片策划',id6:1,text6:'线上活动策划及执行'},
            {id1:2,text1:'活动站会设计',id2:2,text2:'产品上市/演示/促销',id3:2,text3:'户外商业展示/路演',id4:2,text4:'卡通形象设计',id5:2,text5:'视频脚本撰写',id6:2,text6:'H5等互动程序制作'},
            {id1:3,text1:'公共空间导视设计',id2:3,text2:'渠道伙伴/客户关系',id3:3,text3:'校园巡展/推广',id4:3,text4:'品面及交流设计',id5:3,text5:'视频片拍摄于剪辑',id6:3,text6:'线上邀请函设计'},
            {id1:4,text1:'空间施工搭建',id2:4,text2:'学术会议及论坛',id3:4,text3:'高端定制旅游',id4:4,text4:'三维设计及施工图制作',id5:4,text5:'视频后期处理',id6:4,text6:'交互体验程序开发'},
        ],
        footP:['空间互动创意','市场活动策划执行','创意设计','TVC品牌传播','社交平台创意传播'],
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
        aboutPage2Swiper:function(){
            /*初始化 swiper*/
            var aboutp2Swiper = new Swiper('.about-page2-swiper',{
                direction:'horizontal',
                paginationClickable :true,
                pagination : '.about-page2-pagination',
                /*slidesPerView :'auto',*/
            });
        },
        aboutPage3Swiper:function(){
            /*初始化 swiper*/
            var aboutp3Swiper = new Swiper('.about-page3-swiper',{
                direction:'horizontal',
                paginationClickable :true,
                pagination : '.about-page3-pagination',
            });
        },
        customerSwiper:function(){
            /*初始化 swiper*/
            var customerSwiper = new Swiper('.customer-swiper',{
                direction:'horizontal',
                mousewheelControl : true,
                pagination : '.customer-pagination',
                slidesPerView :'auto',
            });
        },
        indexSwiper:function(){
            /*初始化 swiper*/
            var indexSwiper = new Swiper('.index-swiper',{
                direction:'vertical',
                mousewheelControl : true,
                pagination : '.index-pagination',
                slidesPerView :'auto',
                /*移动端正常滚动*/
                /*freeMode : true,
                freeModeMomentum : false,*/
                onImagesReady:function (swiper) {
                    $('.swiper-slide').removeClass('')
                    $(swiper.slides[swiper.realIndex]).addClass('')
                },
                 onSlideChangeEnd:function (swiper) {
                 $('.swiper-slide').removeClass('')
                 $(swiper.slides[swiper.realIndex]).addClass('')
                 },
            });
        },
        indexHover:function(){
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
                    $('.index-slide-r01').show();
                })
            }
            hover($('.item01'),$('.item-num01'),$('.under01'),$('.indexTitle01'),$('.indexintroduce01'),$('.index-slide-r01'))
            hover($('.item02'),$('.item-num02'),$('.under02'),$('.indexTitle02'),$('.indexintroduce02'),$('.index-slide-r02'))
            hover($('.item03'),$('.item-num03'),$('.under03'),$('.indexTitle03'),$('.indexintroduce03'),$('.index-slide-r03'))
            hover($('.item04'),$('.item-num04'),$('.under04'),$('.indexTitle04'),$('.indexintroduce04'),$('.index-slide-r04'))
            hover($('.item05'),$('.item-num05'),$('.under05'),$('.indexTitle05'),$('.indexintroduce05'),$('.index-slide-r05'))
            hover($('.item06'),$('.item-num06'),$('.under06'),$('.indexTitle06'),$('.indexintroduce06'),$('.index-slide-r06'))
        },
        /*作品*/
        workp1Swiper:function(){
            /*初始化 swiper*/
            var workPage1Swiper = new Swiper('.work-page01',{
                direction:'horizontal',
                paginationClickable :true,
                pagination : '.work-page01-pagination',
                /*自定义分页器*/
                //paginationType : 'custom',
                //paginationElement : 'li',
                paginationBulletRender: function (swiper, index, className) {
                    return '<span class=" workPage ' + className + ' ">' + '0'+ (index + 1) + '</span>';
                }
            });
        },
    },
})
vm.indexSwiper();
vm.customerSwiper();
vm.indexHover();
vm.aboutPage2Swiper();
vm.aboutPage3Swiper();
vm.workp1Swiper();

$.fn.extend({
   over:function(child,overL,outL){
        this.hover(function(){
            child.css({'left':overL,'transition':'all .6s'})
        },function(){
            child.css({'left':outL,'transition':'all .6s'})
        })
   },
})
$('.contact-down').over($('.down-mark'),"50%","100%")

//请求数据
function ajaxNum(ele) {
    var about01 = ele.html();
    $.ajax({
        type: 'GET',
        url: 'http://www.addgroup.com.cn/form/session.php',
        data: {view: about01},
        success:function (response) {
            /*var obj = eval( "(" + response+ ")"  )*/
            console.log(response);
            ele.html(response);
        }
    });
}
$('.icon_view').click(function(){
    ajaxNum($('.view_num'))
})


//数据库返回数据
function ajaxNum2(ele) {
    $.ajax({
        type: 'GET',
        url: 'http://www.addgroup.com.cn/form/session2.php',
        success:function (response) {
            ele.html(response);
        }
    });
}
ajaxNum2($('.view_num'))









/*导航加载*/
$.ajax({
    url:'nav.html',
    type:'post',
    dataType:'html',
    success:function(data){
        $('.nav').html(data)
    }
})
/*页脚加载*/
$.ajax({
    url:'bottom.html',
    type:'post',
    dataType:'html',
    success:function(data){
        $('.footer').html(data)
    }
})

