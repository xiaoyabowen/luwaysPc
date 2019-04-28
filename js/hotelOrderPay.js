


var HotelDetailData = JSON.parse(localStorage.getItem("HotelDetailData"));
// var code = localStorage.getItem("code");


var param = {};
param.code = HotelDetailData.code
param.numberOfRooms = HotelDetailData.numberOfRoom
param.checkIn = HotelDetailData.checkIn
param.checkOut = HotelDetailData.checkOut
param.hotelCode = HotelDetailData.roomId
param.numberOfAdult = HotelDetailData.numberOfAdult
param.numberOfChildren = HotelDetailData.numberOfChildren

myAjax(hotelBookingRestBooking,param , handle)

// handle()
function handle(data, param) {

    console.log(data)
    $(".hotelPayInfoImgImg").attr("src",hotelUrlImg+data.hotel.thumbnailUrl+hotelUrlImgHou)
    $(".hotelPayInfoImgH4").html(data.hotel.cnName)
    var starImg = ''
    if (data.hotel.star == "4"){
        starImg += '<img src="../images/icon/content_hotel_icon_grade.png" id="gradeStar" alt="星级" />\n' +
            '\t\t\t\t\t<img src="../images/icon/content_hotel_icon_grade.png" id="gradeStar" alt="星级" />\n' +
            '\t\t\t\t\t<img src="../images/icon/content_hotel_icon_grade.png" id="gradeStar" alt="星级" />'
            '\t\t\t\t\t<img src="../images/icon/content_hotel_icon_grade.png" id="gradeStar" alt="星级" />'
    }else if (data.hotel.star == "5") {
        starImg += '<img src="../images/icon/content_hotel_icon_grade.png" id="gradeStar" alt="星级" />\n' +
            '\t\t\t\t\t<img src="../images/icon/content_hotel_icon_grade.png" id="gradeStar" alt="星级" />\n' +
            '\t\t\t\t\t<img src="../images/icon/content_hotel_icon_grade.png" id="gradeStar" alt="星级" />'
            '\t\t\t\t\t<img src="../images/icon/content_hotel_icon_grade.png" id="gradeStar" alt="星级" />'
            '\t\t\t\t\t<img src="../images/icon/content_hotel_icon_grade.png" id="gradeStar" alt="星级" />'
    }else if (data.hotel.star == "3") {
        starImg += '<img src="../images/icon/content_hotel_icon_grade.png" id="gradeStar" alt="星级" />\n' +
            '\t\t\t\t\t<img src="../images/icon/content_hotel_icon_grade.png" id="gradeStar" alt="星级" />\n' +
            '\t\t\t\t\t<img src="../images/icon/content_hotel_icon_grade.png" id="gradeStar" alt="星级" />'
    }else if (data.hotel.star == "2") {
        starImg += '<img src="../images/icon/content_hotel_icon_grade.png" id="gradeStar" alt="星级" />\n' +
            '\t\t\t\t\t<img src="../images/icon/content_hotel_icon_grade.png" id="gradeStar" alt="星级" />\n'
    }else if (data.hotel.star == "1") {
        starImg += '<img src="../images/icon/content_hotel_icon_grade.png" id="gradeStar" alt="星级" />\n'
    }else if (data.hotel.star == "0") {
        starImg += '无评价'
    }
    $(".hotelPayInfoImgTitle").html(data.hotel.address)
    $(".hotelPayInfoImgStar").html("星级："+starImg)
    $(".hotelPayInfoImgPrice").html("¥"+data.nowPrice+"起")
    $(".hotelPayInfoImgPriceNow").html("¥"+data.Price+"起")
    if(data.nowPrice == data.Price){
        $(".hotelPayInfoImgPrice").hide()
    }else{
        $(".hotelPayInfoImgPrice").show()
    }
    var dataRQ = data.availabilityRQ;
    // 产品信息
    $(".hotelPayInfoUserRoom").html(data.hotel.name)
    $(".hotelPayInfoUserIn").html(dataRQ.checkIn)
    $(".hotelPayInfoUserOut").html(dataRQ.checkOut)
    $(".hotelPayInfoUserNum").html(dataRQ.numberOfRooms)
    $(".hotelPayInfoUserAdult").html(dataRQ.adultNum)
    $(".hotelPayInfoUserChild").html(dataRQ.childrenNum)
}

