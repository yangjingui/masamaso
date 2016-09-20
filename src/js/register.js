jQuery(function($){
	// 表单验证插件
	$("form").validate({
		//设置验证规则
		rules:{
			psw:{required:true,rangelength:[6,16]},
			email:{email:true,required:true},
			url:{url:true}
		},
		//设置提示信息
//		messages:{
//			psw:{required:'用户名不能为空',minlength:'至少输入三个字符'},
//			email:{email:'邮箱名输入不正确'}
//		}
	});
});
