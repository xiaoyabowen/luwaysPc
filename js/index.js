// == == ======================================首页js

// 消息推送
/*
myAjax(orderRestControllerListByJson, '', handle)
function handle(data, param) {
    console.log(data)
}
*/



// 登陆成功   name   moble
var name = sessionStorage.getItem("name")
$(".notLoginNavFive>span").html(name)

//首页banner  tab切换
$(".bannerSearchTab>li").click(function () {
    var _index = $(".bannerSearchTab>li").index($(this));
    $(this).addClass("bannerSearchTabActive").siblings().removeClass("bannerSearchTabActive")
    $(".bannerSearchTabMain .bannerSearchTabList").eq(_index).show().siblings().hide();
})

//消息推送js.
function b() {
    t = parseInt(x.css('top'));
    y.css('top', '16px');
    x.animate({
        top: t - 16 + 'px'
    }, 'slow'); //19为每个li的高度
    if (Math.abs(t) == h - 16) { //19为每个li的高度
        y.animate({
            top: '0px'
        }, 'slow');
        z = x;
        x = y;
        y = z;
    }
    setTimeout(b, 3000); //滚动间隔时间 现在是3秒
}
$(document).ready(function () {
    $('.swap').html($('.news_li').html());
    x = $('.news_li');
    y = $('.swap');
    h = $('.news_li li').length * 16; //19为每个li的高度
    setTimeout(b, 3000); //滚动间隔时间 现在是3秒
})

//酒店门票玩乐跳转
$(".hotelTabImgO").click(function () {
    window.location.href = "../html/hotel.html"
})

$(".hotelTabImgTh").click(function () {
    window.location.href = "../html/local.html"
})

$(".hotelTabImgT").click(function () {
    window.location.href = "../html/ticket.html"
})

// 首页热门酒店

$(function () {
    myAjax(getHotelJson, '', handle)

    function handle(data, param) {
        console.log(data)
        var HotelJsonStr = ''
        for (var i = 0; i < data.data.length; i++) {
            HotelJsonStr += '<a href="html/hotelDetails.html?hotelCode=' + data.data[i].id + '&checkIn=' + s2 + '&checkOut=' + s3 + '">\n' +
                '\t\t\t\t\t\t<div class="subIndexHotelMainList animate" data-animate="fadeInUp" data-duration="' + i + 's">\n' +
                '\t\t\t\t\t\t\t<div class="subIndexHotelMainListOver">\n' +
                '\t\t\t\t\t\t\t\t<img src="' + hotelUrlImg + data.data[i].thumbnailUrl + hotelUrlImgHou + '" alt="" />\n' +
                '\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t<div class="subIndexHotelMainListCotent">\n' +
                '\t\t\t\t\t\t\t\t<h4 class="textOverflow">' + data.data[i].cnName + '</h4>\n'
            if (data.data[i].star == 1) {
                HotelJsonStr += '<p>星级：<img src="images/icon/content_hotel_icon_grade.png" id="gradeStar"></p>'
            } else if (data.data[i].star == 2) {
                HotelJsonStr += '<p>星级：<img src="images/icon/content_hotel_icon_grade.png" id="gradeStar"><img src="images/icon/content_hotel_icon_grade.png" id="gradeStar"></p>'
            } else if (data.data[i].star == 3) {
                HotelJsonStr += '<p>星级：<img src="images/icon/content_hotel_icon_grade.png" id="gradeStar"><img src="images/icon/content_hotel_icon_grade.png" id="gradeStar"><img src="images/icon/content_hotel_icon_grade.png" id="gradeStar"></p>'
            } else if (data.data[i].star == 4) {
                HotelJsonStr += '<p>星级：<img src="images/icon/content_hotel_icon_grade.png" id="gradeStar"><img src="images/icon/content_hotel_icon_grade.png" id="gradeStar"><img src="images/icon/content_hotel_icon_grade.png" id="gradeStar"><img src="images/icon/content_hotel_icon_grade.png" id="gradeStar"></p>'
            }
            HotelJsonStr += '\t\t\t\t\t\t\t\t<p class="">地址：' + data.data[i].address + '</p>\n'
            if (data.data[i].hotelSort.minPrice == "-1.05" || data.data[i].hotelSort.minPrice == "0" || data.data[i].hotelSort.minPrice == null || data.data[i].hotelSort.minPrice < 0) {
                HotelJsonStr += '\t\t\t\t\t\t\t\t\t<div class="subIndexHotelMainListCotentPrice">已售完</div>\n'
            } else {
                HotelJsonStr += '\t\t\t\t\t\t\t\t<div class="subIndexHotelMainListCotentPrice">￥' + data.data[i].hotelSort.minPrice + '</div>\n'
            }

            HotelJsonStr += '\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t</a>\n'
        }
        $(".subIndexHotelMain").html(HotelJsonStr)
        // //			调用wow动画js
        // $('.animate').scrolla({
        //     mobile: false,
        //     once: false
        // });
    }
})


