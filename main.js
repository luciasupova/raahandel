$(document).ready(function () {

  $(window).scroll(function () {

    if ($(window).scrollTop() > 250) {
      $('header').addClass('orange');
    } else {
      $('header').removeClass('orange');
    }

  });


  $('.chatbox').click(function () {
    $('#chatbox').toggle();

  });


  $('.btn-cancel').click(function () {
    $('#chatbox').hide();

  });

  $(document).ready(function () {

    $(window).scroll(function () {

      if ($(window).scrollTop() > 80) {
        $('#header').addClass('orange');
      } else {
        $('#header').removeClass('orange');
      }

    });

  });

});