$(document).ready(function(){

  // btn_top
  var csstop = parseInt( $('.wrap_top').css('top') );

  $(window).scroll(function() {
    var poSition = $(window).scrollTop();
    var toTal = csstop + poSition + 4;
    
    if(toTal == 4){ total = 0; }
    
    $('.wrap_top').stop().animate({
      'top' : toTal + "px"
    }, 600);
  });

  var btnTop = $('.btn_top')

  btnTop.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop:0 }, '200');
  });

});