// fire animation
window.onload = function() {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');

  var blobs = [];
  var origin = {x:ctx.canvas.width / 2, y:ctx.canvas.height / 2};
  var glowDot = new Image();
  glowDot.src = document.getElementById('imgFire').src;

  var particleNum = 110;

  requestAnimationFrame(draw);

  function generateBlobs(number) {
    var blob = {
      x:randomRange(0,ctx.canvas.width),
      y:ctx.canvas.height,
      xSpeed:randomRange(-0.1,3),
      // animatinoFire x축 이동거리
      // xSpeed:randomRange(-1,1),
      ySpeed:randomRange(-0.1,-7),
      // animationFire y축 높이
      // ySpeed:randomRange(-1,-10),
      radius:randomRange(8,25),
      // radius:randomRange(8,30),
      alpha:2
      // alpha: 1
    };
    
    blobs.push(blob);
  }

  function updateBlobs() {
    ctx.globalCompositeOperation = 'lighter';
    
    if( blobs.length < particleNum ){
      
      for(var i = 0; i < (particleNum - blobs.length); i++) {
        generateBlobs();
      }
    }

    for(var i = 0; i < blobs.length; i++) {
      if(blobs[i].alpha > 0) {
        ctx.drawImage(glowDot, blobs[i].x, blobs[i].y, blobs[i].radius, blobs[i].radius);
        blobs[i].x += blobs[i].xSpeed;
        blobs[i].y += blobs[i].ySpeed;
      
        if(blobs[i].radius > 0) {
          blobs[i].radius -= 0.2;
          blobs[i].alpha -= 0.0001 // default 0.001. 애니메이션 속도, 높이.
        }

        if(blobs[i].x < -blobs[i].radius || blobs[i].x > ctx.canvas.width || blobs[i].y < -blobs[i].radius || blobs[i].y > ctx.canvas.height)
          blobs.remove(i);
      }
      else
        blobs.remove(i);
    }
  }

  function draw() {
    ctx.canvas.width  = window.innerWidth;
    ctx.canvas.height = window.innerHeight;

    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);

    updateBlobs();
    requestAnimationFrame(draw);
  }

  function randomRange (min, max) {
    return Math.random() * (max - min + 1) + min;
  }

  Array.prototype.remove = function(from, to) {
    var rest = this.slice((to || from) + 1 || this.length);
    this.length = from < 0 ? this.length + from : from;
    return this.push.apply(this, rest);
  };

  window.onmousemove = handleMouseMove;

  function handleMouseMove(event) {
    event = event || window.event;
    origin.x = event.clientX;
    origin.y = event.clientY;
  }
}



$(function() {

  // scrollEvent
  AOS.init({
    easing: 'ease-in-out',
    duration: 600
  });

  // popupOpen
  $('[data-popup-open]').on('click', function(e)  {
    var targeted_popup_class = jQuery(this).attr('data-popup-open');
    $('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);

    e.preventDefault();
  });

  // popupClose
  $('[data-popup-close]').on('click', function(e)  {
    var targeted_popup_class = jQuery(this).attr('data-popup-close');
    $('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);

    e.preventDefault();
  });

  // Parallax
  $.fn.parallax = function(resistance, mouse) {
    $el = $(this);
    TweenLite.to($el, 0.2, {
      x: -((mouse.clientX - window.innerWidth / 2) / resistance),
      y: -((mouse.clientY - window.innerHeight / 2) / resistance)
    });
  };

  $(document).mousemove(function(e) {
    $('.section_visual_bg').parallax(-90, e);
    $('.tit_event').parallax(90, e);
  });

  // quickMenu
  $.fn.quickMenu = function(){
    return this.each(function(){
      var idx = 0;
      var h = [];
      var $wrap = $(this);
      var $btnScroll = $wrap.find('.btn_scroll');
      var $listAside = $wrap.find('.list_aside');
      var $linkAside = $listAside.find('.link_aside');
      var $btnScrollTop = $wrap.find('.btn_top');
      var $section = $('.wrap_event');
      var wrapH = $wrap.outerHeight();
      var wrapT = $wrap.position().top;
      var nowScroll = 0;
      var scrolling = true;

      function linkasideActive(num){
        $linkAside.not($linkAside.eq(num)).removeClass('is_active');
        $linkAside.eq(num).addClass('is_active');
      }

      function moveScroll(num){
        if(scrolling){
          scrolling = false;
          $("html, body").animate({scrollTop : num}, function(){scrolling = true});
        }
      }

      linkasideActive(idx);

      $wrap.css({ 'margin-top' : -(wrapH / 2)});
      
      $linkAside.on('click', function(e){
        e.preventDefault();
        idx = $(this).parent().index();
        var conT = $section.eq(idx).offset().top;
        moveScroll(conT);
      });

      // recruitmentBtn 사전예약 버튼
      $('.wrap_visual .btn_recruitment').on('click', function(){
        $('html, body').animate({
            scrollTop : $('#sectionEvent02').offset().top
        }, 400);
      });

      // scrollBtn 스크롤다운 버튼
      $('.wrap_visual .btn_scroll').on('click', function(){
        $('html, body').animate({
            scrollTop : $('#sectionEvent01').offset().top
        }, 400);
      });

      $(window).scroll(function(){
        nowScroll = $(this).scrollTop();
        $section.each(function(idx){
          h[idx] = $(this).offset().top
          if(nowScroll >= h[idx]){
            linkasideActive(idx);
          }
        });
      });
    });
  }

  // asideMenu
  $(function(){
    $('.section_aside').quickMenu();
  });

  // slick 플러그인
  $('.inner_slider > .wrap_slider').slick({
    dots: true,
    fade: true,
    // autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
  });
});

// 사전모집 영역 레이어 팝업
function layerPopupOpen($t){
  $(".wrap_popup" + "." + $t).stop(true, true).fadeIn(300);
};
function layerPopupClose(){
  $(".wrap_popup").each(function(){
    if($(this).css("display") != "none") $(this).stop(true, true).fadeOut(300);
  });
};

$(document).on("click", ".btn_close", function(){
  if(!$(this).parent().css("display") != "none"){
    layerPopupClose();
  };
});

// 개인정보 수집 및 동의 > 동의, 비동의 중 하나만 선택할 수 있도록 하는 코드
function checkOnlyOne(chk){
  var obj = document.getElementsByName("confirmNumber");
  for( var i = 0; i < obj.length; i++ ) {
      if( obj[i] != chk ) {
          obj[i].checked = false;
      }
  }
}

// mousewheel 한 번에 fullpage 하나씩 이동
window.addEventListener("wheel", function(e){
	e.preventDefault();
},{passive : false});

var $html = $("html");
var page = 1;
var lastPage = $(".section_event_03").length;

$html.animate({scrollTop:0},10);

$(window).on("wheel", function(e){
	if( $html.is(":animated") ) return;

  if( e.originalEvent.deltaY > 0) {

    if(page == lastPage) return;
		page++;
  }
  
    else if( e.originalEvent.deltaY < 0 ) {

    if(page == 1) return;
		page--;
	}

	var posTop = (page-1) * $(window).height();

  $html.animate({scrollTop : posTop});
});