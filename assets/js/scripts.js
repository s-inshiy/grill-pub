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
    arrows: false,
    infinite: true,
    // speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
  });

  new CBPGridGallery( document.getElementById( 'grid-gallery' ) );

});
