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
		
jQuery(function($){
	var oldP = $("#old_p");//原价
	var favour = $("#favour");//优惠价
	var oEnd = $(".end");//商品总金额

	var str = getCookie("arr");

	var arr = JSON.parse(str);
	//alert(str);

	// 取出数组中元素，arr[i] 是一个对象,
	//    再取出这个对象中的产品名 和 价格
	
	/*<tr>
        <td id="No"></td>
        <td class="pro">
		    <!--<div class="poreat">
			    <a class="proa" href="" style="color:#796353;">
			    	<img src="../css/img/shopping.jpg" width="52" height="70" alt="">
			    </a>
		    </div>-->
    		<p><a href=""style="color:#796353;"><span id="goods_name"><!--弹力针织夹克系列/拼接/聚酯纤维/黑色/纯色/薄便装--></span></a></p>
        </td>
        <td id="size"><!--M--></td>
        <td id="old"><!--¥719--></td>
        <td id="now"><!--¥359--></td>
        <td>
        	<div style="position:relative">
                <span id="low" class="button" style="cursor :pointer">
                	<img src="../css/img/tg2_goods_cut.gif" width="11" height="11"> 
                </span>
                <input type="text" id="num" class="num" value="1">
                <span id="add" class="button" style="cursor :pointer"> 
                	<img src="../css/img/tg2_goods_add.gif" width="11" height="11" alt=""> 
                </span>
            	<div class="red">库存紧张</div>			  
        	</div>
		</td>
        <td id="count"><!--¥359--></td>
        <td><a href="" class="gray" id="deleted">删除</a></td>
    </tr>*/
   
   
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
		var $delete = $('<td><a href="" class="gray" id="deleted">删除</a></td>');
		
		$tr.append([oNo,$td1,oSize,OldPrice,NowPrice,$td2,oCount,$delete]);

		oldP.html(arr[i].OldPrice);
		
		//优惠价
		favour.html(arr[i].favour);
		$tr.appendTo('#tbody')
		//总价
		var sum = 0;
		for (var j = 0; j <= i; j++) {
			sum += arr[i].sum;
//			console.log(j,sum)
		}
		oEnd.html(sum);
		//alert(oNum.value*NowStr);
	}

	//alert(oNum.value*NowStr);
	//给添加按钮和减去按钮绑定点击事件
	var low = $('#low');
	var add = $('#add');
	low.on('click',function(){
	
		if($num>1){
			$input.val($num --);
		}
	});
	add.on('click',function(){
		$input.val($num ++);
	});
});