/*vue 初始化*/
var vm = new Vue({
    el: '#vueBox',
    /*数据*/
    data:{
        zh:true,
        textL:{textAlign:'left',},
        textR:{textAlign:'end',},
        textC:{textAlign:'center',},
    },
    /*方法*/
    methods:{
        poLeftHover:function(){
            $('.down-mark').css({left:'50%','transition':'all .6s'})
        },
        poLeftLeave:function(){
            $('.down-mark').css({left:'100%','transition':'all .6s'})
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
            })
        },
    },
})
vm.indexSwiper();
$(function(){

})

/*导航加载*/
$.ajax({
    url:'nav.html',
    type:'post',
    dataType:'html',
    success:function(data){
        $('.nav').html(data);
    }
})
/*页脚加载*/
$.ajax({
    url:'bottom.html',
    type:'post',
    dataType:'html',
    success:function(data){
        $('.swiper-slide:nth-child(3)').html(data);
    }
})
