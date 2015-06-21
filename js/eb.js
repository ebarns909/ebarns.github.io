
$("#resume").hide();
$("#portfolio").hide();
$("#twentytwenty").hide();
$("#about").hide();
$('nav').hide();
/*$(document).ready(function(){
    $("body").addClass("loaded");
});
*/

function show_content(box){

	if($(".box").is(":visible")){
			//$(".cont-page article").fadeOut("slow");
			$(".box").slideUp("slow");
	}
	$(box).delay(550).slideDown("slow");
	var box_id = $(box)[0].id;
	$("body").removeClass();
	if(box_id == "portfolio"){
		$("body").addClass("loaded-portfolio");
    }
	else if(box_id == "about"){
		$("body").addClass("loaded-about");
	}
	else if(box_id == "resume"){
		$("body").addClass("loaded-resume");
	}
}

// function wel_hover(element){
	// element.setAttribute('src','mimages/welcome-circle3.gif');
	// $("body").addClass("loaded-welcome");
// }

// function wel_out(element){
	// element.setAttribute('src','mimages/welcomehover.gif');
	// $("body").removeClass("loaded-welcome");
// }

function opening(element){
	$('nav').fadeIn("slow");
	$('#wel-circ').addClass(".loaded-wel");
	$(element).fadeOut("fast");
	
	$("body").addClass("loaded-about");
	$("#about").delay(500).slideDown("slow");
	$("body").css('background-image','none');
	
}

//carousel interval
$('.carousel').carousel({
  interval: 1000 * 15
});