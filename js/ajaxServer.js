var serverUrl = "http://192.168.3.55:9999/" // 访问ip地址
// var serverUrl = "http://121.42.189.110:9997/" // 访问ip地址
var serverUrlImg = "http://photos.hotelbeds.com/giata/" // 访问ip地址  图片
var serverHttpUrlImg = "http://activities-img.oss-cn-qingdao.aliyuncs.com/" // 访问ip地址  图片

/*
/!*-----------------------ajax请求------------------------------*!/
function myAjax(url, param, func) {
	if(!url.startsWith(serverUrl)) {
		url = serverUrl + url;
	}
	param = param || {};
	$.ajax({
		url: url,
		type: "POST",
		dataType: "json",
		sync:true,
		data: param,
        xhrFields: {
            withCredentials: true
        },
        traditional:true,
		success: function(data) {
			if(typeof func == 'function') {
				func(data, param);
			}
		},
		error: function() {

		}

	});
}*/
/*

var loginServer = serverUrl + "loginRest/doLogin" //登陆
var resterServer = serverUrl + "register/regFirst" //注册第一步
var regSecond = serverUrl + "register/regSecond" //注册第一步
var check = serverUrl + "register/check" //注册第一步
var getProductInro = serverUrl + "unLogin/getProductInro"    //未登录首页底部获取数据
var getHotelJson = serverUrl + "restHotel/getHotelJson"    //登陆成功之后  里面的  热门酒店
var restHotelQ = serverUrl + "restHotel/q"    //酒店  关键字搜索
var restHotelSearch = serverUrl + "restHotel/search"    //酒店关键字搜索渲染列表
var ticketRestController = serverUrl + "ticketRestController/search"    //门票搜索
var ticketRestControllerDetail = serverUrl + "ticketRestController/detail"    //门票搜索
var orderRestControllerBook = serverUrl + "orderRestController/book"    //门票填写订单
var orderRestControllerPay = serverUrl + "orderRestController/pay"    //门票填写订单

*/

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
/*$("#sign").click(function() {
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
	myAjax(loginServer, params, handle)

	function handle(data, param) {
        // window.location.href = "../index.html"
		if(data.success) {

		} else {

		}
	}
})*/

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
//截取地址栏字符串
function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return decodeURI(r[2]); return null;
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



// 首页热门酒店
myAjax(getHotelJson, '',handle)
function handle(data, param) {
	console.log(data)
	var HotelJsonStr = ''
	for (var i = 0;i<data.data.length;i++){

        HotelJsonStr += '<a href="html/hotel.html">\n' +
            '\t\t\t\t\t\t<div class="subIndexHotelMainList animate" data-animate="bounceInLeft" data-duration="3s">\n' +
            '\t\t\t\t\t\t\t<div class="subIndexHotelMainListOver">\n' +
            '\t\t\t\t\t\t\t\t<img src="'+serverUrlImg+''+data.data[i].thumbnailUrl+'" alt="" />\n' +
            '\t\t\t\t\t\t\t</div>\n' +
            '\t\t\t\t\t\t\t<div class="subIndexHotelMainListCotent">\n' +
            '\t\t\t\t\t\t\t\t<h4 class="textOverflow">'+data.data[i].cnName+'</h4>\n' +
            '\t\t\t\t\t\t\t\t<p>'+data.data[i].shortDescription+'</p>\n' +
            '\t\t\t\t\t\t\t\t<div class="subIndexHotelMainListCotentPrice">￥'+data.data[i].minRate+'</div>\n' +
            '\t\t\t\t\t\t\t</div>\n' +
            '\t\t\t\t\t\t</div>\n' +
            '\t\t\t\t\t</a>\n'

	}
	$(".subIndexHotelMain").html(HotelJsonStr)

}