// 点击搜索景点进行关键字搜索
// 门票搜索
//当在搜索框输入内容时，根据关键字匹配，显示弹出层
/*function searchSuggestTiket(obj){
    var searchKey=$(obj).val();
    $.ajax({
        url: ticketRestController,
        type: "POST",
        dataType: "json",
        sync:true,
        data: {term:$("#bannerSearchTickerQuery").val()},
        xhrFields: {
            withCredentials: true
        },
        traditional:true,

        success: function (data) {
            var arr=[];
            for(var i=0,len=data.findList.length;i<len;i++){
                // if(searchKey!="" && (data.data[i].initial.search(reg)!=-1 || data.data[i].keyword.search(reg)!=-1))  {
                if(searchKey!="")  {
                    arr.push("<li class='cssFlex' onclick='changeSearchKeyTiket(this);'><span class='SearchKeyVal SearchKeyTiketVal'><i class='SearchKeyTiketValI'>"+data.findList[i].name+"</i> "+data.findList[i].name+" </span><span class='SearchKeyTiketValB'><b>"+data.findList[i].productSum+"</b>&nbsp;款产品</span></li>");
                }
            }
            $(".keywords_list_tiket").html(arr).fadeIn();
        },
        error: function() {

        }

    });


}*/


// 2
$("#bannerSearchTickerQuery").focus(function () {
    $.ajax({
        url: ticketRestController,
        type: "POST",
        dataType: "json",
        sync: true,
        data: {
            term: $("#bannerSearchTickerQuery").val()
        },
        xhrFields: {
            withCredentials: true
        },
        traditional: true,

        success: function (data) {
            var arr = [];
            for (var i = 0, len = data.findList.length; i < len; i++) {
                // if(searchKey!="" && (data.data[i].initial.search(reg)!=-1 || data.data[i].keyword.search(reg)!=-1))  {
                // if(searchKey!="")  {
                arr.push("<li class='cssFlex' onclick='changeSearchKeyTiket(this);'><span class='SearchKeyVal SearchKeyTiketVal'><i class='SearchKeyTiketValI'>" + data.findList[i].name + "</i> " + data.findList[i].name + " </span><span class='SearchKeyTiketValB'><b>" + data.findList[i].productSum + "</b>&nbsp;款产品</span></li>");
                // }
            }
            $(".keywords_list_tiket").html(arr).fadeIn();
        },
        error: function () {

        }

    });
})

$("#bannerSearchTickerQuery").blur(function (obj) {
    // changeSearchKeyTiket(obj)
    $(".keywords_list_tiket").fadeOut();
})

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
    window.location.href = "html/ticket.html?keywords=" + keywordsTicker
})


// 酒店搜索
function searchSuggestHotel(obj) {

    var searchKey = $(obj).val();
    $.ajax({
        url: restHotelQ,
        type: "POST",
        dataType: "json",
        sync: true,
        data: {
            term: $("#destination").val()
        },
        xhrFields: {
            withCredentials: true
        },
        traditional: true,

        success: function (data) {
            var arr = [];
            for (var i = 0, len = data.data.length; i < len; i++) {
                if (searchKey != "") {
                    arr.push("<li class='cssFlex' onclick='changeSearchKeyHotel(this);' data-idHotel='" + data.data[i].id + "'><span class='SearchKeyVal'>" + data.data[i].name + "</span><span>" + data.data[i].parentName + "</span></li>");
                } else if (searchKey == "") {

                }
            }
            $(".keywords_list_hotel").html(arr).fadeIn();
        },
        error: function () {

        }

    });


    /*var searchKey=$(obj).val();
    myAjax(restHotelQ, {term:$("#destination").val()}, handle)
    function handle(data, param) {
        var arr=[];
        for(var i=0,len=data.data.length;i<len;i++){
            if(searchKey!="")  {
                arr.push("<li class='cssFlex' onclick='changeSearchKeyHotel(this);' data-idHotel='"+data.data[i].id+"'><span class='SearchKeyVal'>"+data.data[i].name+"</span><span>"+data.data[i].parentName+"</span></li>");
            }
        }
        $(".keywords_list_hotel").html(arr).fadeIn();
    }*/

}

