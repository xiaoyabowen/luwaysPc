
/*
 var leftHeigh = $(".tickerPayOrderInfoImg").outerHeight(true);
 var rightHeigh = $(".hotelPayInfoUser").outerHeight(true);
*/

// 将存储的字符串转换成对象
var allData = JSON.parse(localStorage.getItem("allData"));

console.log(allData.price)
$(".headerSubCommonPrice").html("￥"+allData.price+"元")
// 门票支付填写订单

var bandArray = [{bandId: 2,bandNum:allData.adult},{bandId:3,bandNum:allData.child},{bandId:4,bandNum:allData.baby},{bandId:5,bandNum:allData.yong},{bandId:6,bandNum:allData.Old}]

// 离开页面进行刷新  清除缓存
window.onbeforeunload=function (){
    if(event.clientX>document.body.clientWidth && event.clientY < 0 || event.altKey){
        localStorage.clear()
    }
}


if (location.search == ''){
    $.ajax({
        url: orderRestControllerBook,
        type: "POST",
        dataType: "json",
        sync:true,
        data: {
            skuId : allData.skuId,
            startDate : allData.tickerCheckInDate,
            band:JSON.stringify(bandArray),
            thumbnailUrl : allData.thumbnailUrl
        },
        xhrFields: {
            withCredentials: true
        },
        traditional:true,
        success: function(data) {
            console.log(data)
            console.log(data.cart.startDate)
            $(".PayInfoUserName").html(data.product.title)    //产品名称
            $(".PayInfoUserDate").html(data.cart.productSku.title)    //产品套餐
            $(".tickerPayOutdate").html(timestampToTime(data.cart.startDate))//出行日期
            // 出行人数

            $(".hotelPayHomeRoomNum").html(parseInt(allData.adult*1 + allData.child*1 + allData.yong*1 + allData.baby*1 + allData.Old*1))
            $(".hotelPayHomeAdult").html(allData.adult)
            $(".hotelPayHomeChild").html(allData.child)
            $(".hotelPayHomeYong").html(allData.yong)
            $(".hotelPayHomeBaby").html(allData.baby)
            $(".hotelPayHomeOld").html(allData.Old)

            // 左部分内 容渲染
            $(".tickerOutDateImg").attr("src",serverHttpUrlImg+data.product.thumbnailUrl)
            $(".headerSubCommonH4").html(data.product.title)
            $(".tickerOutCity").html(data.product.city)
            $(".tickerOutDate").html(timestampToTime(data.cart.startDate))   ///出行日期
            $(".tickerOutTime").html(data.product.duration)


        },
        error: function() {

        }
    });

}else{

}

// 根据人数  循环  信息表


