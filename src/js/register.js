jQuery(function($){
	// 表单验证插件
	var $form = $('.login_info').find('form');
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
});
