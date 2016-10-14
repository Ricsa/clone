document.addEventListener("turbolinks:load", function() {
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

	//Scrollfire
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

})