//  成人数量
$(".tickerPayAdult").html(allData.adult)
var adultMain = ''
for (var i=1;i<=allData.adult;i++){
    adultMain += '\t\t\t\t\t\t<p class="cssFlex">\n' +
        '\t\t\t\t\t\t\t<label class="justify">姓名</label>:\n' +
        '\t\t\t\t\t\t\t<input type="hidden" name="item['+(i-1)+'].itemName" value="成人">\n' +
        '\t\t\t\t\t\t\t<input type="hidden" name="item['+(i-1)+'].itemValue" value="1">\n' +
        '\t\t\t\t\t\t\t<input type="hidden" name="guest['+(i-1)+'].bandName" value="成人">\n' +
        '\t\t\t\t\t\t\t<input type="text" name="guest['+(i-1)+'].lastName" id="hotelNameYong" class="yongBandName"  onkeyup="value=value.replace(/^[^a-zA-Z]$/,\'\')" placeholder="姓(拼音/英文) 如：zhang" />\n' +
        '\t\t\t\t\t\t\t<input type="text" name="guest['+(i-1)+'].firstName"  id="hotelNameYongLast" class="yongBandLastName"  onkeyup="value=value.replace(/^[^a-zA-Z]$/,\'\')"  placeholder="名(拼音/英文) 如：san"/>\n' +
        '\t\t\t\t\t\t</p>\n' +
        '\t\t\t\t\t\t<p class="cssFlex">\n' +
        '\t\t\t\t\t\t\t<label class="justify">出生日期</label>:\n' +
        '\t\t\t\t\t\t\t<input type="text" name="guest['+(i-1)+'].born" id="dateOfBirthBig" class="yongBorn" value="" readonly="readonly" placeholder="如：1999-03-21" />\n' +
        '\t\t\t\t\t\t\t<img src="../images/icon/true.png" alt="" class="userNullTrue">\n' +
        '\t\t\t\t\t\t\t<img src="../images/icon/del.png" alt="错误信息" class="del-userNull">\n' +
        '\t\t\t\t\t\t\t<span class="judgeNull"></span>\n' +
        '\t\t\t\t\t\t</p>\n' +
        '\t\t\t\t\t\t<p class="cssFlex">\n' +
        '\t\t\t\t\t\t\t<label class="justify">护照号</label>:\n' +
        '\t\t\t\t\t\t\t<input type="text" name="guest['+(i-1)+'].passportNo" id="userPassportYong" class="yongPassportNo" value="" placeholder="填写护照号" />\n' +
        '\t\t\t\t\t\t\t<img src="../images/icon/true.png" alt="" class="userNullTrue">\n' +
        '\t\t\t\t\t\t\t<img src="../images/icon/del.png" alt="错误信息" class="del-userNull">\n' +
        '\t\t\t\t\t\t\t<span class="judgeNull"></span>\n' +
        '\t\t\t\t\t\t</p>\n'
}
if (allData.adult == 0){
    $(".adultBox").html('')
}else {
    $(".adultBox").html(adultMain)
}



//  青年数量
$(".tickerPayYong").html(allData.yong)
var yongMain = ''
for (var i=1;i<=allData.yong;i++){
    yongMain += '\t\t\t\t\t\t<p class="cssFlex">\n' +
        '\t\t\t\t\t\t\t<label class="justify">姓名</label>:\n' +

        '\t\t\t\t\t\t\t<input type="hidden" name="item['+(i-1)+'].itemValue" value="2">\n' +
        '\t\t\t\t\t\t\t<input type="hidden" name="item['+(i-1)+'].itemName" value="青年">\n' +
        '\t\t\t\t\t\t\t<input type="hidden" name="guest['+(i-1)+'].bandName" value="青年">\n' +
        '\t\t\t\t\t\t\t<input type="text" name="guest['+(i-1)+'].lastName" id="hotelNameYong"  onkeyup="value=value.replace(/^[^a-zA-Z]$/,\'\')" placeholder="姓(拼音/英文) 如：zhang" />\n' +
        '\t\t\t\t\t\t\t<input type="text" name="guest['+(i-1)+'].firstName" id="hotelNameYongLast"  onkeyup="value=value.replace(/^[^a-zA-Z]$/,\'\')"  placeholder="名(拼音/英文) 如：san"/>\n' +
        '\t\t\t\t\t\t</p>\n' +
        '\t\t\t\t\t\t<p class="cssFlex">\n' +
        '\t\t\t\t\t\t\t<label class="justify">出生日期</label>:\n' +
        '\t\t\t\t\t\t\t<input type="text" name="guest['+(i-1)+'].born" id="dateOfBirthYong" value="" readonly="readonly" placeholder="如：1999-03-21" onclick="laydate.render({elem: this})" />\n' +
        '\t\t\t\t\t\t\t<img src="../images/icon/true.png" alt="" class="userNullTrue">\n' +
        '\t\t\t\t\t\t\t<img src="../images/icon/del.png" alt="错误信息" class="del-userNull">\n' +
        '\t\t\t\t\t\t\t<span class="judgeNull"></span>\n' +
        '\t\t\t\t\t\t</p>\n' +
        '\t\t\t\t\t\t<p class="cssFlex">\n' +
        '\t\t\t\t\t\t\t<label class="justify">护照号</label>:\n' +
        '\t\t\t\t\t\t\t<input type="text" name="guest['+(i-1)+'].passportNo" id="userPassportYong" value="" placeholder="填写护照号" />\n' +
        '\t\t\t\t\t\t\t<img src="../images/icon/true.png" alt="" class="userNullTrue">\n' +
        '\t\t\t\t\t\t\t<img src="../images/icon/del.png" alt="错误信息" class="del-userNull">\n' +
        '\t\t\t\t\t\t\t<span class="judgeNull"></span>\n' +
        '\t\t\t\t\t\t</p>\n'
}
if (allData.adult == 0){
    $(".tickerPayYong").parent("h5").hide()
    $(".yongBox").html('')

}else {
    $(".yongBox").html(yongMain)
}


