
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

            mousescrollstep: 20, // 鼠标滚轮的滚动速度 (像素)
            cursorminheight: 10, // 设置滚动条的最小高度 (像素)
            preventmultitouchscrolling: true, // 防止多触点事件引发滚动
            horizrailenabled: false, // nicescroll可以管理水平滚动
        })
    }
);




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


var childrenAgesData = JSON.parse(localStorage.getItem("childrenAgesData"));

// 儿童年龄
if (childrenAgesData == null){
    // console.log(11)
} else {
    $("#childrenAges_0").val(childrenAgesData.childrenAges)
    $("#childrenAges_1").val(childrenAgesData.childrenAges1)
    $("#childrenAges_2").val(childrenAgesData.childrenAges2)
    $("#childrenAges_3").val(childrenAgesData.childrenAges3)
    $("#childrenAges_4").val(childrenAgesData.childrenAges4)
    $("#hotelCheckPeopleNumChil").val(childrenAgesData.hotelCheckPeopleNumChil)

    $("#hotelCheckInDate").val(GetQueryString("checkIn"))
    $("#hotelCheckOutDate").val(GetQueryString("checkOut"))

    $("#hotelCheckPeopleNum").val(childrenAgesData.hotelCheckPeopleNum)
    console.log(childrenAgesData.hotelCheckPeopleRoom)
    $("#hotelCheckPeopleRoom").val(childrenAgesData.hotelCheckPeopleRoom)
}



var hotelCode = GetQueryString("hotelCode")
var checkIn = $("#hotelCheckInDate").val()


var checkOut = $("#hotelCheckOutDate").val()
// var numberOfRoom = $("#hotelCheckPeopleRoom").val()
var numberOfAdult = $("#hotelCheckPeopleNum").val()
var numberOfChildren = $("#hotelCheckPeopleNumChil").val()
$('.hotelDetailSearch').click(function () {
    var hotelCheckPeopleNum=$("#hotelCheckPeopleNum").val()
    var hotelCheckPeopleNumChil=$("#hotelCheckPeopleNumChil").val()
    var hotelCheckPeopleRoom=$("#hotelCheckPeopleRoom").val()
    hotelDetail(hotelCheckPeopleNum,hotelCheckPeopleNumChil,hotelCheckPeopleRoom)
})

