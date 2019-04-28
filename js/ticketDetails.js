
var ticketId = GetQueryString("ticketId");
$("#tickerCheckInDate").val(s3)
var tickerInDate = $("#tickerCheckInDate").val()


// 门票详情页
detailsFun(tickerInDate)
productSkuList = undefined;

function detailsFun(tickerInDate) {
    $.ajax({
        url: ticketRestControllerDetail,
        type: "POST",
        dataType: "json",
        async:true,
        data: {id:ticketId,saleDate:tickerInDate},
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
        traditional:true,

        success: function (data) {
            console.log(data)
            // 详情图片
            if (data.product.thumbnailUrl == ''  || data.product.thumbnailUrl == null){
                $(".hotelHomeDetailsImgTitle").attr("src","../images/hotel_img.png")
            }else {
                $(".hotelHomeDetailsImgTitle").attr("src",serverHttpUrlImg+data.product.thumbnailUrl)
            }

            // 可选套餐
            $(".tickDetailReserveJump").attr("data-ticketDetailId",data.product.id)
            var ticketOptional = ''
            for (var i=0;i<data.productSkuList.length;i++){
                ticketOptional += '<li class="tickDetailReserveJumpLi" data-optional="'+data.productSkuList[i].id+'">'+data.productSkuList[i].title+'</li>'
            }
            $(".ticketOptional").html(ticketOptional)
            // 可选套餐默认选择第一个


            // 点击套餐选择对应的价格
            $(".ticketOptional>li").click(function () {
                var _index = $(".ticketOptional>li").index($(this));
                $(".ticketAdult").html("")
                $(".ticketChildren").html("")
                $(".ticketBaby").html("")
                $(".ticketYong").html("")
                $(".ticketOld").html("")
                priceIdChange(_index)
            })
            function priceIdChange(chageId){
                for (var i=0;i<data.productSkuList[chageId].ageBandList.length;i++){
                    if(data.productSkuList[chageId].ageBandList[i].bandId == 2){
                        var adultPriceTwo = data.productSkuList[chageId].ageBandList[i].priceCNY
                        var adultPriceTwoNow = data.productSkuList[chageId].ageBandList[i].price
                        var adultPriceTwoAge = data.productSkuList[chageId].ageBandList[i].ageFrom
                        var adultPriceTwoAgeTo = data.productSkuList[chageId].ageBandList[i].ageTo
                        adultPriceTwo = adultPriceTwo.toFixed(2);
                        $(".ticketAdult").html("<span class='tickerDetailsPrice'>成人价格：</span><span>￥ <i class='adultPrice' >"+adultPriceTwo+"</i><i class='adultPriceNow' style='display:none;'>"+adultPriceTwoNow+"</i> /人( "+adultPriceTwoAge+"<成人<"+adultPriceTwoAgeTo+")</span>")

                        $(".payGoPiaoAdult").html('<span>成人</span>\n' +
                            '\t\t\t\t\t<div class="hotelDestinationInput hotelInputWidth">\n' +
                            '\t\t\t\t\t\t<input type="text" name="hotelCheckPeopleNum" id="hotelCheckPeopleNum"data-bandId =\'2\' readonly class="addNumInputCommon CheckNum" maxlength="3" onkeyup="value=value.replace(/[^\\d]/g,\'\')" value="1" />\n' +
                            '\t\t\t\t\t\t<input type="hidden" class="hotelCheckPeopleNumResult"/>\n' +
                            '\t\t\t\t\t\t<input type="hidden" class="hotelCheckPeopleNumResultNow"/>\n' +
                            '\t\t\t\t\t\t<img src="../images/icon/content_search_nationality_arrow.png" id="arrowUp" alt="下拉箭头" onclick="show(\'sub\')" />\n' +
                            '\t\t\t\t\t\t<img src="../images/icon/content_search_nationality_arrow.png" id="arrowOut" alt="下拉箭头" onclick="show(\'sum\')"  />\n' +
                            '\t\t\t\t\t</div>')
                        numHome = $(".addNumInputCommon").val() *1;
                    }
                    if(data.productSkuList[chageId].ageBandList[i].bandId == 3){
                        var childPriceTwo = data.productSkuList[chageId].ageBandList[i].priceCNY
                        var childPriceTwoNow = data.productSkuList[chageId].ageBandList[i].price
                        var adultPriceTwoAge = data.productSkuList[chageId].ageBandList[i].ageFrom
                        var adultPriceTwoAgeTo = data.productSkuList[chageId].ageBandList[i].ageTo
                        childPriceTwo = childPriceTwo.toFixed(2);
                        $(".ticketChildren").html("<span class='tickerDetailsPrice'>儿童价格：</span><span>￥<i class='childPrice'>"+childPriceTwo+"</i><i class='childPriceNow' style='display: none'>"+childPriceTwoNow+"</i>/人("+adultPriceTwoAge+"<儿童<"+adultPriceTwoAgeTo+")</span>")
                        $(".payGoPiaoChild").html('<span>儿童</span>\n' +
                            '\t\t\t\t\t<div class="hotelDestinationInput hotelInputWidth">\n' +
                            '\t\t\t\t\t\t<input type="text" name="hotelCheckPeopleNum" id="hotelCheckPeopleNumChild" class="CheckNum" readonly data-bandId =\'3\'  maxlength="3" onkeyup="value=value.replace(/[^\\d]/g,\'\')" value="0" />\n' +
                            '\t\t\t\t\t\t<input type="hidden" class="hotelCheckPeopleNumChildResult"/>\n' +
                            '\t\t\t\t\t\t<input type="hidden" class="hotelCheckPeopleNumChildResultNow"/>\n' +
                            '\t\t\t\t\t\t<img src="../images/icon/content_search_nationality_arrow.png" id="arrowUp" alt="下拉箭头" onclick="showChild(\'sub\')" />\n' +
                            '\t\t\t\t\t\t<img src="../images/icon/content_search_nationality_arrow.png" id="arrowOut" alt="下拉箭头"  onclick="showChild(\'sum\')" />\n' +
                            '\t\t\t\t\t\t<!--<img src="../images/icon/content_search_nationality_arrow.png" id="arrowUpNum" alt="下拉箭头" />-->\n' +
                            '\t\t\t\t\t</div>')
                        numChild = $("#hotelCheckPeopleNumChild").val() *1;
                    }
                    if(data.productSkuList[chageId].ageBandList[i].bandId == 4){
                        var babyPriceTwo = data.productSkuList[chageId].ageBandList[i].priceCNY;
                        var babyPriceTwoNow = data.productSkuList[chageId].ageBandList[i].price;
                        var adultPriceTwoAge = data.productSkuList[chageId].ageBandList[i].ageFrom
                        var adultPriceTwoAgeTo = data.productSkuList[chageId].ageBandList[i].ageTo
                        babyPriceTwo = babyPriceTwo.toFixed(2);
                        $(".ticketBaby").html("<span class='tickerDetailsPrice'>婴儿价格：</span><span>￥<i class='babyPrice'>"+babyPriceTwo+"</i><i class='babyPriceNow' style='display: none'>"+babyPriceTwoNow+"</i>/人("+adultPriceTwoAge+"<婴儿<"+adultPriceTwoAgeTo+")</span>")
                        $(".payGoPiaoBaby").html('<span>婴儿</span>\n' +
                            '\t\t\t\t\t<div class="hotelDestinationInput hotelInputWidth">\n' +
                            '\t\t\t\t\t\t<input type="text" name="hotelCheckPeopleNum" id="hotelCheckPeopleNumBaby" class="CheckNum" readonly data-bandId =\'4\' maxlength="3" onkeyup="value=value.replace(/[^\\d]/g,\'\')" value="0" />\n' +
                            '\t\t\t\t\t\t<input type="hidden" class="hotelCheckPeopleNumBabyResult"/>\n' +
                            '\t\t\t\t\t\t<input type="hidden" class="hotelCheckPeopleNumBabyResultNow"/>\n' +
                            '\t\t\t\t\t\t<img src="../images/icon/content_search_nationality_arrow.png" id="arrowUp" alt="下拉箭头" onclick="showBaby(\'sub\')" />\n' +
                            '\t\t\t\t\t\t<img src="../images/icon/content_search_nationality_arrow.png" id="arrowOut" alt="下拉箭头" onclick="showBaby(\'sum\')"  />\n' +
                            '\t\t\t\t\t\t<!--<img src="../images/icon/content_search_nationality_arrow.png" id="arrowUpNum" alt="下拉箭头" />-->\n' +
                            '\t\t\t\t\t</div>')
                        numBoby= $("#hotelCheckPeopleNumBaby").val() *1;
                    }
                    if(data.productSkuList[chageId].ageBandList[i].bandId == 5){
                        var youngPriceTwo = Number(data.productSkuList[chageId].ageBandList[i].priceCNY)
                        var youngPriceTwoNow = Number(data.productSkuList[chageId].ageBandList[i].price)
                        var adultPriceTwoAge = data.productSkuList[chageId].ageBandList[i].ageFrom
                        var adultPriceTwoAgeTo = data.productSkuList[chageId].ageBandList[i].ageTo
                        youngPriceTwo = youngPriceTwo.toFixed(2);
                        youngPriceTwoNow = youngPriceTwoNow.toFixed(2);
                        $(".ticketYong").html("<span class='tickerDetailsPrice'>青年价格：</span><span>￥<i class='youngPrice'>"+youngPriceTwo+"</i><i class='youngPriceNow' style='display: none'>"+youngPriceTwoNow+"</i>/人("+adultPriceTwoAge+"<青年<"+adultPriceTwoAgeTo+")</span>")
                        $(".payGoPiaoYong").html('<span>青年</span>\n' +
                            '\t\t\t\t\t<div class="hotelDestinationInput hotelInputWidth">\n' +
                            '\t\t\t\t\t\t<input type="text" name="hotelCheckPeopleNum" id="hotelCheckPeopleNumYong" class="CheckNum" readonly data-bandId =\'5\' maxlength="3" onkeyup="value=value.replace(/[^\\d]/g,\'\')" value="0" />\n' +
                            '\t\t\t\t\t\t<input type="hidden" class="hotelCheckPeopleNumYongResult"/>\n' +
                            '\t\t\t\t\t\t<input type="hidden" class="hotelCheckPeopleNumYongResultNow"/>\n' +
                            '\t\t\t\t\t\t<img src="../images/icon/content_search_nationality_arrow.png" id="arrowUp" alt="下拉箭头"  onclick="showOne(\'sub\')"/>\n' +
                            '\t\t\t\t\t\t<img src="../images/icon/content_search_nationality_arrow.png" id="arrowOut" alt="下拉箭头" onclick="showOne(\'sum\')"  />\n' +
                            '\t\t\t\t\t\t<!--<img src="../images/icon/content_search_nationality_arrow.png" id="arrowUpNum" alt="下拉箭头" />-->\n' +
                            '\t\t\t\t\t</div>')
                        numYong = $("#hotelCheckPeopleNumYong").val() *1;
                    }
                    if(data.productSkuList[chageId].ageBandList[i].bandId == 6){
                        var oldPriceTwo = data.productSkuList[chageId].ageBandList[i].priceCNY
                        var oldPriceTwoNow = data.productSkuList[chageId].ageBandList[i].price
                        var adultPriceTwoAge = data.productSkuList[chageId].ageBandList[i].ageFrom
                        var adultPriceTwoAgeTo = data.productSkuList[chageId].ageBandList[i].ageTo
                        oldPriceTwo = oldPriceTwo.toFixed(2);
                        $(".ticketOld").html("<span class='tickerDetailsPrice'>老人价格：</span><span>￥<i class='oldPrice'>"+oldPriceTwo+"</i><i class='oldPriceNow' style='display: none'>"+oldPriceTwoNow+"</i>/人("+adultPriceTwoAge+"<老人<"+adultPriceTwoAgeTo+")</span>")

                        $(".payGoPiaoOld").html('<span>老人</span>\n' +
                            '\t\t\t\t\t<div class="hotelDestinationInput hotelInputWidth">\n' +
                            '\t\t\t\t\t\t<input type="text" name="hotelCheckPeopleNum" id="hotelCheckPeopleNumOld" class="CheckNum" readonly data-bandId =\'6\'maxlength="3" onkeyup="value=value.replace(/[^\\d]/g,\'\')" value="0" />\n' +
                            '\t\t\t\t\t\t<input type="hidden" class="hotelCheckPeopleNumOldResult"/>\n' +
                            '\t\t\t\t\t\t<input type="hidden" class="hotelCheckPeopleNumOldResultNow"/>\n' +
                            '\t\t\t\t\t\t<img src="../images/icon/content_search_nationality_arrow.png" id="arrowUp" alt="下拉箭头" onclick="showOld(\'sub\')" />\n' +
                            '\t\t\t\t\t\t<img src="../images/icon/content_search_nationality_arrow.png" id="arrowOut" alt="下拉箭头" onclick="showOld(\'sum\')"  />\n' +
                            '\t\t\t\t\t\t<!--<img src="../images/icon/content_search_nationality_arrow.png" id="arrowUpNum" alt="下拉箭头" />-->\n' +
                            '\t\t\t\t\t</div>')
                        numOld= $("#hotelCheckPeopleNumOld").val() *1;
                    }


                }
                // 页面加载完成计算总价
                var allPricePull = Number($(".adultPrice").text());
                var allPricePullNow = Number($(".adultPriceNow").text());
                allPricePull = allPricePull.toFixed(2)
                allPricePullNow = allPricePullNow.toFixed(2)
                if (allPricePull == allPricePullNow){
                    $(".tickerDetailsAllPriceaLL").hide()
                }else {
                    $(".tickerDetailsAllPriceaLL").show()
                }

                $(".tickerDetailsAllPriceaLL").html(allPricePull);


                if (data.productSkuList[0].ageBandList == ''){
                    $(".tickerDetailsAllPrice").html('<i class="tickerDetailsAllPriceaLL" style="text-decoration: line-through; margin-right: 15px; display: none;">0.00</i><i class="tickerDetailsAllPriceaLLNow"><em style="color: #ff9600;">暂无价格</em></i>');
                }else {
                    $(".tickerDetailsAllPriceaLLNow").html(+allPricePullNow);
                }

                $(".hotelCheckPeopleNumResult").val(allPricePull)  //默认给隐藏的input  value  赋值
                $(".hotelCheckPeopleNumResultNow").val(allPricePullNow)  //默认给隐藏的input  value  赋值
            }
            $(function () {
                $(".ticketOptional>li:first-of-type").click()
            })
            $(".hotelNavBreadTitle").html(data.product.title)    //面包屑导航
            $(".hotelNavBreadCity").html(data.product.city.name)    //面包屑导航
            $(".ticketTitle").html(data.product.title)      //门票标题
            $(".ticketType").html(data.product.categories[0].name)      //产品类型
            $(".ticketLangue").html(data.product.languageService)      //服务语言
            $(".ticketPrduct").html(data.product.code)      //产品编号
            $(".ticketPlay").html(data.product.duration)      //游玩时间
            // 凭票类型
            if (data.product.voucherType == "1"){
                $(".ticketPing").html("电子票")
            }else if(data.product.voucherType == "2"){
                $(".ticketPing").html("电子确认函")
            }else if(data.product.voucherType == "3"){
                $(".ticketPing").html("电子票或确认函")
            }else if(data.product.voucherType == "4"){
                $(".ticketPing").html("实体票")
            }else if(data.product.voucherType == "5"){
                $(".ticketPing").html("纸质打印版")
            }else if(data.product.voucherType == "6"){
                $(".ticketPing").html("电子确认函换票")
            }else if(data.product.voucherType == "7"){
                $(".ticketPing").html("扫码电子票")
            }else {
                $(".ticketPing").html("无")
            }



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
            if (data.productDTOS.length != "4"){
                $(".TicketRelevant").hide()
                $(".tickerRecommend").html('')
            }else{
                allMapHot += '<a href="../html/tickerDetails.html?ticketId='+data.productDTOS[0].id+'">'+
                    '<li>\n'
                if (data.productDTOS[0].thumbnailUrl == null || data.productDTOS[0].thumbnailUrl == ''){
                    allMapHot +='\t\t\t\t\t<img src="../images/zhan.jpeg" class="tickerRecommendAllImg" alt="相关推荐" />\n'
                } else{
                    allMapHot +='\t\t\t\t\t<img src="'+serverHttpUrlImg+''+data.productDTOS[0].thumbnailUrl+'" class="tickerRecommendAllImg" alt="相关推荐" />\n'
                }
                allMapHot += '\t\t\t\t\t<img src="../images/icon/threeJImg.png" class="tickerThreeJ"/>\n' +
                    '\t\t\t\t</li>\n' +
                    '</a>'+
                    '<a href="../html/tickerDetails.html?ticketId='+data.productDTOS[0].id+'">'+
                    '\t\t\t\t<li>\n' +
                    '\t\t\t\t\t<h4 class="textOverflow"> '+data.productDTOS[0].enTitle+'</h4>\n' +
                    ''+data.productDTOS[0].detail.recommend+''+
                    // '\t\t\t\t\t<p class="tickerRecommendAllPrice">￥'+data.productDTOS[0].price+'起</p>\n' +
                    '\t\t\t\t</li>\n' +
                    '</a>'+
                    '<a href="../html/tickerDetails.html?ticketId='+data.productDTOS[1].id+'">'+
                    '\t\t\t\t<li>\n'
                if (data.productDTOS[1].thumbnailUrl == null || data.productDTOS[1].thumbnailUrl == ''){
                    allMapHot +='\t\t\t\t\t<img src="../images/zhan.jpeg" class="tickerRecommendAllImg" alt="相关推荐" />\n'
                } else{
                    allMapHot +='\t\t\t\t\t<img src="'+serverHttpUrlImg+''+data.productDTOS[1].thumbnailUrl+'" class="tickerRecommendAllImg" alt="相关推荐" />\n'
                }
                allMapHot +='\t\t\t\t\t<img src="../images/icon/threeJImg.png" class="tickerThreeJ"/></li>\n' +
                    '\t\t\t\t</li>\n' +
                    '</a>'+
                    '<a href="../html/tickerDetails.html?ticketId='+data.productDTOS[1].id+'">'+
                    '\t\t\t\t<li>\n' +
                    '\t\t\t\t\t<h4 class="textOverflow"> '+data.productDTOS[1].enTitle+'</h4>\n'+
                    ''+data.productDTOS[1].detail.recommend+''+
                    // '\t\t\t\t\t<p class="tickerRecommendAllPrice">￥'+data.productDTOS[1].price+'起</p>\n' +
                    '\t\t\t\t</li>\n' +
                    '</a>'+
                    '<a href="../html/tickerDetails.html?ticketId='+data.productDTOS[2].id+'">'+
                    '\t\t\t\t<li>\n' +
                    '\t\t\t\t\t<h4 class="textOverflow">'+data.productDTOS[2].enTitle+'</h4>\n' +
                    ''+data.productDTOS[2].detail.recommend+''+
                    // '\t\t\t\t\t<p class="tickerRecommendAllPrice">￥'+data.productDTOS[2].price+'起</p>\n' +
                    '\t\t\t\t</li>\n' +
                    '</a>'+
                    '<a href="../html/tickerDetails.html?ticketId='+data.productDTOS[2].id+'">'+
                    '\t\t\t\t<li>\n'
                if (data.productDTOS[2].thumbnailUrl == null || data.productDTOS[2].thumbnailUrl == ''){
                    allMapHot +='\t\t\t\t\t<img src="../images/zhan.jpeg" class="tickerRecommendAllImg" alt="相关推荐" />\n'
                } else{
                    allMapHot +='\t\t\t\t\t<img src="'+serverHttpUrlImg+''+data.productDTOS[2].thumbnailUrl+'" class="tickerRecommendAllImg" alt="相关推荐" />\n'
                }
                allMapHot +='\t\t\t\t\t<img src="../images/icon/threeJImg.png" class="tickerThreeJR"/>\n' +
                    '\t\t\t\t</li>\n' +
                    '</a>'+
                    '<a href="../html/tickerDetails.html?ticketId='+data.productDTOS[3].id+'">'+
                    '\t\t\t\t<li>\n' +
                    '\t\t\t\t\t<h4 class="textOverflow">'+data.productDTOS[3].enTitle+'</h4>\n' +
                    ''+data.productDTOS[3].detail.recommend+''+
                    // '\t\t\t\t\t<p class="tickerRecommendAllPrice">￥'+data.productDTOS[3].price+'起</p>\n' +
                    '\t\t\t\t</li>\n' +
                    '</a>'+
                    '<a href="../html/tickerDetails.html?ticketId='+data.productDTOS[3].id+'">'+
                    '\t\t\t\t<li>\n'
                if (data.productDTOS[3].thumbnailUrl == null || data.productDTOS[3].thumbnailUrl == ''){
                    allMapHot +='\t\t\t\t\t<img src="../images/zhan.jpeg" class="tickerRecommendAllImg" alt="相关推荐" />\n'
                } else{
                    allMapHot +='\t\t\t\t\t<img src="'+serverHttpUrlImg+''+data.productDTOS[3].thumbnailUrl+'" class="tickerRecommendAllImg" alt="相关推荐" />\n'
                }
                allMapHot +='\t\t\t\t\t<img src="../images/icon/threeJImg.png" class="tickerThreeJR"/>\n' +
                    '\t\t\t\t</li>'+
                    '</a>'
                $(".tickerRecommend").html(allMapHot)



            }
        },
        error: function() {

        }

    });

}
// console.log(ticketId)





