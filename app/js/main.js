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

  /* Start Burger code */
 const burger = document.querySelector('.header__burger'),
       menu = document.querySelector('.header__menu-list');
  
      burger.addEventListener('click',() => {
      burger.classList.toggle('active');
      menu.classList.toggle('active');
      this.body.classList.toggle('block');
    });


  /* End Burger code */
/* Accordion code */
  const tabs = document.querySelectorAll(".about__accordion"),
  tabsContent = document.querySelectorAll(".accordion");

function hideTabContent() {
  tabsContent.forEach((item) => {
    item.classList.remove("accordion--active");
  });
}
function showTabContent(i = 0) {
  tabsContent[i].classList.add("accordion--active");
}
hideTabContent();
showTabContent();
tabs.forEach((item) => {
  item.addEventListener("click", (event) => {
    const target = event.target;
    if (target && target.classList.contains("about__accordion")) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });
});
/* end accordion code */

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
