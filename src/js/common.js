jQuery(function($){
	// load的第二种用法：
	// 加载远程文件

	// 1、先生成一个div
	// 2、加载header.html
	// 3、把div写入页面
	$('<div/>').load('header.html',function(){
		$(this).insertBefore('.container');
	});

	$('<div/>').load('footer.html',function(){
		$(this).insertAfter('.container');
	});	
	$('<div/>').load('right.html',function(){
		$(this).insertBefore('.container');
	});
	
				
});