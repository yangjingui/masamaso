 //给左侧小图绑定点击事件
 jQuery(function($){
	var $boxLi = $('#box li');
	$boxLi.eq(5).lxzoom({
		width:400,
		height:400
	});
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

jQuery(function($){
	var str = getCookie('arr');
	var arr = [];
	if(str != ""){
		arr = JSON.parse(str);
	}
	var oBtn = $("#submit_btn2");
	//购物车商品数
	var oTab = $(".tab");
	var oAdd = $('#add_num');
	var $tab = parseInt(oTab.html());
	var $add = parseInt(oAdd.html());
	
	//商品款号
	var oNo = $("#No");
	
	//商品名
	var oName = $("#name");
	// 这个是商品价格
	//现价
	var NowPrice = $(".price24");
	//原价
	var OldPrice = $('#old_price');
	
	// 商品数量
	var oNum = $("#num");
	var $num = parseInt(oNum.val());
	// 这个商品的尺寸
	var oSizeBox = $('#selectSizeBox');	
	var oSizeLi = oSizeBox.find('li');
	var oSize = oSizeLi.find('i');

	var obj = {};
	//给商品颜色选择绑定点击事件
	$('.goods_color').on('click','li',function(){
		var idx = $(this).index();
		$(this).addClass('color_red').siblings('li').removeClass('color_red');
		obj.img = $(this).find('img').attr('src');
//		console.log(obj.img)
	});
	
	//给商品尺寸绑定点击事件
	oSizeLi.on('click',function(){
		var idx = $(this).index();		
		$(this).addClass('cur').siblings('li').removeClass('cur');
		obj.oSize = oSize.eq(idx).html();
//		console.log(obj.oSize);
		arr.push(obj);
//		console.log(arr);
	});
	oBtn.on('click',function(){
		
		//购物车数量改变
		oTab.html($tab ++);
		oAdd.html($add ++);
									
		obj.oNo = oNo.html();
		obj.oName = oName.html();
		obj.NowPrice = NowPrice.html();
		obj.OldPrice = OldPrice.html();			
		obj.oNum = $num;
		
		var $now = parseInt(NowPrice.html().substring(1));
		var $old = parseInt(OldPrice.html().substring(1));
		obj.sum = ($num)*($now);//总价
		obj.favour = $old - $now;console.log(obj.sum)
		// 将创建好的商品添加到数组中
		arr.push(obj);
	
		// cookie 的名字是 arr, 内容是数组中的商品，过期时间是7天以后
		addCookie("arr", JSON.stringify(arr), 7);
		
		//alert("添加成功");
	});	
	//给添加按钮和减去按钮绑定点击事件
	var low = $('#low');
	var add = $('#add');
	low.on('click',function(){
		
		if($num>1){
			oNum.val($num --);
		}
	});
	add.on('click',function(){console.log(111)
		oNum.val($num ++);
	});
});