//  儿童数量
$(".tickerPayChild").html(allData.child)
var childMain = ''
for (var i=1;i<=allData.child;i++){
    childMain += '\t\t\t\t\t\t<p class="cssFlex">\n' +
        '\t\t\t\t\t\t\t<label class="justify">姓名</label>:\n' +

        '\t\t\t\t\t\t\t<input type="hidden" name="item['+(i-1)+'].itemValue" value="3">\n' +
        '\t\t\t\t\t\t\t<input type="hidden" name="item['+(i-1)+'].itemName" value="儿童">\n' +
        '\t\t\t\t\t\t\t<input type="hidden" name="guest['+(i-1)+'].bandName" value="儿童">\n' +
        '\t\t\t\t\t\t\t<input type="text" name="guest['+(i-1)+'].lastName" id="hotelNameYong"  onkeyup="value=value.replace(/^[^a-zA-Z]$/,\'\')" placeholder="姓(拼音/英文) 如：zhang" />\n' +
        '\t\t\t\t\t\t\t<input type="text" name="guest['+(i-1)+'].firstName" id="hotelNameYongLast"  onkeyup="value=value.replace(/^[^a-zA-Z]$/,\'\')"  placeholder="名(拼音/英文) 如：san"/>\n' +
        '\t\t\t\t\t\t</p>\n' +
        '\t\t\t\t\t\t<p class="cssFlex">\n' +
        '\t\t\t\t\t\t\t<label class="justify">出生日期</label>:\n' +
        '\t\t\t\t\t\t\t<input type="text" name="guest['+(i-1)+'].born" id="dateOfBirthChild" value="" readonly="readonly" placeholder="如：1999-03-21" />\n' +
        '\t\t\t\t\t\t\t<img src="../images/icon/true.png" alt="" class="userNullTrue">\n' +
        '\t\t\t\t\t\t\t<img src="../images/icon/del.png" alt="错误信息" class="del-userNull">\n' +
        '\t\t\t\t\t\t\t<span class="judgeNull"></span>\n' +
        '\t\t\t\t\t\t</p>\n' +
        '\t\t\t\t\t\t<p class="cssFlex">\n' +
        '\t\t\t\t\t\t\t<label class="justify">护照号</label>:\n' +
        '\t\t\t\t\t\t\t<input type="text" name="guest['+(i-1)+'].passportNo" id="userPassportYong" value="" placeholder="填写护照号" />\n' +
        '\t\t\t\t\t\t\t<img src="../images/icon/true.png" alt="" class="userNullTrue">\n' +
        '\t\t\t\t\t\t\t<img src="../images/icon/del.png" alt="错误信息" class="del-userNull">\n' +
        '\t\t\t\t\t\t\t<span class="judgeNull"></span>\n' +
        '\t\t\t\t\t\t</p>\n'
}
if (allData.child == 0){
    $(".tickerPayChild").parent("h5").hide()
    $(".childBox").html('')

}else {
    $(".childBox").html(childMain)
}

