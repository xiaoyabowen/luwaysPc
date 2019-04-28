var keywordsPrev = GetQueryString("keywords")
// console.log(keywordsPrev)
$("#hotelDestinatinInput").val(keywordsPrev);


// 门票目的地  关键字搜索

/*function searchSuggestTiket(obj){
    var searchKey=$(obj).val();
    $.ajax({
        url: ticketRestController,
        type: "POST",
        dataType: "json",
        sync:true,
        data: {term:$("#hotelDestinatinInput").val()},
        xhrFields: {
            withCredentials: true
        },
        traditional:true,

        success: function (data) {
            var arr=[];
            for(var i=0,len=data.findList.length;i<len;i++){
                if(searchKey!="" && data.findList[i].name.indexOf(searchKey)!=-1)  {
                    arr.push("<li class='cssFlex' onclick='changeSearchKeyTiket(this);'><span class='SearchKeyVal SearchKeyTiketVal'><i class='SearchKeyTiketValI'>"+data.findList[i].name+"</i> "+data.findList[i].name+" </span><span class='SearchKeyTiketValB'><b>"+data.findList[i].productSum+"</b>&nbsp;款产品</span></li>");
                }else{
                    $(".keywords_list_ticketDetal").html("<li>暂时没有数据</li>")
                }
            }
            $(".keywords_list_ticketDetal").html(arr).fadeIn();
        },
        error: function() {

        }

    });
    $("#hotelDestinatinInput").blur(function () {
        $(".keywords_list_ticketDetal").hide();
    })

}*/
$("#hotelDestinatinInput").focus(function () {
    var searchKey=$(this).val();
    console.log(searchKey)
    $.ajax({
        url: ticketRestController,
        type: "POST",
        dataType: "json",
        sync:true,
        data: {term:$("#hotelDestinatinInput").val()},
        xhrFields: {
            withCredentials: true
        },
        traditional:true,
        success: function (data) {
            console.log(data.findList)
            var arr=[];
            for(var i=0,len=data.findList.length;i<len;i++){
                // if(searchKey!="")  {
                    arr.push("<li class='cssFlex' onclick='changeSearchKeyTiket(this);'><span class='SearchKeyVal SearchKeyTiketVal'><i class='SearchKeyTiketValI'>"+data.findList[i].name+"</i> "+data.findList[i].name+" </span><span class='SearchKeyTiketValB'><b>"+data.findList[i].productSum+"</b>&nbsp;款产品</span></li>");
                // }else{
                //     $(".keywords_list_ticketDetal").html("<li>暂时没有数据</li>")
                // }
            }
            console.log(arr)
            $(".keywords_list_ticketDetal").html(arr).fadeIn();
        },
        error: function() {

        }

    });
})
$("#hotelDestinatinInput").blur(function () {
    $(".keywords_list_ticketDetal").fadeOut();
})
// 门票搜索点击按钮
function changeSearchKeyTiket(obj) {
    var value = $(obj).children(".SearchKeyTiketVal").children("i").text();
    $("#hotelDestinatinInput").val(value);
    $('.keywords_list').fadeOut();
}



// 门票列表页渲染


$(".tickerCheckPeopleSerch").click(function () {
    ticketListPull()
    $(".keywords_list_ticketDetal").fadeOut();
    $('html,body').animate({scrollTop: $("#scrollPos").offset().top},500);
})

// 门票列表分页
// var setTotalCount = 301;

ticketListPull();

