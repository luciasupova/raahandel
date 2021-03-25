/*header*/
$(document).ready(function () {

  $(window).scroll(function () {

    if ($(window).scrollTop() > 250) {
      $('header').addClass('orange');
    } else {
      $('header').removeClass('orange');
    }

  });

/*chatbox*/
  $('.chatbox').click(function () {
    $('#chatbox').toggle();

  });


  $('.btn-cancel').click(function () {
    $('#chatbox').hide();

  });


  /*reminder*/
  $('#btn-reminder').click(function () {
    $('.div-reminder').show();

    
  });

  $('.h1-x').click(function () {
    $('.div-reminder').hide();

    
  });

  $('.h1-x').click(function () {
    $('#reminder-1').hide();

    
  });

  $('.h1-x').click(function () {
    $('#reminder-2').hide();

    
  });

  $('.h1-x').click(function () {
    $('#reminder-3').hide();

    
  });

  $('#btn-1').click(function () {
    $('#reminder-1').toggle();

    
  });

  $('#btn-1').click(function () {
    $('#reminder-2').hide();

    
  });

  $('#btn-1').click(function () {
    $('#reminder-3').hide();

    
  });

  $('#btn-2').click(function () {
    $('#reminder-2').toggle();

    
  });

  $('#btn-2').click(function () {
    $('#reminder-1').hide();

    
  });

  $('#btn-2').click(function () {
    $('#reminder-3').hide();

    
  });

  $('#btn-3').click(function () {
    $('#reminder-3').toggle();

    
  });

  $('#btn-3').click(function () {
    $('#reminder-1').hide();

    
  });

  $('#btn-3').click(function () {
    $('#reminder-2').hide();

    
  });


  /*header after login*/
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