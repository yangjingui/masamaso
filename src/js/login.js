jQuery(function($){
	$('.login_log_info').animate({
		left:-100,
		opacity:0.2
	},600,function(){
	  	$('.login_log_info').animate({ 
	    left:0,
	    opacity:0.8
	  },600);
	});
	
});

