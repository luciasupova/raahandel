$(document).ready(function(){
          
    $(window).scroll(function(){

      if($(window).scrollTop()>300){
        $('header').addClass('orange');
      }else{
        $('header').removeClass('orange');
      }

    });

});
