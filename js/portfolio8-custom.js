(function($) { "use strict";

	
	//Portfolio Top Sections Fullscreen	
				
	$(function(){"use strict";
		$('.portfolio-top').css({'height':($(window).height())+'px'});
		$(window).resize(function(){
		$('.portfolio-top').css({'height':($(window).height())+'px'});
		});
	});


	
	

	
 	//Parallax

		$('.parallax-portfolio-1').parallax("50%", 0.2);
		$('.parallax-portfolio-2').parallax("50%", 0.2);
		$('.parallax-portfolio-3').parallax("50%", 0.2);
		$('.parallax-portfolio-4').parallax("50%", 0.2);
		$('.parallax-portfolio-5').parallax("50%", 0.2);

	
	
	
	
	
	
	
	/* Scroll Too */
	
	$(document).ready(function(){"use strict";
		$(".scroll").click(function(event){

			event.preventDefault();

			var full_url = this.href;
			var parts = full_url.split("#");
			var trgt = parts[1];
			var target_offset = $("#"+trgt).offset();
			var target_top = target_offset.top;

			$('html, body').animate({scrollTop:target_top}, 1000);
		});
	});
	
	
	//Tooltip
	
	$(".tipped").tipper();
 

		
 
 
  })(jQuery); 