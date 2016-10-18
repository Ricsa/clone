document.addEventListener("turbolinks:load", function() {

	//for Responsive Full height & width divz
	var bg = jQuery(".element");
	jQuery(window).resize("resizeBackground");
	function resizeBackground() {
		if( window.matchMedia("screen and (max-width: 600px)") && window.matchMedia("screen and (orientation: portrait)") ) {
			bg.height(jQuery(window).height()+64)
		}
		if( window.matchMedia("screen and (max-width: 600px)") && window.matchMedia("screen and (orientation: landscape)") ) {
			bg.height(jQuery(window).height()+56)
		}
		
		if( window.matchMedia("screen and (min-width: 601px)") && window.matchMedia("screen and (max-width: 992px)") && window.matchMedia("screen and (orientation: portrait)") ) {
			bg.height(jQuery(window).height()+56)
		}
		if( window.matchMedia("screen and (min-width: 601px)") && window.matchMedia("screen and (max-width: 992px)") && window.matchMedia("screen and (orientation: landscape)") ) {
			bg.height(jQuery(window).height()+64)
		}
		
		if( window.matchMedia("screen and (min-width: 993px)") ){
			bg.height(jQuery(window).height()+64)
		}
		else{
			bg.height(jQuery(window).height()+64);
		}
	}
	resizeBackground();

	//jQuery for page scrolling feature - requires jQuery Easing plugin
	$(function() {
	    $('a.page-scroll').bind('click', function(event) {
	        var $anchor = $(this);
	        $('html, body').stop().animate({
	            scrollTop: $($anchor.attr('href')).offset().top
	        }, 1500, 'easeInOutExpo');
	        event.preventDefault();
	    });
	});
	//WOWJS//
	//
	new WOW().init();
	//
	//MATERIALIZE JS
	//
	// Parallax effect
	$('.parallax').parallax();

	// Initialize collapse button
	$('.button-collapse').sideNav({
      menuWidth: 200, // Default is 240
      closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    });


});

