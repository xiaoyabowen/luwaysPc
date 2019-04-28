$(function () {
	$(".tickerCheckOrder").click()
})
myAjax(accountRestControlleNum,'', handle)

function handle(data, param) {
    $(".myOrderShoppingCart").html(data.shopCount)
    $(".myOrderAllnNumber").html(data.orderCount)
}
// 将存储的字符串转换成对象
var userData = JSON.parse(localStorage.getItem("userData"));
//我的订单  状态
/*
$(".checkOrder").bind("click",function(){
	var ul = $(this).siblings('ul')
	if(ul.is(":hidden")){
		ul.slideDown('400', function() {
			$(this).find("li").bind("click",function(){
				var selectLi=$(this).text();
				console.log(selectLi)
				$(".selectOrder span").text(selectLi);
				$(".selectOrder ul").slideUp(400);
			})
				ul.mouseleave(function() {
					$('.selectOrder ul').slideUp(400)
				});
		});
	}else {
        $(this).siblings('ul').slideUp(400)
    }
})
*/

//我的订单日期选择
/*$(".checkDate").bind("click",function(){
	var ul = $(this).siblings('ul')
	if(ul.is(":hidden")){
		ul.slideDown('400', function() {
			$(this).find("li").bind("click",function(){
				var selectLi=$(this).text();
				$(".selctDate span").text(selectLi);
				$(".selctDate ul").slideUp(400);
			})
				ul.mouseleave(function() {
					$('.selctDate ul').slideUp(400)
				});
		});
	}else{
		$(this).siblings('ul').slideUp(400)
	}
})*/

//我的订单  tab  

/*var myOrder = '';
myOrder += '	<li>'
myOrder += '		<a href="myOrder.html" class="myOrderUserTabActive myOrderUserImgOne"><span>我的订单</span></a>'
myOrder += '	</li>'
myOrder += '	<li>'
myOrder += '		<a href="shoppingCar.html" class="myOrderUserImgTwo"><span>购物车</span></a>'
myOrder += '	</li>'
myOrder += '	<li>'
myOrder += '		<a href="myCollection.html" class="myOrderUserImgThree"><span>酒店收藏</span></a>'
myOrder += '	</li>'
myOrder += '	<li>'
myOrder += '		<a href="#" class="myOrderUserImgoFour"><span>账户信息</span></a>'
myOrder += '		<p class="myOrderTabUp">'
myOrder += '			<a href="">个人信息</a>'
myOrder += '			<a href="">公司信息</a>'
myOrder += '			<a href="">密码重置</a>'
myOrder += '			<a href="">头像设置</a>'			
myOrder += '		</p>'
myOrder += '	</li>'

$(".myOrderUserTabLi").append(myOrder)*/

