document.addEventListener("turbolinks:load", function() {
	var clientHeight = $( window ).height();
	$('.element').css('height', clientHeight);

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
    //Scrollfire effect
      var options = [
    {selector: '#staggered-test', offset: 50, callback: function(el) {
      Materialize.toast("This is our ScrollFire Demo!", 1500 );
    } },
    {selector: '#staggered-test', offset: 205, callback: function(el) {
      Materialize.toast("Please continue scrolling!", 1500 );
    } },
    {selector: '#staggered-test', offset: 400, callback: function(el) {
      Materialize.showStaggeredList($(el));
    } },
    {selector: '#image-test', offset: 500, callback: function(el) {
      Materialize.fadeInImage($(el));
    } }
    ];
  	Materialize.scrollFire(options);
});