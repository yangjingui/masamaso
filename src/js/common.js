jQuery(function($){
	// load的第二种用法：
	// 加载远程文件

	// 1、先生成一个div
	// 2、加载header.html
	// 3、把div写入页面
	$('<div/>').load('header.html',function(){
		$(this).insertBefore('.container');
	});

	$('<div/>').load('footer.html',function(){
		$(this).insertAfter('.container');
	});	
<<<<<<< HEAD
	
				
});
jQuery(function($){
	//给下部导航菜单添加鼠标移入事件
	$('.menu_box_nav').on('mouseenter','.menu2',function(){
		//给menu2添加active类
		$('.menu2').addClass('active');
		
		//将向下的图标改成向上的图标
		$(this).find('i').removeClass('arr').addClass('art');
		$(this).find('li').addClass('act');
		
		//将文字改成白色
		$(this).find('a').css('color', '#fff');
		$(this).find('span').css('color', '#fff');
		
		//给弹出菜单添加向下展开的动画效果
		$('.maso_nav').slideDown();
	//鼠标移出时恢复默认值
	}).on('mouseleave',function(){
		$('.menu2').removeClass('active');			
		$(this).find('i').addClass('arr').removeClass('art');
		$(this).find('li').removeClass('act');
		$(this).find('a').css('color', '#666');
		$(this).find('span').css('color', '#666');				
		$('.maso_nav').slideUp();
	});							
});

//给底部图片绑定鼠标移入实现动画
jQuery(function($){
	var $tip = $('.tip');
	
	$('.tabs').on('mouseenter','li',function(){
		var idx = $(this).index();
		$tip.css({left:-150});
		$tip.eq(idx).show().animate({left:-130});
	}).on('mouseleave','li',function(){
		var idx = $(this).index();
		$tip.eq(idx).hide();
	});
					
});

jQuery(function($){
	//回到顶部
	$('.tab_top').click(function(){
		$('body').animate({'scrollTop':0},1000)
	});

=======
	$('<div/>').load('right.html',function(){
		$(this).insertBefore('.container');
	});
	
				
>>>>>>> b84b4fdec1871248ca709b2d69e445d00dd38e01
});