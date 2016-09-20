//列表页鼠标滑过切换图片效果
   jQuery(function($){console.log(1111)
   		$('.in_masa_up').on('mouseenter',function(){console.log(111)
		$(this).find('.float').show();
		$(this).find('.toppic').hide();
	}).on('mouseleave',function(){
		$(this).find('.float').hide();
		$(this).find('.toppic').show();
   		});       		
   });
   
   //浮动菜固定在顶部效果
   jQuery(function($){
   		var $window = $(window);
		var $menu = $('.menu_2_nav_bg');
		//给window绑定滚动事件
    $window.scroll(function(){				
		if($window.scrollTop() > 750){
	      	//当滚动条滚到大于750时，开始固定
	       	$menu.css({position:"fixed"}); 			       			       			        
      	}else{
       		$menu.css({position:"relative"});
	      	}		      
	    });
   });