//  婴儿数量
$(".tickerPayBaby").html(allData.baby)
var babyMain = ''
for (var i=1;i<=allData.baby;i++){
    babyMain += '\t\t\t\t\t\t<p class="cssFlex">\n' +
        '\t\t\t\t\t\t\t<label class="justify">姓名</label>:\n' +

        '\t\t\t\t\t\t\t<input type="hidden" name="item['+(i-1)+'].itemValue" value="4">\n' +
        '\t\t\t\t\t\t\t<input type="hidden" name="item['+(i-1)+'].itemName" value="婴儿">\n' +
        '\t\t\t\t\t\t\t<input type="hidden" name="guest['+(i-1)+'].bandName" value="婴儿">\n' +
        '\t\t\t\t\t\t\t<input type="text" name="guest['+(i-1)+'].lastName" id="hotelNameYong"  onkeyup="value=value.replace(/^[^a-zA-Z]$/,\'\')" placeholder="姓(拼音/英文) 如：zhang" />\n' +
        '\t\t\t\t\t\t\t<input type="text" name="guest['+(i-1)+'].firstName" id="hotelNameYongLast"  onkeyup="value=value.replace(/^[^a-zA-Z]$/,\'\')"  placeholder="名(拼音/英文) 如：san"/>\n' +
        '\t\t\t\t\t\t</p>\n' +
        '\t\t\t\t\t\t<p class="cssFlex">\n' +
        '\t\t\t\t\t\t\t<label class="justify">出生日期</label>:\n' +
        '\t\t\t\t\t\t\t<input type="text" name="guest['+(i-1)+'].born" id="dateOfBirthBaby" value="" readonly="readonly" placeholder="如：1999-03-21" />\n' +
        '\t\t\t\t\t\t\t<img src="../images/icon/true.png" alt="" class="userNullTrue">\n' +
        '\t\t\t\t\t\t\t<img src="../images/icon/del.png" alt="错误信息" class="del-userNull">\n' +
        '\t\t\t\t\t\t\t<span class="judgeNull"></span>\n' +
        '\t\t\t\t\t\t</p>\n' +
        '\t\t\t\t\t\t<p class="cssFlex">\n' +
        '\t\t\t\t\t\t\t<label class="justify">护照号</label>:\n' +
        '\t\t\t\t\t\t\t<input type="text" name="guest['+(i-1)+'].passportNo" id="userPassportYong" value="" placeholder="填写护照号" />\n' +
        '\t\t\t\t\t\t\t<img src="../images/icon/true.png" alt="" class="userNullTrue">\n' +
        '\t\t\t\t\t\t\t<img src="../images/icon/del.png" alt="错误信息" class="del-userNull">\n' +
        '\t\t\t\t\t\t\t<span class="judgeNull"></span>\n' +
        '\t\t\t\t\t\t</p>\n'
}
if (allData.baby == 0){
    $(".tickerPayBaby").parent("h5").hide()
    $(".babyBox").html('')

}else {
    $(".babyBox").html(babyMain)
}


//  老人数量
$(".tickerPayOld").html(allData.Old)
var OldMain = ''
for (var i=1;i<=allData.Old;i++){
    OldMain += '\t\t\t\t\t\t<p class="cssFlex">\n' +
        '\t\t\t\t\t\t\t<label class="justify">姓名</label>:\n' +

        '\t\t\t\t\t\t\t<input type="hidden" name="item['+(i-1)+'].itemValue" value="5">\n' +
        '\t\t\t\t\t\t\t<input type="hidden" name="item['+(i-1)+'].itemName" value="老人">\n' +
        '\t\t\t\t\t\t\t<input type="hidden" name="guest['+(i-1)+'].bandName" value="老人">\n' +
        '\t\t\t\t\t\t\t<input type="text" name="guest['+(i-1)+'].lastName" id="hotelNameYong"  onkeyup="value=value.replace(/^[^a-zA-Z]$/,\'\')" placeholder="姓(拼音/英文) 如：zhang" />\n' +
        '\t\t\t\t\t\t\t<input type="text" name="guest['+(i-1)+'].firstName" id="hotelNameYongLast" onkeyup="value=value.replace(/^[^a-zA-Z]$/,\'\')" placeholder="名(拼音/英文) 如：san"/>\n' +
        '\t\t\t\t\t\t</p>\n' +
        '\t\t\t\t\t\t<p class="cssFlex">\n' +
        '\t\t\t\t\t\t\t<label class="justify">出生日期</label>:\n' +
        '\t\t\t\t\t\t\t<input type="text" name="guest['+(i-1)+'].born" id="dateOfBirthOld" value="" readonly="readonly" placeholder="如：1999-03-21" />\n' +
        '\t\t\t\t\t\t\t<img src="../images/icon/true.png" alt="" class="userNullTrue">\n' +
        '\t\t\t\t\t\t\t<img src="../images/icon/del.png" alt="错误信息" class="del-userNull">\n' +
        '\t\t\t\t\t\t\t<span class="judgeNull"></span>\n' +
        '\t\t\t\t\t\t</p>\n' +
        '\t\t\t\t\t\t<p class="cssFlex">\n' +
        '\t\t\t\t\t\t\t<label class="justify">护照号</label>:\n' +
        '\t\t\t\t\t\t\t<input type="text" name="guest['+(i-1)+'].passportNo" id="userPassportYong" value="" placeholder="填写护照号" />\n' +
        '\t\t\t\t\t\t\t<img src="../images/icon/true.png" alt="" class="userNullTrue">\n' +
        '\t\t\t\t\t\t\t<img src="../images/icon/del.png" alt="错误信息" class="del-userNull">\n' +
        '\t\t\t\t\t\t\t<span class="judgeNull"></span>\n' +
        '\t\t\t\t\t\t</p>\n'
}
if (allData.Old == 0){
    $(".tickerPayOld").parent("h5").hide()
    $(".oldBox").html('')
}else {
    $(".oldBox").html(OldMain)
}

