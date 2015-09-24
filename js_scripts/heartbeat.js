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


/*
Modulus (%) - Sirve para sacar el restante de una división. En el metodo setInterval se divide intervalIndex % 2 
debido a que esto siempre produce la...alternancia? binaria que se necesita para pasar de una función a otra en el arreglo
intervalFunctions. Si se agregan más funciones al arreglo, es necesario dividir intervalIndex % intervalFunctions.length para
que siempre se recorran todos los índices del arreglo.
Ex. Cuando hay 2 funciones [0,1]
0 % 2 = 0
1 % 2 = 1 (No, no es .5, solo usa números enteros por lo que el 1 no se puede dividir entre 2, dejando como restante 1)
2 % 2 = 0
3 % 2 = 1
4 % 2 = 0 

Ex. Cuando hay 3 funciones [0,1,2]
0 % 3 = 0 
1 % 3 = 1
2 % 3 = 2
3 & 3 = 0
4 % 3 = 1
*/