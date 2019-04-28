// 酒店到达目的地
function searchSuggestHotel(obj) {
    var searchKey = $(obj).val();
    console.log(searchKey)
    $.ajax({
        url: restHotelQ,
        type: "POST",
        dataType: "json",
        sync: true,
        data: {
            term: $("#hotelDestinatinInput").val()
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
                }
            }
            $(".keywords_list_hotelDetal").html(arr).fadeIn();
        },
        error: function () {

        }

    });
    /* $("#hotelDestinatinInput").blur(function () {
        $(".keywords_list_hotelDetal").hide();
    })
*/
}
/*$("#hotelDestinatinInput").blur(function (obj) {
    changeSearchKeyHotel(obj)
    // $(".keywords_list_hotelDetal").fadeOut();
})*/

//单击匹配列表中的关键字选项时，将该关键字显示在搜索框中
function changeSearchKeyHotel(obj) {
    var value = $(obj).children(".SearchKeyVal").text();
    $("#hotelDestinatinInput").val(value);
    $('.keywords_list_hotelDetal').fadeOut();
}
if ($("#hotelDestinatinInput").val() == '') {
    $('.keywords_list_hotelDetal').fadeOut();
}


// 首页默认带过来的参数
$("#hotelDestinatinInput").val(GetQueryString("keywords"))
$("#hotelCheckInDate").val(s2)
$("#hotelCheckOutDate").val(s3)
$(".keywords_list_hotelDetal").html('<li class="cssFlex" onclick="changeSearchKeyHotel(this);" data-idhotel="' + GetQueryString("desId") + '"><span class="SearchKeyVal"></span><span></span></li>')



// 酒店列表分页

/*$(function () {
    $(".hotelCheckPeopleSerch").click()
})*/
// 点击搜索重新请求接口
$(".hotelCheckPeopleSerch").click(function () {
    hotelList('')
    $('.keywords_list_hotelDetal').fadeOut();
    // scrollHash()
    $('html,body').animate({
        scrollTop: $("#scrollPos").offset().top
    }, 500);
})

var boxpagination = false;

