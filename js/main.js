/*1 点击对应按钮切换图片 一整张 滚来滚去*/
let allButtons = $('#menu > img')
let currentIndex = 0   //全局
let lastIndex = 0
let size = allButtons.length
allButtons.eq(currentIndex % size).trigger('click')

// 负责图片移动变换 和 添加状态
Array.from(allButtons).forEach((btn) => {
  $(btn).on('click', (e) => {
    currentIndex = $(e.currentTarget).index()
    x = ((lastIndex) < currentIndex ? (- currentIndex) : 0) * 920
    $('#images').css({ transform: `translate(${x}px)` })
    allButtons.eq(currentIndex).addClass('current').siblings('.current').removeClass('current')
  })
})


// 自点击闹钟
var currentTimeId = setClock(3000)

/*鼠标滑过砸闹钟*/
$('.window').on('mouseenter', function (e) {
  window.clearClock(currentTimeId)
  // console.log('闹钟删了' + currentTimeId) 闹钟删不掉？？
})

// 再建闹钟
$('.window').on('mouseleave', function (e) {
  let currentTimeId = setClock(3000)
})

function setClock(t) {
  id = setInterval(function () {
    lastIndex = currentIndex
    currentIndex = (currentIndex + 1) % size
    allButtons.eq(currentIndex).trigger('click')
  }, t)
  console.log('id' + id)
  return id
}
function clearClock(id) {
  clearInterval(id)
}