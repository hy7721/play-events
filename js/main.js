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
    }
  });
});


















$(document).ready(function(){

  // youtube popup
  function layerPopupOpen($t){
    $(".wrap_popup" + "." + $t).stop(true, true).fadeIn(300);
    // $('body').css("overflow", "hidden");
  };

  function layerPopupClose(){
    $(".wrap_popup").each(function(){
      if($(this).css("display") != "none") $(this).stop(true, true).fadeOut(300);
    });
  };

  // go to top button
  // function goTop(){
  //   $('html, body').scrollTop(0);
  // }

  // 새로고침 시 메인 페이지로 이동
  $("html, body").animate({
    scrollTop: 0
  });

  // rAside
  var currentPosition = parseInt($("#rAside").css("top"));
  $(window).scroll(function() {
      var position = $(window).scrollTop(); // 현재 스크롤바의 위치값을 반환합니다.
      $("#rAside").stop().animate({"top":position+currentPosition+"px"},600);
  });
});

// $('.list_aside li a').click(function() {
  
//   $(this).parent().addClass('active');
//   $(this).parent().siblings().removeClass('active');
//   return false
// });

//   var sections = $('.section_eventt'),
//   nav = $('.list_aside'),
//   nav_height = nav.outerHeight();
  
//   $(window).on('scroll', function() {
//     var cur_pos = $(this).scrollTop();
//     sections.each(function() {
//       var top = $(this).offset().top - nav_height,
//       bottom = top + $(this).outerHeight();
      
//       if (cur_pos >= top && cur_pos <= bottom) {
//         nav.find('a').parent().removeClass('active');
//         sections.removeClass('active');
        
//         $(this).parent().addClass('active');
//         nav.find('a[href="#' + $(this).attr('id') + '"]').parent().addClass('active');
//       }
//     });
//   });
  
//   nav.find('a').on('click', function() {
//     var $el = $(this),
    
//     id = $el.attr('href'); $('html, body').animate({ scrollTop:
//       $(id).offset().top
//     }, 500);
    
//     return false;
//   }
// }


  // $('.wrap_event .slick-dots a').click(function() {
  //   $('html, body').animate({
  //     scrollTop: $($.attr(this, 'href')).offset().top
  //   }, 10000);
    
  //   return false;
  // });




  // var rVisual = $('#rVisual');

  // $(window).scroll(function(){
  //   var scroll = $(window).scrollTop();

  //   if(scroll == rVisual.offset().top({
  //     ('.slick-dots li').removeClass('slick-active');
  //   }
  // })






  // $(window).on('scroll', function(){
  //   if ($(window).scrollTop() == ('#rVisual)) {
  //     $('.slick-dots li:nth-child(1)').addClass('slick-active')
  //   } else {
  //     $('.slick-dots li:nth-child(1)').removeClass('slick-active')
  //   }
  // })

  // $(window).on('scroll', function(){
  //   if ($(window).scrollTop() = 1300) {
  //     $('.slick-dots li').removeClass('slick-active');
  //   }
  // })