//详情header 拼接
var header = '';
header += '<div class="bodyHeader">'
header += '	<div class="subBodyHeader cssFlex headerSubCommon">'
header += '		<div class="comNavLogo">'
header += '			<a href="../index.html"><img src="../images/nav_logo.png" id="logoImg" /></a>'
header += '		</div>'
header += '		<div class="bodyNav cssFlex">'
header += '			<a href="../index.html" class="bodyNavImgOne bodyNavActive"><span>首页</span></a>'
header += '			<a href="myOrder.html" class="bodyNavImgTwo"><span>我的订单</span></a>'
header += '			<a href="shoppingCar.html" class="bodyNavImgThree"><span>购物车</span></a>'
header += '			<a href="myCollection.html" class="bodyNavImgFour"><span>收藏</span></a>'
header += '			<a href="personalCenter.html" class="bodyNavImgFive"><span>Luways</span>'
header += '    			<div class="LoginNavPup">'
header += '    				<p class="personCenter">个人中心</p>'
header += '    				<p class="logout">退出</p>'
header += '    			</div>'
header += '			</a>'
header += '			<a href="javascript:;" class="bodyNavImgEmail">info@luways.com</a>'
header += '			<a href="javascript:;" class="bodyNavImgPhone">010-8562 8831</a>'
header += '		</div>'
header += '     <div class="contactCommon" style="position: fixed;top: 284px; right: 40px;">'
header += '         <img src="../images/customer.png" alt="联系我们">'
header += '     </div>'
header += '	   </div>'

header += '</div>'


$(document.body).prepend(header);


//footerdom拼接
var footer = '';
footer += '<footer>';
footer += '<footer>'
footer += '		<div class="subFooter headerSubCommon">'
footer += '			<div class="aboutFooterCommon">'
footer += '				<h4>关于我们</h4>'
footer += '				<ul>'
footer += '					<li><a href="../html/aboutLuWays.html">关于路途</a></li>'
footer += '					<li><a href="../html/aboutLuCooperation.html">合作伙伴</a></li>'
footer += '					<li><a href="../html/aboutLuContact.html">联系我们</a></li>'
footer += '					<li><a href="../html/aboutLuServer.html">服务条款</a></li>'
footer += '					<li><a href="../html/aboutLuUser.html">用户协议</a></li>'
footer += '				</ul>'
footer += '			</div>'
footer += '			<div class="aboutFooterCommon">'
footer += '				<h4>业务介绍</h4>'
footer += '				<ul>'
footer += '					<li><a href="../html/businessIntroduction.html">关于业务</a></li>'
footer += '					<li><a href="../html/businessServer.html">服务内容</a></li>'
footer += '					<li><a href="../html/businessCooperation.html">合作方式</a></li>'
footer += '					<li><a href="">服务详情</a></li>'
footer += '					<li><a href="">服务优势</a></li>'
footer += '				</ul>'
footer += '			</div>'
footer += '			<div class="aboutFooterCommon">'
footer += '				<h4>平台特色</h4>'
footer += '				<ul>'
footer += '					<li><a href="../html/platformFeatures.html">商家平台</a></li>'
footer += '					<li><a href="../html/platformAPI.html">标准API</a></li>'
footer += '				</ul>'
footer += '			</div>'
footer += '			<div class="aboutFooterCommon">'
footer += '				<h4>帮助中心</h4>'
footer += '				<ul>'
footer += '					<li><a href="../html/helpPay.html">结算周期</a></li>'
footer += '					<li><a href="../html/helpComput.html">支付方式</a></li>'
footer += '				</ul>'
footer += '			</div>'
footer += '			<div class="aboutFooterCommon">'
footer += '				<h4>联系我们</h4>'
footer += '				<ul>'
footer += '					<li><a>全天在线服务电话</a></li>'
footer += '					<li class="need"><a href="">010-8562 8831</a></li>'
footer += '					<li><a>客服邮箱</a></li>'
footer += '					<li class="need"><a>info@luways.com</a></li>'
footer += '				</ul>'
footer += '			</div>'		
footer += '		</div>'
footer += '		<hr size="1" />'
footer += '		<div class="footerFirm">'
footer += '			<p class="firmTop">北京路途科技有限公司</p>'
footer += '			<p>Copyright 2016 Luways.com 京ICP备16044893号-2</p>'
footer += '		</div>'
footer += '		    <div style="display:none;" id="rocket-to-top">'
footer += '		    <div style="opacity:0;display:block;" class="level-2"></div>'
footer += '		    <div class="level-3"></div>'
footer += '		    </div>'
footer += '	</footer>'
$(document.body).append(footer);