// =============================================门票列表分页
var boxpagination = false ;
function ticketListPull(priceGt,priceLt,playText,commitNum,pageSize) {
    var keywordsTicket= $("#hotelDestinatinInput").val();
    var params = {};
    params.keywords = keywordsTicket;
    params.priceGt = priceGt;
    params.priceLt = priceLt;
    params.page = pageSize;
    params.filteredCategorie = playText;
    params.confirmType = commitNum;
    $.ajax({
        url: ticketRestController,
        type: "POST",
        dataType: "json",
        sync:true,
        data: params,
        beforeSend: function () {
            $(".ticketShowAllPageList").append('<div id="loadingPageSub"><img src="../images/timg.gif" alt=""></div>');
        },
        complete: function () {
            $("#loadingPageSub").remove()
        },
        xhrFields: {
            withCredentials: true
        },
        traditional:true,

        success: function (data) {
            console.log(data)
            pageAll = data.list.totalElements
            $(".hotelNavBread").attr("data-page",data.productList.totalPages)    //
            // 固定id
            $(".tickDetailReserveJump").attr("data-detailId",data.product.id)

            var ticketList = ''
            for (var i=0;i<data.productList.content.length;i++){
                var str = data.productList.content[i].thumbnailUrl
                ticketList += '<li data-ticket="'+data.productList.content[i].id+'">\n' +
                    '\t\t\t\t\t\t\t<div class="hotelShowAllPageImg">\n'
                if(data.productList.content[i].thumbnailUrl == '' || data.productList.content[i].thumbnailUrl == null){
                    ticketList += '<img src="../images/hotel_img.png" alt="玩乐照片" />'
                }else if(str.indexOf("http:")>=0){
                    ticketList += '<img src="'+data.productList.content[i].thumbnailUrl+'" alt="玩乐照片" />'
                }else{
                    ticketList += '<img src="'+serverHttpUrlImg+''+data.productList.content[i].thumbnailUrl+serverHttpUrlImgHou+'" alt="玩乐照片" />'
                }
                ticketList += '\t\t\t\t\t\t\t</div>\n' +
                    '\t\t\t\t\t\t\t<div class="hotelShowAllPageInfo">\n' +
                    '\t\t\t\t\t\t\t\t<h4 class="ellipsis">'+data.productList.content[i].title+'</h4>\n' +
                    '\t\t\t\t\t\t\t\t<p>'+data.productList.content[i].city.name+'</p>\n' +
                    '\t\t\t\t\t\t\t\t<p>\n' +
                    '\t\t\t\t\t\t\t\t\t服务语言：'
                if (data.productList.content[i].languageService == "en"){
                    ticketList +=  '<span style="margin-right: 20px">英语</span>'
                }else if (data.productList.content[i].languageService == "zh"){
                    ticketList +=  '<span style="margin-right: 20px">汉语</span>'
                }else if (data.productList.content[i].languageService == "sv"){
                    ticketList +=  '<span style="margin-right: 20px">瑞士语</span>'
                }else if (data.productList.content[i].languageService == "ja"){
                    ticketList +=  '<span style="margin-right: 20px">日语</span>'
                }else if (data.productList.content[i].languageService == "pt"){
                    ticketList +=  '<span style="margin-right: 20px">葡萄牙语</span>'
                }else if (data.productList.content[i].languageService === "fr"){
                    ticketList +=  '<span style="margin-right: 20px">法语</span>'
                }else if (data.productList.content[i].languageService == "de"){
                    ticketList +=  '<span style="margin-right: 20px">德语</span>'
                } else if (data.productList.content[i].languageService == "es"){
                    ticketList +=  '<span style="margin-right: 20px">西班牙语</span>'
                }else{
                    ticketList +=  '<span style="margin-right: 20px">其他</span>'
                }

                // '\t\t\t\t\t\t\t\t</p>\n' +
                //  '\t\t\t\t\t\t\t\t<p>\n' +
                 ticketList +=  '\t\t\t\t\t\t\t\t\t游玩时间：<span>'+data.productList.content[i].duration+'</span>\n' +
                    '\t\t\t\t\t\t\t\t</p>\n' +
                    '\t\t\t\t\t\t\t\t<p class="cssFlex">\n'
                for(var g = 0;g<data.productList.content[i].categories.length;g++){
                    ticketList += '<span class="tickerLabel">'+data.productList.content[i].categories[g].name+'</span>\n'
                }

                ticketList += '\t\t\t\t\t\t\t\t</p>\n' +
                    '\t\t\t\t\t\t\t\t<p class="tickerOrderPrice">\n'

                    ticketList += '\t\t\t\t\t\t\t\t\t￥'+data.productList.content[i].price+'起\n'



                ticketList +=  '\t\t\t\t\t\t\t\t</p>\n' +
                    '\t\t\t\t\t\t\t\t<a class="sucssBtn tickerShowAllDetails">\n' +
                    '\t\t\t\t\t\t\t\t\t<span data-tit="立即预定 >">立即预定</span>\n' +
                    '\t\t\t\t\t\t\t\t</a>\n' +
                    '\t\t\t\t\t\t\t</div>\n' +
                    '\t\t\t\t\t\t</li>'
                $(".ticketShowAllPageList").html(ticketList)

                // 境外目的地推荐
                var ticketObjective = ''
                for (var g=0;g<data.isHotLocation.length;g++){
                    ticketObjective += '<li class="textOverflow textOverflowOne" Objective="'+data.isHotLocation[g].id+'">'+data.isHotLocation[g].name+'</li>'
                }
                $(".ticketObjective").html(ticketObjective)


                // 热门景点
                var ticketHot = ''
                for (var j=0;j<data.isHotProduct.length;j++){
                    ticketHot += '<a href="../html/tickerDetails.html?ticketId='+data.isHotProduct[j].id+'">' +
                        '<li>\n' +
                        '\t\t\t\t\t\t\t<div class="hotelShowAllMapImg">\n' +
                        '\t\t\t\t\t\t\t\t<img src="'+serverHttpUrlImg+data.isHotProduct[j].thumbnailUrl+serverHttpUrlImgHou+'" alt="玩乐照片"/>\n' +
                        '\t\t\t\t\t\t\t</div>\n' +
                        '\t\t\t\t\t\t\t<h4>'+data.isHotProduct[j].title+'</h4>\n' +
                        '\t\t\t\t\t\t\t<p class="hotelShowAllMapHotPrice">¥'+data.isHotProduct[j].price+'起</p>\n' +
                        '\t\t\t\t\t\t</li>'
                    '</a>'
                }
                $(".ticketHot").html(ticketHot)

                // 门票列表  点击进入详情
                $(".ticketShowAllPageList>li").click(function () {
                    var ticketIdThis = $(this).attr("data-ticket")
                    window.location.href = "../html/tickerDetails.html?ticketId="+ ticketIdThis
                })

            };
            if(!boxpagination){
                $('#box').pagination({
                    pageCount: data.list.totalPages,
                    jump: true,
                    coping: true,
                    homePage: '首页',
                    endPage: '末页',
                    prevContent: '上页',
                    nextContent: '下页',
                    callback: function (api) {
                        $(".level-3").click()
                        ticketListPull('','','','',api.getCurrent())    //调用
                    }
                },function(api){
                    boxpagination=  api;
                });
            }else{
                boxpagination.setPageCount(data.list.totalPages);
            }
        },
        error: function() {

        }
    })

   /* var keywordsTicket= $("#hotelDestinatinInput").val();
    var params = {};
    params.keywords = keywordsTicket;
    params.priceGt = priceGt;
    params.priceLt = priceLt;
    params.page = pageSize;
    params.filteredCategorie = playText;
    params.confirmType = commitNum;
    myAjax(ticketRestController,params , handle)
    function handle(data, param) {
       /!* $("#setTotalCount").val(data.list.totalElements)
        $("#totalPages").val(data.list.totalPages)
*!/
        console.log(data)
        pageAll = data.list.totalElements
        $(".hotelNavBread").attr("data-page",data.productList.totalPages)    //

        // 固定id
        $(".tickDetailReserveJump").attr("data-detailId",data.product.id)

        var ticketList = ''
        for (var i=0;i<data.productList.content.length;i++){
            ticketList += '<li data-ticket="'+data.productList.content[i].id+'">\n' +
                '\t\t\t\t\t\t\t<div class="hotelShowAllPageImg">\n'
            if(data.productList.content[i].thumbnailUrl == ''){
                ticketList += '<img src="../images/hotel_img.png" alt="玩乐照片" />'
            }else{
                ticketList += '<img src="'+serverHttpUrlImg+''+data.productList.content[i].thumbnailUrl+serverHttpUrlImgHou+'" alt="玩乐照片" />'
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
                '\t\t\t\t\t\t\t\t<p class="cssFlex">\n'
                for(var g = 0;g<data.productList.content[i].categories.length;g++){
                    ticketList += '<span class="tickerLabel">'+data.productList.content[i].categories[g].name+'</span>\n'
                }

                ticketList += '\t\t\t\t\t\t\t\t</p>\n' +
                '\t\t\t\t\t\t\t\t<p class="tickerOrderPrice">\n' +
                '\t\t\t\t\t\t\t\t\t￥'+data.productList.content[i].price+'起\n' +
                '\t\t\t\t\t\t\t\t</p>\n' +
                '\t\t\t\t\t\t\t\t<a class="sucssBtn tickerShowAllDetails">\n' +
                '\t\t\t\t\t\t\t\t\t<span data-tit="立即预定 >">立即预定</span>\n' +
                '\t\t\t\t\t\t\t\t</a>\n' +
                '\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t</li>'
            $(".ticketShowAllPageList").html(ticketList)

            // 境外目的地推荐
            var ticketObjective = ''
            for (var g=0;g<data.isHotLocation.length;g++){
                ticketObjective += '<li class="textOverflow textOverflowOne" Objective="'+data.isHotLocation[g].id+'">'+data.isHotLocation[g].name+'</li>'
            }
            $(".ticketObjective").html(ticketObjective)


            // 热门景点
            var ticketHot = ''
            for (var j=0;j<data.isHotProduct.length;j++){
                ticketHot += '<a href="../html/tickerDetails.html?ticketId='+data.isHotProduct[j].id+'">' +
                    '<li>\n' +
                    '\t\t\t\t\t\t\t<div class="hotelShowAllMapImg">\n' +
                    '\t\t\t\t\t\t\t\t<img src="'+serverHttpUrlImg+data.isHotProduct[j].thumbnailUrl+serverHttpUrlImgHou+'" alt="玩乐照片"/>\n' +
                    '\t\t\t\t\t\t\t</div>\n' +
                    '\t\t\t\t\t\t\t<h4>'+data.isHotProduct[j].title+'</h4>\n' +
                    '\t\t\t\t\t\t\t<p class="hotelShowAllMapHotPrice">¥'+data.isHotProduct[j].price+'起</p>\n' +
                    '\t\t\t\t\t\t</li>'
                    '</a>'
            }
            $(".ticketHot").html(ticketHot)

            // 门票列表  点击进入详情
            $(".ticketShowAllPageList>li").click(function () {
                var ticketIdThis = $(this).attr("data-ticket")
                window.location.href = "../html/tickerDetails.html?ticketId="+ ticketIdThis
            })

        };
        if(!boxpagination){
            $('#box').pagination({
                pageCount: data.list.totalPages,
                jump: true,
                coping: true,
                homePage: '首页',
                endPage: '末页',
                prevContent: '上页',
                nextContent: '下页',
                callback: function (api) {
                    ticketListPull('','','','',api.getCurrent())    //调用
                }
            },function(api){
                console.log(api)
                boxpagination= api;
            });
        }else{
            boxpagination.setPageCount(data.list.totalPages);
        }
    }*/

}

