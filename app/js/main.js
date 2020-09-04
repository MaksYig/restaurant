$(function () {
  $(".header__slider-items").slick({
    arrows: false,
    autoplay: true,
  });
  $(".provide__slider__items").slick({
    arrows: true,
    autoplay: true,
    slidesToShow: 5,
    /* Left btn */
    prevArrow:
      '<button type="button" class="slick-btn slick-prev icon-arrow-left">',
    // /* Right btn */
    nextArrow:
      '<button type="button" class="slick-btn slick-next icon-arrow-right">',
    responsive: [
      {
        breakpoint: 1450,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1180,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".about__accordion").on("click", function () {
    $(".accordion").removeClass("accordion--active");
    $(this).parent().addClass("accordion--active");
  });

  let containerEl = document.querySelector("#items");
  let mixer = mixitup(containerEl);

  $(".stuff__item-wrapper").slick({
    arrows: true,
    // autoplay: true,
    slidesToShow: 3,
    /* Left btn */
    prevArrow:
      '<button type="button" class="slick-btn stuff-slick-prev icon-arrow-left">',
    // /* Right btn */
    nextArrow:
      '<button type="button" class="slick-btn stuff-slick-next icon-arrow-right">',
    responsive: [
      {
        breakpoint: 1157,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          arrows:false,
          
        },
      },
    ],
  });
});