$(document).on("click",".tickDetailReserveJumpLi",function () {
    $(this).addClass("tickerCheckPeopleActive").siblings().removeClass("tickerCheckPeopleActive")
})


$(".tickDetailReserveJump").click(function () {

    var adult = $("#hotelCheckPeopleNum").val()      //门票张数
    var yong = $("#hotelCheckPeopleNumYong").val()
    var child = $("#hotelCheckPeopleNumChild").val()
    var baby = $("#hotelCheckPeopleNumBaby").val()
    var Old = $("#hotelCheckPeopleNumOld").val()
    var price = Number($(".tickerDetailsAllPriceaLL").text())
    console.log(price)
    var priceNow = Number($(".tickerDetailsAllPriceaLLNow").text())
    /*var price = price.toFixed(2)
    var priceNow = priceNow.toFixed(2)
    console.log(priceNow)*/
    var tickerCheckInDate = $("#tickerCheckInDate").val();   //日期
    var thumbnailUrl = $(".hotelHomeDetailsImgTitle").attr("src")
    var skuId = $(".tickerCheckPeopleActive").attr("data-optional");


    /*localStorage.setItem("skuId", skuId);
    localStorage.setItem("tickerCheckInDate", tickerCheckInDate);
    localStorage.setItem("adult", adult);
    localStorage.setItem("yong", yong);
    localStorage.setItem("child", child);
    localStorage.setItem("baby", baby);
    localStorage.setItem("thumbnailUrl", thumbnailUrl);
    localStorage.setItem("Old", Old);
    localStorage.setItem("price", price);*/



    var allDataJson = {
        "skuId":skuId,
        "tickerCheckInDate":tickerCheckInDate,
        "adult":adult,
        "yong":yong,
        "child":child,
        "baby":baby,
        "thumbnailUrl":thumbnailUrl,
        "Old":Old,
        "price":price,
        "priceNow":priceNow,
    }
    var allDataJson = JSON.stringify(allDataJson)
    localStorage.setItem("allData",allDataJson)
    window.location.href = "../html/tickerOrderPay.html";
})


