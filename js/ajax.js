var serverUrl = "http://192.168.3.252:9999/" // 访问ip地址
// var serverUrl = "http://192.168.3.63:9997/" // 访问ip地址
// var serverUrl = "http://resource.luways.com/" // 访问ip地址
// var serverUrl = "/web/" // 访问ip地址

var serverHttpUrlImg = "https://activities-img.oss-cn-qingdao.aliyuncs.com/" //  门票 访问ip地址  图片
var serverHttpUrlImgHou = "?x-oss-process=style/product_list"

// 酒店详情  oss  阿里云  地址
var hotelUrlImg = "https://hotelpics.oss-cn-qingdao.aliyuncs.com/"
var hotelUrlImgHou = "?x-oss-process=style/hotelDesc"

/*-----------------------ajax请求------------------------------*/
function myAjax(url, param, func) {
    if (!url.startsWith(serverUrl)) {
        url = serverUrl + url;
    }
    param = param || {};
    $.ajax({
        url: url,
        type: "POST",
        dataType: "json",
        sync: true,
        data: param,
        beforeSend: function () {
            $("body").append('<div id="loading">\n' +
                '\t<div id="loading-center">\n' +
                '\t\t<div id="loading-center-absolute">\n' +
                '\t\t\t<div class="object" id="object_one"></div>\n' +
                '\t\t\t<div class="object" id="object_two"></div>\n' +
                '\t\t\t<div class="object" id="object_three"></div>\n' +
                '\t\t\t<div class="object" id="object_four"></div>\n' +
                '\t\t\t<div class="object" id="object_five"></div>\n' +
                '\t\t\t<div class="object" id="object_six"></div>\n' +
                '\t\t\t<div class="object" id="object_seven"></div>\n' +
                '\t\t\t<div class="object" id="object_eight"></div>\n' +
                '\t\t</div>\n' +
                '\t</div>\n' +
                '</div>');
        },
        complete: function () {
            $("#loading").remove();
        },
        xhrFields: {
            withCredentials: true
        },
        traditional: true,

        success: function (data) {
            if (typeof func == 'function') {
                func(data, param);
            }
        },
        error: function () {

        }

    });
}
var loginServer = serverUrl + "loginRest/doLogin" //登陆
var userRestControllerLogout = serverUrl + "userRestController/logout" //退出
var resterServer = serverUrl + "register/regFirst" //注册第一步
var regSecond = serverUrl + "register/regSecond" //注册第一步
var check = serverUrl + "register/check" //注册第一步
var getProductInro = serverUrl + "unLogin/getProductInro" //未登录首页底部获取数据
var ticketRestControllerHotSell = serverUrl + "ticketRestController/hotSell" //首页  当地玩乐
var getHotelJson = serverUrl + "restHotel/getHotelJson" //登陆成功之后  里面的  热门酒店
var restHotelQ = serverUrl + "restHotel/q" //酒店  关键字搜索
var restHotelSearch = serverUrl + "restHotel/search" //酒店关键字搜索渲染列表
var ticketRestController = serverUrl + "ticketRestController/search" //门票搜索
var ticketRestControllerDetail = serverUrl + "ticketRestController/detail" //门票搜索
var orderRestControllerBook = serverUrl + "orderRestController/book" //门票 详情预定跳转后  的请求接口
var orderRestControllerLook = serverUrl + "orderRestController/look" //我的订单预定跳转后  的请求接口
var orderRestControllerPay = serverUrl + "orderRestController/pay" //门票支付
var orderRestControllerDetail = serverUrl + "orderRestController/detail" //门票支付
var orderRestControllerListByJson = serverUrl + "orderRestController/listByJson" //我的订单
var shopcartCartdisplay = serverUrl + "shopcart/cartdisplay" //我的购物车
var shopcarBatchDelete = serverUrl + "shopcart/batchDelete" //我的购物车   单选 多选删除
var restHotelGetHotelCollect = serverUrl + "restHotel/getHotelCollect" //  我的  酒店收藏
var shopcartCollectionHotel = serverUrl + "shopcart/collectionHotel" //酒店收藏小图标
var restHotelDetail = serverUrl + "restHotel/detail" //酒店  详情页
var shopcartJoinCart = serverUrl + "shopcart/joinCart" //门票   加入购物车
var hotelBookingRestBooking = serverUrl + "hotelBookingRest/booking" // 酒店详情
var HotelRestControllerPay = serverUrl + "restHotel/pay" //酒店 填写订单
var passwordRest = serverUrl + "accountRestControlle/password/reset" //个人中心  修改密码
var orderRestControllerSuborder = serverUrl + "orderRestController/suborder" //个人中心  购物车 预定
var accountRestControlleNum = serverUrl + "accountRestControlle/getOrderAndShop" //个人中心  购物车  订单
var orderRestControllerNoPay = serverUrl + "orderRestController/noPay" //    员工通道 测试  支付
var orderRestControllerDeletepro = serverUrl + "/orderRestController/deletepro" //  我的订单 删除按钮

// 订制   接口   部分

var insertIntentionSheet = serverUrl + "customized/insertIntentionSheet" //    添加需求意向表
var updateIntentionSheet = serverUrl + "customized/updateIntentionSheet" //    取消订单
var selectAllIntentionSheetOrder = serverUrl + "customized/selectAllIntentionSheetOrder" //    查询当前用户所有意向表订单







//截取地址栏字符串
function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return decodeURI(r[2]);
    return null;
}

// 日期补 0 操作
function getzf(num) {
    if (parseInt(num) < 10) {
        num = '0' + num;
    }
    return num;
}

//今天的时间
var day2 = new Date();
day2.setTime(day2.getTime());
var s2 = day2.getFullYear() + "-" + getzf(day2.getMonth() + 1) + "-" + getzf(day2.getDate());

//明天的时间
var day3 = new Date();
day3.setTime(day3.getTime() + 24 * 60 * 60 * 1000);
var s3 = day3.getFullYear() + "-" + getzf(day3.getMonth() + 1) + "-" + getzf(day3.getDate());



// 时间戳转换 成日期格式
function timestampToTime(timestamp) {
    var date = new Date(timestamp); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
    var Y = date.getFullYear() + '-';
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    var D = date.getDate() + '';
    return Y + M + D;
}

// 判断用户信息为空  跳转未登陆页
var Username = sessionStorage.getItem("name")
if (Username == '') {
    window.location.href = "../html/indexNotLogin.html"
}



function conditionLoad() {
    $.ajax({
        url: '',
        type: "POST",
        dataType: "json",
        sync: true,
        data: '',
        beforeSend: function () {
            $("body").append('<div id="loading">\n' +
                '\t<div id="loading-center">\n' +
                '\t\t<div id="loading-center-absolute">\n' +
                '\t\t\t<div class="object" id="object_one"></div>\n' +
                '\t\t\t<div class="object" id="object_two"></div>\n' +
                '\t\t\t<div class="object" id="object_three"></div>\n' +
                '\t\t\t<div class="object" id="object_four"></div>\n' +
                '\t\t\t<div class="object" id="object_five"></div>\n' +
                '\t\t\t<div class="object" id="object_six"></div>\n' +
                '\t\t\t<div class="object" id="object_seven"></div>\n' +
                '\t\t\t<div class="object" id="object_eight"></div>\n' +
                '\t\t</div>\n' +
                '\t</div>\n' +
                '</div>');
        },
        complete: function () {
            $("#loading").remove();
        },
        xhrFields: {
            withCredentials: true
        },
        traditional: true,

        success: function (data) {
            if (typeof func == 'function') {
                func(data, param);
            }
        },
        error: function () {

        }

    });

}