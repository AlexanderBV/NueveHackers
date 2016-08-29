$(document).ready (function(){


    var arriba = $('.menuup').offset().top;

     $(window).on('scroll', function(){
        if($(window).scrollTop() > arriba ){
            $('.menuup').addClass('menus');
        }else{
            $('.menuup').removeClass('menus');
        }
     });

       $(window).scroll(function(){

           var despazar = $(window).scrollTop();
           var ubicades = despazar * 0.15;

           $('body').css({'background-position': '0 -' + ubicades + 'px'});
       });


    });