var name = sessionStorage.getItem("name")
$(".bodyNavImgFive>span").html(name)

$(".bodyNavImgFive").hover(function(){
    $(".LoginNavPup").stop().show()
},function(){
    $(".LoginNavPup").stop().hide()
})
$(document).ready(
	 function() { 
	  	$("html").niceScroll({
		    cursorcolor: "#ff9600", // 改变滚动条颜色，使用16进制颜色值
		    cursoropacitymax: 1, // 当滚动条是显示状态时改变透明度, 值范围 1 到 0
		    cursorborder: "none", // CSS方式定义滚动条边框
		    autohidemode: true, // 隐藏滚动条的方式, 可用的值: 
		    background: "transparent", // 轨道的背景颜色
		    scrollspeed: 60, cursorwidth: "8px", // 滚动条的宽度，单位：便素
            cursorwidth: "8px", // 滚动条的宽度，单位：便素
			mousescrollstep: 20, // 鼠标滚轮的滚动速度 (像素)
			cursorminheight: 10, // 设置滚动条的最小高度 (像素)
			preventmultitouchscrolling: true, // 防止多触点事件引发滚动
			horizrailenabled: false, // nicescroll可以管理水平滚动
		}) 
	 }
);

// 解决浮点数计算精度问题
/*function fixFloatCalcRudely(allPricePulltoFixed){
    if(typeof allPricePulltoFixed == 'number'){
        var str=allPricePulltoFixed.toString(), match=str.match(/\.(\d*?)(9|0)\2{5,}(\d{1,5})$/);
        if(match != null){
            allPricePulltoFixed = allPricePulltoFixed.toFixed(match[1].length)-0;
            console.log(allPricePulltoFixed)
        }
    }
}*/

