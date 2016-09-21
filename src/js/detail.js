 //给左侧小图绑定点击事件
 jQuery(function($){
	var $boxLi = $('#box li');
	$('.s_tpc').on('click','li',function(){
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

//给商品颜色选择绑定点击事件
jQuery(function($){	
	$('.goods_color').on('click','li',function(){	
		$(this).addClass('color_red').siblings('li').removeClass('color_red');		
	})
});

//给商品尺寸绑定点击事件
// jQuery(function($){	
// 	$('#selectSizeBox').on('click','li',function(){
// 		var idx = $(this).index();		
// 		$(this).addClass('cur').siblings('li').removeClass('cur');
// 	})
// });

