  $(window).on('resize', function(event){
    windowSize = $(window).width(); 
    if(windowSize < 991){
      $('.header__menu').hide();
      $('.header').removeClass("js-fixed");
      
    };
  });
  windowSize = $(window).width(); 
$(document).ready(function() {
    $('select').niceSelect();
  });
  $(".numbox").mask("+7 (999) 999-99-99");

  
  $(window).scroll(function() {
    windowSize = $(window).width(); 
    if(windowSize > 991){
      if ($(this).scrollTop() > 100){  
       
        $('.header').addClass("js-fixed");
        $('.header__menu').show(200);

    }  else{
        $('.header__menu').hide();
        $('.header__menu').css("display","none");
        $('.header').removeClass("js-fixed");
    }
  }

});
$(".more__button").click(function(){
  $(this).toggleClass("active");
  $(".prices__table-tr--hidden").toggleClass("active");
});
$(function(){
  $('a.scroll-link[href^="#"]').on('click', function(event) {
    // отменяем стандартное действие
    event.preventDefault();
    
    var sc = $(this).attr("href"),
        dn = $(sc).offset().top;
    /*
    * sc - в переменную заносим информацию о том, к какому блоку надо перейти
    * dn - определяем положение блока на странице
    */
    
    $('html, body').animate({scrollTop: dn}, 1000);
    
    /*
    * 1000 скорость перехода в миллисекундах
    */
  });
});


$(".burger").click(function(){

  $(".burger").toggleClass("active");
  $(".header__menu").slideToggle(300);
  $(".header__menu").toggleClass("active");
  

});


$('.header .inside-menu__link').click(function(){
  var windowSize = $(window).width(); 
  if(windowSize < 992){
    $(".header__menu").slideToggle(300);
    $(".header__menu").removeClass("active");
    $(".burger").removeClass("active");
  }
 
});


  $('.reviews__slider .swiper-container').each(function(){
    var projectsSlider = new Swiper(this, {
     
    navigation: {
        nextEl: $(this).parent().find('.swiper-button-next'),
        prevEl: $(this).parent().find('.swiper-button-prev'),
    },
    
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    1000: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
  }   
  });
  });

