 jQuery(function($){
	var $boxLi = $('#box li');
	$('.s_tpc').on('click','li',function(){console.log(111)
		var idx = $(this).index();
		$boxLi.eq(idx).show().siblings('li').hide();
		$(this).addClass('on').siblings('li').removeClass('on');
		
		// 实现放大镜效果
		$boxLi.eq(idx).lxzoom({
			width:400,
			height:400
		});
	})
});