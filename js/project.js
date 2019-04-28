//本地localStorage缓存

/*function saveStorage() {
	var email = document.getElementById("email").value;
	localStorage.setItem("email", email);
	var password = document.getElementById("password").value;
	localStorage.setItem("password", password);
}*/
//登陸註冊js
//密码显示隐藏

$(".landEyeClickOpen").click(function() {
	$(this).hide();
	$("#userPass").attr("type", "text");
	$(".landEyeClickOver").show();
})
$(".landEyeClickOver").click(function() {
	$(this).hide()
	$("#userPass").attr("type", "password")
	$(".landEyeClickOpen").show()
})

// 个人中心修改密码的原来密码
function checkOldPass() {
    pwd_text = $("#passName").val();
    if(pwd_text == "") {
        $("#judgePassName").text("原密码不能为空")
        $("input#passName").css("border", "2px solid #FF0000")
        $(".passNameTrue").hide()
        $("img.del-passName").show()
        return false;
    }else {
        $("#judgePassName").text("")
        $(".passNameTrue").show()
        $("img.del-passName").hide()
        $("input#passName").css("border", "1px solid #7d7d7d")
        return true;
    }
}
$("#passName").blur(checkOldPass)



//登陆时验证密码
//验证密码
function checkPwd() {
	pwd_text = $("#userPass").val();
	var pwd_prov = /^.{4,}$/;
	if(pwd_text == "") {
		$("#judgeuserPass").text("密码不能为空")
		$("input#userPass").css("border", "2px solid #FF0000")
		$(".userPassTrue").hide()
		$("img.del-userPass").show()
		return false;
	} else if(!pwd_text.match(pwd_prov)) {
		$("#judgeuserPass").text("输入正确的密码")
		$(".userPassTrue").hide()
		$("input#userPass").css("border", "2px solid #FF0000")
		$("img.del-userPass").show()
		return false;
	} else {
		$("#judgeuserPass").text("")
		$(".userPassTrue").show()
		$("img.del-userPass").hide()
		$("input#userPass").css("border", "1px solid #7d7d7d")
		return true;
	}
}
$("#userPass").blur(checkPwd)

// 确认密码

function checkPwdToo() {
	pwd_text = $("#userPass").val();
	var pwd_text2 = $("#userPassConfirm").val();
	var pwd_prov = /^.{4,}$/;
	if(pwd_text2 == "") {
		$("#judgeuserPassConfirm").text("确认密码不能为空")
		$("input#userPassConfirm").css("border", "2px solid #FF0000")
		$(".userPassConfirmTrue").hide()
		$("img.del-userPassConfirm").show()
		return false;
	} else if(pwd_text != pwd_text2 || !pwd_text2.match(pwd_prov)) {
		$("#judgeuserPassConfirm").text("两次输入的密码不一致")
		$("input#userPassConfirm").css("border", "2px solid #FF0000")
		$(".userPassConfirmTrue").hide()
		$("img.del-userPassConfirm").show()
		return false;
	} else if(pwd_text == pwd_text2) {
		$(".passwordtwoTrue").show()
		$("#judgeuserPassConfirm").text("")
		$(".userPassConfirmTrue").show()
		$("img.del-userPassConfirm").hide()
		$("input#userPassConfirm").css("border", "1px solid #7d7d7d")
		return true;
	}
}
$("#userPassConfirm").blur(checkPwdToo)


//联系人信息姓名不为空验证
function checkUserName(){
	user_name_text = $('#userName').val();
	if(user_name_text == "") {
		$("#judgeUserName").text("姓名不能为空")
        $(".del-userName").show()
		$(".userNameTrue").hide()
		$("input#userName").css("border", "2px solid #FF0000")
		return false;
	}else {
		$("input#userName").css("border", "1px solid #7D7D7D")
		$("#judgeUserName").text("")
		$("img.del-userName").hide()
		$(".userNameTrue").show()
		return true;
	}
}
$('#userName').blur(checkUserName)
//	手机号验证
function checkTel() {
	tel_text = $('#userPhone').val();
	tel_prov = /^(0|86|17951)?(13[0-9]|15[012356789]|17[03678]|18[0-9]|14[57])[0-9]{8}$/;
	if(tel_text == "") {
		$("#judgePhone").text("手机号不能为空")
		$(".companyUrlTrue").hide()
		$("input#userPhone").css("border", "2px solid #FF0000")
		$("img.del-userPhone").show()
		return false;
	} else if(!tel_text.match(tel_prov)) {
		$("#judgePhone").text("手机格式不正确")
		$("input#userPhone").css("border", "2px solid #FF0000")
		$(".companyUrlTrue").hide()
		$("img.del-userPhone").show()
		return false;
	} else {
		$("input#userPhone").css("border", "1px solid #7D7D7D")
		$("#judgePhone").text("")
		$("img.del-userPhone").hide()
		$(".userPhoneTrue").show()
		return true;
	}
}
$('#userPhone').blur(checkTel)

