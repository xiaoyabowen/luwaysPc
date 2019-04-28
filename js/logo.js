
//注冊判断用户是否注册
/*function checkUserNameOnly() {
	myAjax(check, {
		username: $("#userName").val()
	}, handle)

	function handle(data, param) {
		if(data.success) {
			$(".userNameTrue").hide()
			$("input#userName").css("border", "2px solid #FF0000")
			$("img.del-userName").show()
			$("#judgeUserName").text("该用户名未注册")
		} else {
			$(".userNameTrue").hide()
			$("input#userName").css("border", "2px solid #FF0000")
			$("img.del-userName").show()
			$("#judgeUserName").text("该用户名已注册")
		}
	}
}
$("#userName").blur(checkUserNameOnly)*/
//登陆操作
$("#sign").click(function() {
    //	获取文本内容
    var username = $("#userName").val();
    var userPass = $("#userPass").val();
    var pwd_text = $("#userPass").val();

    // if(!checkUserNameOnly() || !checkUserName()) {
    if(!checkUserName()) {
        return
    }
    if(pwd_text == "") {
        $("#judgeuserPass").text("密码不能为空")
        $("input#userPass").css("border", "2px solid #FF0000")
        $(".userPassTrue").hide()
        $("img.del-userPass").show()
        return false;
    }
    var params = {};
    params.username = username
    params.password = userPass
    $.ajax({
        url: loginServer,
        type: "POST",
        dataType: "json",
        sync:true,
        data: params,
        xhrFields: {
            withCredentials: true
        },
        traditional:true,

        success: function (data) {
            console.log(data)

            if(data.success) {
                $(".logoErrorToast").html('')
                window.location.href = "../index.html"
            } else {
                $(".logoErrorToast").html('账号或者密码错误请重新输入')
            }
            var userInfo = {
                companyName:data.data.company.name,  //公司名称
                userEmail:data.data.email,   // 个人邮箱
                companyAddress:data.data.company.address,
                companyLink:data.data.company.link,
                companyTel:data.data.company.tel,
                companyFax:data.data.company.fax,
                companyDescription:data.data.company.description,
            }
            var userDataJson = JSON.stringify(userInfo)
            localStorage.setItem("userData",userDataJson)

            sessionStorage.setItem("name",data.data.username)
            sessionStorage.setItem("mobile",data.data.mobile)


        },
        error: function() {

        }

    });

})
// 键盘点击事件
$(document).keyup(function(event){
    if(event.keyCode ==13){
        $("#sign").trigger("click");
    }
});


//注册第一步操作
$("#signResiter").click(function() {

    //	获取文本内容
    var userName = $("#userName").val();
    var userPass = $("#userPass").val();

//	if(!checkUserName() || !checkPwd() || !checkPwdToo() || !checkUserNameOnly()) {
    if(!checkUserName() || !checkPwd() || !checkPwdToo() ) {
        return
    }
    var params = {};
    params.username = userName
    params.password = userPass
    myAjax(resterServer, params, handle)

    function handle(data, param) {
        //		var data = JSON.parse(data)
        if(data.success) {
            var nicName = data.data.username
            window.location.href = "resiterInformation.html?nicName=" + nicName
        } else {

        }
    }
})


//注册第二步操作
$("#resiterSign").click(function() {
    var lkm = $("#userName").val();
    var lkmPhone = $("#userPhone").val();
    var lkmEmail = $("#userEmail").val();
    var name = $("#companyName").val();
    var link = $("#companyUrl").val();
    var location = $("#companyAdress").val();
    var scope = $("#operation").val();
    var nicName= GetQueryString("nicName");
    // console.log(nicName)
    if(!checkUserName() || !checkTel() || !checkEmail() || !checkCompanyName() || !checkUrl()) {
        return
    }
    var params = {};
    params.lkm = lkm
    params.lkmPhone = lkmPhone
    params.lkmEmail = lkmEmail
    params.name = name
    params.link = link
    params.location = location
    params.scope = scope
    params.nicName = nicName

    myAjax(regSecond, params, handle)

    function handle(data, param) {
        if(data.success) {
            window.location.href = "resiterSus.html"
        } else {

        }
    }
})
