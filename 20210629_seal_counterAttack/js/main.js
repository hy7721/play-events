// btn_top appear
$(window).scroll(function(){
  if ($(this).scrollTop() > 300){
    $('.btn_top').show();
  } else{
    $('.btn_top').hide();
  }
});

// btn_top smooth scroll
function scrollToTop() {
  let position = document.body.scrollTop || document.documentElement.scrollTop;
  if (position) {
      window.scrollBy(0, -Math.max(1, Math.floor(position / 10)));
      scrollAnimation = setTimeout("scrollToTop()", 10);
  } else clearTimeout(scrollAnimation);
}