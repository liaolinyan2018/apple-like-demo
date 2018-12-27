/*1 点击对应按钮切换图片 一整张 滚来滚去*/
var allButtons = $('#menu > img');//jQuery对象
console.log(allButtons)
for(let i=0;i<allButtons.length;i++){
  //allButtons[i]是DOM对象
  //$(allButtons[i])是jQuery对象
  $(allButtons[i]).on('click',function(x){
    var index = $(x.currentTarget).index();//点击按钮的索引
    var l = index * -920; //
    $('#images').css({
      transform: 'translate(' + l + 'px)'
    });
    n = index;
  allButtons.eq(n).addClass('red').siblings('.red').removeClass('red');
  
 })
}

/*初始化*/
var n = 0;
var size = allButtons.length;
allButtons.eq(n%size).trigger('click').addClass('red').siblings('.red').removeClass('red');
/*定闹钟*/
var timeId = setInterval( () => {n+=1;allButtons.eq(n%size).trigger('click').addClass('red').siblings('.red').removeClass('red');},1000);

/*鼠标滑过砸闹钟*/
$('.window').on('mouseenter',function() {window.clearInterval(timeId);})

/*鼠标离开重建闹钟*/
$('.window').on('mouseleave',function(){
  timeId = setInterval( () => {n+=1;allButtons.eq(n%size).trigger('click').addClass('red').siblings('.red').removeClass('red');},2000);
})
/*以上是代码未优化的版本*/