function hotelList(pageSize) {
    // 酒店列表 查询
    // var desId= $(".keywords_list_hotelDetal>li").attr("data-idhotel");
    var keywords = $("#hotelDestinatinInput").val();
    var checkIn = $("#hotelCheckInDate").val();
    var checkOut = $("#hotelCheckOutDate").val();

    var hotelCheckPeopleNum = $("#hotelCheckPeopleNum").val();
    var hotelCheckPeopleNumChil = $("#hotelCheckPeopleNumChil").val();
    var hotelCheckPeopleRoom = $("#hotelCheckPeopleRoom").val();
    console.log(hotelCheckPeopleRoom)
    var params = {};
    // params.desId = desId;
    params.keywords = keywords;
    params.page = pageSize;
    params.checkIn = checkIn;
    params.checkOut = checkOut;

    params.numberOfAdult = hotelCheckPeopleNum;
    params.numberOfChildren = hotelCheckPeopleNumChil;
    params.numberOfRoom = hotelCheckPeopleRoom;
    // params.childrenAges = childrenAges+''+childrenAges1+''+childrenAges2+''+childrenAges3+''+childrenAges4;

    $.ajax({
        url: restHotelSearch,
        type: "POST",
        dataType: "json",
        sync: true,
        data: params,
        beforeSend: function () {
            $(".hotelShowAllPageListPage").append('<div id="loadingPageSub"><img src="../images/timg.gif" alt=""></div>');
        },
        complete: function () {
            $("#hotelShowAllPageListPage").remove()
        },
        xhrFields: {
            withCredentials: true
        },
        traditional: true,

        success: function (data) {
            console.log(data)
            $(".hotelShowAllPageList").html('')
            pageSizeAll = data.page
            // console.log(pageSizeAll)
            var hotelHot = '';
            var hotelListMain = ''

            collectArray = data.conllectionList

            // 热门酒店截取前三个

            var dataHotelKeys = data.search.pageList
            if (dataHotelKeys == undefined) {
                $(".hotelHotRelevant").hide()
                $(".hotelHot").html('')
            } else {
                var hotelHotThree = dataHotelKeys;
                var hotelHotThreeArr = hotelHotThree.slice(0, 3) //取前三个
                for (var i = 0; i < hotelHotThreeArr.length; i++) {
                    hotelHot += '<a href="../html/hotelDetails.html?hotelCode=' + dataHotelKeys[i].id + '&checkIn=' + s2 + '&checkOut=' + s3 + ' " >' +
                        '<li>\n' +
                        '\t\t\t\t\t\t\t<div class="hotelShowAllMapImg">\n'
                    var str = dataHotelKeys[i].thumbnailUrl;
                    if (dataHotelKeys[i].thumbnailUrl == '') {
                        hotelHot += '<img src="../images/hotel_img.png" alt="酒店照片" />'
                    } else if (str.indexOf("https:") >= 0 || str.indexOf("http:") >= 0) {
                        hotelHot += '<img src="' + str + '" alt="酒店照片" />'
                    } else {
                        hotelHot += '<img src="' + hotelUrlImg + dataHotelKeys[i].thumbnailUrl + hotelUrlImgHou + '" alt="酒店照片" />'
                    }
                    hotelHot += '\t\t\t\t\t\t\t</div>\n' +
                        '\t\t\t\t\t\t\t<h4>' + dataHotelKeys[i].cnName + '</h4>\n' +
                        '\t\t\t\t\t\t\t<p>房间类型：BB/RO</p>\n' +
                        '\t\t\t\t\t\t\t<p class="hotelShowAllMapHotPrice">¥' + dataHotelKeys[i].hotelSort.minPrice + '起</p>\n' +
                        '\t\t\t\t\t\t</li>' +
                        '</a>'
                }
                $(".hotelHot").html(hotelHot)
            }


            if (dataHotelKeys == '') {
                $(".hotelShowAllPageList").html('<div style="font-size: 22px;color: #ff9600;">当前查询时段暂无酒店</div>')
                $("#box").hide()
                $(".hotelHotRelevant").hide()
                $("#googleMap").hide()
            } else {

                for (var i = 0; i < dataHotelKeys.length; i++) {
                    // console.log(data.conllectionList)
                    // 地图开始


                    // 百度地图API功能
                    var map = new BMap.Map("googleMap");
                    var point = new BMap.Point(dataHotelKeys[0].coordinates.longitude, dataHotelKeys[0].coordinates.latitude);
                    map.centerAndZoom(point, 15);
                    var marker = new BMap.Marker(point); // 创建标注
                    map.addOverlay(marker); // 将标注添加到地图中
                    // marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
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
                    function addMarker(point) {
                        var marker = new BMap.Marker(point);
                        map.addOverlay(marker);
                    }
                    map.enableScrollWheelZoom(true);
                    // 随机向地图添加25个标注
                    var bounds = map.getBounds();
                    var sw = bounds.getSouthWest();
                    var ne = bounds.getNorthEast();
                    var lngSpan = Math.abs(sw.lng - ne.lng);
                    var latSpan = Math.abs(ne.lat - sw.lat);
                    for (var j = 0; j < dataHotelKeys.length; j++) {
                        var point = new BMap.Point(dataHotelKeys[j].coordinates.longitude, dataHotelKeys[j].coordinates.latitude);
                        // console.log(data.data[i].latitude,data.data[i].longitude)
                        // console.log(data.data[0].longitude)
                        addMarker(point);
                    }

                    // 谷歌地图  结束

                    var str = dataHotelKeys[i].thumbnailUrl
                    hotelListMain += '<li data-hotelId="' + dataHotelKeys[i].id + '">\n' +
                        '<input class="hiddenIndex" type="hidden" value="' + dataHotelKeys[i].id + '" />' +
                        '\t\t\t\t\t\t\t<div class="hotelShowAllPageImg">\n'
                    if (dataHotelKeys[i].thumbnailUrl == '') {
                        hotelListMain += '<img src="../images/hotel_img.png" alt="酒店照片" />'
                    } else if (str.indexOf("https:") >= 0) {
                        hotelListMain += '<img src="' + dataHotelKeys[i].thumbnailUrl + '" alt="酒店照片" />'
                    } else {
                        hotelListMain += '<img src="' + hotelUrlImg + dataHotelKeys[i].thumbnailUrl + hotelUrlImgHou + '" alt="酒店照片" />'
                    }
                    hotelListMain += '\t\t\t\t\t\t\t</div>\n' +
                        '\t\t\t\t\t\t\t<div class="hotelShowAllPageInfo">\n' +
                        '\t\t\t\t\t\t\t\t<h4>' + dataHotelKeys[i].cnName + '</h4>\n' +
                        '\t\t\t\t\t\t\t\t<p class="ellipsis">' + dataHotelKeys[i].address + '</p>\n' +
                        '\t\t\t\t\t\t\t\t<p class="hotelStarMar">星级：\n'
                    if (dataHotelKeys[i].star == 0) {
                        hotelListMain += '无评价'
                    } else if (dataHotelKeys[i].star == 1) {
                        hotelListMain += '<img src="../images/icon/content_hotel_icon_grade.png" id="gradeStar" alt="星级" />'
                    } else if (dataHotelKeys[i].star == 2) {
                        hotelListMain += '<img src="../images/icon/content_hotel_icon_grade.png" id="gradeStar" alt="星级" />' +
                            '            <img src="../images/icon/content_hotel_icon_grade.png" id="gradeStar" alt="星级" />'
                    } else if (dataHotelKeys[i].star == 3) {
                        hotelListMain += '<img src="../images/icon/content_hotel_icon_grade.png" id="gradeStar" alt="星级" />' +
                            '            <img src="../images/icon/content_hotel_icon_grade.png" id="gradeStar" alt="星级" />' +
                            '            <img src="../images/icon/content_hotel_icon_grade.png" id="gradeStar" alt="星级" />'
                    } else if (dataHotelKeys[i].star == 4) {
                        hotelListMain += '<img src="../images/icon/content_hotel_icon_grade.png" id="gradeStar" alt="星级" />' +
                            '            <img src="../images/icon/content_hotel_icon_grade.png" id="gradeStar" alt="星级" />' +
                            '            <img src="../images/icon/content_hotel_icon_grade.png" id="gradeStar" alt="星级" />' +
                            '            <img src="../images/icon/content_hotel_icon_grade.png" id="gradeStar" alt="星级" />'
                    } else if (dataHotelKeys[i].star == 5) {
                        hotelListMain += '<img src="../images/icon/content_hotel_icon_grade.png" id="gradeStar" alt="星级" />' +
                            '            <img src="../images/icon/content_hotel_icon_grade.png" id="gradeStar" alt="星级" />' +
                            '            <img src="../images/icon/content_hotel_icon_grade.png" id="gradeStar" alt="星级" />' +
                            '            <img src="../images/icon/content_hotel_icon_grade.png" id="gradeStar" alt="星级" />' +
                            '            <img src="../images/icon/content_hotel_icon_grade.png" id="gradeStar" alt="星级" />'
                    }

                    hotelListMain += '\t\t\t\t\t\t\t\t</p>\n' +
                        '\t\t\t\t\t\t\t\t<p class="hotelShowAllPageNearby cssFlex">\n'


                    var hotelFacilitiesThree = dataHotelKeys[i].hotelFacilities;
                    if (hotelFacilitiesThree == '') {
                        hotelListMain += ''
                    } else {
                        var hotelFacilitiesThreeArr = hotelFacilitiesThree.slice(0, 3) //取前三个
                        for (var j = 0; j < hotelFacilitiesThreeArr.length; j++) {
                            hotelListMain += '<span>' + hotelFacilitiesThreeArr[j].facility.cnName + '</span>'
                        }
                    }


                    hotelListMain += '\t\t\t\t\t\t\t\t</p>\n' +
                        '\t\t\t\t\t\t\t\t<p>\n'
                    if (dataHotelKeys[i].hotelSort != null) {
                        if (dataHotelKeys[i].hotelSort.minPrice == "-1.05" || dataHotelKeys[i].hotelSort.minPrice == "0" || dataHotelKeys[i].hotelSort.minPrice == null || dataHotelKeys[i].hotelSort.minPrice < 0) {
                            hotelListMain += '\t\t\t\t\t\t\t\t\t<span class="hotelShowAllPagePrice">已售完</span>\n'
                        } else {
                            hotelListMain += '\t\t\t\t\t\t\t\t\t<span class="hotelShowAllPagePrice">￥' + dataHotelKeys[i].hotelSort.minPrice + '</span>\n'
                        }
                    } else {
                        hotelListMain += '\t\t\t\t\t\t\t\t\t<span class="hotelShowAllPagePrice">已售完</span>\n'
                    }
                    if (collectArray == undefined) {
                        hotelListMain += '\t\t\t\t\t\t\t\t\t<span class="hotelShowAllPageFabulous">\n' +
                            '\t\t\t\t\t\t\t\t\t\t<img src="../images/icon/content_hotel_icon_collection.png" class="icon_collection" alt="点赞icon" />\n' +
                            '\t\t\t\t\t\t\t\t\t\t收藏\n' +
                            '\t\t\t\t\t\t\t\t\t</span>\n'
                    } else {
                        if (collectArray.indexOf(dataHotelKeys[i].id) != -1) {
                            hotelListMain += '\t\t\t\t\t\t\t\t\t<span class="hotelShowAllPageFabulous"">\n' +
                                '\t\t\t\t\t\t\t\t\t\t<img src="../images/icon/content_hotel_icon_collection_h.png" class="icon_collection" alt="点赞icon" />\n' +
                                '\t\t\t\t\t\t\t\t\t\t收藏\n' +
                                '\t\t\t\t\t\t\t\t\t</span>\n'
                        } else {
                            hotelListMain += '\t\t\t\t\t\t\t\t\t<span class="hotelShowAllPageFabulous" arrIndexOf="' + collectArray[i] + '">\n' +
                                '\t\t\t\t\t\t\t\t\t\t<img src="../images/icon/content_hotel_icon_collection.png" class="icon_collection" alt="点赞icon" />\n' +
                                '\t\t\t\t\t\t\t\t\t\t收藏\n' +
                                '\t\t\t\t\t\t\t\t\t</span>\n'
                        }
                    }

                    hotelListMain += '\t\t\t\t\t\t\t\t</p>\n' +
                        '\t\t\t\t\t\t\t\t<a class="sucssBtn hotelShowAllDetails">\n' +
                        '\t\t\t\t\t\t\t\t\t<span data-tit="查看详情 >">查看详情</span>\n' +
                        '\t\t\t\t\t\t\t\t</a>\n' +
                        '\t\t\t\t\t\t\t</div>\n' +
                        '\t\t\t\t\t\t</li>'
                }

                $(".hotelShowAllPageList").html(hotelListMain)
                if (!boxpagination) {
                    $('#box').pagination({
                        pageCount: pageSizeAll,
                        jump: true,
                        coping: true,
                        homePage: '首页',
                        endPage: '末页',
                        prevContent: '上页',
                        nextContent: '下页',
                        callback: function (api) {
                            $(".level-3").click()
                            var pageSize = api.getCurrent()
                            console.log(pageSize)
                            hotelListall(pageSize)
                        }
                    }, function (api) {
                        boxpagination = api;
                    });
                } else {
                    boxpagination.setPageCount(pageSizeAll);
                }
            }

        },
        error: function () {

        }
    })



}

