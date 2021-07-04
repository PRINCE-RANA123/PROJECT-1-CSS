$(document).ready(function () {
    $('.slider').slick({
         arrows:false,
         dots:true,
         appendDots:'.slider-dots',
         dotsClass: 'dots'
    });

    let hamberger= document.querySelector('.hamberger');
    let mobileNav= document.querySelector('.mobile-nav');
    let times= document.querySelector('.times');

    

    hamberger.addEventListener('click', function(){
       
        mobileNav.classList.add('open');
       
    });

    times.addEventListener('click', function(){
        mobileNav.classList.remove('open');
    });

});





