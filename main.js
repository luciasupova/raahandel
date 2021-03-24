$(document).ready(function(){
          
    $(window).scroll(function(){

      if($(window).scrollTop()>250){
        $('header').addClass('orange');
      }else{
        $('header').removeClass('orange');
      }

    });

});

$(document).ready(function(){
          
  $(window).scroll(function(){

    if($(window).scrollTop()>80){
      $('#header').addClass('orange');
    }else{
      $('#header').removeClass('orange');
    }

  });

});

