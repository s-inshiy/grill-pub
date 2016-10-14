$(document).ready(function () {
  
  $('.slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    // speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
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
  });

  new CBPGridGallery( document.getElementById( 'grid-gallery' ) );

});
