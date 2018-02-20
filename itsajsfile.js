$('.carousel').carousel({
	interval: 2600,
	keyboard: false,
	wrap: true
});

$('.btn').bind('click', function() {
	if ($('.btn').hasClass('btn-outline-primary')) {
		$('.btn').removeClass('btn-outline-primary');
		$('.btn').addClass('btn-outline-success');
	}
	else {
		$('.btn').removeClass('btn-outline-success');
		$('.btn').addClass('btn-outline-primary');
	};
});

$('#exampleModal').modal({
	keyboard: false,
	show: false
})