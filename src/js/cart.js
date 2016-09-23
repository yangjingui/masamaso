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


//		获取cookie
//		[{"oNo":"20223",
//		"oName":"时尚环保pu夹克系列/防风保暖环保/pu/黑色/净色/夹克",
//		"NowPrice":"¥399",
//		"OldPrice":"￥1699.00",
//		"oSize":"S",
//		"oNum":"1"}]
		
window.onload = function() {

	var oNo = document.getElementById("No");//商品款号
	var oName = document.getElementById("goods_name");//商品名
	var NowPrice = document.getElementById("now");//现价
	var OldPrice = document.getElementById("old");//原价
	var oSize = document.getElementById("size");//尺寸
	var oNum = document.getElementById("num");//数量
	var oCount = document.getElementById("count");//小计
	var oldP = document.getElementById("old_p");//原价
	var favour = document.getElementById("favour");//优惠价
	var oEnd = document.getElementsByClassName("end")[0];//商品总金额

	var str = getCookie("arr");

	// var a = "[{}]"
	// string
	//alert(typeof str);

	var arr = JSON.parse(str);
	//alert(str);

	// 取出数组中元素，arr[i] 是一个对象,
	//    再取出这个对象中的产品名 和 价格
	for (var i = 0; i < arr.length; i++){
		oNo.innerHTML = arr[i].oNo;
	    oName.innerHTML = arr[i].oName;
	    NowPrice.innerHTML = arr[i].NowPrice;
	    OldPrice.innerHTML = arr[i].OldPrice;
	    oSize.innerHTML = arr[i].oSize;
	    oNum.value = arr[i].oNum;
		oCount.innerHTML = arr[i].NowPrice;
		oldP.innerHTML = arr[i].OldPrice;

		//获取原价和现价，相减得到优惠价
		var OldStr = parseInt((OldPrice.innerHTML).substring(1,5));
		var NowStr = parseInt((NowPrice.innerHTML).substring(1,5));
		favour.innerHTML =  OldStr - NowStr;

		oEnd.innerHTML = oNum.value*NowStr;

		//alert(oNum.value*NowStr);
	}
	//alert(oNum.value*NowStr);
	//给添加按钮和减去按钮绑定点击事件
	var low = document.getElementById('low');
	var add = document.getElementById('add');
	low.onclick = function(){
		
		if(oNum.value>1){
			oNum.value --;
		}
	}
	add.onclick = function(){
		oNum.value ++;
	}			
	
}

