$(document).ready(function(){
	var menu_on = false;
	$("#menu").on("click",function(){
		menu_on = (!menu_on);
		$(".main_menu").toggleClass("main_menu_on");
		$(this).toggleClass('open');
		if(menu_on){
			$("#logo").attr("src","img/logo_ver3.svg");
			$(".header").addClass("header_fixed");
		}
		else{
			$(".header").removeClass("header_fixed");
		}
		
	});

	/*이벤트 슬라이드*/
	$("#event_slide").delay(500).animate({left:"-100%"},{duration:100});
	$(".event_left").on("click",function(){
		$("#event_slide").animate({left: "+=100%"},{duration:100});
	});
	$(".event_right").on("click",function(){
		$("#event_slide").animate({left: "+=-100%"},{duration:100});
	});
});
