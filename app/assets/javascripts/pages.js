jQuery(document).ready(function($){
    
	var clientHeight = $( window ).height();
	$('.element').css('height', clientHeight);

	//
	//MATERIALIZE JS
	//
	$('.parallax').parallax();

	// Initialize collapse button
	$(".button-collapse").sideNav();
	// Initialize collapsible (uncomment the line below if you use the dropdown variation)
	//$('.collapsible').collapsible();
});