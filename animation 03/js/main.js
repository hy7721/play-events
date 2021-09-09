$(document).ready(function(){
  $('.wrap_event').slick({
    arrows: false,
    dots: true,
    speed: 500,
    fade: true,
    cssEase: 'ease-out',
    slidesToShow: 1,
    adaptiveHeight: true,
    customPaging : function(slider, i) {
      return '<a class="slick-link" href="#rMain"></a>';
      // return '<button class="slick-link" onclick="location.href = '#sectionEvent0' + '(i+1)'"></button>'
    }
  });
});

// aside menu (slick-dots, btn_top)
$(function(){

  var cssTop = parseInt($(".slick-dots").css("top"));

  $(window).scroll(function() {
    var position = $(window).scrollTop();
    
    var total = cssTop + position + 4;
    
    if(total == 4){ total = 0; }
    
    $(".slick-dots").stop().animate({
      "top" : total + "px"
    }, 600);
  });

  var csstop = parseInt($(".wrap_top").css("top"));
  $(window).scroll(function() {
    var poSition = $(window).scrollTop();
    
    var toTal = csstop + poSition + 4;
    
    if(toTal == 4){ total = 0; }
    
    $(".wrap_top").stop().animate({
      "top" : toTal + "px"
    }, 600);
  });

  // 새로고침 시 메인 페이지로 이동
  $("html, body").animate({
    scrollTop: 0
  });

  // btn_top
  function goTop(){
    $('html, body').scrollTop(0);
  }

  var bodyOffset = jQuery('body').offset();
  jQuery(window).scroll(function() {
    if (jQuery(document).scrollTop() < bodyOffset.top + 1000) {
      jQuery('.btn_top').addClass('active');
    } else {
      jQuery('.btn_top').removeClass('active');
    }
  });
});

// layer popup
function layerPopupOpen($t){
  $(".wrap_popup" + "." + $t).stop(true, true).fadeIn(300);
  // $('body').css("overflow", "hidden");
};
function layerPopupClose(){
  $(".wrap_popup").each(function(){
    if($(this).css("display") != "none") $(this).stop(true, true).fadeOut(300);
  });
};