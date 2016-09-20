//列表页鼠标滑过切换图片效果
   jQuery(function($){
   		$('.in_masa_up').on('mouseenter',function(){
		$(this).find('.float').show();
		$(this).find('.toppic').hide();
	}).on('mouseleave',function(){
		$(this).find('.float').hide();
		$(this).find('.toppic').show();
   		});       		
   });
   
   
   jQuery(function($){	
		//banner图轮播
		//获取页面元素
		var $bd = $('.bd');
		var $bdLi = $('.bd li');
		
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
			$bdLi.eq(index).fadeIn(100).siblings().fadeOut(100);			
		}
		//设置定时器，让图片自动轮播
		timer = setInterval(carousel,5000);

	    //给底部大图绑定移入事件
	    $bdLi.on('mouseenter',function(){
	    	clearInterval(timer);
	    }).on('mouseleave',function(){
	      timer = setInterval(carousel,5000);	
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
   
	//ajax请求商品列表页
	jQuery(function($){
		$.ajax({
			url:'../data/goodlist.json',
			dataType:'json',
			success:function(res){
//				console.log(res)
				//创建html结构
				/*<li>
					<div class="in_masa_up"> 									 				  
						<a class="in_pic" href=""><img src="../css/img/j1.jpg"></a> 
					</div>
					<div class="in_masa_info">					
						<a class="gray" href="">时尚环保pu夹克系列/防风保暖/pu/黑色/净色/夹克</a>
						<div class="comment">已有<span class="fb">3</span>人评价</div>
						<div class="in_price">							
							<span>¥229</span> 
							<div class="fl comment">吊牌价:￥899</div>   
						</div>		
					</div>
				</li> 
				*/
				var $ul = $('<ul/>');
				var $in_masa = $('.in_masa');
								
				$.each(res,function(idx,item){
					var $imgurl = item.imgurl;//图片地址
					var $title = item.title;//内容
					var $comment = item.commentCount;//评论数量
					var $price = item.price;//价格
					var $tagPrice = item.tagPrice;//吊牌价
					
					//创建div，给div添加类
					var $a = $('<div/>').addClass('in_masa_up').append($('<a/>'));
					//创建img，添加图片
					var $masa_up = $('<img src="'+$imgurl+'"/>').appendTo($a);
					
					//创建div，添加类
					var $divInfo = $('<div/>').addClass('in_masa_info');					
					//添加内容
					var $aGray = $('<a/>').addClass('gray').html($title);
					
					//评论数
					var $divCom = $('<div/>').addClass('comment').html('已有'+'<span class="fb">'+$comment+'</span>'+'人评价');
					//价格
					var $divPrice = $('<div/>').addClass('in_price');
					var $span = $('<span/>').html('￥' + $price);
					var $tag = $('<div/>').addClass('fl comment').html('吊牌价：￥' + $tagPrice);
					var $Prices = $divPrice.append([$span,$tag]);
					
					var $masa_info = $divInfo.append([$aGray,$divCom,$Prices]);
					
					var $li = $('<li/>').append([$masa_up,$masa_info]);
					$li.appendTo($ul);
					
				});
				$ul.appendTo($in_masa);				
			}
		})
		
		//懒加载
		$(window).on('scroll',function(){
			var scrollTop = $(window).scrollTop();
	
			// 懒加载：滚动《快到底部》的时候再加载
			if(scrollTop >= $(document).height() - $(window).height() - 100){
				$.ajax();
			}
		});
	
		// 手动触发滚动事件
		$(window).trigger('scroll');
	});
	



