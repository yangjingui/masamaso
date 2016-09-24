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
});


//		获取cookie
//		[{"oNo":"20223",
//		"oName":"时尚环保pu夹克系列/防风保暖环保/pu/黑色/净色/夹克",
//		"NowPrice":"¥399",
//		"OldPrice":"￥1699.00",
//		"oSize":"S",
//		"oNum":"1"}]
		
jQuery(function($){
	var oldP = $("#old_p");//原价
	var favour = $("#favour");//优惠价
	var oEnd = $(".end");//商品总金额

	var str = getCookie("arr");
	var arr = [];
	if(str != ""){
		arr = JSON.parse(str);
	}
	//alert(str);

	// 取出数组中元素，arr[i] 是一个对象,
	//    再取出这个对象中的产品名 和 价格
   
	for (var i = 0; i < arr.length; i++){
		var $tr = $('<tr/>');
		var oNo = $("<td/>").html(arr[i].oNo);//商品款号
		var $pro = $('<td/>').addClass('pro');
		var $poreat = $('<div/>').addClass('poreat');
		var $proa = $('<a class="proa" href="" style="color:#796353;">');
		var $img1 = $("<img/>").attr({ src: arr[i].img}).css({width:52,height:70});	
		var $oP = $('<p/>');
		var $oA = $('<a/>').attr({ style: "color:#796353;"});
		var $oSpan = $('<span/>').html(arr[i].oName);//商品名
		
		var op = $oP.append($oSpan.appendTo($oA));
						
		var NowPrice = $("<td/>").html(arr[i].NowPrice);//现价
		var OldPrice = $("<td/>").html(arr[i].OldPrice);//原价
		var oSize = $("<td/>").html(arr[i].oSize);//尺寸
		
		var $div = $poreat.append($img1.appendTo($proa));
		
		var $td1 = $pro.append([$div,op]);
		
		
		var $Td = $("<td/>");
		var $div1 = $('<div/>').css({position:'relative'});
		var $input = $('<input type="text" class="num" value="'+arr[i].oNum+'">').css({width:20,height:10});//数量	
		var $div2 = $('<div/>').addClass('red');
		
		var div1 = $input.appendTo($div1);
		var div2 = $div2.appendTo($div1);
		
		var $td2 = $Td.append([div1,div2]);
		
		var oCount = $("<td/>").html(arr[i].NowPrice);//小计
		var $delete = $('<td><span class="gray" id="maso_del">删除</span></td>');
		
		$tr.append([oNo,$td1,oSize,OldPrice,NowPrice,$td2,oCount,$delete]);

		oldP.html(arr[i].OldPrice);
		
		//优惠价
		favour.html(arr[i].favour);
		$tr.appendTo('#tbody')
		//总价
		var sum = 0;
		for (var j = 0; j <= i; j++) {
			sum += arr[i].sum;
		}
		oEnd.html(sum);
		//alert(oNum.value*NowStr);
	}
	//删除商品
	$("#tab tr").each(function(idx,item) {
	  	var $del = $(item).find('#maso_del'); 
	  	$del.on('click',function(){console.log($(this))   
	  	$(this).parents('tr').remove();
		  	var idx = $(this).index();
		  	var data = JSON.parse(getCookie("arr"));
		  	
		  	//splice() 方法向/从数组中添加/删除项目,然后返回被删除的项目
		   	data.splice(idx,1);
		   	var pro=JSON.stringify(data);
			addCookie('arr',pro,7);
	    });
	});

	//alert(oNum.value*NowStr);
	//给添加按钮和减去按钮绑定点击事件
	var low = $('#low');
	var add = $('#add');
	low.on('click.low',function(){
	
		if($num>1){
			$input.val($num --);
		}
	});
	add.on('click.add',function(){
		$input.val($num ++);
	});
});

