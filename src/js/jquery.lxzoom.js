;(function($){
	$.fn.lxzoom = function(opts){
		
		// 这里的this指向jquery实例（选择器得到的对象）
		var defaults = {
			position:'right',//大图显示的位置
			gap:20,//小图与大图的距离
			width:300,
			height:200,
		}
		
		this.each(function(){
			// 这里的this为DOM节点
			var $self = $(this);
	
			// 把传入的参数opts扩展到defaults
			// 如果有同名属性：覆盖
			// 如果defaults中没有相应属性：则添加
			// 返回目标对象本身
			var opt = $.extend({},defaults,opts);
			// $.extend([d],target,obj1,obj2,...,[objN])
	
			var $smallPic = $self.find('img');
			var $minZoom;
		
			// 大图容器
			var $bigWrap;
		
			// 大图
			var $bigPic;
		
			// 大图与小图的比例
			var ratio;
			
		//	// 初始化
		//	init($smallPic.attr('src'));
			
			//绑定鼠标移入事件，鼠标移入就显示
			$self.on('mouseenter',function(){
				// 初始化
				init($smallPic.attr('src'));
			});	
			// 绑定mousemove事件
			$self.on('mousemove',function(e){
				
				var bigSrc = $(this).attr('src');		
				
				// 生成html结构		
			
				// 获取鼠标在小图中的位置，即鼠标的位置距离小图左上角的偏移量
				var pos = {
					x:e.pageX - $smallPic.offset().left,
					y:e.pageY - $smallPic.offset().top
				};
				
				var bigPos = {left:pos.x/ratio,top:pos.y/ratio};
		
				// 判断大图到底后不再移动
				if(bigPos.top >= $bigPic.outerHeight()-$bigWrap.outerHeight()){
					bigPos.top = $bigPic.outerHeight()-$bigWrap.outerHeight()
				}
				if(bigPos.left >= $bigPic.outerWidth()-$bigWrap.outerWidth()){
					bigPos.left = $bigPic.outerWidth()-$bigWrap.outerWidth()
				}
				
				//设置大图显示的位置
				$bigPic.css({
					left:-bigPos.left,
					top:-bigPos.top
				});
		
				var iX = pos.x - $minZoom.outerWidth()/2;
				var iY = pos.y - $minZoom.outerHeight()/2;
				var MaxX = $smallPic.outerWidth() - $minZoom.outerWidth();
		   		var MaxY = $smallPic.outerHeight() - $minZoom.outerHeight();
				
		   	    //限定minizoom在$smallPic内
		//		   	var DX = iX < MaxX ? iX > 0 ? iX : 0 : MaxX;
		//		   	var	DY = iY < MaxY ? iY > 0 ? iY : 0 : MaxY;
			   	
			   	//上面的表达式相当于下面的判断
			   	if(iX >= MaxX){
			   		iX = MaxX;
			   	}else if(iX < 0){
			   		iX = 0;
			   	}
			   	
			   	if(iY >= MaxY){
			   		iY = MaxY;
			   	}else if(iY < 0){
			   		iY = 0;
			   	}
				// minizoom位置
				$minZoom.css({
					left:iX,
					top:iY	
				})
									   		
			});
			
			//绑定鼠标移出事件。移出就隐藏
			$self.on('mouseleave',function(){
				remove();
			});
			
			
			function init(src){
				
				// 生成html结构
				$bigPic = $('<img/>').attr('src',src);
				$bigWrap = $('<div/>').addClass('lxbzoom').append($bigPic).appendTo('body');
				
				if(opt.position == 'right'){
					var left = $smallPic.offset().left + $self.outerWidth() + opt.gap;
					var top = $smallPic.offset().top;
					
				}
				$bigWrap.css({
					left:left,
					top:top,
					width:opt.width,
					height:opt.height
				})
		
				$minZoom = $('<span/>').addClass('minzoom').appendTo($self);
		
				ratio = $smallPic.outerWidth()/$bigPic.outerWidth();
						
			}
			function remove(){
				$bigWrap.remove();
				$minZoom.remove();
			}
		});
		return this;//为了方便链式调用
	}
})(jQuery);
//$('#box').lxzoom();