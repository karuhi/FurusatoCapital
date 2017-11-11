$('button.detail').click(function () {
	
});

var ajax_data;
var ajax_index = 0;

$(document).ready(function(){
	$.ajax({
	    url:'http://ec2-54-64-159-57.ap-northeast-1.compute.amazonaws.com:7700/dataspider/trigger/yazyu',
	    type: 'GET'
	})
	.done(function(data){
		ajax_data = data;
	    $('.result').html(data);
	    changeFloor();
	    console.log(data);
	})
	.fail(function(data){
	    $('.result').html(data);
	    console.log(data);
	});

	$('img.door_left').animate({
		'marginLeft':'-52%',
	}, 1000);
	$('img.door_right').animate({
		'marginLeft':'-102%'
	}, 1200);
});

function changeFloor() {
	$("header h2").text(ajax_data.projects[ajax_index].name);
	$("div.project_name p").text(ajax_data.projects[ajax_index].title);
	$("div.detail-text").text(ajax_data.projects[ajax_index].detail);
	$("div.project_name p").text(ajax_data.projects[ajax_index].title);
	$("div.now-money p.value").text(ajax_data.projects[ajax_index].backerAmount + "円");
	$("div.future-money p.value").text(ajax_data.projects[ajax_index].targetAmount + "円");
	$("div.now-patron p.now-patron-value").text(ajax_data.projects[ajax_index].patron + "人");
	$("div.arrow-and-text p").text(ajax_data.projects[ajax_index].name);
	$("div#explan").text(ajax_data.projects[ajax_index].profile);
	var video = $('video').get(0);
	video.src = ajax_data.projects[ajax_index].movieUrl;
	video.play();
	$("div.detail_header").css({
		'background':'url(' + ajax_data.projects[ajax_index].eyecatch + ')' 
	})

	var percent = ajax_data.projects[ajax_index].backerAmount / ajax_data.projects[ajax_index].targetAmount;
	$("div#pacent").text(percent * 100 + "%");
}

$('button.skip').click(function() {
	$('img.door_right').animate({
		'marginLeft':'0'
	}, 1200);
	$('img.door_left').animate({
		'marginLeft':'0',
	}, 1000);

	ajax_index++;
	changeFloor();

	$('img.door_left').animate({
		'marginLeft':'-52%',
	}, 1000);
	$('img.door_right').animate({
		'marginLeft':'-102%'
	}, 1200);
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
var cnt = 0;
function updateProgress () {
	width++;
	var elem = document.getElementById("myBar"); 
	elem.style.width = width + '%'; 
	per = document.getElementById("pacent");
	per.innerHTML = width + "%";
	
	var ml = ["10000","20000","30000","40000","50000","60000","70000","80000","90000","100000"];
	cnt++;
		var eke = document.getElementById("money_cnt");
		eke.innerHTML = ml[cnt];
}

$('div.arrow-and-text').click(function(){
	$("#explan").toggle();
});
