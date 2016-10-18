$(document).ready(function () {
  
  $('.slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
     responsive: [
            {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        infinite: true,
      }
    }
  ]
  });

    $('.team__slider').slick({
    dots: false,
    infinite: true,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev slick-prev--team">Previous</button>',
    nextArrow: '<button type="button" class="slick-next slick-next--team">Previous</button>',
    appendArrows: $('.team'),
    responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      }
    },
        {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
      }
    },
            {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        infinite: true,
      }
    }
  ]
  });

  new CBPGridGallery( document.getElementById( 'grid-gallery' ) );

   var button = document.querySelectorAll('.gpmobile__toggle'),
        nav = document.querySelector('.gpmobile'),
        menu = document.querySelector('.gpmobile__menu');

 button[0].onclick = function () {
    if (nav.classList.contains('gpmobile--open') && menu.classList.contains('gpmobile__menu--open')) {
      nav.classList.remove('gpmobile--open');
      menu.classList.remove('gpmobile__menu--open');
    }else {
      nav.classList.add('gpmobile--open');
      menu.classList.add('gpmobile__menu--open');
    };
 };

var icon = document.getElementById("icon");
var icon1 = document.getElementById("a");
var icon2 = document.getElementById("b");
var icon3 = document.getElementById("c");

icon.addEventListener('click', function() {
  icon1.classList.toggle('a');
  icon2.classList.toggle('c');
  icon3.classList.toggle('b');
});

});
