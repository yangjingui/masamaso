//点击 购物车的删除按钮时候弹出弹窗
jQuery(function($){
	var $pop = $('.succeed');
    //给addPop绑定点击事件
    $('#deleted').on('click',function(e){
    	$('.overlay').show();
    	$pop.show();
    	$pop.css({
    		left:($(window).width()-$pop.outerWidth())/2 + $(window).scrollLeft(),
    		top:($(window).height()-$pop.outerHeight())/2 + $(window).scrollTop()
    	}).show();
    	
    	//阻止默认行为
    	e.preventDefault();
    });
    
    //给window绑定滚动事件
    $(window).on('scroll resize',function(){
    	$pop.stop().animate({
    		left:($(window).width()-$pop.outerWidth())/2 + $(window).scrollLeft(),
    		top:($(window).height()-$pop.outerHeight())/2 + $(window).scrollTop()
    	});
    });

	//给弹窗的删除按钮和取消按钮绑定点击事件
	$('.windowsBoxB').on('click','.sure',function(){
		window.location.href = "cart_empty.html";
	}).on('click','.cancel',function(){
		$('.overlay').hide();
		$pop.hide();
	});
	
	$('.close').on('click','.cancel',function(){
		$('.overlay').hide();
		$pop.hide();
	});
});

