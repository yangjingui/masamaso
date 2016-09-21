jQuery(function($){
	// 表单验证插件
	$('#regForm').validate({
		rules: {
            email:{
                required: true,
                email: true
            },
            psw:{
                required: true,
                minlength: 6,
                maxlength: 16
            },
            repsw:{
                required: true,
                equalTo: "#psw"
            },
            check: {
                required: true               
            }
        },
        messages:{
            email:{
                email: "邮箱名输入不正确"
            },
            psw:{
                required: "密码不能为空",
                minlength: "密码长度不能少于6个字符",
                maxlength: "密码长度不能超过16个字符"
            },
            repsw:{
                required: "确认密码不能为空",
                equalTo: "确认密码和密码不一致"
            },
            check: {
                required: "请先同意本站条款"
            }
		}
	});
	$('#regsubmit').on('click',function(){
		if($('#regForm').validate()){
			alert("恭喜您注册成功！为了您的账户安全，一封邮件发送到了您注册账号的邮箱，请您抽取宝贵时间进行验证。");	
		}else{
			alert("请按要求填写信息");
		}
				
	});

	$('#psw').on('focus',function(){
		if($(this).val().length>8){
			$('#mid').addClass('password_on');
			$('#low').removeClass('password_on');
		}
	});
	
});