// 门票详情填写订单页面  用户信息  录入
$(".hotelPayBtn").click(function () {

    /*var formArray = {
        "guest[0].bandName":"成人",
        "guest[0].lastName": "cao",
        "guest[0].firstName": "yong",
        "guest[0].born": "2018-07-31",
        "guest[0].passportNo": "123123123123123",
        "skuId": "59392",
        "nowPrice": "1501",
        "monthlyPrice": "0",
        "cartId": "",
        "thumbnailUrl": " http://activities-img.oss-cn-qingdao.aliyuncs.com/707/21902/act_21902_01.jpg",
        "productTitle":" 冰岛南部+高空滑索冒险一日游",
        "skuTitle":"冰岛南部+高空滑索冒险一日游q",
        "startDate":"2018-09-30",
        "item[0].itemName":"成人",
        "item[0].itemValue":"1",
        "contractName":"曹勇",
        "contractPhone":"17600058995",
        "contractEmail":"342249879@qq.com",
    }
    console.log(formArray)*/
    /*if (!PayUseName() || !checkTel() ||!checkEmail() || !inputNull()  ){
        return
    }*/
    var contractName = $("#tickerPayUserFirst").val();
    var contractPhone = $("#userPhone").val();
    var contractEmail = $("#userEmail").val();

    var serializeForm = $(".adultBox").serialize();   //表单序列化
    var yongBoxForm = $(".yongBox").serialize();   //表单序列化
    var childBoxForm = $(".childBox").serialize();   //表单序列化
    var babyBoxForm = $(".babyBox").serialize();   //表单序列化
    var oldBoxForm = $(".oldBox").serialize();   //表单序列化

    $.ajax({
        url: orderRestControllerPay,
        type: "POST",
        dataType: "json",
        sync:true,
        data: serializeForm+yongBoxForm+childBoxForm+babyBoxForm+oldBoxForm+"&contractName="+contractName +"&contractPhone="+contractPhone+"&contractEmail="+contractEmail+"&skuId="+allData.skuId+"&nowPrice="+allData.price+"&monthlyPrice="+allData.price+"&cartId="+"&thumbnailUrl="+allData.thumbnailUrl+"&productTitle="+$(".PayInfoUserName").text()+"&skuTitle="+$(".PayInfoUserDate").text()+"&startDate="+$(".tickerPayOutdate").text(),

        // data: formArray,
        xhrFields: {
            withCredentials: true
        },
        contentType:"application/x-www-form-urlencoded",    //
        traditional:true,
        success: function(data) {

            var payDataJson = {
                "aliSubmitHtml":data.aliSubmitHtml,
                "productTitle":data.order.productTitle,
                "thumbnailUrl":data.order.thumbnailUrl,
                "orderNo":data.order.orderNo,
                "nowPrice":data.order.nowPrice,
                "contractName":data.order.contractName,
                "contractPhone":data.order.contractPhone,
            }
            var payDataJson = JSON.stringify(payDataJson)
            localStorage.setItem("payData",payDataJson)
            window.location.href = "../html/hotelOrderPayGo.html"
        },
        error: function() {

        }
    });

})





