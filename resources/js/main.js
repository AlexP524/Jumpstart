//initialize slick
$(document).ready(function() {
  $('.carousel').slick({
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    draggable: false,
    pauseOnFocus: false,
    pauseOnHover: false
  });
});

//script to hide navbar
var scrollLength = 0;
$(window).scroll(function() {
  var scrollTop = $(this).scrollTop();
  if (scrollTop - scrollLength > 50) {
    var navbarHeight = $('.navbar').css('height');
    $('.navbar').animate({top: '-' + navbarHeight}, 150);
    scrollLength = scrollTop;
  } else if (scrollLength - scrollTop > 50) {
    $('.navbar').animate({top: '0px'}, 150);
    scrollLength = scrollTop;
  }
});
