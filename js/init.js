(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('#textarea2').characterCounter();
    $('.date').datepicker({
      disableWeekends: true
    });

  }); // end of document ready
})(jQuery); // end of jQuery name space