//	郵箱验证
function checkEmail() {
	email_text = $('#userEmail').val();
	email_prov = /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/;
	if(email_text == "") {
		$("#judgeEmail").text("邮箱不能为空")
		$("input#userEmail").css("border", "2px solid #FF0000")
		$(".companyUrlTrue").hide()
		$("img.del-userEmail").show()
		return false;
	} else if(!email_text.match(email_prov)) {
		$("#judgeEmail").text("邮箱格式不正确")
		$("input#userEmail").css("border", "2px solid #FF0000")
		$(".companyUrlTrue").hide()
		$("img.del-userEmail").show()
		return false;
	} else {
		$("input#userEmail").css("border", "1px solid #7D7D7D")
		$("#judgeEmail").text("")
		$("img.del-userEmail").hide()
		$(".userEmailTrue").show()
		return true;
	}
}
$('#userEmail').blur(checkEmail)
//公司名称
function checkCompanyName(){
	company_name_text = $('#companyName').val();
	if(company_name_text == "") {
		$("#judgeCompanyName").text("公司名称不能为空")
		$(".companyNameTrue").hide()
		$("input#companyName").css("border", "2px solid #FF0000")
		$("img.del-companyName").show()
		return false;
	}else {
		$("input#companyName").css("border", "1px solid #7D7D7D")
		$("#judgeCompanyName").text("")
		$("img.del-companyName").hide()
		$(".companyNameTrue").show()
		return true;
	}
}
$('#companyName').blur(checkCompanyName)

//	公司网址
function checkUrl() {
	email_text = $('#companyUrl').val();
	email_prov = /[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?/;
	/*if(email_text == ""){
	     $("#judgeUrl").text("网址不能为空")
	     $("input#companyUrl").css("border","2px solid #FF0000")
	     $(".companyUrlTrue").hide()
	    $("img.del-companyUrl").show()
	     return false;
	 } else */
	if(!email_text.match(email_prov)) {
		$("#judgeUrl").text("网址格式不正确")
		$("input#companyUrl").css("border", "2px solid #FF0000")
		$(".companyUrlTrue").hide()
		$("img.del-companyUrl").show()
		return false;
	} else {
		$("input#companyUrl").css("border", "1px solid #7D7D7D")
		$("#judgeUrl").text("")
		$("img.del-companyUrl").hide()
		$(".companyUrlTrue").show()
		return true;
	}
}
$('#companyUrl').blur(checkUrl)
//联系人姓名 不能为空
function PayUseName() {
    if ($("#tickerPayUserFirst").val() == ''){
        $("#judgeTicketName").text("联系人姓名不能为空")
        $("input#tickerPayUserFirst").css("border", "2px solid #FF0000")
        $(".userTicketTrue").hide()
        $("img.del-userTicket").show()
        return false
    }else{
        $("#judgeTicketName").text("")
        $("input#tickerPayUserFirst").css("border", "1px solid #7D7D7D")
        $(".userTicketTrue").show()
        $("img.del-userTicket").hide()
        return true
    }
}
$("#tickerPayUserFirst").blur(PayUseName)

//填写订单  input  不为空
function inputNull() {

	if ($(".tickerPayInfoUserContent input").val() == ''){
        $(".judgeNull").text("不能为空")
        $(".tickerPayInfoUserContent input").css("border", "2px solid #FF0000")
        $(".userNullTrue").hide()
        $("img.del-userNull").show()
        return false;
	}else{
        $(".judgeNull").text("")
        $(".tickerPayInfoUserContent input").css("border","1px solid #7D7D7D")
        $(".userNullTrue").show()
        $("img.del-userNull").hide()
        return true;
	}
}
$(".tickerPayInfoUserContent input").blur(inputNull)
// input  只能输入字母
$("#input").change(function(){
    var value=$("#input").val()
    var reg = /^[a-zA-Z]$/;
    if(reg.test(value) === false){
        alert("只能输入字母，请重新输入");
        return false
    }
});




//限制文本框字数
function LimitTextArea(field) {
	var maxlimit = 500;
	$("#showTextNum").html(maxlimit + '/')
	var overNum = (maxlimit - field.value.length) * 1;
	if(overNum == -1) {
		$("#overTextNum").html("0")
	} else {
		$("#overTextNum").html(overNum)
	}
	if(field.value.length > maxlimit) {
		field.value = field.value.substring(0, maxlimit);
	}
}