//酒店房型入住信息
var hotelRoomHtml = ''
for (var i=0;i<HotelDetailData.numberOfRoom.length;i++){
    hotelRoomHtml += '<p class="justify" style="font-size: 18px;width: 70px;">房间'+(i+1)+'</p>'+
        '<p class="cssFlex">\n' +
        '\t\t\t\t\t\t<label class="justify">姓名</label>\n' +
        '\t\t\t\t\t\t<input type="text" name="guest['+i+'].lastName" style="margin-right: 5px;" placeholder="姓(拼音/英文) 如：zhang" />\n' +
        '\t\t\t\t\t\t<input type="text" name="guest['+i+'].firstName"  placeholder="名(拼音/英文) 如：san"/>\n' +
        '\t\t\t\t\t\t<input type="hidden" name="contractName" class="contractName" value="" placeholder="名(拼音/英文) 如：san"/>\n' +
        '\t\t\t\t\t</p>\n' +
        '\t\t\t\t\t<p class="cssFlex">\n' +
        '\t\t\t\t\t\t<label class="justify">年龄</label>\n' +
        '\t\t\t\t\t\t<input type="text" name="guest['+i+'].contractAge" value="" maxlength="2" placeholder="填写年龄" />\n' +
        '\t\t\t\t\t</p>\n'+
        '<br />'

}

$(".hotelPayInfoRoom").html(hotelRoomHtml)
// 填写订单  点击立即支付  接口  调整

$(".hotelPayBtn").click(function () {
    if ($(".hotelPayUserFirst").val() == '' || $(".hotelPayUserLast").val() == ''){
        return
    }
    if(!checkUserName() || !checkTel() || !checkEmail()) {
        return
    }
    console.log(HotelDetailData.code)
    var hotelFormPay = $(".hotelPayInfoUserForm").serialize()
    var productTitle = HotelDetailData.productTitle
    var skuTitle = HotelDetailData.skuTitle
    var roomId = HotelDetailData.code
    var monthlyPrice = HotelDetailData.monthlyPrice
    var id = HotelDetailData.id
    var reateKey = HotelDetailData.reateKey
    var thumbnailUrl = HotelDetailData.thumbnailUrl
    var checkIn = HotelDetailData.checkIn
    var checkOut = HotelDetailData.checkOut
    var contractName = $("#hotelPayUserFirst").val() + "/" + $("#hotelPayUserLast").val()
    // paramPay.checkOut = HotelDetailData.checkOut

    myAjax(HotelRestControllerPay,hotelFormPay+"&contractName="+contractName+"&productTitle="+productTitle+"&skuTitle="+skuTitle+"&roomId="+roomId+"&monthlyPrice="+monthlyPrice+"&id="+id+"&reateKey="+reateKey+"&thumbnailUrl="+thumbnailUrl+"&checkIn="+checkIn+"&checkOut="+checkOut  , handle)
    function handle(data, param) {
        console.log(data)
        // 存储信息
        var HotelDetailInfoPay = {
            contractName : data.order.contractName,
            contractPhone : data.order.contractPhone,
            nowPrice : data.order.nowPrice,
            orderNo : data.order.orderNo,
            thumbnailUrl : data.order.thumbnailUrl,
            aliSubmitHtml:data.aliSubmitHtml,
            productTitle:data.order.productTitle,
            hasRole:data.hasRole,
            SuperAdministrator:data.SuperAdministrator,
        }
        var HotelDetailInfoPayJson = JSON.stringify(HotelDetailInfoPay)
        localStorage.setItem("HotelDetailDataPay",HotelDetailInfoPayJson)
        window.location.href = "hotelOrderPayGoHotel.html"


    }



})








