$(function () {
  banner();
})

/*轮播图*/

/*
需求:
pc端和移动端
1.分析需要的数据,并且模拟
2.在页面初始化的时候判断当前设备
3.根据屏幕设备渲染页面
3.1 把数据解析成html格式的字符串 最常用的是字符串拼接 (动态创建dom元素)
  利用模版引擎
3.2 把字符串设置到页面中
4. 测试在不同终端的显示情况 通过切换窗口宽度达到
5.在移动端手指滑动功能

 */
var banner = function () {
  var data = [{
    pcUrl: 'images/slide_01_2000x410.jpg',
    mUrl: 'images/slide_01_640x340.jpg'
  }, {
    pcUrl: 'images/slide_02_2000x410.jpg',
    mUrl: 'images/slide_02_640x340.jpg'
  }, {
    pcUrl: 'images/slide_03_2000x410.jpg',
    mUrl: 'images/slide_03_640x340.jpg'
  }, {
    pcUrl: 'images/slide_04_2000x410.jpg',
    mUrl: 'images/slide_04_640x340.jpg'
  }];

  /*渲染*/
  var render = function () {
      /*当前设备的宽度*/
      var width = $(window).width();
      var isMbile = width < 768 ? true : false;

      var templatePointFuc = _.template($("#pointTpl").html());
      var templateImageFuc = _.template($("#imgTpl").html());
      var htmlPoint = templatePointFuc({ list: data });

      var htmlImage = templateImageFuc({ list: data, isM: isMbile });
      $(".carousel-indicators").html(htmlPoint);
      $(".carousel-inner").html(htmlImage);
    }
    /*4.测试在不同终端显示情况  通过切换窗口宽度*/
  $(window).on('resize', function () {
    render();
  }).trigger('resize');

  /*移动端手势切换
    滑动超过50px认为是一个手势 判断左滑右滑
  */
  var startx = 0;
  var movex = 0;
  var distancex = 0;
  var isMove = false;
  $(".wjs_banner").on("touchstart", function (e) {
    startx = e.originalEvent.touches[0].clientx;
  }).on("touchmove", function () {
    movex = e.originalEvent.touches[0].clientx;
    distancex = movex - startx;
    isMbile = true;
  }).on("touchend", function () {
    /*判断是否符合手势的要求*/
    if (isMove && distancex > 50) {
      /*判断左滑右滑*/
      if (distancex < 0) {
        /*左滑*/
        $(".carousel").carousel('next')
      } else {
        /*右滑*/
        $(".carousel").carousel('prev')
      }
    }
    startx = 0;
    movex = 0;
    distancex = 0;
    isMove = false;
  })
}
