<?php
  require_once('wxjssdk.class.php');
  $weixin = new class_weixin();
  $signPackage = $weixin->GetSignPackage();
  
  $news = array("Title" =>"微信公众平台开发实践", "Description"=>"本书共分10章，案例程序采用广泛流行的PHP、MySQL、XML、CSS、JavaScript、HTML5等程序语言及数据库实现。", "PicUrl" =>'http://images.cnitblog.com/i/340216/201404/301756448922305.jpg', "Url" =>'http://www.cnblogs.com/txw1958/p/weixin-development-best-practice.html');  
?>
  <!DOCTYPE html>
  <html>

  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=2.0, minimum-scale=1.0, user-scalable=no" />
    <meta name="format-detection" content="telephone=no" />
    <title>秘密信件</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0">
    <link rel="stylesheet" href="http://demo.open.weixin.qq.com/jssdk/css/style.css">
  </head>

  <body ontouchstart="">
    点右上角分享后查看
  </body>
  <script src="https://res.wx.qq.com/open/js/jweixin-1.1.0.js"></script>
  <script>
    wx.config({
      debug: false,
      appId: '<?php echo $signPackage["appId"];?>',
      timestamp: '<?php echo $signPackage["timestamp"];?>',
      nonceStr: '<?php echo $signPackage["nonceStr"];?>',
      signature: '<?php echo $signPackage["signature"];?>',
      // url:'<?php echo $signPackage["url"];?>',
      jsApiList: [
        // 所有要调用的 API 都要加到这个列表中
        'checkJsApi',
        'onMenuShareTimeline',
        'onMenuShareAppMessage'
      ]
    });
  </script>
  <script>
    wx.ready(function () {
      wx.checkJsApi({
        jsApiList: [
          'onMenuShareTimeline',
          'onMenuShareAppMessage'
        ],
        success: function (res) {}
      });
      wx.onMenuShareTimeline({
        title: '<?php echo $news['
        Title '];?>',
        link: '<?php echo $news['
        Url '];?>',
        imgUrl: '<?php echo $news['
        PicUrl '];?>',
        trigger: function (res) {
          //alert('用户点击分享到朋友圈');
        },
        success: function (res) {
          //alert('已分享');
          window.location.href = "shared.php";
        },
        cancel: function (res) {
          //alert('已取消');
        },
        fail: function (res) {
          //alert(JSON.stringify(res));
        }
      });
    });

    wx.error(function (res) {
      alert(res.errMsg);
    });
  </script>

  </html>