// 境外目的地搜索
$(document).on("click",".ticketObjective>li",function (page) {
     var keywordsThis = $(this).text()
    $("#hotelDestinatinInput").val(keywordsThis);
    ticketListPull('','','','',page)
})



/*// ticketListPull()    //调用
function ticketListBack(page){
    ticketListPull('','','','',page)
}*/


// =============================================门票列表分页







// 价格范围
$(".tickerTypeSelectionRangeUlList>li").click(function () {
    $(this).addClass("tickerTypeSelectionRangeLeftActive").siblings().removeClass("tickerTypeSelectionRangeLeftActive")
    var priceGt = $(this).attr("data-gt")
    var priceLt = $(this).attr("data-lt")
    ticketListPull(priceGt,priceLt)
    conditionLoad()
})
// 价格范围手动输入查询tickDetailReserve
$(".tickerTypeSelectionRangeSearch").click(function () {
    var priceGt = $("#tickerInputRangeStart").val()
    var priceLt = $("#tickerInputRangeEnd").val()
    console.log(priceGt)
    console.log(priceLt)
    ticketListPull(priceGt,priceLt)
    conditionLoad()
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
    ticketListPull('','',playText)
    conditionLoad()
})

// 及时确认
$(".tickerTypeSelectionRangeCommit>li").click(function () {
    $(this).addClass("tickerTypeSelectionRangeLeftActive").siblings().removeClass("tickerTypeSelectionRangeLeftActive")
    var commitNum = $(this).attr("data-commit")
    ticketListPull('','','',commitNum)
    conditionLoad()
})




