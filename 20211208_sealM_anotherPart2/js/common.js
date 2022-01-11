window.onload = function(){

  AOS.init();

  $('.link-aside').click(function() {
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);

    return false;
  });

  $('.link-aside').click(function() {
    return false;

    $(this).parent().addClass('is-active');
    $(this).parent().siblings().removeClass('is-active');
  });

  let sections = $('.section'),
  nav = $('.list-aside'),
  nav_height = nav.outerHeight();
  
  $(window).on('scroll', function() {
    let event_top = $(this).scrollTop();
    sections.each(function() {
      let top = $(this).offset().top - nav_height,
          bottom = top + $(this).outerHeight();

      if ( event_top >= top && event_top <= bottom ) {
        nav.find('.link-aside').parent().removeClass('is-active');
        sections.removeClass('is-active');
        
        $(this).parent().addClass('is-active');
        nav.find('a[href="#' + $(this).attr('id') + '"]').parent().addClass('is-active');
      }
    });
  });

  nav.find('.link-aside').on('click', function() {
    let $el = $(this),
        id = $el.attr('href');

    $('html, body').animate({
      scrollTop: $(id).offset().top
    }, 400);
    
    return false;
  });

  $(window).on('scroll', function() {
    if ($(window).scrollTop() > 800) {
      $('.list-aside').fadeIn(400).addClass("show-menu");
    } else {
      $('.list-aside').fadeOut(400).removeClass("show-menu");
    }
  })
}