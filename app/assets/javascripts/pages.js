document.addEventListener("turbolinks:load", function() {
	
	//var clientHeight = $( window ).height();
	//$('.element').css('height', clientHeight);

	var bg = jQuery(".element");
	jQuery(window).resize("resizeBackground");
	function resizeBackground() {
	    bg.height(jQuery(window).height()+64);
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