//  门票 加入购物check
var disBtn = true
$(document).on("click",".tickDetailReserve",function () {
    var adult = $("#hotelCheckPeopleNum").val()      //门票张数
    var yong = $("#hotelCheckPeopleNumYong").val()
    var child = $("#hotelCheckPeopleNumChild").val()
    var baby = $("#hotelCheckPeopleNumBaby").val()
    var Old = $("#hotelCheckPeopleNumOld").val()
    var price = $(".tickerDetailsAllPriceaLL").text()
    var tickerCheckInDate = $("#tickerCheckInDate").val();   //日期
    var thumbnailUrl = $(".hotelHomeDetailsImgTitle").attr("src")
    var skuId = $(".tickerCheckPeopleActive").attr("data-optional");
    var bandArray = [{bandId: 2,bandNum:adult},{bandId:3,bandNum:child},{bandId:4,bandNum:baby},{bandId:5,bandNum:yong},{bandId:6,bandNum:Old}]

    var shopJson = {
        'skuId': skuId,
        'startDate': tickerCheckInDate,
        'nowPrice': price,
        'monthlyPrice': price,
        'bandArray': bandArray,
        'thumbnailUrl': thumbnailUrl
    }

    var tickDetail ={}
    tickDetail.shop = JSON.stringify(shopJson)
    myAjax(shopcartJoinCart,tickDetail, handle)
    function handle(data, param) {
        console.log(data)
    }
})