//成人
function show(state){
	if(state=="sub"){
		if(numHome<=1){
			$(".addNumInputCommon").val(1)
		}else{
            AllPriceSum()
			numHome--;
            var adultPrice = ($(".adultPrice").text()*1) * numHome;
            var adultPriceNow = ($(".adultPriceNow").text()*1) * numHome;
            $(".hotelCheckPeopleNumResult").val(adultPrice);
            $(".hotelCheckPeopleNumResultNow").val(adultPriceNow);
            AllPriceSum()
            AllPriceSumNow()
			$(".addNumInputCommon").val(numHome)
		}
	}else if(state=="sum"){
//		var numHome = $("#hotelCheckPeopleRoom").val() *1;
		numHome++;
        var adultPrice = ($(".adultPrice").text()*1) * numHome
        var adultPriceNow = ($(".adultPriceNow").text()*1) * numHome;
        $(".hotelCheckPeopleNumResult").val(adultPrice);
        $(".hotelCheckPeopleNumResultNow").val(adultPriceNow);
        AllPriceSum()
        AllPriceSumNow()
		$(".addNumInputCommon").val(numHome)
	}
}
//青年
function showOne(sta){
	if(sta=="sub"){
		if(numYong<=0){
			$("#hotelCheckPeopleNumYong").val(0)
		}else{
			numYong--;
            var youngPrice = ($(".youngPrice").text()*1) * numYong
            var youngPriceNow = ($(".youngPriceNow").text()*1) * numYong
            $(".hotelCheckPeopleNumYongResult").val(youngPrice);
            $(".hotelCheckPeopleNumYongResultNow").val(youngPriceNow);
            AllPriceSum()
            AllPriceSumNow()
			$("#hotelCheckPeopleNumYong").val(numYong)
		}
	}else if(sta=="sum"){
		numYong++;
        var youngPrice = ($(".youngPrice").text()*1) * numYong
        var youngPriceNow = ($(".youngPriceNow").text()*1) * numYong
        $(".hotelCheckPeopleNumYongResult").val(youngPrice);
        $(".hotelCheckPeopleNumYongResultNow").val(youngPriceNow);
        AllPriceSum()
        AllPriceSumNow()
		$("#hotelCheckPeopleNumYong").val(numYong)
	}
}
//儿童
function showChild(sta){
	if(sta=="sub"){
		if(numChild<=0){
			$("#hotelCheckPeopleNumChild").val(0)
		}else{
            AllPriceSum()
			numChild--;
            var chilPrice = ($(".childPrice").text()*1) * numChild
            var chilPriceNow = ($(".childPriceNow").text()*1) * numChild
            $(".hotelCheckPeopleNumChildResult").val(chilPrice);
            $(".hotelCheckPeopleNumChildResultNow").val(chilPriceNow);
            AllPriceSum()
            AllPriceSumNow()
			$("#hotelCheckPeopleNumChild").val(numChild)
		}
	}else if(sta=="sum"){

		numChild++;
        var chilPrice = ($(".childPrice").text()*1) * numChild;
        var chilPriceNow = ($(".childPriceNow").text()*1) * numChild;
        // fixFloatCalcRudely(chilPrice)

        $(".hotelCheckPeopleNumChildResult").val(chilPrice);
        $(".hotelCheckPeopleNumChildResultNow").val(chilPriceNow);
        AllPriceSum()
        AllPriceSumNow()
		$("#hotelCheckPeopleNumChild").val(numChild)
	}
}
//婴儿
function showBaby(sta){
	if(sta=="sub"){
		if(numBoby<=0){
			$("#hotelCheckPeopleNumBaby").val(0)
		}else{
			numBoby--;
            var babyPrice = ($(".babyPrice").text()*1) * numBoby
            var babyPriceNow = ($(".babyPriceNow").text()*1) * numBoby
            $(".hotelCheckPeopleNumBabyResult").val(babyPrice);
            $(".hotelCheckPeopleNumBabyResultNow").val(babyPriceNow);
            AllPriceSum()
            AllPriceSumNow()
			$("#hotelCheckPeopleNumBaby").val(numBoby)
		}
	}else if(sta=="sum"){
		numBoby++;
        var babyPrice = ($(".babyPrice").text()*1) * numBoby
        var babyPriceNow = ($(".babyPriceNow").text()*1) * numBoby
        $(".hotelCheckPeopleNumBabyResult").val(babyPrice);
        $(".hotelCheckPeopleNumBabyResultNow").val(babyPriceNow);
        AllPriceSum()
        AllPriceSumNow()
		$("#hotelCheckPeopleNumBaby").val(numBoby)
	}
}
//老人
function showOld(sta){
    if(sta=="sub"){
        if(numOld<=0){
            $("#hotelCheckPeopleNumOld").val(0)
        }else{
            numOld--;
            var oldPrice = ($(".oldPrice").text()*1) * numOld
            var oldPriceNow = ($(".oldPriceNow").text()*1) * numOld
            $(".hotelCheckPeopleNumOldResult").val(oldPrice);
            $(".hotelCheckPeopleNumOldResultNow").val(oldPriceNow);
            AllPriceSum()
            AllPriceSumNow()
            $("#hotelCheckPeopleNumOld").val(numOld)
        }
    }else if(sta=="sum"){
        numOld++;
        var oldPrice = ($(".oldPrice").text()*1) * numOld
        var oldPriceNow = ($(".oldPriceNow").text()*1) * numOld
        $(".hotelCheckPeopleNumOldResult").val(oldPrice);
        $(".hotelCheckPeopleNumOldResultNow").val(oldPriceNow);
        AllPriceSum()
        AllPriceSumNow()
        $("#hotelCheckPeopleNumOld").val(numOld)
    }
}
//===门票价格合计===
function AllPriceSum() {
    var adultResult = $(".hotelCheckPeopleNumResult").val()
    if (adultResult == undefined) {
        adultResult = 0;
    }else {
        adultResult = $(".hotelCheckPeopleNumResult").val()
    }
    var chilResult = $(".hotelCheckPeopleNumChildResult").val()
    if (chilResult == undefined){
        chilResult =  0
    }else {
        chilResult = $(".hotelCheckPeopleNumChildResult").val()
    }
    var yongResult = $(".hotelCheckPeopleNumYongResult").val()
    if (yongResult == undefined){
        yongResult = 0
    } else {
        yongResult = $(".hotelCheckPeopleNumYongResult").val()
    }
    var babyResult = $(".hotelCheckPeopleNumBabyResult").val()
    if (babyResult == undefined){
        babyResult = 0
    } else {
        babyResult = $(".hotelCheckPeopleNumBabyResult").val()
    }
    var oldResult = $(".hotelCheckPeopleNumOldResult").val()
    if (oldResult == undefined){
        oldResult = 0
    }else {
        oldResult = $(".hotelCheckPeopleNumOldResult").val()
    }

    // 总价相加
    allResult = adultResult*1 + chilResult*1 + yongResult*1 + babyResult*1 + oldResult*1
    console.log(allResult)
    allResult = allResult.toFixed(2)
    $(".tickerDetailsAllPriceaLL").html(allResult)
}