// 点击搜索景点进行关键字搜索
// 门票搜索
//当在搜索框输入内容时，根据关键字匹配，显示弹出层
function searchSuggestTiket(obj){
    var searchKey=$(obj).val();
    myAjax(ticketRestController, {term:$("#bannerSearchTickerQuery").val()}, handle)
    function handle(data, param) {
    	// console.log(111)
		// console.log(data)
        var arr=[];
		for(var i=0,len=data.findList.length;i<len;i++){
			// if(searchKey!="" && (data.data[i].initial.search(reg)!=-1 || data.data[i].keyword.search(reg)!=-1))  {
			if(searchKey!="")  {
				arr.push("<li class='cssFlex' onclick='changeSearchKeyTiket(this);'><span class='SearchKeyVal SearchKeyTiketVal'><i class='SearchKeyTiketValI'>"+data.findList[i].name+"</i> "+data.findList[i].name+" </span><span class='SearchKeyTiketValB'><b>"+data.findList[i].productSum+"</b>&nbsp;款产品</span></li>");
			}

		}
		$(".keywords_list_tiket").html(arr).fadeIn();
    }

}
//单击匹配列表中的关键字选项时，将该关键字显示在搜索框中
function changeSearchKeyTiket(obj) {
    var value = $(obj).children(".SearchKeyTiketVal").children("i").text();
    $("#bannerSearchTickerQuery").val(value);
    $('.keywords_list').fadeOut();
}
// 门票搜索点击按钮
$(".bannerSearchTickerBtn").click(function () {
    var keywordsTicker = $("#bannerSearchTickerQuery").val();
    // console.log(keywordsTicker)
    window.location.href = "html/ticket.html?keywords="+keywordsTicker
})


// 酒店到达目的地
function searchSuggestHotel(obj){
    var searchKey=$(obj).val();
    myAjax(restHotelQ, {term:$("#destination").val()}, handle)

    function handle(data, param) {
        var arr=[];
        for(var i=0,len=data.data.length;i<len;i++){
            // if(searchKey!="" && (data.data[i].initial.search(reg)!=-1 || data.data[i].keyword.search(reg)!=-1))  {
            if(searchKey!="")  {
                arr.push("<li class='cssFlex' onclick='changeSearchKeyHotel(this);' data-idHotel='"+data.data[i].id+"'><span class='SearchKeyVal'>"+data.data[i].name+"</span><span>"+data.data[i].parentName+"</span></li>");
            }
        }
        $(".keywords_list_hotel").html(arr).fadeIn();
    }

}
//单击匹配列表中的关键字选项时，将该关键字显示在搜索框中
function changeSearchKeyHotel(obj) {
    var value = $(obj).children(".SearchKeyVal").text();
    $("#destination").val(value);
    $('.keywords_list').fadeOut();
}

// 酒店搜索按钮查询
$(".bannerSearchTabSearch").click(function () {
	var desId =$(".keywords_list_hotel>li").attr("data-idHotel")
	var keywords = $(".SearchKeyVal").html();
	var checkIn = $("#checkInTime").val()
	var checkOut = $("#checkOUutTime").val()
	window.location.href = "html/hotel.html?desId="+desId+"&keywords="+keywords+"&checkIn="+checkIn+"&checkOut="+checkOut
})

// 酒店列表 查询
var desId= GetQueryString("desId");
var keywords= GetQueryString("keywords");
var checkIn= GetQueryString("checkIn");
var checkOut= GetQueryString("checkOut");
var params = {};
params.desId = desId;
params.keywords = keywords;
params.checkIn = checkIn;
params.checkOut = checkOut;
params.checkOut = checkOut;
myAjax(restHotelSearch,params , handle)

