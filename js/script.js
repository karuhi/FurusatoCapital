$('button.detail').click(function () {
	$('img.door_left').animate({
		'marginLeft':'-52%',
	}, 1000);
	$('img.door_right').animate({
		'marginLeft':'-102%'
	}, 1000);

	$('video').show();
});

$('button.skip').click(function() {
	$('video').hide();

	$('img.door_right').animate({
		'marginLeft':'0'
	}, 1000);
	$('img.door_left').animate({
		'marginLeft':'0',
	}, 1000);
});