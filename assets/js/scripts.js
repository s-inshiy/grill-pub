$(document).ready(function () {

  // var body = $('body');

  if (document.querySelector('.home')) {
    // Main Slider
    $('.slider').slick({
      dots: false,
      arrows: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [{
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          infinite: true,
          dots: true,
        }
      }]
    });
    // Team Slider
    $('.team__slider').slick({
      dots: false,
      infinite: true,
      arrows: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      prevArrow: '<button type="button" class="slick-prev slick-prev--team">Previous</button>',
      nextArrow: '<button type="button" class="slick-next slick-next--team">Previous</button>',
      appendArrows: $('.team'),
      responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      }, {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        }
      }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          infinite: true,
        }
      }]
    });
    // Main Gallery
    new CBPGridGallery(document.getElementById('grid-gallery'));
  }

  //Mobile Menu 
  var button = document.querySelector('.gpmobile__toggle'),
    nav = document.querySelector('.gpmobile'),
    menu = document.querySelector('.gpmobile__menu'),
    icon = document.getElementById("icon"),
    icon1 = document.getElementById("a"),
    icon2 = document.getElementById("b"),
    icon3 = document.getElementById("c");

  button.addEventListener('click', function () {
    nav.classList.toggle('gpmobile--open');
    menu.classList.toggle('gpmobile__menu--open');
  });

  icon.addEventListener('click', function () {
    icon1.classList.toggle('a');
    icon2.classList.toggle('c');
    icon3.classList.toggle('b');
  });

});

// Preloader
jQuery(window).load(function () { // makes sure the whole site is loaded
  var body = jQuery('body');
  jQuery('#status').fadeOut(); // will first fade out the loading animation
  jQuery('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
  body.delay(350).css({
    'overflow': 'visible'
  });
});