function handle(data, param) {
    // console.log(data)

	var hotelList = ''
	for (var i=0;i<data.list.length;i++){
        var hotelFacilitiesThree = data.list[i].hotelFacilities;
        var hotelFacilitiesThreeArr = hotelFacilitiesThree.slice(0,3)   //取前三个
		hotelList += '<li>\n' +
            '\t\t\t\t\t\t\t<div class="hotelShowAllPageImg">\n'
			if(data.list[i].thumbnailUrl == ''){
                hotelList += '<img src="../images/hotel_img.png" alt="酒店照片" />'
			}else{
                hotelList += '<img src="'+serverUrlImg+''+data.list[i].thumbnailUrl+'" alt="酒店照片" />'
			}

            hotelList += '\t\t\t\t\t\t\t</div>\n' +
            '\t\t\t\t\t\t\t<div class="hotelShowAllPageInfo">\n' +
            '\t\t\t\t\t\t\t\t<h4>'+data.list[i].cityName+'</h4>\n' +
            '\t\t\t\t\t\t\t\t<p>'+data.list[i].address+'</p>\n' +
            '\t\t\t\t\t\t\t\t<p>星级：\n'
			if(data.list[i].star == 0){
				hotelList += '无评价'
			}else if(data.list[i].star == 1){
                hotelList += '<img src="../images/icon/content_hotel_icon_grade.png" id="gradeStar" alt="星级" />'
			}else if(data.list[i].star == 2){
                hotelList += '<img src="../images/icon/content_hotel_icon_grade.png" id="gradeStar" alt="星级" />' +
                    '            <img src="../images/icon/content_hotel_icon_grade.png" id="gradeStar" alt="星级" />'
			}else if(data.list[i].star == 3){
                hotelList += '<img src="../images/icon/content_hotel_icon_grade.png" id="gradeStar" alt="星级" />' +
                    '            <img src="../images/icon/content_hotel_icon_grade.png" id="gradeStar" alt="星级" />' +
                    '            <img src="../images/icon/content_hotel_icon_grade.png" id="gradeStar" alt="星级" />'
            }else if(data.list[i].star == 4){
                hotelList += '<img src="../images/icon/content_hotel_icon_grade.png" id="gradeStar" alt="星级" />' +
                    '            <img src="../images/icon/content_hotel_icon_grade.png" id="gradeStar" alt="星级" />' +
                    '            <img src="../images/icon/content_hotel_icon_grade.png" id="gradeStar" alt="星级" />'+
                    '            <img src="../images/icon/content_hotel_icon_grade.png" id="gradeStar" alt="星级" />'
            }

            hotelList += '\t\t\t\t\t\t\t\t</p>\n' +
            '\t\t\t\t\t\t\t\t<p class="hotelShowAllPageNearby cssFlex">\n'
			for (var j=0;j<hotelFacilitiesThreeArr.length;j++){
                hotelList += '<span>'+hotelFacilitiesThreeArr[j].facility.cnName+'</span>'
			}
            hotelList += '\t\t\t\t\t\t\t\t</p>\n' +
            '\t\t\t\t\t\t\t\t<p>\n' +
            '\t\t\t\t\t\t\t\t\t<span class="hotelShowAllPagePrice">￥'+data.list[i].minRate+'</span>\n' +
            '\t\t\t\t\t\t\t\t\t<span class="hotelShowAllPageFabulous">\n' +
            '\t\t\t\t\t\t\t\t\t\t<img src="../images/icon/content_hotel_icon_collection.png" alt="点赞icon" />\n' +
            '\t\t\t\t\t\t\t\t\t\t收藏\n' +
            '\t\t\t\t\t\t\t\t\t</span>\n' +
            '\t\t\t\t\t\t\t\t</p>\n' +
            '\t\t\t\t\t\t\t\t<a href="hotelDetails.html" class="sucssBtn hotelShowAllDetails">\n' +
            '\t\t\t\t\t\t\t\t\t<span data-tit="查看详情 >">查看详情</span>\n' +
            '\t\t\t\t\t\t\t\t</a>\n' +
            '\t\t\t\t\t\t\t</div>\n' +
            '\t\t\t\t\t\t</li>'
	}
	$(".hotelShowAllPageList").html(hotelList)
    /*$('.hotelPage').pagination(10,{
        num_edge_entries: 1, //边缘页数
        num_display_entries: 4, //主体页数
        callback: pageselectCallback,
        items_per_page: 1, //每页显示1项
        prev_text: "前一页",
        next_text: "后一页"
    });
    //处理分页按钮事件
    function pageselectCallback(page_index, jq){
        var new_content = $(".hotelShowAllPageList li:eq("+page_index+")").clone();
        $(".hotelShowAllPageList").empty().append(new_content); //装载对应分页的内容
        return false;
    }
    //ajax加载数据
    $(".hotelShowAllPageList").load(restHotelSearch, null, initPagination);*/

}


// 门票列表页渲染

