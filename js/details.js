/*导航加载*/
$.ajax({
    url:'./nav.html',
    type:'post',
    dataType:'html',
    success:function(data){
        $('.nav').html($(data))
    }
})
/*页脚加载*/
$.ajax({
    url:'bottom.html',
    type:'post',
    dataType:'html',
    success:function(data){
        $('.footer').html(data)
        $('.footer-detail').html(data)
    }
})
function app(){
    let a =10,
    var b = 20
}
app()
console.log(a)
console.log(b)