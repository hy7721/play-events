window.onload = function(){
  AOS.init();

  $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
      $('.btn-top').fadeIn();
    } else {
      $('.btn-top').fadeOut();
    }
  }); 
  $('.btn-top').click(function(){
      $("html, body").animate({ scrollTop: 0 }, 600);
      return false;
  });
}