function ticketListPull(priceGt,priceLt,playText,commitNum) {
    var keywordsTicket= GetQueryString("keywords");
    var params = {};
    params.keywords = keywordsTicket;
	params.priceGt = priceGt;
	params.priceLt = priceLt;
	params.filteredCategorie = playText;
	params.confirmType = commitNum;
    myAjax(ticketRestController,params , handle)

    function handle(data, param) {
        console.log(data)

		// 固定id
		$(".tickDetailReserveJump").attr("data-detailId",data.product.id)

        var ticketList = ''
        for (var i=0;i<data.productList.content.length;i++){
            ticketList += '<li data-ticket="'+data.productList.content[i].id+'">\n' +
                '\t\t\t\t\t\t\t<div class="hotelShowAllPageImg">\n'
            if(data.productList.content[i].thumbnailUrl == ''){
                ticketList += '<img src="../images/hotel_img.png" alt="酒店照片" />'
            }else{
                ticketList += '<img src="'+serverHttpUrlImg+''+data.productList.content[i].thumbnailUrl+'" alt="酒店照片" />'
            }
            ticketList += '\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t<div class="hotelShowAllPageInfo">\n' +
                '\t\t\t\t\t\t\t\t<h4>'+data.productList.content[i].title+'</h4>\n' +
                '\t\t\t\t\t\t\t\t<p>'+data.productList.content[i].city.name+'</p>\n' +
                '\t\t\t\t\t\t\t\t<p>\n' +
                '\t\t\t\t\t\t\t\t\t服务语言：'
            if (data.productList.content[i].languageService == "en"){
                ticketList +=  '<span>英语</span>'
            }else if (data.productList.content[i].languageService == "zh"){
                ticketList +=  '<span>汉语</span>'
            }else if (data.productList.content[i].languageService == "sv"){
                ticketList +=  '<span>瑞士语</span>'
            }else if (data.productList.content[i].languageService == "ja"){
                ticketList +=  '<span>日语</span>'
            }else if (data.productList.content[i].languageService == "pt"){
                ticketList +=  '<span>葡萄牙语</span>'
            }else if (data.productList.content[i].languageService === "fr"){
                ticketList +=  '<span>法语</span>'
            }else if (data.productList.content[i].languageService == "de"){
                ticketList +=  '<span>德语</span>'
            } else if (data.productList.content[i].languageService == "es"){
                ticketList +=  '<span>西班牙语</span>'
            }else{
                ticketList +=  '<span>其他</span>'
            }

            ticketList += '\t\t\t\t\t\t\t\t</p>\n' +
                '\t\t\t\t\t\t\t\t<p>\n' +
                '\t\t\t\t\t\t\t\t\t游玩时间：<span>'+data.productList.content[i].duration+'</span>\n' +
                '\t\t\t\t\t\t\t\t</p>\n' +
                '\t\t\t\t\t\t\t\t<p class="cssFlex">\n' +
                '\t\t\t\t\t\t\t\t\t<span class="tickerLabel">'+data.productList.content[i].categories+'</span>\n' +
                '\t\t\t\t\t\t\t\t</p>\n' +
                '\t\t\t\t\t\t\t\t<p class="tickerOrderPrice">\n' +
                '\t\t\t\t\t\t\t\t\t￥'+data.productList.content[i].price+'起\n' +
                '\t\t\t\t\t\t\t\t</p>\n' +
                '\t\t\t\t\t\t\t\t<a class="sucssBtn tickerShowAllDetails">\n' +
                '\t\t\t\t\t\t\t\t\t<span data-tit="立即预定 >">立即预定</span>\n' +
                '\t\t\t\t\t\t\t\t</a>\n' +
                '\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t</li>'
            $(".ticketShowAllPageList").html(ticketList)

			// 门票列表  点击进入详情
            $(".ticketShowAllPageList>li").click(function () {
                var ticketIdThis = $(this).attr("data-ticket")
                window.location.href = "../html/tickerDetails.html?ticketId="+ ticketIdThis
            })
        }

    }
}
ticketListPull()    //调用