$("#destination").blur(function (obj) {
    // changeSearchKeyHotel(obj)
    $(".keywords_list_hotel").fadeOut();
})

//单击匹配列表中的关键字选项时，将该关键字显示在搜索框中
function changeSearchKeyHotel(obj) {
    var value = $(obj).children(".SearchKeyVal").text();
    $("#destination").val(value);
    $('.keywords_list').fadeOut();
}
// 酒店搜索按钮查询
$(".bannerSearchTabSearch").click(function () {
    if ($("#destination").val() == '') {
        var desId = ''
        var keywords = '';
    } else {
        var desId = $(".keywords_list_hotel>li").attr("data-idHotel")
        var keywords = $("#destination").val();
    }
    $(".keywords_list_hotel").fadeOut();
    var checkIn = $("#checkInTime").val()
    var checkOut = $("#checkOUutTime").val()
    window.location.href = "html/hotel.html?desId=" + desId + "&keywords=" + keywords + "&checkIn=" + checkIn + "&checkOut=" + checkOut
})



// 当地玩乐选项卡
$(".indexLocalAmusementTab>li").click(function () {
    $(this).addClass("indexLocalAmusementTabActive").siblings().removeClass("indexLocalAmusementTabActive")
    var _index = $(".indexLocalAmusementTab>li").index($(this));
    $(".indexLocalAmusementMain .indexLocalAmusementMainBox").eq(_index).show().siblings().hide();
})

// 当地玩乐  轮播数据  渲染


