jQuery(function($){	
	//banner图轮播
	//获取页面元素
	var $bd = $('.bd');
	var $bdLi = $('.bd li');
	var $hdSpan = $('.hd span');
	
	//i是作为li 的下标
	var i = -1;
	var timer = 0;
	
	function carousel(){				
		//表示图片不断往后移
		i ++;
		//当图片移动到最后一张的时候，使其回到第一张
		if(i >= $bdLi.length){
			i = 0;
		}
		scrollBg(i);

	}
	function scrollBg(index){
		//大图渐隐渐现
		$bdLi.eq(index).fadeIn(500).siblings().fadeOut(500);
		
		//当前小图显示红框
		$hdSpan.eq(index).addClass('on').siblings('span').removeClass('on');
	}
	//设置定时器，让图片自动轮播
	timer = setInterval(carousel,5000);
	
   	//给底部小图绑定移入事件
    $hdSpan.on('mouseenter',function(){
    	clearInterval(timer);
    	//将当前的索引值赋给i
		i = $(this).index();
		
		scrollBg(i);
		
    }).on('mouseleave',function(){
      timer = setInterval(carousel,5000);	
    });
    //给底部大图绑定移入事件
    $bdLi.on('mouseenter',function(){
    	clearInterval(timer);
    }).on('mouseleave',function(){
      timer = setInterval(carousel,5000);	
    });	
    		   		   
});

//水平手风琴效果
jQuery(function($){
	var $item = $('.masapic_item_index');
	//绑定鼠标移入事件
	$item.on('mouseenter',function(){				
		//将所有的默认样式都去掉
		$item.find('.text').removeClass('active');
		//1>宽度改为780,其他它改成140
		$(this).stop().animate({width:780}).siblings().stop().animate({width:140});
		
		//2>文字框宽度改为378，高度160				
		$(this).find('.text').addClass('active');
	}).on('mouseleave',function(){
		var idx = $(this).index()
		$(this).find('.text').removeClass('active');
		$item.find('.text').eq(idx).addClass('active');
	});
});

//鼠标移入放大效果
jQuery(function($){
				
	$(".hot-active").on('mouseenter','.maso_transclass',function () {
		var $this = $(this);
		var $img = $(this).find('img');
		$img.css({
			"top": "0px", 
			"left": "0px", 
			"width": "386px", 
			"height": "386px" 
		});
		$img.stop().animate({
			"top": "-5px", 
			"left": "-15px", 
			"width": "396px", 
			"height": "396px" 
		},1000);					
		
	}).on('mouseleave','.maso_transclass',function () {
		var $this = $(this);
		var $img = $(this).find('img');
		$img.stop().animate({ 
			"top": "0", 
			"left": "0", 
			"width": "386px", 
			"height": "386px"  
		}, 1000);										
	}).on('mouseenter','.act-big',function () {
		var $this = $(this);
		var $bigImg = $(this).find('img');
		$bigImg.css({
			"top": "0px", 
			"left": "0px", 
			"width": "793px", 
			"height": "386px" 
		});
		$bigImg.stop().animate({
			"top": "-5px", 
			"left": "-15px", 
			"width": "803px", 
			"height": "396px" ,
			"marginLeft": "-20px"
		},1000);		
	}).on('mouseleave','.act-big',function () {
		var $this = $(this);
		var $bigImg = $(this).find('img');
		$bigImg.stop().animate({ 
			"top": "0", 
			"left": "0", 
			"width": "793px", 
			"height": "386px",
			"marginLeft": "0px"
		}, 1000);										
	});
	
	$(".foot_add").on('mouseenter','li',function () {
		var $this = $(this);
		var $img = $(this).find('img');
		$img.css({
			"top": "0px", 
			"left": "0px", 
			"width": "1200px", 
			"height": "150px",
			"marginLeft": "0px"
		});
		$img.stop().animate({
			"top": "-5px", 
			"left": "-5px", 
			"width": "1210px", 
			"height": "160px" ,
			"marginLeft": "-20px"
		},1000);				
		
	}).on('mouseleave','li',function () {
		var $this = $(this);
		var $img = $(this).find('img');
		$img.stop().animate({ 
			"top": "0", 
			"left": "0", 
			"width": "1200px", 
			"height": "150px",
			"marginLeft": "0px"
		}, 1000);	
	});
});


//顶部菜单显示
jQuery(function($){
	var $window = $(window);
	var $bar = $('#btns_bar1');
		//给window绑定滚动事件
    $window.scroll(function(){				
		if($window.scrollTop() > 180){
	      	//当滚动条滚到大于180时，开始固定
	       	$bar.show(); 			       			       			        
      	}else{
       		$bar.hide();
      	}		      
    });
});

//商品列表轮播图
jQuery(function($){
	//获取最外层框架的名称
    var $in_masa=$(".in_masa");
    var $ul = $(".in_masa ul");     
    var $Li = $('.recomment li');
    
     //获取每个图片的宽度
    var oneWidth=$ul.eq(0).width(); 
    
    //定时器返回值，主要用于关闭定时器
    var timer=null; 
    
    //iNow为正在展示的图片索引值，当用户打开网页时首先显示第一张图，即索引值为0
    var iNow=0; 
    
    function carousel(){
    	move(iNow);
    	//让图片的索引值次序加1，这样就可以实现顺序轮播图片
        iNow++;         
        
         //当到达最后一张图的时候，让iNow赋值为第一张图的索引值，轮播效果跳转到第一张图重新开始
        if(iNow>$ul.length-1){   
            iNow=0;
        }
    }
    
    //打开定时器
    timer=setInterval(carousel,4000);   //2000为轮播的时间
    
    //鼠标移入停止
    $ul.on('mouseenter',function(){
      clearInterval(timer);	
    //鼠标移出继续
    }).on('mouseleave',function(){
      timer = setInterval(carousel,4000);	
    });
    
    
    //为每个标题绑定一个点击事件     
    $Li.on("mouseenter",function(){     	
        //获取哪个按钮被点击，也就是找到被点击按钮的索引值
        var idx=$(this).index(); 
        move(idx);
       
    });
    
	
    function move(index){
    	 $in_masa.animate({
        	//注意此处用到left属性，所以样式里面需要设置position: relative; 让in_masa左移N个图片大小的宽度，N根据被点击的按钮索引值iNOWx确定
            "left":-oneWidth*index,   
       });
       
       //按钮点击时为这个按钮添加高亮状态，并且将其他按钮高亮状态去掉
        $Li.eq(index).addClass("on").siblings('li').removeClass("on");                
    }
})



