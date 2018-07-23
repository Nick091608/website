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
/*vue 初始化*/
var vm = new Vue({
    el: '#vueBottom',
    /*组件化*/
    components:{
        'foot-01':footComponent01,
        'foot-02':footComponent02,
        'foot-03':footComponent03,
        'foot-04':footComponent04,
        'foot-05':footComponent05,
        'foot-06':footComponent06,
    },
    data: {
        message: '最新案例',
        understand:'了解详情 GO >',
        release:'发布渠道：线上线下媒体',
        end:'创意设计',
        zh:true,
        ok:false,
        textR:{
            textAlign:'end',
        },
        textC:{
            textAlign:'center',
        },
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
})
