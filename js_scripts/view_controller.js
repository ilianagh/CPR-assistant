var check_inst=true;
var victim = "";


var compInterval;
var comp = 0;
var vent = 0;
var ciclo = 0;
var ventInterval;

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
		vis.innerHTML = "Compresión " + comp;


		var cic = document.getElementById("cicloNum");
		cic.innerHTML = "Ciclo " + ciclo;

		if(comp >= 30){
			ciclo += 1;
			clearInterval(compInterval);
			comp = 0;
			vis.innerHTML = "Compresión " + comp;
			ventInterval = setInterval(function(){playVentAdulto()},4000);

		}
	}

function playVentAdulto(){
	if(ciclo == 5)
	{
		//checar pulso
	}
	var audio = document.getElementById("audio");
	audio.play();

		vent+=1;
		if(vent == 2){
			vent = 0;
			clearInterval(ventInterval);
			compInterval= setInterval(function(){playCompAdulto()},583);
		}

	}

function playCompBebe(){
		var audio = document.getElementById("audio");
		audio.play();
		comp += 1;

		var vis = document.getElementById("num");
		vis.innerHTML = "Compresión " + comp;


		var cic = document.getElementById("cicloNum");
		cic.innerHTML = "Ciclo " + ciclo;


		if(comp >= 10){
			ciclo += 1;
			vis.innerHTML = "Compresión " + comp;
			clearInterval(compInterval);
			ventInterval = setInterval(function(){playVentBebe()},5000);
		comp = 0;
		}
	}

function playVentBebe(){
	if(ciclo == 10)
	{
		//checar pulso
	}
	var audio = document.getElementById("audio");
	audio.play();

		vent+=1;
		if(vent == 2){
			vent = 0;
			clearInterval(ventInterval);
			compInterval= setInterval(function(){playCompBebe()},583);
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

	//////NEXT SECTION
	if(check_inst){
		completarInstruccion(victim);
		$('#section2').show(100);
	}else{
		$('#section3').show(100);
		playAdult();
		//timer(victim);
	}
}

///////////NAVIGATION
function navigation(){
	$('#2back').click(function(){
		$('#section2').hide();
		document.getElementById("idInstrucciones").checked = false;
		$('#section1').show(100);
	});
	$('#2next').click(function(){
		$('#section2').hide();
		$('#section3').show(100);
		playAdult();
	});
	$('#3back').click(function(){
		$('#section3').hide();
		$('#section2').show(100);
	});
	$('#3next').click(function(){
		$('#section3').hide();
		document.getElementById("idInstrucciones").checked = false;
		$('#section1').show(100);
	});
}

$(document).ready(function(){
	navigation();
});
