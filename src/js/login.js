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

//jQuery(function(){
//	var email= $('#email');
//	var psw = $("#psw");
//	var str = getCookie("a");
//
//	var a = JSON.parse(str);console.log(a)
//	for (var i = 0; i < a.length; i++){
//		email.val(a[i].email);	  
//	    psw.val(a[i].psw);
//	}
//
//});
