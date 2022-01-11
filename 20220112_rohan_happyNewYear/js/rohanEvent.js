window.onload = function(){
  // scroll animation
  AOS.init();

  // smooth scrolling
  $('.btn-top').click(function(){
    $("html, body").animate( { scrollTop: 0 }, 400 );
    return false;
  });

  // aside menu(btn-top)
  quick();
  function quick() {
    var offset = $("#rAside").offset(),
        topPadding = 400;

    var start_scrolling = function () {
        if ($(window).scrollTop() + 128 > offset.top) {
            if ($(window).scrollTop() + $(window).height() >= $("#rMain").height()) {
                TweenMax.to($("#rAside"), 0.4, {
                    ease: Circ.easeOut, y: 2100
                });
            } else {
                TweenMax.to($("#rAside"), 0.4, {
                    ease: Circ.easeOut, y: $(window).scrollTop() - offset.top + topPadding
                });
            };
        } else {
            TweenMax.to($("#rAside"), 0.4, {
                ease: Circ.easeOut, y: 0
            });
        };
    },
        TO = !1,
        scroll_static = !0;
    setTimeout(start_scrolling, 100);

    $(window).on("scroll", function () {
      scroll_static && (scroll_static = !1);
      !1 !== TO && clearTimeout(TO);
      TO = setTimeout(start_scrolling, 50);

      // img-sale animation
      if ($(window).scrollTop() > 2000) {
          $('.img-sale').addClass('animation');
      } else {
          $('.img-sale').removeClass('animation');
      }
    });
  };
}