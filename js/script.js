$('button.detail').click(function () {
	
});

$(document).ready(function(){
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

$('button.detail').click(function() {
	$('div.detail').fadeIn(500);
	$('div.buttons').hide();
	$('header').hide();
	$('div.content').hide();
});

$("video").bind("ended", function() {
   $('img.door_right').animate({
		'marginLeft':'0'
	}, 1200);
	$('img.door_left').animate({
		'marginLeft':'0',
	}, 1000);
});

$('div.bad').click(function(){
	$('div.detail').hide();
	$('div.buttons').show();
	$('header').show();
	$('div.content').show();
});

var width = 1; 

function updateProgress () {
	width++;
	var elem = document.getElementById("myBar"); 
	elem.style.width = width + '%'; 
	per = document.getElementById("pacent");
	per.innerHTML = width + "%";
}

var now_exp = 0;

function openExplan () {
	if (now_exp == 0){
 		elem = document.getElementById("explan").innerHTML = "あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。"//data[]とかする（？）
 		window.scrollBy(0,70);
 		now_exp = 1;
	} else {
		elem = document.getElementById("explan").innerHTML = " ";
		now_exp = 0;
	}
}