//字数限制
function LimitTextArea(field) {
	var maxlimit = 10;
	$("#showTextNum").html(maxlimit + '/')
	var overNum = (maxlimit - field.value.length) * 1;
	if(overNum == -1) {
		$("#overTextNum").html("0")
	} else {
		$("#overTextNum").html(overNum)
	}

	console.log()
	if(field.value.length > maxlimit) {
		field.value = field.value.substring(0, maxlimit);
	}
}
//个人信息栏 联系人信息姓名不为空验证
function checkUserName(){
	user_name_text = $('#userName').val();
	if(user_name_text == "") {
		$("#judgeUserName").text("姓名不能为空")
		$(".userNameTrue").hide()
		$("input#userName").css("border", "2px solid #FF0000")
		$("img.del-userName").show()
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

//公司信息//公司名称不为空验证
function checkCompanyName(){
	user_name_text = $('#companyName').val();
	if(user_name_text == "") {
		$("#judgeCompanyName").text("公司名称不能为空")
		$(".companyNameTrue").hide()
		$("input#userName").css("border", "2px solid #FF0000")
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

//公司信息//地址不为空验证
function checkUserAdress(){
	user_name_text = $('#companyaddress').val();
	if(user_name_text == "") {
		$("#judgeaddress").text("公司名称不能为空")
		$(".companyaddressTrue").hide()
		$("input#companyaddress").css("border", "2px solid #FF0000")
		$("img.del-companyaddress").show()
		return false;
	}else {
		$("input#companyaddress").css("border", "1px solid #7D7D7D")
		$("#judgeaddress").text("")
		$("img.del-companyaddress").hide()
		$(".companyaddressTrue").show()
		return true;
	}
}
$('#companyaddress').blur(checkUserAdress)

//公司信息//电话不为空验证
function checkCompanyPhone(){
	user_name_text = $('#companyPhone').val();
	if(user_name_text == "") {
		$("#judgecompanyPhone").text("公司电话不能为空")
		$(".companyPhoneTrue").hide()
		$("input#companyPhone").css("border", "2px solid #FF0000")
		$("img.del-companyPhone").show()
		return false;
	}else {
		$("input#companyPhone").css("border", "1px solid #7D7D7D")
		$("#judgecompanyPhone").text("")
		$("img.del-companyPhone").hide()
		$(".companyPhoneTrue").show()
		return true;
	}
}
$('#companyPhone').blur(checkCompanyPhone)



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




//	公司网址
function checkUrl() {
	email_text = $('#companyUrl').val();
	email_prov = /[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?/;
	if(email_text == ""){
	     $("#judgeUrl").text("网址不能为空")
	     $("input#companyUrl").css("border","2px solid #FF0000")
	     $(".companyUrlTrue").hide()
	    $("img.del-companyUrl").show()
	     return false;
	 } else 
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


/*//账户信息js
$(".myOrderTabUp>a").click(function(){

	$(".myOrderTabUp").slideUp();
	var _index = $(".myOrderTabUp>a").index($(this));
	$(".centerMain .personal").eq(_index).show().siblings().hide();
})*/
// 信息获取  渲染
// 个人信息
$("#userName").val(sessionStorage.getItem("name"))
$("#userPhone").val(sessionStorage.getItem("mobile"))
$("#userEmail").val(userData.userEmail)
// 公司信息
$("#companyName").val(userData.companyName)
$("#companyPhone").val(userData.companyTel)
$("#companyUrl").val(userData.companyLink)
$("#companyaddress").val(userData.companyAddress)
$("#conpanyFax").val(userData.companyFax)
$("#operation").val(userData.companyDescription)




//获取全选的

$("#allAndNotAll").click(function() {
	console.log(this)
	console.log($("input[name='checkItem']:checked"))
	if (this.checked){  
        $("input[name='checkItem']:checkbox").each(function(){ 
              $(this).attr("checked", true);  
        });
    } else {   
        $("input[name='checkItem']:checkbox").each(function() {   
              $(this).attr("checked", false);  
        });
    }  
});

var now = new Date();//获取当前时间
// 获取当前时间
var nowYear = now.getFullYear()
var nowMonth = now.getMonth()+1
var nowDay = now.getDate()
var nowDate = nowYear +'-'+ getzf(nowMonth) +'-'+ getzf(nowDay)


// 获取前7天的日期
var nowMs = now.getTime();//获取当前时间的毫秒数
var beforeMs =  nowMs -  1000 * 60 * 60 * 24 * parseInt(20);//前几天，n就取几，整数
var beforeDate = new Date().setTime(beforeMs );
// 时间戳转日期
function getMyDate(str){
    var oDate = new Date(str),
        oYear = oDate.getFullYear(),
        oMonth = oDate.getMonth()+1,
        oDay = oDate.getDate(),
        oTime = oYear +'-'+ getzf(oMonth) +'-'+ getzf(oDay);//最后拼接时间
    return oTime;
};
//补0操作
function getzf(num){
    if(parseInt(num) < 10){
        num = '0'+num;
    }
    return num;
}

var Time = getMyDate(beforeDate );

var shopDateStart = $("#myOrderStart").val(Time)
var shopDateEnd = $("#myOrderEnd").val(nowDate)


    //订单搜索
    $(".tickerCheckOrder").click(function () {
        tickerCheckOrder()
    })

function tickerCheckOrder() {
    var shopName = $("#myOrderInfoName").val()
    var shopInfoNum = $("#myOrderInfoNum").val()
    var shopDateStart = $("#myOrderStart").val()
    var shopDateEnd = $("#myOrderEnd").val()
    var shopStatus = $(".selectOrder>P").attr("data-value")
    var shopDate = $(".selectUp>P").attr("data-value")

    myOrderServer(shopName,shopInfoNum,shopStatus,shopDate,shopDateStart,shopDateEnd)
}
// 获取我的订单内容
function myOrderServer(shopName,shopInfoNum,shopStatus,shopDate,shopDateStart,shopDateEnd) {


    var myOrder = {}
    myOrder.keywords = shopName;
    myOrder.orderNo = shopInfoNum;
    myOrder.orderStatus = shopStatus;
    myOrder.queryEndDate = shopDateEnd;
    myOrder.queryStartDate = shopDateStart;
    myOrder.dateType = shopDate;


    myAjax(orderRestControllerListByJson ,myOrder,handle)
    function handle(data, param) {
    	console.log(data)
		if (data.data ==  ''){
			$(".myOrderNull").show()
		}else{
			$(".myOrderNull").hide()
			var orderData = '<tr>\n' +
                '\t\t\t\t\t<th style="width: 150px;text-align: left;" class="myOrderLabel">\n' +
                '\t\t\t\t\t\t<label id="allAndNotAll">\n' +
                '\t\t\t\t\t\t\t<input type="checkbox" class="myOrderHaveCheck" name="allAndNotAll"  value="" /> 全选\n' +
                '\t\t\t\t\t\t</label>\n' +
                '\t\t\t\t\t\t<span class="myOrderDel">删除</span>\n' +
                '\t\t\t\t\t</th>\n' +
                '\t\t\t\t\t<th style="width: 340px;">名称</th>\n' +
                '\t\t\t\t\t<th style="width: 104px;">类型</th>\n' +
                '\t\t\t\t\t<th style="width: 140px;">人数</th>\n' +
                '\t\t\t\t\t<th style="width: 146px;">价格</th>\n' +
                '\t\t\t\t\t<th style="width: 126px;">订单状态</th>\n' +
                '\t\t\t\t\t<th style="width: 200px;">操作</th>\n' +
                '\t\t\t\t</tr>';

			var orderDataMain = ''

			for (var i=0;i<data.data.length;i++){
				var str = data.data[i].thumbnailUrl
                orderDataMain += '<tr>\n'
					if(str.indexOf("https:")>=0){
                        orderDataMain +='\t\t\t\t\t<td><img src="'+data.data[i].thumbnailUrl+'" alt="订单图片" /></td>\n'
					}else if (str.indexOf("/res")>=0) {
                        orderDataMain +='\t\t\t\t\t<td><img src="../images/new_hotel_img.png" alt="订单图片" /></td>\n'
					}else {
                        orderDataMain +='\t\t\t\t\t<td><img src="'+serverHttpUrlImg+data.data[i].thumbnailUrl+'" alt="订单图片" /></td>\n'
					}
					


                orderDataMain +='\t\t\t\t\t<td style=" text-align: left;">\n' +
                    '\t\t\t\t\t\t<label>\n' +
                    '\t\t\t\t\t\t\t<input type="checkbox" class="myOrderHaveCheck" data-shopId="'+data.data[i].id+'" name="checkItem" /> \n' +
                    '\t\t\t\t\t\t</label>\n' +
                    '\t\t\t\t\t\t<span class="myOrderMakeNum">\n' +
                    '\t\t\t\t\t\t\t订单编号：<i>'+data.data[i].orderNo+'</i>\n' +
                    '\t\t\t\t\t\t</span>\n' +
                    '\t\t\t\t\t\t<p class="myOrderMakedate">\n' +
                    '\t\t\t\t\t\t\t预定日期：<span>'+timestampToTime(data.data[i].createDate)+'</span>\n' +
                    '\t\t\t\t\t\t</p>\n' +
                    '\t\t\t\t\t\t<h4>'+data.data[i].productTitle+' </h4>\n' +
                    '\t\t\t\t\t\t<p class="myOrderMakeSubTitle">'+data.data[i].skuTitle+'</p>\n' +
                    '\t\t\t\t\t</td>\n'
                    // '\t\t\t\t\t<td>门票</td>\n' +
					if(data.data[i].orderType == '0'){
                        orderDataMain += '<td>当地玩乐</td>'
					}else if (data.data[i].orderType == '1'){
                        orderDataMain += '<td>酒店</td>'
					}else if (data.data[i].orderType == '2'){
                        orderDataMain += '<td>发送voucher</td>'
                    }else if (data.data[i].orderType == '3'){
                        orderDataMain += '<td>voucher直连下单</td>'
                    }else{
                        orderDataMain += '<td>未知状态</td>'
                    }

                    orderDataMain += '\t\t\t\t\t<td>\n' +
                    '\t\t\t\t\t\t<p>'+data.data[i].adultDesc+'</p>\n' +
                    // '\t\t\t\t\t\t<p>儿童：<span>2位</span></p>\n' +
                    '\t\t\t\t\t</td>\n' +
                    '\t\t\t\t\t<td>\n' +
                    '\t\t\t\t\t\t<p class="myOrderPrice">'+data.data[i].nowPrice+'起</p>\n' +
                    '\t\t\t\t\t</td>\n' +
                    '\t\t\t\t\t<td>\n'
					if(data.data[i].orderStatus == '0'){
                        orderDataMain +='待支付'
					}else if (data.data[i].orderType == '1'){
                        orderDataMain +='已支付'
					}else if (data.data[i].orderType == '7'){
                        orderDataMain +='支付成功待确认'
                    }else if (data.data[i].orderType == '8'){
                        orderDataMain +='确认失败'
                    }else if (data.data[i].orderType == '9'){
                        orderDataMain +='确认成功'
                    }else if (data.data[i].orderType == '16'){
                        orderDataMain +='确认中'
                    }else if (data.data[i].orderType == '13'){
                        orderDataMain +='异常'
                    }else if (data.data[i].orderType == '10'){
                        orderDataMain +='取消'
                    }
                 '\t\t\t\t\t</td>\n' +
                    '\t\t\t\t\t<td>\n'
                    /*'<a class="sucssBtn myOrderBtn">\n' +
                    '<span data-tit="查看详情 >">查看详情</span>\n' +
                    '</a>\n' +
                    '<a href="hotelOrderPay.html" class="sucssBtn myOrderBtn">\n' +
                    '<span data-tit="立即支付 >">立即支付</span>\n' +
                    '</a>\n'*/

                     if (data.data[i].orderType != '0'){
                        orderDataMain +='<td><a class="sucssBtn myOrderBtn myOrderDetail" data-detilId = '+data.data[i].id+' price="'+data.data[i].nowPrice+'">\n' +
                            '<span data-tit="查看详情 >">查看详情</span>\n' +
                            '</a>\n</td>'
					}else{
                        orderDataMain +='<td><a class="sucssBtn myOrderBtn myOrderDetail" data-orderId = '+data.data[i].id+' price="'+data.data[i].nowPrice+'" >\n' +
                            '<span data-tit="查看详情 >">查看详情</span>\n' +
                            '</a>\n'+
                            '<a class="sucssBtn myOrderBtn myOrderComfit" data-orderId = '+data.data[i].id+' skuId="'+data.data[i].skuId+'" price="'+data.data[i].nowPrice+'">\n' +
                            '<span data-tit="立即支付 >">立即支付</span>\n' +
                            '</a>\n</td>'
					}

                    orderDataMain += '\t\t\t\t\t\t<!--<button class="myOrderBtn">查看详情</button>-->\n' +
                    '\t\t\t\t\t</td>\n' +
                    '\t\t\t\t</tr>'

					$(".thumbnailUrl").val(data.data[i].thumbnailUrl)
					$(".adult").val(data.data[i].numberOfAdult)
					$(".child").val(data.data[i].numberOfChildren)
					$(".child").val(data.data[i].numberOfChildren)
					$(".tickerCheckInDate").val(timestampToTime(data.data[i].createDate))


			}
			$(".myOrderHaveTable").html(orderData+orderDataMain)



		}
    }
}
// myOrderServer();


//实现全选
$(document).on("click","#allAndNotAll",function(){
    $("input[name='checkItem']").prop('checked',true);
})

// 删除按钮
$(document).on("click",".myOrderDel",function(){


    var shopId = "";
    $("input[name='checkItem']:checked ").each(function(){
        shopId += $(this).attr("data-shopId")+","
        console.log(shopId)
    });

    if (shopId.length > 0) {
        shopId = shopId.substr(0,shopId.length - 1);
    }
    /* if (shopId.length = 1) {
         shopId = shopId.substr(0,shopId.length - 1);
     }*/

    myAjax(shopcarBatchDelete, {ids:shopId}, handle)

    function handle(data, param) {
        console.log(data)
        window.location.reload();
    }
})
// 下拉框js

	// 选择日期
    $(".selectUp p").click(function(e){
        $(".selectUp").toggleClass('open');
        e.stopPropagation();
    });

    $(".selectUp ul li").click(function(e){
        var _this=$(this);
        $(".selectUp > p").attr("data-value",_this.attr('data-value'))
        $(".selectUp > p").html(_this.text());
        _this.addClass("Selected").siblings().removeClass("Selected");
        $(".selectUp").removeClass("open");
        e.stopPropagation();
    });
    $(document).on('click',function(){
        $(".selectUp").removeClass("open");
    })


	// 订单状态
    $(".selectOrder p").click(function(e){
        $(".selectOrder").toggleClass('open');
        e.stopPropagation();
    });

    $(".selectOrder ul li").click(function(e){
        var _this=$(this);
        $(".selectOrder > p").attr("data-value",_this.attr('data-value'))
        $(".selectOrder > p").html(_this.text());
        _this.addClass("Selected").siblings().removeClass("Selected");
        $(".selectOrder").removeClass("open");
        e.stopPropagation();
    });
    $(document).on('click',function(){
        $(".selectOrder").removeClass("open");
    })



// 验证密码


// 个人中心  修改密码
$(".passCenterBtn").click(function () {

	if (!checkOldPass() || !checkPwd() || !checkPwdToo()){
		return
	}

    var passName = $("#passName").val();
    var passNewName = $("#userPassConfirm").val();
    var ticktPass= {}
    ticktPass.oldPassword = passName
    ticktPass.newPassword = passNewName

    myAjax(passwordRest,ticktPass, handle)
    function handle(data, param) {
    	if (data.message == "密码输入错误"){
            $("#judgePassName").text("旧密码错误,请重新输入")
            $(".passNameTrue").hide()
            $("input#passName").css("border", "2px solid #FF0000")
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
})





// 立即预定
$(document).on("click",".myOrderComfit",function () {

	var tickerCheckInDate = $(".tickerCheckInDate").val()
	var adult = $(".adult").val()
	var yong = $(".yong").val()
	var child = $(".child").val()
	var baby = $(".baby").val()
	var thumbnailUrl = $(".thumbnailUrl").val()
	var Old = $(".Old").val()
	var price = $(".price").val();
	console.log(tickerCheckInDate)
	console.log(thumbnailUrl)
    var allDataDetailJson = {
        // "skuId":skuId,

        /*"adult":adult,
         "yong":yong,
         "child":child,
         "baby":baby,
         "Old":Old,*/
		"tickerCheckInDate":tickerCheckInDate,
		"thumbnailUrl":thumbnailUrl,
		"price":$(this).attr("price"),
		"orderId":$(this).attr("data-orderid"),
		"skuId":$(this).attr("skuId"),
		}
var allDataDetailJson = JSON.stringify(allDataDetailJson)
localStorage.setItem("allData",allDataDetailJson)
window.location.href = "../html/tickerOrderPayCoect.html"
})

// 查看详情
$(document).on("click",".myOrderDetail",function () {
    var tickerCheckInDate = $(".tickerCheckInDate").val()
    var adult = $(".adult").val()
    var yong = $(".yong").val()
    var child = $(".child").val()
    var baby = $(".baby").val()
    var thumbnailUrl = $(".thumbnailUrl").val()
    var Old = $(".Old").val()
    var price = $(".price").val();
    console.log(tickerCheckInDate)
    console.log(thumbnailUrl)
    var allDataDetailJson = {
        // "skuId":skuId,

        /*"adult":adult,
         "yong":yong,
         "child":child,
         "baby":baby,
         "Old":Old,*/
        "tickerCheckInDate":tickerCheckInDate,
        "thumbnailUrl":thumbnailUrl,
        "price":$(this).attr("price"),
        "orderId":$(this).attr("data-orderid")
    }
    var allDataDetailJson = JSON.stringify(allDataDetailJson)
    localStorage.setItem("allData",allDataDetailJson)
	window.location.href = "../html/tickerOrderPayDetail.html"
})











