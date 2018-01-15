$(function(){
	$(document).mousemove(function(e) {
		$('#cube').css({
			'transform':'rotateX('+e.pageY+'deg) rotateY('+e.pageX+'deg)'
		});
	});
});
