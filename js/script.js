$(document).ready(function (event) {
   $('.header__burger').click(function (event) {
      $('.header__burger, .menu').toggleClass('active');
       $('body').toggleClass('lock');
   });
   $('.menu__item').click(function (event) {
      $('.header__burger, .menu').removeClass('active');
       $('body').removeClass('lock');
   });  


   $('.main__slider').slick({
      arrows: false,
      dots: true,
      fade:true,
      autoplay:false,
      infinite:true,
      swipe:true,
      slidesToShow: 1,
        responsive: [
          {
            breakpoint: 961,
            settings: "unslick"
         },
      ]
   });
   if($(window).width() < 1011){
      $('.tabs__cards').slick({
         arrows: false,
         dots: false,
         autoplay:false,
         infinite:true,
         swipe:true,
         slidesToShow: 2,
           responsive: [
             {
               breakpoint: 1011,
               settings: {
                  slidesToShow: 2,
               },
            }, 
             {
               breakpoint: 660,
               settings: {
                  slidesToShow: 1,
               },
            },                      
         ]
      });  
   }
    $('.tabs__item').click(function (event) {
          $(this).addClass('active');
          $(".tabs__item").not(this).removeClass('active');
    });       
    $('.tabs__item-1').click(function(event){
         $('.tabs__body').removeClass('target');
         $('#tab_01').addClass('target');   
          $('.maintenance').removeClass('dec');  
    });
    $('.tabs__item-2').click(function(event){
         $('.tabs__body').removeClass('target');
         $('#tab_02').addClass('target');
         $('.maintenance').removeClass('dec');
         if($(window).width() < 1011){
            $('.tabs__wrap').slick({
               arrows: false,
               dots: false,
               autoplay:false,
               infinite:true,
               swipe:true,
               slidesToShow: 2,
                 responsive: [
                   {
                     breakpoint: 1011,
                     settings: {
                        slidesToShow: 2,
                     },
                  }, 
                   {
                     breakpoint: 660,
                     settings: {
                        slidesToShow: 1,
                     },
                  },                      
               ]
            });  
         }
    });
    $('.tabs__item-3').click(function(event){
         $('.tabs__body').removeClass('target');
         $('#tab_03').addClass('target'); 
          $('.maintenance').addClass('dec');      
    });
    $('.tabs__item-4').click(function(event){
         $('.tabs__body').removeClass('target');
         $('#tab_04').addClass('target');  
          $('.maintenance').addClass('dec');     
    }); 
    $('.tabs__item-5').click(function(event){
         $('.tabs__body').removeClass('target');
         $('#tab_05').addClass('target');  
          $('.maintenance').addClass('dec');     
    }); 
    $('.tabs__item-6').click(function(event){
         $('.tabs__body').removeClass('target');
         $('#tab_06').addClass('target');  
          $('.maintenance').addClass('dec');     
    });         
    $('.tabs__item-7').click(function(event){
         $('.tabs__body').removeClass('target');
         $('#tab_07').addClass('target');  
          $('.maintenance').addClass('dec');     
    });
    $('.tabs__item-8').click(function(event){
         $('.tabs__body').removeClass('target');
         $('#tab_08').addClass('target');  
          $('.maintenance').addClass('dec');     
    });   
    $('.tabs__item-9').click(function(event){
         $('.tabs__body').removeClass('target');
         $('#tab_09').addClass('target');  
          $('.maintenance').addClass('dec');     
    });           
});    
$(window).resize(function(){
   if($(window).width() < 1011){
      $('.tabs__cards').slick({
         arrows: false,
         dots: false,
         autoplay:false,
         infinite:true,
         swipe:true,
         slidesToShow: 2,
           responsive: [
             {
               breakpoint: 1011,
               settings: {
                  slidesToShow: 2,
               },
            }, 
             {
               breakpoint: 660,
               settings: {
                  slidesToShow: 1,
               },
            },                      
         ]
      });  
   }
});

 function readURL(input) {
   if (input.files && input.files[0]) {
       var reader = new FileReader();
       reader.onload = function (e) {
           $('#input__label p').html(input.files[0].name);
       };
       reader.readAsDataURL(input.files[0]);
   }
};