// 价格范围
$(".tickerTypeSelectionRangeUlList>li").click(function () {
	$(this).addClass("tickerTypeSelectionRangeLeftActive").siblings().removeClass("tickerTypeSelectionRangeLeftActive")
	var priceGt = $(this).attr("data-gt")
	var priceLt = $(this).attr("data-lt")
    ticketListPull(priceGt,priceLt)
})
// 价格范围手动输入查询
$(".tickerTypeSelectionRangeSearch").click(function () {
    var priceGt = $("#tickerInputRangeStart").val()
    var priceLt = $("#tickerInputRangeEnd").val()
	console.log(priceGt)
	console.log(priceLt)
    ticketListPull(priceGt,priceLt)
})

// 可定日期

/*$(".tickerTypeSelectionRangeDate>li").click(function () {
    $(this).addClass("tickerTypeSelectionRangeLeftActive").siblings().removeClass("tickerTypeSelectionRangeLeftActive")

    ticketListPull('','','','',)
})*/

// 当地玩乐
$(".tickerTypeSelectionRangePlay>li").click(function () {
    $(this).addClass("tickerTypeSelectionRangeLeftActive").siblings().removeClass("tickerTypeSelectionRangeLeftActive")
    var playText = $(this).text()
	console.log(playText)
    ticketListPull('','',playText)
})

// 及时确认
$(".tickerTypeSelectionRangeCommit>li").click(function () {
    $(this).addClass("tickerTypeSelectionRangeLeftActive").siblings().removeClass("tickerTypeSelectionRangeLeftActive")
    var commitNum = $(this).attr("data-commit")
    ticketListPull('','','',commitNum)
})





// 门票详情页

var ticketId = GetQueryString("ticketId");
// console.log(ticketId)
myAjax(ticketRestControllerDetail,{id:ticketId}, handle)