function AllPriceSumNow() {
    var adultResultNow = $(".hotelCheckPeopleNumResultNow").val()
    if (adultResultNow == undefined) {
        adultResultNow = 0;
    }else {
        adultResultNow = $(".hotelCheckPeopleNumResultNow").val()
    }
    var chilResultNow = $(".hotelCheckPeopleNumChildResultNow").val()
    if (chilResultNow == undefined){
        chilResultNow =  0
    }else {
        chilResultNow = $(".hotelCheckPeopleNumChildResultNow").val()
    }
    var yongResultNow = $(".hotelCheckPeopleNumYongResultNow").val()
    if (yongResultNow == undefined){
        yongResultNow = 0
    } else {
        yongResultNow = $(".hotelCheckPeopleNumYongResultNow").val()
    }
    var babyResultNow = $(".hotelCheckPeopleNumBabyResultNow").val()
    if (babyResultNow == undefined){
        babyResultNow = 0
    } else {
        babyResultNow = $(".hotelCheckPeopleNumBabyResultNow").val()
    }
    var oldResultNow = $(".hotelCheckPeopleNumOldResultNow").val()
    if (oldResultNow == undefined){
        oldResultNow = 0
    }else {
        oldResultNow = $(".hotelCheckPeopleNumOldResultNow").val()
    }

    // 总价相加
    allResultNow = adultResultNow*1 + chilResultNow*1 + yongResultNow*1 + babyResultNow*1 + oldResultNow*1
    console.log(allResultNow)
    allResultNow = allResultNow.toFixed(2)
    $(".tickerDetailsAllPriceaLLNow").html(allResultNow)
}

//   酒店列表  成年人
var numHotelAdult= $("#hotelCheckPeopleNum").val() *1;
function showAdhotel(sta){
    if(sta=="sub"){
        if(numHotelAdult<=1){
            $("#hotelCheckPeopleNum").val(1)
        }else{
            numHotelAdult--;
            $("#hotelCheckPeopleNum").val(numHotelAdult)
        }
    }else if(sta=="sum"){
        numHotelAdult++;
        $("#hotelCheckPeopleNum").val(numHotelAdult)
    }
}

//   酒店列表  儿童




var numHotelChil= $("#hotelCheckPeopleNumChil").val() *1;
function showAdchil(sta){
    if(sta=="sub"){
        if(numHotelChil<=0){
            $("#hotelCheckPeopleNumChil").val(0)
            $(".childrenAges").html('')
        }else{
            numHotelChil--;
            $("#hotelCheckPeopleNumChil").val(numHotelChil)
            childrenAgeHtml()
        }
    }else if(sta=="sum"){
        if (numHotelChil>=5){
            $("#hotelCheckPeopleRoom").val(5)
        }else{
            numHotelChil++;
            $("#hotelCheckPeopleNumChil").val(numHotelChil)
            childrenAgeHtml()
        }

    }
}

