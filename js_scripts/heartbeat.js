



function pulsate(){
	$('#icon').stop().animate({fontSize : '13em'},20,function(){
		$(this).stop().animate({color : '#FE5757'});
	}).removeClass('fa-heart').addClass('fa-heartbeat');

}

function contract(){
	$('#icon').stop().animate({fontSize : '8em'},20,function(){
		$(this).stop().animate({color : '#222222'});
	}).removeClass('fa-heartbeat').addClass('fa-heart');
}

var intervalFunctions = [ pulsate, contract ];
var intervalIndex = 0;

function beating(){
	intervalFunctions[intervalIndex++ % 2]();

}

var beat = setInterval(function(){beating()}, 291.5);

//se ejecutan 2 funciones con un delay de 291.5 ms entre ellas (x2 = 583 ms = 103 BPM)