function handle(data, param) {
	// 详情图片
	$(".hotelHomeDetailsImgTitle").attr("src",serverHttpUrlImg+data.product.thumbnailUrl)
	// 可选套餐
	$(".tickDetailReserveJump").attr("data-ticketDetailId",data.product.id)
	var ticketOptional = ''
	for (var i=0;i<data.productSkuList.length;i++){
        ticketOptional += '<li data-optional="'+data.productSkuList[i].id+'">'+data.productSkuList[i].title+'</li>'
	}
	$(".ticketOptional").html(ticketOptional)

	console.log(data)
	$(".ticketTitle").html(data.product.title)      //门票标题
	$(".ticketType").html(data.product.categories[0].name)      //产品类型
	$(".ticketLangue").html(data.product.languageService)      //服务语言
	$(".ticketPrduct").html(data.product.code)      //产品编号
	$(".ticketPlay").html(data.product.duration)      //游玩时间

	// 价格
	for (var i=0;i<data.productSkuList[0].ageBandList.length;i++){
        if(data.productSkuList[0].ageBandList[i].bandId == 2){
        	$(".ticketAdult").html("<span class='tickerDetailsPrice'>成人价格：</span><span>￥ <i class='adultPrice' >"+data.productSkuList[0].ageBandList[i].priceCNY+"</i> /人(成人>18)</span>")
        }
        if(data.productSkuList[0].ageBandList[i].bandId == 3){
            $(".ticketChildren").html("<span class='tickerDetailsPrice'>儿童价格：</span><span>￥<i class='childPrice'>"+data.productSkuList[0].ageBandList[i].priceCNY+"</i>/人(儿童<6)</span>")
        }
        if(data.productSkuList[0].ageBandList[i].bandId == 4){
            $(".ticketBaby").html("<span class='tickerDetailsPrice'>婴儿价格：</span><span>￥<i class='babyPrice'>"+data.productSkuList[0].ageBandList[i].priceCNY+"</i>/人(婴儿<2)</span>")
        }
        if(data.productSkuList[0].ageBandList[i].bandId == 5){
            $(".ticketYong").html("<span class='tickerDetailsPrice'>青年价格：</span><span>￥<i class='youngPrice'>"+data.productSkuList[0].ageBandList[i].priceCNY+"</i>/人(青年<18)</span>")
        }
        if(data.productSkuList[0].ageBandList[i].bandId == 6){
            $(".ticketOld").html("<span class='tickerDetailsPrice'>老人价格：</span><span>￥<i class='oldPrice'>"+data.productSkuList[0].ageBandList[i].priceCNY+"</i>/人(老人>60)</span>")
        }
	}
	/*var adultPrice =$(".adultPrice").text(),
		childPrice =$(".childPrice").text(),
		babyPrice =$(".babyPrice").text(),
		youngPrice =$(".youngPrice").text(),
		oldPrice =$(".oldPrice").text()
    var adultPriceTwo = adultPrice.toFixed(2);
	console.log(adultPrice)*/
	// console.log(adultPriceTwo)
	// $(".tickerDetailsAllPrice").html("￥"+)
	// 产品亮点
	$(".tickerDetailLight").html(data.product.detail.recommend);
	// 产品介绍
	$(".tickerDetailPrduct").html(data.product.detail.introduce)
	// 费用包含
    $(".tickerDetailCost").html(data.product.detail.inclusions)
	// 费用不包含
    $(".tickerDetailNotCost").html(data.product.detail.exclusions)
// 预定凭证
    $(".tickerDetailVoucher").html(data.product.detail.voucherRequirements)
// 重要提示
    $(".tickerDetailTls").html(data.product.detail.importantTips)

// 退改规则
    $(".tickerDetailRuls").html(data.product.detail.refundRules)

	// 相关推荐
		var allMapHot = '';
		allMapHot += '<li>\n' +
			'\t\t\t\t\t<img src="'+serverHttpUrlImg+''+data.productDTOS[0].thumbnailUrl+'" class="tickerRecommendAllImg" alt="相关推荐" />\n' +
			'\t\t\t\t\t<img src="../images/icon/threeJ.png" class="tickerThreeJ"/>\n' +
			'\t\t\t\t</li>\n' +
			'\t\t\t\t<li>\n' +
			'\t\t\t\t\t<h4 class="textOverflow"> '+data.productDTOS[0].enTitle+'</h4>\n' +
			''+data.productDTOS[0].detail.recommend+''+
			'\t\t\t\t\t<p class="tickerRecommendAllPrice">￥3455起</p>\n' +
			'\t\t\t\t</li>\n' +
			'\t\t\t\t<li>\n' +
			'\t\t\t\t\t<img src="'+serverHttpUrlImg+''+data.productDTOS[1].thumbnailUrl+'" class="tickerRecommendAllImg" alt="相关推荐" />\n' +
			'\t\t\t\t\t<img src="../images/icon/threeJ.png" class="tickerThreeJ"/></li>\n' +
			'\t\t\t\t<li>\n' +
			'\t\t\t\t\t<h4 class="textOverflow"> '+data.productDTOS[1].enTitle+'</h4>\n'+
            ''+data.productDTOS[1].detail.recommend+''+
			'\t\t\t\t\t<p class="tickerRecommendAllPrice">￥3455起</p>\n' +
			'\t\t\t\t</li>\n' +
			'\t\t\t\t<li>\n' +
			'\t\t\t\t\t<h4 class="textOverflow">'+data.productDTOS[2].enTitle+'</h4>\n' +
            ''+data.productDTOS[2].detail.recommend+''+
			'\t\t\t\t\t<p class="tickerRecommendAllPrice">￥3455起</p>\n' +
			'\t\t\t\t</li>\n' +
			'\t\t\t\t<li>\n' +
			'\t\t\t\t\t<img src="'+serverHttpUrlImg+''+data.productDTOS[2].thumbnailUrl+'" class="tickerRecommendAllImg" alt="相关推荐" />\n' +
			'\t\t\t\t\t<img src="../images/icon/threeJ.png" class="tickerThreeJR"/>\n' +
			'\t\t\t\t</li>\n' +
			'\t\t\t\t<li>\n' +
			'\t\t\t\t\t<h4 class="textOverflow">'+data.productDTOS[3].enTitle+'</h4>\n' +
            ''+data.productDTOS[3].detail.recommend+''+
			'\t\t\t\t\t<p class="tickerRecommendAllPrice">￥3455起</p>\n' +
			'\t\t\t\t</li>\n' +
			'\t\t\t\t<li>\n' +
			'\t\t\t\t\t<img src="'+serverHttpUrlImg+''+data.productDTOS[3].thumbnailUrl+'" class="tickerRecommendAllImg" alt="相关推荐" />\n' +
			'\t\t\t\t\t<img src="../images/icon/threeJ.png" class="tickerThreeJR"/>\n' +
			'\t\t\t\t</li>'
		$(".tickerRecommend").html(allMapHot)
}

