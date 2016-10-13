jQuery(document).ready(function($){
    $('.parallax').parallax();
	  var clientHeight = $( window ).height();
	  $('.element').css('height', clientHeight);
	    // Initialize collapse button
  $(".button-collapse").sideNav();
  // Initialize collapsible (uncomment the line below if you use the dropdown variation)
  //$('.collapsible').collapsible();
});