$(document).ready(function () {
  $('.food-slider').slick({
    // autoplay:true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: ".prev-btn",
    nextArrow: ".next-btn",
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  $('.nav-trigger').click(function () {
    $('.site-content-wrapper').toggleClass('scaled');
  })

});



  // let navtrigger = document.querySelector(".nav-trigger");
  // let siteContent = document.querySelector(".site-content-wrapper")

  // navtrigger.addEventListener("click",function(){
  //       console.log("nav trigger");
  //       siteContent.classList.toggle("scaled");
  //   });