$(".tickDetailReserveJump").click(function () {
	var tickerCheckInDate = $("#tickerCheckInDate").val();   //日期
	var adult = $("#hotelCheckPeopleNum").val()      //门票张数
	var yong = $("#hotelCheckPeopleNumYong").val()
	var child = $("#hotelCheckPeopleNumChild").val()
	var baby = $("#hotelCheckPeopleNumBaby").val()
	var skuId = $(".tickDetailReserveJump").attr("data-ticketDetailId")    //id
	var thumbnailUrl = $(".hotelHomeDetailsImgTitle").attr("src")
	console.log(thumbnailUrl)
	$(".ticketOptional>li").click(function () {
		$(this).addClass("tickerCheckPeopleActive").siblings().removeClass("tickerCheckPeopleActive")
    })

    /*$(".hotelInputWidth").find(".CheckNum").each(function (index) {
        var bandId = $(this).attr('data-bandId');
    	console.log(bandId)
        var number = $(this).val();
        var bandArr = {
            'bandId': bandId,
            'bandNum': number
        }
        bandArray.push(bandArr);
    });
    var shopJson = {
        'skuId': skuId,
        'startDate': tickerCheckInDate,
        'nowPrice': $(".tickerDetailsAllPriceaLL").text(),
        'bandArray': bandArray,
        'thumbnailUrl': thumbnailUrl
    }*/
	// console.log(shopJson)
	// window.location.href = "../html/tickerOrderPay.html?ticketDate="+tickerCheckInDate+"&adult="+ adult+"&yong="+ yong+"&child="+ child+"&baby="+ baby +"&skuId="+ skuId
	window.location.href = "../html/tickerOrderPay.html"
})

// 门票支付填写订单

var ticketDate = GetQueryString("ticketDate");
var adult = GetQueryString("adult");
var yong = GetQueryString("yong");
var child = GetQueryString("child");
var baby = GetQueryString("baby");
var skuId = GetQueryString("skuId");

var bandArray = [{bandId: 1,bandNum:1},{bandId:3,bandNum:1},{bandId:5,bandNum:1}]
/*var bandArray = {
	'bandId':3,
	'bandNum':1
}*/
// console.log(bandArray)
/*var bandArray;
bandArray.push({'bandId': 1,'bandNum':1})
bandArray.push({'bandId': 3,'bandNum':1})
bandArray.push({'bandId': 5,'bandNum':1})*/

/*
var skuId = skuId;
var startDate = ticketDate;
// console.log(ticketId)
var ticketArr ={}
ticketArr.skuId = '2';
ticketArr.startDate = '2018-09-08';
// ticketArr.band = bandArray;
ticketArr.band.bandId = 1
ticketArr.band.bandNum = 1
ticketArr.thumbnailUrl = 'http://activities-img.oss-cn-qingdao.aliyuncs.com/391/22628/act_22628_01.jpg';

myAjax(orderRestControllerBook,ticketArr, handle)
function handle(data, param) {
	console.log(data)
}
*/
$.ajax({
    url: orderRestControllerBook,
    type: "POST",
    dataType: "json",
    sync:true,
    data: {
        skuId : '2',
        startDate : '2018-09-08',
		band:JSON.stringify(bandArray),
        thumbnailUrl : 'http://activities-img.oss-cn-qingdao.aliyuncs.com/391/22628/act_22628_01.jpg'
	},
    xhrFields: {
        withCredentials: true
    },
    traditional:true,
    success: function(data) {
		console.log(data)
		var data = data.product;
        console.log(data.code)
        /*console.log(data.company.auditStatus)
        console.log(data.cart.skuId)*/
        console.log(data.cart)
		$(".PayInfoUserName").html(data.title)    //产品名称
		// $(".PayInfoUserDate").html(data.cart.nowPrice)    //产品套餐
		// $(".tickerPayOutdate").html(dataSku.startDate)		//出行日期



    },
    error: function() {

    }
});


/*
// 门票填写订单详情页
myAjax(orderRestControllerPay,'', handle)
function handle(data, param) {
    console.log(data)
}
*/








