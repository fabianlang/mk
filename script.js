$(function() {
	$('a').click( function(e){
		e.preventDefault();
	})
	
	$('.post').click( function(e){
		console.log($(this));
		$(this).toggleClass('post--active');
	});
});