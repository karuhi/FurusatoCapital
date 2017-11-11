$('button.detail').click(function () {
	$('img.door_left').animate({
		'marginLeft':'-52%',
	}, 1000);
	$('img.door_right').animate({
		'marginLeft':'-102%'
	}, 1200);
});

$('button.skip').click(function() {
	$('img.door_right').animate({
		'marginLeft':'0'
	}, 1200);
	$('img.door_left').animate({
		'marginLeft':'0',
	}, 1000);
});