function childrenAgeHtml() {
// 根据儿童数量拼接对应input
    var childrenAgeNum = $("#hotelCheckPeopleNumChil").val();
    var childrenAgeHtml = ''
    for (var i =0;i<childrenAgeNum;i++){
        $(".childrenAges").html('')
        childrenAgeHtml += '<span>年龄'+(i+1)+'</span>\n' +
            '\t\t\t\t\t<input type="text" name="childrenAges" id="childrenAges_'+i+'" class="childrenAgesStyle" maxlength="2" value="1" />'

    }
    $(".childrenAges").html(childrenAgeHtml)
}
childrenAgeHtml()



//   酒店列表  房间数目
var numHotelRoom =  $("#hotelCheckPeopleRoom").val() *1;
function showRoom(sta){
    if(sta=="sub"){
        if(numHotelRoom<=0){
            $("#hotelCheckPeopleRoom").val(0)
        }else{
            numHotelRoom--;
            $("#hotelCheckPeopleRoom").val(numHotelRoom)
        }
    }else if(sta=="sum"){
        numHotelRoom++;
        $("#hotelCheckPeopleRoom").val(numHotelRoom)

    }
}





// 个人中心跳转
$(document).on("click",".personCenter",function () {
	window.location.href = '../html/personalCenter.html'
})
// 退出
$(document).on("click",".logout",function (event) {
    event.preventDefault();
    sessionStorage.clear();
    localStorage.clear();
    $.ajax({
        url: userRestControllerLogout,
        type: "POST",
        dataType: "json",
        sync:true,
        xhrFields: {
            withCredentials: true
        },
        traditional:true,
        success: function(data) {
            window.location.href = "../html/indexNotLogin.html"
        },
        error: function() {

        }
    });
})




// 返回顶部  js
$(function() {
    var e = $("#rocket-to-top"),
        t = $(document).scrollTop(),
        n,
        r,
        i = !0;
    $(window).scroll(function() {
        var t = $(document).scrollTop();
        t == 0 ? e.css("background-position") == "0px 0px" ? e.fadeOut("slow") : i && (i = !1, $(".level-2").css("opacity", 1), e.delay(100).animate({
                marginTop: "-1000px"
            },
            "normal",
            function() {
                e.css({
                    "margin-top": "-125px",
                    display: "none"
                }),
                    i = !0
            })) : e.fadeIn("slow")
    }),
        e.hover(function() {
                $(".level-2").stop(!0).animate({
                    opacity: 1
                })
            },
            function() {
                $(".level-2").stop(!0).animate({
                    opacity: 0
                })
            }),
        $(".level-3").click(function() {
            function t() {
                var t = e.css("background-position");
                if (e.css("display") == "none" || i == 0) {
                    clearInterval(n),
                        e.css("background-position", "0px 0px");
                    return
                }
                /*switch (t){
                    case "0px 0px":
                        e.css("background-position", "-299px 0px");
                        break;
                    case "-299px 0px":
                        e.css("background-position", "-447px 0px");
                        break;
                    case "-447px 0px":
                        e.css("background-position", "-596px 0px");
                        break;
                    case "-596px 0px":
                        e.css("background-position", "-745px 0px");
                        break;
                    case "-745px 0px":
                        e.css("background-position", "-299px 0px");
                }*/

                switch (t){
                    case "0px 0px":
                        e.css("background-position", "-2968px 0px");
                        break;
                    case "-298px 0px":
                        e.css("background-position", "-448px 0px");
                        break;
                    case "-448px 0px":
                        e.css("background-position", "-597px 0px");
                        break;
                    case "-597px 0px":
                        e.css("background-position", "-747px 0px");
                        break;
                    case "-747px 0px":
                        e.css("background-position", "-298px 0px");
                }
            }
            if (!i) return;
            n = setInterval(t, 50),
            $("html,body").animate({scrollTop: 0},"slow");
        });
});
var userData = JSON.parse(localStorage.getItem("userData"));
$(".centerComName").html(userData.companyName)





