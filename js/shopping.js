myAjax(accountRestControlleNum,'', handle)

function handle(data, param) {
    $(".myOrderShoppingCart").html(data.shopCount)
    $(".myOrderAllnNumber").html(data.orderCount)
}
// 获取我的订单内容

$(".tickerSerchShop").click(function () {
    var myOrderName = $("#myOrderName").val();
    shopServer(myOrderName)
})


function shopServer(myOrderName) {

    var shopOrder = {}
    shopOrder.key = myOrderName;

    myAjax(shopcartCartdisplay, shopOrder, handle)

    function handle(data, param) {
        console.log(data)
        if (data.list == '') {
            $(".myOrderNullImgBox").show()
        } else {
            $(".myOrderNullImgBox").hide()
            var shopData = '<tr>\n' +
                '\t\t\t\t\t<th style="width: 150px;text-align: left;" class="myOrderLabel">\n' +
                /*'\t\t\t\t\t\t<label id="allAndNotAll">\n' +
                '\t\t\t\t\t\t\t<input type="radio" class="myOrderHaveCheck" name="allAndNotAll"  value="" /> 全选\n' +
                '\t\t\t\t\t\t</label>\n' +*/
                '\t\t\t\t\t\t<span class="myOrderDel">删除</span>\n' +
                '\t\t\t\t\t</th>\n' +
                '\t\t\t\t\t<th style="width: 380px;">名称</th>\n' +
                // '\t\t\t\t\t<th style="width: 104px;">类型</th>\n' +
                '\t\t\t\t\t<th style="width: 380px;">人数</th>\n' +
                '\t\t\t\t\t<th style="width: 146px;">价格</th>\n' +
                '\t\t\t\t\t<th style="width: 200px;">操作</th>\n' +
                '\t\t\t\t</tr>';

            var shopDataMain = ''

            for (var i = 0; i < data.list.length; i++) {
                shopDataMain += '<tr>\n' +
                    '\t\t\t\t\t<td><img src="'+serverHttpUrlImg+'' + data.list[i].productSku.product.thumbnailUrl + '" alt="订单图片" /></td>\n' +
                    '\t\t\t\t\t<td style=" text-align: left;">\n' +
                    /*'\t\t\t\t\t\t<label class="labelInputClick">\n' +
                    '\t\t\t\t\t\t\t<input type="radio" class="myOrderHaveCheck" name="checkItem"   data-shopId ="'+data.list[i].id+'" /> \n' +
                    '\t\t\t\t\t\t</label>\n' +*/
                    // '   <div class="inputClassEdit">'+
                    '       <input type="radio" class="myOrderHaveCheck"  name="checkItem" id="model'+i+'" data-shopId ="'+data.list[i].id+'" />  '+
                    '       <label for="model'+i+'"></label>  '+
                    // '   </div>  '+
                    '\t\t\t\t\t\t<span class="myOrderMakeNum">\n' +
                    '\t\t\t\t\t\t\t预定日期：<i class="dataChuo">' + timestampToTime(data.list[i].startDate) + '</i>\n' +
                    '\t\t\t\t\t\t</span>\n' +
                    '\t\t\t\t\t\t<p class="myOrderMakedate">\n' +
                    '\t\t\t\t\t\t\t游玩时长：<span>' + data.list[i].productSku.product.duration + '</span>\n' +
                    '\t\t\t\t\t\t</p>\n' +
                    '\t\t\t\t\t\t<h4>' +  data.list[i].productSku.product.title + ' </h4>\n' +
                    '\t\t\t\t\t\t<p class="myOrderMakeSubTitle">' + data.list[i].productSku.title + '</p>\n' +
                    '\t\t\t\t\t</td>\n'
               /* // '\t\t\t\t\t<td>门票</td>\n' +
                if (data.list[i].orderType == '0') {
                    shopDataMain += '<td>当地玩乐</td>'
                } else if (data.list[i].orderType == '1') {
                    shopDataMain += '<td>酒店</td>'
                } else if (data.list[i].orderType == '2') {
                    shopDataMain += '<td>发送voucher</td>'
                } else if (data.list[i].orderType == '3') {
                    shopDataMain += '<td>voucher直连下单</td>'
                } else {
                    shopDataMain += '<td>未知状态</td>'
                }*/

                shopDataMain += '\t\t\t\t\t<td>\n'
                for (var j =0;j<data.list[i].item.length;j++){
                    shopDataMain +=  '\t\t\t\t\t\t<p>'+data.list[i].item[j].itemName+'：<span>'+data.list[i].item[j].itemValue+'位</span></p>\n'
                }
                shopDataMain += '\t\t\t\t\t</td>\n'
                shopDataMain += '\t\t\t\t\t<td>\n' +
                    '\t\t\t\t\t\t<p class="myOrderPrice">' + data.list[i].nowPrice + '起</p>\n' +
                    '\t\t\t\t\t</td>\n' +
                    '\t\t\t\t\t<td>\n'
                shopDataMain += '<a class="sucssBtn myOrderBtn myOrderShopDetail" data-shopIdPay="'+data.list[i].productId+'">\n' +
                '<span data-tit="查看详情 >">查看详情</span>\n' +
                '</a>\n' +
                '<a class="sucssBtn myOrderBtn myOrderPay" data-shopIdPay="'+data.list[i].productId+'">\n' +
                '<span data-tit="立即预定 >">立即预定</span>\n' +
                '</a>\n'

                /*if (data.list[i].orderStatus == '1') {
                    shopDataMain += '<a class="sucssBtn myOrderBtn">\n' +
                        '<span data-tit="查看详情 >">查看详情</span>\n' +
                        '</a>\n'
                } else {
                    shopDataMain += '<a class="sucssBtn myOrderBtn" data-shopId="'+data.list[i].id+'">\n' +
                        '<span data-tit="立即预定 >">立即预定</span>\n' +
                        '</a>\n'+
                        '<a class="sucssBtn myOrderBtn">\n' +
                        '<span data-tit="查看详情 >">查看详情</span>\n' +
                        '</a>\n'
                }*/
                shopDataMain += '\t\t\t\t\t\t<!--<button class="myOrderBtn">查看详情</button>-->\n' +
                    '\t\t\t\t\t</td>\n' +
                    '\t\t\t\t</tr>'

            }
            $(".myOrderHaveTable").html(shopData + shopDataMain)

            $('input:radio').click(function(){
                var domName = $(this).attr('name');

                var $radio = $(this);
                // if this was previously checked
                if ($radio.data('waschecked') == true){
                    $radio.prop('checked', false);
                    $("input:radio[name='" + domName + "']").data('waschecked',false);
                    //$radio.data('waschecked', false);
                } else {
                    $radio.prop('checked', true);
                    $("input:radio[name='" + domName + "']").data('waschecked',false);
                    $radio.data('waschecked', true);
                }
            });


            /*$('.labelInputClick').iCheck({
                handler:'radio',
                radioClass: 'iradio_square-yellow',
                increaseArea: '20%',
            });
            $('.labelInputClick').on('ifClicked', function(event){
                if($(this).is(":checked")){
                    $(this).attr("checked",false);
                }
                $('input').iCheck('update');
            });*/
            /* var allDataJson = {
                 "skuId":$(".myOrderPay").attr("data-shopidpay"),
                 "tickerCheckInDate":$(".dataChuo").text(),
                 "adult":adult,
                 "yong":yong,
                 "child":child,
                 "baby":baby,
                 "thumbnailUrl":thumbnailUrl,
                 "Old":Old,
                 "price":price,
             }
             var allDataJson = JSON.stringify(allDataJson)
             localStorage.setItem("allData",allDataJson)*/
        }

    }
}
shopServer()