$.ajax({
    url: ticketRestControllerHotSell,
    type: "POST",
    dataType: "json",
    sync: true,
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
        console.log(data)
        for (var i = 0; i < data.data.length; i++) {
            //   swiper  图片
            var swiperImgOne = ''
            // swiper 内容
            var swiperImgTwo = ''
            var idata = data.data[i];
            for (var j = 0; j < idata.imgurl.length; j++) {
                swiperImgOne += '<div class="swiper-slide">\n' +
                    '\t\t\t\t\t\t\t\t<div class="hotelHomeDetailsImg">\n' +
                    '\t\t\t\t\t\t\t\t\t<img src="' + serverHttpUrlImg + '' + data.data[i].imgurl[j] + '" alt="酒店详情" />\n' +
                    '\t\t\t\t\t\t\t\t</div>\n' +
                    '\t\t\t\t\t\t\t</div>'
            }
            for (var g = 0; g < idata.name.length; g++) {
                swiperImgTwo += '<div class="swiper-slide" >\n' +
                    '\t\t\t\t\t\t\t\t<div class="hotelHomeDetailsContent">\n' +
                    '\t\t\t\t\t\t\t\t\t<h4 class=" ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.1s">' + data.data[i].name[g] + '</h4>\n' +
                    '\t\t\t\t\t\t\t\t\t<p class="textOverflow">' + data.data[i].shortdes[g] + '</p>\n' +
                    '\t\t\t\t\t\t\t\t\t<a class="sucssBtn indexSucssBtn ani " swiper-animate-effect="swing" swiper-animate-duration="0.5s" swiper-animate-delay="0.1s">\n' +
                    // for (var b = 0; b < idata.ids.length; b++) {
                    '\t\t\t\t\t\t\t\t\t\t<span data-tit="查看更多 >" data-swiperId="' + data.data[i].ids[g] + '" class="JumpIndexHotel">查看更多</span>\n' +
                    // }
                    '\t\t\t\t\t\t\t\t\t</a>\n' +
                    '\t\t\t\t\t\t\t\t</div>\n' +
                    '\t\t\t\t\t\t\t</div>'
            }
            $(".swiperImgOne").eq(i).html(swiperImgOne)
            $(".swiperImgTwo").eq(i).html(swiperImgTwo)
        }
        $(document).on("click", ".JumpIndexHotel", function () {
            window.location.href = "html/tickerDetails.html?ticketId=" + $(this).attr("data-swiperId")
        })


        //			sweiper双向绑定
        var Swiper1 = new Swiper('#swiper-container1', {
            pagination: '.swiper-pagination',
            autoplay: 5000,
            speed: 500,
            observer: true,
            observeParents: true,
            paginationClickable: true,
            effect: 'coverflow',
        })
        var Swiper2 = new Swiper('#swiper-container2', {
            onInit: function (swiper) { //Swiper2.x的初始化是onFirstInit
                swiperAnimateCache(swiper); //隐藏动画元素
                swiperAnimate(swiper); //初始化完成开始动画
            },
            onSlideChangeEnd: function (swiper) {
                swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
            },
            observer: true,
            observeParents: true,
        })
        Swiper1.params.control = Swiper2;
        Swiper2.params.control = Swiper1;
        // 2
        var Swiper3 = new Swiper('#swiper-container3', {
            pagination: '.swiper-pagination',
            autoplay: 3000,
            speed: 500,
            paginationClickable: true,
            observer: true,
            observeParents: true, //针对于display:none
            effect: 'coverflow',
        })
        var Swiper4 = new Swiper('#swiper-container4', {
            onInit: function (swiper) { //Swiper2.x的初始化是onFirstInit
                swiperAnimateCache(swiper); //隐藏动画元素
                swiperAnimate(swiper); //初始化完成开始动画
            },
            onSlideChangeEnd: function (swiper) {
                swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
            },
            observer: true,
            observeParents: true,

        })
        Swiper3.params.control = Swiper4;
        Swiper4.params.control = Swiper3;

        // 3
        var Swiper5 = new Swiper('#swiper-container5', {
            pagination: '.swiper-pagination',
            autoplay: 3000,
            speed: 500,
            paginationClickable: true,
            observer: true,
            observeParents: true,
            effect: 'coverflow',
        })
        var Swiper6 = new Swiper('#swiper-container6', {
            onInit: function (swiper) { //Swiper2.x的初始化是onFirstInit
                swiperAnimateCache(swiper); //隐藏动画元素
                swiperAnimate(swiper); //初始化完成开始动画
            },
            onSlideChangeEnd: function (swiper) {
                swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
            },
            observer: true,
            observeParents: true,
        })
        Swiper5.params.control = Swiper6;
        Swiper6.params.control = Swiper5;

        // 4
        var Swiper7 = new Swiper('#swiper-container7', {
            pagination: '.swiper-pagination',
            autoplay: 3000,
            speed: 500,
            paginationClickable: true,
            observer: true,
            observeParents: true,
            effect: 'coverflow',
        })
        var Swiper8 = new Swiper('#swiper-container8', {
            onInit: function (swiper) { //Swiper2.x的初始化是onFirstInit
                swiperAnimateCache(swiper); //隐藏动画元素
                swiperAnimate(swiper); //初始化完成开始动画
            },
            onSlideChangeEnd: function (swiper) {
                swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
            },
            observer: true,
            observeParents: true,
        })
        Swiper7.params.control = Swiper8;
        Swiper8.params.control = Swiper7;

        // 5
        var Swiper9 = new Swiper('#swiper-container9', {
            pagination: '.swiper-pagination',
            autoplay: 3000,
            speed: 500,
            paginationClickable: true,
            observer: true,
            observeParents: true,
            effect: 'coverflow',
        })
        var Swiper10 = new Swiper('#swiper-container10', {
            onInit: function (swiper) { //Swiper2.x的初始化是onFirstInit
                swiperAnimateCache(swiper); //隐藏动画元素
                swiperAnimate(swiper); //初始化完成开始动画
            },
            onSlideChangeEnd: function (swiper) {
                swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
            },
            observer: true,
            observeParents: true,
        })
        Swiper9.params.control = Swiper10;
        Swiper10.params.control = Swiper9;

        // 5
        var Swiper11 = new Swiper('#swiper-container11', {
            pagination: '.swiper-pagination',
            autoplay: 3000,
            speed: 500,
            paginationClickable: true,
            observer: true,
            observeParents: true,
            effect: 'coverflow',
        })
        var Swiper12 = new Swiper('#swiper-container12', {
            onInit: function (swiper) { //Swiper2.x的初始化是onFirstInit
                swiperAnimateCache(swiper); //隐藏动画元素
                swiperAnimate(swiper); //初始化完成开始动画
            },
            onSlideChangeEnd: function (swiper) {
                swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
            },
            observer: true,
            observeParents: true,
        })
        Swiper11.params.control = Swiper12;
        Swiper12.params.control = Swiper11;



    },
    error: function () {

    }

});