function hotelListall(pageSize) {
    hotelList(pageSize)
}

// 收藏小图标  点击
var status;
$(document).on("click", ".hotelShowAllPageFabulous", function () {

    status = 1
    var hotelId = $(this).parents("li").attr("data-hotelId")
    $(this).children(".icon_collection").addClass("icon_collectionClick")
    var params = {};
    params.hotelId = hotelId
    params.status = status
    myAjax(shopcartCollectionHotel, params, handle)

    function handle(data, param) {
        console.log(data)
        status = 0
        $(".icon_collectionClick").attr("src", "../images/icon/content_hotel_icon_collection_h.png")
    }
})

$(document).on("click", ".hotelShowAllDetails", function () {
    var hotelCode = $(this).parents("li").attr("data-hotelId");
    var checkIn = $("#hotelCheckInDate").val();
    var checkOut = $("#hotelCheckOutDate").val();

    var hotelCheckPeopleNum = $("#hotelCheckPeopleNum").val();
    var hotelCheckPeopleNumChil = $("#hotelCheckPeopleNumChil").val();
    var hotelCheckPeopleRoom = $("#hotelCheckPeopleRoom").val();


    childrenAges = $("#childrenAges_0").val()
    childrenAges1 = $("#childrenAges_1").val()
    childrenAges2 = $("#childrenAges_2").val()
    childrenAges3 = $("#childrenAges_3").val()
    childrenAges4 = $("#childrenAges_4").val()
    /*if (childrenAges == undefined || childrenAges1 == undefined || childrenAges2 == undefined || childrenAges3 == undefined || childrenAges4 == undefined){
        childrenAges = ''
        childrenAges1 = ''
        childrenAges2 = ''
        childrenAges3 = ''
        childrenAges4 = ''
    }*/


    var childrenAgesInfo = {
        childrenAges: childrenAges,
        childrenAges1: childrenAges1,
        childrenAges2: childrenAges2,
        childrenAges3: childrenAges3,
        childrenAges4: childrenAges4,
        hotelCheckPeopleNum: hotelCheckPeopleNum,
        hotelCheckPeopleNumChil: hotelCheckPeopleNumChil,
        hotelCheckPeopleRoom: hotelCheckPeopleRoom,
    }
    var childrenAgesInfoJson = JSON.stringify(childrenAgesInfo)
    localStorage.setItem("childrenAgesData", childrenAgesInfoJson)

    window.location.href = "hotelDetails.html?hotelCode=" + hotelCode + "&checkIn=" + checkIn + "&checkOut=" + checkOut + "&ageNum=" + hotelCheckPeopleNumChil
})




// }


hotelList();




/*
// 价格范围  进行搜索
$(".hotelTypeSelectionUl>li").click(function () {
    $(this).addClass("hotelTypeSelectionRangeLeftActive").siblings().removeClass("hotelTypeSelectionRangeLeftActive")
    var hotelPriceId = $(this).attr("data-price")
    ticketListPull(hotelPriceId)
})
// 手动输入价格范围
$(".hotelTypeSelectionRangeSearch").click(function () {
    var priceGt = $("#hotelInputRangeStart").val()
    var priceLt = $("#hotelInputRangeEnd").val()
    console.log(priceGt)
    console.log(priceLt)
    ticketListPull('',priceGt,priceLt)
})
// 星级
$(".hotelTypeStarUl>li").click(function () {
    $(this).addClass("hotelTypeSelectionRangeLeftActive").siblings().removeClass("hotelTypeSelectionRangeLeftActive")
    var hotelPriceId = $(this).attr("data-starId")
    ticketListPull('','','',hotelPriceId)
})
*/