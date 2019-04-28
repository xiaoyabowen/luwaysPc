
$(".icheckFontMain").click(function () {
    window.location.href = "../html/aboutLuUser.html"
})

//注册第一步操作
$("#signResiter").click(function() {
    checkUserNameOnly()
    //	获取文本内容
    var userName = $("#userName").val();
    var userPass = $("#userPass").val();

//	if(!checkUserName() || !checkPwd() || !checkPwdToo() || !checkUserNameOnly()) {
    if(!checkUserName() || !checkPwd() || !checkPwdToo() ) {
        return
    }
    var params = {};userName
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
//截取地址栏字符串
function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return decodeURI(r[2]); return null;
}
$("#userName").blur(function () {
    checkUserNameOnly()
})

function checkUserNameOnly() {
    myAjax(check, {
        username: $("#userName").val()
    }, handle)

    function handle(data, param) {
        console.log(data.success)
        if(data.success) {
            $(".userNameTrue").show()
            $("img.del-userName").hide()
            return true
        } else {
            $(".userNameTrue").hide()
            $("input#userName").css("border", "2px solid #FF0000")
            $("img.del-userName").show()
            $("#judgeUserName").text("该用户名已注册")
            return false;
        }
    }
}


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