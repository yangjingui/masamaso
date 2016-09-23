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

// 当点击“添加到购物车”，就添加 cookie 

onload = function() {

	var str = getCookie("arr");

	// 用于存储所有的商品
	var arr = [];
	if (str != ""){
		// 说明之前 cookie 中有商品的内容
		// 取出来转换成数组
		arr = JSON.parse(str);
	}
	//var arr = [];

	// 商品由 名称 和 价格组成
	// 例如：
	// {product: XXX, price: 180}

	var oBtn = document.getElementsByClassName("goods_ri_btn")[0];
	//购物车商品数
	var oTab = document.getElementsByClassName("tab_sup_bd")[0];
	var oAdd = document.getElementById('add_num');
	//商品款号
	var oNo = document.getElementById("No");
	
	//商品名
	var oName = document.getElementById("name");
	// 这个是商品价格
	//现价
	var NowPrice = document.getElementsByClassName("price24")[0];
	//原价
	var OldPrice = document.getElementById('old_price');
	
	// 商品数量
	var oNum = document.getElementById("num");
	// 这个商品的尺寸
	var oSizeBox = document.getElementById('selectSizeBox');	
	var oSizeLi = oSizeBox.getElementsByTagName('li');
	var oSize = oSizeBox.getElementsByTagName('i');

	var obj = {};	
	for(var i = 0;i < oSizeLi.length;i++){
		oSizeLi[i].xxx = i;
		oSizeLi[i].onclick = function(){
			var idx = this.xxx;
			for (var k=0;k<oSizeLi.length ;k++ ){
				oSizeLi[k].className = '';//将所有按钮的样式都去掉，即设为“”空值
			}
			oSizeLi[idx].className = 'cur';
			obj.oSize = oSize[idx].innerText;
//				alert(obj.oSize);
		}	
	}		
	
	oBtn.onclick = function() {
		
		//购物车数量改变
		oTab.innerHTML++;
		oAdd.innerHTML++;
									
		obj.oNo = oNo.innerHTML;
		obj.oName = oName.innerHTML;
		obj.NowPrice = NowPrice.innerHTML;
		obj.OldPrice = OldPrice.innerHTML;			
		obj.oNum = oNum.value;
	
		// 将创建好的商品添加到数组中
		arr.push(obj);
	
		// 将数组的内容设置到 cookie 中呢？
		// cookie 的名字是 arr, 内容是数组中的商品，过期时间是7天以后
		addCookie("arr", JSON.stringify(arr), 7);
		
		//alert("添加成功");
	}	
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

