var check_inst=true;
var victim = "";


var compInterval;
var comp = 0;
var vent = 0;
var ciclo = 0;
var ventInterval;



function Exit(){
	comp = 0;
	ciclo = 0;
	var vis = document.getElementById("num");
	vis.innerHTML = "Compresión " + comp;


	var cic = document.getElementById("cicloNum");
	cic.innerHTML = "Ciclo " + ciclo;

	document.getElementById("icon").className = "fa fa-heart text-red";
	clearInterval(beat);
	beat = setInterval(function(){beating()}, 291.5);

	clearInterval(ventInterval);
	clearInterval(compInterval);
}


function playAdult(){
	comp = 0;
	vent = 0;
	ciclo = 0;

	compInterval=setInterval(function(){playCompAdulto()},583);
}

function playBebe(){
	comp = 0;
	vent = 0;
	ciclo = 0;
	compInterval=setInterval(function(){playCompBebe()},583);
}

function playCompAdulto(){
		var audio = document.getElementById("audio");
		audio.play();
		comp += 1;

		var vis = document.getElementById("num");
		vis.innerHTML = "Compresión " + '<strong>'+ comp + '</strong>';


		var cic = document.getElementById("cicloNum");
		cic.innerHTML = "Ciclo " + '<strong>' + ciclo + '</strong>';

		if(comp >= 30){
			ciclo += 1;
			clearInterval(compInterval);
			comp = 0;
			vis.innerHTML = "Ventilación"+ '<strong> 1</strong>';
			clearInterval(beat);

			if (ciclo % 5 == 0)
			{

				//checar pulso
				document.getElementById("icon").className = "fa fa-hand-scissors-o text-red";
				var vis = document.getElementById("num");
				vis.innerHTML +=   " y Revisar pulso";
			}

			document.getElementById("icon").className = "fa fa-spinner fa-pulse text-red";
			ventInterval = setInterval(function(){playVentAdulto()},3000);

		}
	}

function playVentAdulto(){

		vent+=1;
		var vis = document.getElementById("num");
		vis.innerHTML = "Ventilación"+ '<strong> 2</strong>';

		if(vent == 2){
			vent = 0;
			vis.innerHTML = "Compresión ";
			clearInterval(ventInterval);
			document.getElementById("icon").className = "fa fa-heart text-red";
			beat = setInterval(function(){beating()}, 291.5);
			compInterval= setInterval(function(){playCompAdulto()},583);
		}
		else if (ciclo % 5 == 0)
		{

			//checar pulso
			document.getElementById("icon").className = "fa fa-hand-scissors-o text-red";
			var vis = document.getElementById("num");
			vis.innerHTML += " y Revisar pulso";
		}


	}

function playCompBebe(){
		var audio = document.getElementById("audio");
		audio.play();
		comp += 1;

		var vis = document.getElementById("num");
		vis.innerHTML = "Compresión " + '<strong>'+ comp + '</strong>';


		var cic = document.getElementById("cicloNum");
		cic.innerHTML = "Ciclo " + '<strong>'+ ciclo + '</strong>';


		if(comp >= 10){
			ciclo += 1;
			vis.innerHTML = "Ventilación"+ '<strong> 1</strong>';
			clearInterval(compInterval);
			clearInterval(beat);

			if (ciclo % 10 == 0)
			{

				//checar pulso
				document.getElementById("icon").className = "fa fa-hand-scissors-o text-red";
				var vis = document.getElementById("num");
				vis.innerHTML +=   " y Revisar pulso";
			}



			document.getElementById("icon").className = "fa fa-spinner fa-pulse text-red";
			ventInterval = setInterval(function(){playVentBebe()},3000);
		comp = 0;
		}




	}

function playVentBebe(){

		vent+=1;

		var vis = document.getElementById("num");
		vis.innerHTML = "Ventilación"+ '<strong> 2</strong>';

		if(vent == 2){
			vent = 0;
			vis.innerHTML = "Compresión ";
			clearInterval(ventInterval);
			document.getElementById("icon").className = "fa fa-heart text-red";
			beat = setInterval(function(){beating()}, 291.5);
			compInterval= setInterval(function(){playCompBebe()},583);
		}
		else if (ciclo % 10 == 0)
		{

			//checar pulso
			document.getElementById("icon").className = "fa fa-hand-scissors-o text-red";
			var vis = document.getElementById("num");
			vis.innerHTML += " y Revisar pulso";
		}



	}

function completarInstruccion(v) {
	if(v == "baby") {
		document.getElementById("pasoseis").innerHTML = "Colocar dos dedos en medio de las tetillas.";
	} else {
		document.getElementById("pasoseis").innerHTML = "Colocar las manos entrelazadas en medio de las tetillas.";
	}
}







///////////CHECK VICTIM
$('.box-body').click(function(){
	victim = $(this).attr('id');
	console.log(victim);
	is_checked(victim);

});

///////////CHECK INSTRUCTIONS
function is_checked(victim){
	check_inst = $('input[name=instrucciones]').is(':checked');
	console.log(check_inst);
	$('#section1').hide();
	completarInstruccion(victim);

	//////NEXT SECTION
	if(check_inst){
		$('#section2').show(100);
	}else{
		$('#section3').show(100);
		if (victim == "man")
		{playAdult();}
		else
		{playBebe();}

		//timer(victim);
	}
}

///////////NAVIGATION
function navigation(){
	$('#2back').click(function(){
		$('#section2').hide();
		document.getElementById("idInstrucciones").checked = false;
		$('#section1').show(100);
		Exit();
	});
	$('#2next').click(function(){
		$('#section2').hide();
		$('#section3').show(100);
		if (victim == "man")
		{playAdult();}
		else
		{playBebe();}
	});
	$('#22next').click(function(){
		$('#section2').hide();
		$('#section3').show(100);
		playAdult();
	});
	$('#3back').click(function(){
		$('#section3').hide();
		$('#section2').show(100);
		Exit();
	});
	$('#3next').click(function(){
		$('#section3').hide();
		document.getElementById("idInstrucciones").checked = false;
		$('#section1').show(100);
		Exit();
	});
}

$(document).ready(function(){
	navigation();
});