var dataChuo = $(".dataChuo").text()
console.log(dataChuo)


//实现全选
$(document).on("click","#allAndNotAll",function(){
    $("input[name='checkItem']").prop('checked',true);
})

// 删除按钮
$(document).on("click",".myOrderDel",function(){
    var shopId = "";
    $("input[name='checkItem']:checked ").each(function(){
        shopId += $(this).attr("data-shopId")+","
        console.log(shopId)
    });
    if (shopId.length > 0) {
        shopId = shopId.substr(0,shopId.length - 1);
    }

    if ($("input[name='checkItem']:checked").val() == null) {
        $(".dialogue-mask").hide();
        $(".dialogue-mask").hide();
    }else{
        // 弹出模态框
        $(".dialogue-mask").show();
        $(".dialogue-container").addClass("animation-dialogue-in");

        $(".dialogue-cancel").click(function(){
            $(".dialogue-mask").hide();
            $(".dialogue-container").removeClass("animation-dialogue-in");
        })
        $(".dialogue-sure").click(function(){
            myAjax(shopcarBatchDelete, {ids:shopId}, handle)

            function handle(data, param) {
                console.log(data)
                $("input[name='checkItem']:checked").parents("tr").remove();
            }
        });
        $(".dialogue-mask").click(function () {
            $(this).hide();
        })

    }

   /* if (shopId.length = 1) {
        shopId = shopId.substr(0,shopId.length - 1);
    }*/



})

// 点击立即预定

$(document).on("click",".myOrderBtn",function(){
   var shopId = $(this).attr("data-shopId")
    window.location.href = "../html/tickerOrderPay.html?shopId="+shopId
})
//账户信息   跳转页面


$(".userPerson").click(function () {
    window.location.href = "../html/personalCenter.html"
})

$(".userCompony").click(function () {
    window.location.href = "../html/personCenterCom.html"
})

$(".userPass").click(function () {
    window.location.href = "../html/personCenterPass.html"
})


// 查看详情
$(document).on("click",".myOrderShopDetail",function () {
    var ticketId = $(this).attr("data-shopIdPay")
    window.location.href = "../html/tickerDetails.html?ticketId="+ticketId
})


// 立即预定
$(document).on("click",".myOrderPay",function () {
    var ticketId = $(this).attr("data-shopIdPay")
    window.location.href = "../html/tickerDetails.html?ticketId="+ticketId;
})

