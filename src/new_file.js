// 当点击“添加到购物车”，就添加 cookie 

onload = function() {

	var str = getCookie("arr");

	// 用于存储所有的商品
	var arr = [];
	if (str != "")
	{
		// 说明之前 cookie 中有商品的内容
		// 取出来转换成数组
		arr = eval(str);
	}
	//var arr = [];

	// 商品由 名称 和 价格组成
	// 例如：
	// {product: XXX, price: 180}

	var oBtn = document.getElementsByClassName("goods_ri_btn")[0];
	oBtn.onclick = function() {
	//商品款号
	var oNo = document.getElementsByClassName("goods_artNo")[0];
	
	//商品名
	var oName = document.getElementsByClassName("goods_title")[0];
		// 这个是商品价格
		//现价
		var NowPrice = document.getElementsByClassName("yuan")[0];
		//原价
		var OldPrice = document.getElementById('old_price');
		
		// 这个商品的尺寸
		var oSizeBox = document.getElementById('selectSizeBox');
		var oSize = oSizeBox.getElementsByTagName('li');
		
		for (var i = 0; i < oSize.length; i++) {
			oSize[i].onclick = function() {
				console.log(this.innerHTML);
			}
		}
		
		// 商品数量
		var oNum = document.getElementById("num");

		// 函数库中自定义的函数
		// 添加了一个 cookie,名字是 product, 内容是 商品的信息, 过期时间是 7天后
		//alert(oSpan.innerHTML);
		
		// 转换成一个
		// var str = encodeURI(oSpan.innerHTML);

		var obj = {};

		obj.oNo = oNo.innerHTML;
		obj.oName = oName.innerHTML;
		obj.NowPrice = NowPrice.innerHTML;
		obj.OldPrice = OldPrice.innerHTML;
		obj.oSize = oSize.innerHTML;
		obj.oNum = oNum.innerHTML;

		// 将创建好的商品添加到数组中
		arr.push(obj);

		// 将数组的内容设置到 cookie 中呢？
		// cookie 的名字是 arr, 内容是数组中的商品，过期时间是7天以后
		addCookie("arr", arr.toSource(), 7);
		
		alert("添加成功");
	}

}
</script>
