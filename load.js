 

        $(document).ready(function() {
          $('p').click(function(e) {
            e.preventDefault();
            $('#tablet').toggleClass('move');
            $('#wifi').toggleClass('move');
          });
        });
  



  // 开关
  $("#btn").click(function () {
    if ($(this).prop('checked')) {
      $('#btn1').prop('checked', true);
    } else {
      $('#btn1').prop('checked', false);
    }
  });

  $("#btn1").click(function () {
    if ($(this).prop('checked')) {
      $('#btn').prop('checked', true);
    } else {
      $('#btn').prop('checked', false);
    }
  });




  /* 滚动监听 */
// 定义一个获取所有div的距离高度
var arrOffsetTop = [
   $('#a').offset().top / 1.1,
   $('#b').offset().top / 1.1,
   $('#c').offset().top / 1.1,
   $('#d').offset().top / 1.1,
   $('#e').offset().top / 1.1,
   $('#f').offset().top / 1.1,
   $('#g').offset().top / 1.1,
   $('#h').offset().top / 1.1
]


/* 点击事件 */
$('.jd .sidechain ul li').click(function() {
   $(this).addClass('active').siblings().removeClass('active');
   $('body, html').animate({scrollTop: arrOffsetTop[$(this).index()]}, 400);
});


 $('#menu li a').click(function () {
  var f = this;
  $('#menu li a').each(function () {
      this.className = this == f ? 'click' : 'noneclick'
  });
});

  /* 滚动监听 */
// 定义一个获取所有div的距离高度
var arrOffsetTop = [
   $('#aa').offset().top / 1.1,
   $('#bb').offset().top / 1.1,
   $('#cc').offset().top / 1.1,
   $('#dd').offset().top / 1.1,
   $('#ee').offset().top / 1.1,
   $('#ff').offset().top / 1.1,
   $('#gg').offset().top / 1.1,
   $('#hh').offset().top / 1.1
]



/* 点击事件 */
$('.jd2 .sidechain2 ul li').click(function() {
   $(this).addClass('active').siblings().removeClass('active');
   $('body, html').animate({scrollTop: arrOffsetTop[$(this).index()]}, 400);
});






<!-- 侧栏跟随 -->

  jQuery(document).ready(function($){
    $.fn.smartFloat = function() {
    var position = function(element) {
    var top = element.position().top, pos = element.css("position");
    $(window).scroll(function() {
    var scrolls = $(this).scrollTop();
    if (scrolls > top) {
    if (window.XMLHttpRequest) {
    element.css({
    position: "fixed",
    top: 80
    });
    } else {
    element.css({
    top: scrolls
    });
    }
    }else {
    element.css({
    position: "absolute",
    top: top
    });
    }
    });
    };
    return $(this).each(function() {
    position($(this));
    });
    };
    $(".sidechain").smartFloat();
  });
 


    jQuery(document).ready(function($){
      $.fn.smartFloat = function() {
      var position = function(element) {
      var top = element.position().top, pos = element.css("position");
      $(window).scroll(function() {
      var scrolls = $(this).scrollTop();
      if (scrolls > top) {
      if (window.XMLHttpRequest) {
      element.css({
      position: "fixed",
      top: 80
      });
      } else {
      element.css({
      top: scrolls
      });
      }
      }else {
      element.css({
      position: "absolute",
      top: top
      });
      }
      });
      };
      return $(this).each(function() {
      position($(this));
      });
      };
      $(".jd2 .sidechain2").smartFloat();
    });

    

    <!-- 吸顶 -->

      var cc = document.getElementById("nav");
      window.onload = fn;
    function fn () {
      var scrollTop =$(window).scrollTop();

     
       if (scrollTop > 750) {
         var st = document.body.scrollTop || document.documentElement.scrollTop;
         var deh = document.documentElement.clientHeight / 125;
         cc.style.top = st +deh - cc.offsetHeight  +"px";
         $("#nav").addClass("fixed-top");
         $("#nav-item").addClass("tune");
         // transform: translateZ(0)解决抖动
       } else {
         cc.style.top = 280  +"px";
         $("#nav").removeClass("fixed-top");
         $("#nav-item").removeClass("tune");
      }
    }
    $(window).on('scroll',function() {
            fn()
    });
 
      <!-- // 两个onload有冲突，所以用函数封装调用 -->


    


    var tt = document.getElementById("nav2");
    window.onload = window.onscroll = function () {
    var scrollTop =$(window).scrollTop();

   
  if (scrollTop > 750) {
    var st = document.body.scrollTop || document.documentElement.scrollTop;
    var deh = document.documentElement.clientHeight / 50;
    tt.style.top = st +deh - tt.offsetHeight  +"px";
    $("#nav2").addClass("fixed-top2");
     $("#nav-item2").addClass("tune2");
    // transform: translateZ(0)解决抖动
  } else {
    tt.style.top = 320  +"px";
    $("#nav2").removeClass("fixed-top2");
    $("#nav-item2").removeClass("tune2");
  }
}

    var links = [
   "bbc.com",
   "google.com",
   "youtube.com",
   "facebook.com"];
  
  openStuff = function () {
   // get a random number between 0 and the number of links
   var randIdx = Math.random() * links.length;
   // round it, so it can be used as array index
   randIdx = parseInt(randIdx, 10);
   // construct the link to be opened
   var link = 'http://' + links[randIdx];
   // open it in a new window / tab (depends on browser setting)
   window.open(link);
};

  var sites = [
      'http://www.google.com',
      'http://www.stackoverflow.com',
      'http://www.example.com',
      'http://www.youtube.com'
  ];

  function randomSite() {
      var i = parseInt(Math.random() * sites.length);
      window.open(sites[i]); 
      // location.href当前页面打开URL页面（不能设定新窗口）, window.open可以设定打开新窗口
  }