function hotelDetail(hotelCheckPeopleNum,hotelCheckPeopleNumChil,hotelCheckPeopleRoom) {

    var childrenAgesAll = ''
    if ($("#childrenAges_0").val() == undefined){
        var childrenAges = '';
    }else {
        var childrenAges = $("#childrenAges_0").val();
        childrenAgesAll += childrenAges
    }

    if ($("#childrenAges_1").val() == undefined){
        var childrenAges1 = '';
    }else {
        var childrenAges1 = $("#childrenAges_1").val();
        childrenAgesAll += ","+childrenAges1
    }

    if ($("#childrenAges_2").val() == undefined){
        var childrenAges2 = '';
    }else {
        var childrenAges2 = $("#childrenAges_2").val();
        childrenAgesAll += ","+childrenAges2
    }

    if ($("#childrenAges_3").val() == undefined){
        var childrenAges3 = '';
    }else {
        var childrenAges3 = $("#childrenAges_3").val();
        childrenAgesAll += ","+childrenAges3
    }

    if ($("#childrenAges_4").val() == undefined){
        var childrenAges4 = '';
    }else {
        var childrenAges4 = $("#childrenAges_4").val();
        childrenAgesAll += ","+childrenAges4
    }
    var param ={};
    param.hotelCode= hotelCode
    param.checkIn= checkIn
    param.checkOut= checkOut
    param.numberOfAdult= hotelCheckPeopleNum || ''
    param.numberOfChildren= hotelCheckPeopleNumChil || ''
    param.numberOfRooms= hotelCheckPeopleRoom || ''
    param.childrenAges=childrenAgesAll
    myAjax(restHotelDetail,param , handle)

    function handle(data, param) {
        // 谷歌地图

        console.log(data)
        var str = data.hotel.thumbnailUrl
        if (data.hotel.thumbnailUrl == ''){
            (".hotelDetailImg").attr("src","../images/new_hotel_img.png")
        }else if (str.indexOf("http:")>=0) {
            $(".hotelDetailImg").attr("src",data.hotel.thumbnailUrl)
        }else{
            $(".hotelDetailImg").attr("src",hotelUrlImg+data.hotel.thumbnailUrl+hotelUrlImgHou)
        }

        $(".hotelNavBreadTitle").html(data.hotel.cityName)   //首页面包屑标题
        $("#hotelDestinatinInput").val(data.hotel.cnName)    //酒店目的地
        $("#hotelCheckInDate").val(data.availabilityRQ.checkIn)    //r入住时间
        $("#hotelCheckOutDate").val(data.availabilityRQ.checkOut)    //r入住时间
        // $("#hotelCheckPeopleNum").val(data.availabilityRQ.adultNum+"成年人"+ data.availabilityRQ.childrenNum + "儿童")    //r入住人数
        $("#hotelCheckPeopleRoom").val(data.availabilityRQ.numberOfRooms)    //房间
       /* var numberOfRoom = $("#hotelCheckPeopleRoom").val()
        console.log(numberOfRoom)*/
        $(".hotelHomeDetailsImgPull").attr("src",hotelUrlImg + data.hotel.thumbnailUrl +hotelUrlImgHou)
        $(".hotelHomeDetailsContent>h4").html(data.hotel.name + "("+data.hotel.cnName+")")
        // 星级
        if (data.hotel.star == 1){
            $(".hotelStarimg").html("星级：<img src='../images/icon/content_hotel_icon_grade.png' id='gradeStar'>")
        }else if(data.hotel.star == 2){
            $(".hotelStarimg").html("星级：<img src='../images/icon/content_hotel_icon_grade.png' id='gradeStar'><img src='../images/icon/content_hotel_icon_grade.png' id='gradeStar'")
        }else if(data.hotel.star == 3){
            $(".hotelStarimg").html("星级："+"<img src='../images/icon/content_hotel_icon_grade.png' id='gradeStar'><img src='../images/icon/content_hotel_icon_grade.png' id='gradeStar'><img src='../images/icon/content_hotel_icon_grade.png' id='gradeStar'>")

        }else if(data.hotel.star == 4){
            $(".hotelStarimg").html("星级：<img src='../images/icon/content_hotel_icon_grade.png' id='gradeStar'><img src='../images/icon/content_hotel_icon_grade.png' id='gradeStar'><img src='../images/icon/content_hotel_icon_grade.png' id='gradeStar'><img src='../images/icon/content_hotel_icon_grade.png' id='gradeStar'>")

        }else if(data.hotel.star == 5){
            $(".hotelStarimg").html("星级：<img src='../images/icon/content_hotel_icon_grade.png' id='gradeStar'><img src='../images/icon/content_hotel_icon_grade.png' id='gradeStar'><img src='../images/icon/content_hotel_icon_grade.png' id='gradeStar'><img src='../images/icon/content_hotel_icon_grade.png' id='gradeStar'><img src='../images/icon/content_hotel_icon_grade.png' id='gradeStar'>")
        }else if(data.hotel.star == 0){
            $(".hotelStarimg").html("星级：无评价")
        }
        $(".hotelStarimgSubTitle").html(data.hotel.shortDescription)
        $(".hotelAdress").html(data.hotel.address +' '+ data.hotel.cityName)
        // 酒店房型
        var hotelHomeType = '';

        if (data.rooms == undefined){
            hotelHomeType += '<table class="hotelHouseTable" cellspacing="0" cellpadding="0">\n' +
                '\t\t\t\t\t\t\t<tr>\n' +
                '\t\t\t\t\t\t\t\t<th style="width: 230px;">房型</th>\n' +
                '\t\t\t\t\t\t\t\t<th style="width: 224px;">食宿类型</th>\n' +
                '\t\t\t\t\t\t\t\t<th style="width: 112px;">取消政策</th>\n' +
                '\t\t\t\t\t\t\t\t<th style="width: 74px;">价格</th>\n' +
                '\t\t\t\t\t\t\t</tr>\n' +
                '\t\t\t\t\t\t\t<tr>\n' +
                '\t\t\t\t\t\t\t\t<td colspan="4" class="bedTextEnd">\n' +
                '已售完' +
                '\t\t\t\t\t\t\t\t</td>\n'+

                '\t\t\t\t\t\t</table>'
            $(".tableHomeRoom").html(hotelHomeType)
        }else {
            roomsData = data.rooms
            for (var i = 0;i<roomsData.length;i++){

                hotelHomeType += '<table class="hotelHouseTable" cellspacing="0" cellpadding="0">\n' +
                    '\t\t\t\t\t\t\t<tr>\n' +
                    '\t\t\t\t\t\t\t\t<th style="width: 230px;">房型</th>\n' +
                    '\t\t\t\t\t\t\t\t<th style="width: 224px;">食宿类型</th>\n' +
                    '\t\t\t\t\t\t\t\t<th style="width: 112px;">取消政策</th>\n' +
                    '\t\t\t\t\t\t\t\t<th style="width: 74px;">价格</th>\n' +
                    '\t\t\t\t\t\t\t\t<th style="width: 118px;"></th>\n' +
                    '\t\t\t\t\t\t\t</tr>\n' +
                    '\t\t\t\t\t\t\t<tr>\n' +
                    '\t\t\t\t\t\t\t\t<td rowspan="'+(roomsData[i].rates.length+1)*1+'" class="bedTextLeft">\n' +
                    '\t\t\t\t\t\t\t\t\t<div class="hotelHouseTableLeftContent">\n' +
                    '\t\t\t\t\t\t\t\t\t\t<p class="hotelHouseTableLeftContentBold">'+roomsData[i].name+'</p>\n' +
                    '\t\t\t\t\t\t\t\t\t</div>\n' +
                    '\t\t\t\t\t\t\t\t</td>\n'
                for (var j = 0;j<roomsData[i].rates.length;j++){
                    hotelHomeType +=  '\t\t\t\t\t\t\t\t<td class="notHotelUpMainEatHover">'+roomsData[i].rates[j].board.cnName+'('+roomsData[i].rates[j].board.name+')'+''
                    if (roomsData[i].rates[j].board.cnName == '含早'){
                        hotelHomeType +='<div class="notHotelUpMainEat">'+
                            '                            <i>含餐情况：</i>' +
                            '                        含双早' +
                            '                        </div>'
                    }else if (roomsData[i].rates[j].board.cnName == '不含早' || roomsData[i].rates[j].board.cnName == '无早'){
                        hotelHomeType +='<div class="notHotelUpMainEat">'+
                            '                            <i>含餐情况：</i>' +
                            '                        该房间不包含早餐，如需早餐请在入住时咨询酒店前台' +
                            '                        </div>'
                    }


                    hotelHomeType  +='</td>\n' +
                        '\t\t\t\t\t\t\t\t<td class="notHotelUp">不可取消' +
                        '<div class="notHotelUpMain">'+
                        '                            <i>取消政策：</i>' +
                        '                        不可取消、不可修改。如果取消预订或者未如期入住，酒店将收取费用' +
                        '                        </div>'
                    '</td>\n'

                    hotelHomeType += '\t\t\t\t\t\t\t\t<td class="hotelPriceReserve">'
                        if(roomsData[i].rates[j].price == roomsData[i].rates[j].rmbPrice){
                            hotelHomeType += '<span style="color: #ff9600">￥<em class="hotelPriceReserveFontNow">'+roomsData[i].rates[j].price+'</em></span>'
                        }else {
                            hotelHomeType += '<span style="color: #999999">￥<em style="text-decoration:line-through;" class="hotelPriceReserveFont">'+roomsData[i].rates[j].price+'</em></span><span>￥<em class="hotelPriceReserveFontNow">'+roomsData[i].rates[j].rmbPrice+'</em></span>'
                        }


                        hotelHomeType += '</td>\n' +
                        '\t\t\t\t\t\t\t\t<td class="hotelReserveRoomNumPoai">\n' +
                        '\t\t\t\t\t\t\t\t\t<a class="hotelReserve"  data-hotelPayId="'+roomsData[i].rates[j].code+'" IndexesRooms="'+i+'" IndexesRadtes="'+j+'">预定\n' +
                        // '\t\t\t\t\t\t\t\t\t\t<span data-tit="预定 >">预定</span>\n' +
                        '<div class="hotelReserveRoomNum">'+
                        '        <p>剩余 <i>'+roomsData[i].rates[j].inventoryCount+'</i>间</p>'
                    if (roomsData[i].rates[j].inventoryCount == 0){
                        hotelHomeType += '<p>不可预订</p>'
                    }else{
                        hotelHomeType += '<p>可预订</p>'
                    }
                    hotelHomeType += '</div>'+
                        '\t\t\t\t\t\t\t\t\t</a>\n' +
                        '\t\t\t\t\t\t\t\t</td>\n' +
                        '\t\t\t\t\t\t\t</tr>\n'


                    // 预定按钮
                    $(document).on("click",".hotelReserve",function () {
                        var IndexesRooms = $(this).attr("IndexesRooms")
                        var IndexesRadtes = $(this).attr("IndexesRadtes")
                        // var numberOfRoom = $("#hotelCheckPeopleRoom").val()
                        var numberOfRoom = $("#hotelCheckPeopleRoom").val()
                        // 存储信息
                        var HotelDetailInfo = {
                            productTitle : data.hotel.cnName,
                            skuTitle : data.rooms[IndexesRooms].name+' '+'('+data.rooms[IndexesRooms].rates[IndexesRadtes].board.name+')',
                            roomId : data.availabilityRQ.hotelCode,
                            monthlyPrice : 0,
                            id : '',
                            reateKey : '',
                            thumbnailUrl : data.hotel.thumbnailUrl,
                            checkIn : $("#hotelCheckInDate").val(),
                            checkOut : $("#hotelCheckOutDate").val(),
                            code : data.rooms[IndexesRooms].rates[IndexesRadtes].code,
                            numberOfRoom:numberOfRoom,
                            numberOfAdult:numberOfAdult,
                            numberOfChildren:numberOfChildren,
                        }
                        var HotelDetailInfoJson = JSON.stringify(HotelDetailInfo)
                        localStorage.setItem("HotelDetailData",HotelDetailInfoJson)

                        window.location.href = "hotelOrderPay.html"
                    })


                }

                hotelHomeType += '\t\t\t\t\t\t</table>'
                $(".tableHomeRoom").html(hotelHomeType)


                // 含餐类型
                $(document).on("mouseenter mouseleave",".notHotelUpMainEatHover",function (event) {
                    $(this).children($(".notHotelUpMainEat")).stop().fadeToggle()
                })

                // 不可取消
                $(document).on("mouseenter mouseleave",".notHotelUp",function (event) {
                    $(this).children($(".notHotelUpMain")).stop().fadeToggle()
                })


                // 预订  剩余间数
                $(document).on("mouseenter mouseleave",".hotelReserve",function (event) {
                    $(this).children($(".hotelReserveRoomNum")).stop().fadeToggle()
                })

            }
        }

        // 图片更多查看
        var rapperLeft = '';
        var rapperRight = '';
        if (data.hotel.images.length == 0){
            /*$(".swiper-wrapper-left").html("暂无更多酒店图片")
            $(".swiper-wrapperASuto").html("暂无更多酒店图片")*/
        }else {
            for (var j=0;j<data.hotel.images.length;j++){

                rapperLeft += '<div class="swiper-slide slideLeftImg">\n' +
                    '\t\t\t\t\t\t\t<a target="_blank"><img src="'+hotelUrlImg+data.hotel.images[j].path+hotelUrlImgHou+'" class="detailImgSize" alt=""></a>\n' +
                    '\t\t\t\t\t\t</div>'
                rapperRight += '<div class="swiper-slide swiper-slide-visible slideImgMar">\n' +
                    '\t\t\t\t\t\t\t<img src="'+hotelUrlImg+data.hotel.images[j].path+hotelUrlImgHou+'" alt="">\n' +
                    '\t\t\t\t\t\t</div>'
            }
        }


        $(".swiper-wrapper-left").html(rapperLeft)
        $(".swiper-wrapperASuto").html(rapperRight)

        var facilityGroup = data.facilityGroupMap;
        console.log(facilityGroup)
        if (facilityGroup == null){
            // console.log(1)
            $(".hideHotelShow").hide()
        }else {
            $(".hideHotelShow").show()
            var serverInternetHtml = ''
            var sserverTrafficHtml = ''
            var serverLeisureHtml = ''
            var serverLeiMealHtml = ''
            var serverLeiServerHtml = ''
            var serverLeisureQiHtml = ''
            // 房间设施
            if (facilityGroup.RoomFacilities == null){
                $(".serverH5").hide();
            } else {
                $(".serverH5").show();
                for (var a=0;a<facilityGroup.RoomFacilities.length;a++){
                    serverInternetHtml += '<span>'+facilityGroup.RoomFacilities[a].cnName+'</span>'
                }
                $(".serverInternet").html(serverInternetHtml)
            }
            // 酒店类型
            if (facilityGroup.HotelType == null){
                $(".TrafficH5").hide();
            } else {
                $(".TrafficH5").show();
                for (var a=0;a<facilityGroup.HotelType.length;a++){
                    sserverTrafficHtml += '<span>'+facilityGroup.HotelType[a].cnName+'</span>'
                }
                $(".serverTraffic").html(sserverTrafficHtml)
            }
            // 休闲娱乐
            if (facilityGroup.Sports == null){
                $(".LeisureH5").hide();
            } else {
                $(".LeisureH5").show();
                for (var a=0;a<facilityGroup.Sports.length;a++){
                    serverLeisureHtml += '<span>'+facilityGroup.Sports[a].cnName+'</span>'
                }
                $(".serverLeisure").html(serverLeisureHtml)
            }

            // 餐饮服务
            if (facilityGroup.Catering == null){
                $(".LeiMealH5").hide();
            } else {
                $(".LeiMealH5").show();
                for (var a=0;a<facilityGroup.Catering.length;a++){
                    serverLeiMealHtml += '<span>'+facilityGroup.Catering[a].cnName+'</span>'
                }
                $(".serverLeiMeal").html(serverLeiMealHtml)
            }

            //    便利服务  与 设施
            if (facilityGroup.Facilities == null){
                $(".LeiServerH5").hide();
            } else {
                $(".LeiServerH5").show();
                for (var a=0;a<facilityGroup.Facilities.length;a++){
                    serverLeiServerHtml += '<span>'+facilityGroup.Facilities[a].cnName+'</span>'
                }
                $(".serverLeiServer").html(serverLeiServerHtml)
            }
//   其他服务设施
            if (facilityGroup.Location == null){
                $(".LeisureQiH5").hide();
            } else {
                $(".LeisureQiH5").show();
                for (var a=0;a<facilityGroup.Location.length;a++){
                    serverLeisureQiHtml += '<span>'+facilityGroup.Location[a].cnName+'</span>'
                }
                $(".serverLeisureQi").html(serverLeisureQiHtml)
            }

        }




        // 百度地图API功能
        var map = new BMap.Map("googleMap");
        var point = new BMap.Point(data.hotel.coordinates.longitude, data.hotel.coordinates.latitude);
        map.centerAndZoom(point, 15);
        var marker = new BMap.Marker(point);  // 创建标注
        map.addOverlay(marker);               // 将标注添加到地图中
        marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
        // 添加带有定位的导航控件
        var navigationControl = new BMap.NavigationControl({
            // 靠左上角位置
            anchor: BMAP_ANCHOR_TOP_LEFT,
            // LARGE类型
            type: BMAP_NAVIGATION_CONTROL_LARGE,
            // 启用显示定位
            enableGeolocation: true
        });
        map.addControl(navigationControl);
        // 编写自定义函数,创建标注
        function addMarker(point){
            var marker = new BMap.Marker(point);
            map.addOverlay(marker);
        }
        map.enableScrollWheelZoom(true);

        // 谷歌地图结束

    }

}
var hotelCheckPeopleNum=$("#hotelCheckPeopleNum").val()
var hotelCheckPeopleNumChil=$("#hotelCheckPeopleNumChil").val()
var hotelCheckPeopleRoom=$("#hotelCheckPeopleRoom").val()
hotelDetail(hotelCheckPeopleNum,hotelCheckPeopleNumChil,hotelCheckPeopleRoom)


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
            '\t\t\t\t\t<input type="text" name="childrenAges" onkeyup="value=value.replace(/[^\\d]/g,\'\')"  id="childrenAges_'+i+'" class="childrenAgesStyle" maxlength="2" value="1" />'

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













