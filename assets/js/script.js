$(document).ready(function(){

  // menu 
  $('.menu-bar').click(function(){
    $('.mobile_menu').slideToggle();
  });
  // owlCarousel
  $('.service').owlCarousel({
    margin:60,
    loop:true,
    nav:true,
    autoplay:true,
    navText:['<i class="fa-solid fa-angle-left"></i>','<i class="fa-solid fa-angle-right"></i>'],
    responsive:{
      0:{
        items:1
      },
      450:{
        items:2
      },
      767:{
        items:3
      },
      1000:{
        items:4
      },
    }
  });

  // logo-area
  $('.logo2').owlCarousel({
    margin:30,
    loop:true,
    nav:true,
    autoplay:true,
    navText:['<i class="fa-solid fa-angle-left"></i>','<i class="fa-solid fa-angle-right"></i>'],
    responsive:{
      0:{
        items:2
      },
      450:{
        items:2
      },
      450:{
        items:3
      },
      767:{
        items:4
      },
      1000:{
        items:5
      },
    }
  });
 
});

