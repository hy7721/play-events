window.onload = function(){

  // scroll event
  $(window).scroll(function() {

    // top button
    if ( $(this).scrollTop() > 800 ) {
      $('.btn-top').fadeIn();
    } else {
      $('.btn-top').fadeOut();
    }
  });

  // smooth scrolling
  $('.btn-top').click(function(){
    $("html, body").animate( { scrollTop: 0 }, 400 );
    return false;
  });
}