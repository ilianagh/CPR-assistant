var check_inst=true;
var victim = "";


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
		$('#section2').show(100);
	}else{
		$('#section3').show(100);
		//timer(victim);
	}
}

///////////NAVIGATION
function navigation(){
	$('#2back').click(function(){
		$('#section2').hide();
		$('#section1').show(100);
	});
	$('#2next').click(function(){
		$('#section2').hide();
		$('#section3').show(100);
	});
	$('#3back').click(function(){
		$('#section3').hide();
		$('#section2').show(100);
	});
	$('#3next').click(function(){
		$('#section3').hide();
		$('#section1').show(100);
	});
}

$(document).ready(function(){
	navigation();
});