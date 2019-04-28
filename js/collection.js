myAjax(accountRestControlleNum,'', handle)

function handle(data, param) {
    $(".myOrderShoppingCart").html(data.shopCount)
    $(".myOrderAllnNumber").html(data.orderCount)
}

// 获取我的订单内容
function shopServer() {

    myAjax(restHotelGetHotelCollect, '', handle)

    function handle(data, param) {
        console.log(data)
        if (data.list ==  ''){
            $(".myOrderHaveTable").html('')
            $(".myOrderNullImgCollect").show()
            $(".myOrderHaveTableToo").addClass("myOrderNullImgCollectAdd")
        }else{
            $(".myOrderNullImgCollect").hide()
            var collection = '<tr>\n' +
                '\t\t\t\t\t\t<th style="width: 150px;text-align: left;" class="myOrderLabel" style="">\n' +
                /*'\t\t\t\t\t\t\t<label>\n' +
                '\t\t\t\t\t\t\t\t<input type="radio" class="myOrderHaveCheck" name="" id="" value="" /> 全选\n' +
                '\t\t\t\t\t\t\t</label>\n' +*/
                '\t\t\t\t\t\t\t<span class="myOrderDel collectDel">取消收藏</span>\n' +
                '\t\t\t\t\t\t</th>\n' +
                '\t\t\t\t\t\t<th style="width: 340px;">名称</th>\n' +
                // '\t\t\t\t\t\t<th style="width: 146px;">价格</th>\n' +
                '\t\t\t\t\t\t<th style="width: 200px;">操作</th>\n' +
                '\t\t\t\t\t</tr>'
            var collectionMain = '';
            for (var i =0;i<data.list.length;i++){
                var str = data.list[i].thumbnailUrl
                collectionMain += '\t\t\t\t\t<tr>\n'
                if (data.list[i].thumbnailUrl == ''){
                    collectionMain +='\t\t\t\t\t\t<td><img src="../images/new_hotel_img.png" alt="订单图片" /></td>\n'
                }else if (str.indexOf("https:")>=0) {
                    collectionMain +='\t\t\t\t\t\t<td><img src="'+data.list[i].thumbnailUrl+'" alt="订单图片" /></td>\n'
                }else{
                    collectionMain +='\t\t\t\t\t\t<td><img src="'+hotelUrlImg+data.list[i].thumbnailUrl+hotelUrlImgHou+'" alt="订单图片" /></td>\n'
                }

                collectionMain +='\t\t\t\t\t\t<td style=" text-align: left;" class="collectionTd">\n' +
                    '<input type="radio" class="myOrderHaveCheck" id="model'+i+'" data-shopId="'+data.list[i].id+'" name="checkItem">' +
                    ' <label for="model'+i+'"></label>' +
                    '\t\t\t\t\t\t\t\t<h4 class="collectionTitle">'+data.list[i].name+'</h4>\n' +
                    '\t\t\t\t\t\t\t\t<h4>('+data.list[i].cnName+')</h4>\n' +
                    '\t\t\t\t\t\t\t<p class="myOrderMakeSubTitle">'+data.list[i].address+'</p>\n'
                if(data.list[i].star == '0'){
                    collectionMain += '\t\t\t\t\t\t\t<p class="myOrderMakeSubStar"><span>暂无评星</span></p>\n'
                }else if (data.list[i].star == '1') {
                    collectionMain += '\t\t\t\t\t\t\t<p class="myOrderMakeSubStar"><span>星级：<img src="../images/icon/content_hotel_icon_grade.png" alt=""></span></p>\n'
                }else if (data.list[i].star == '2') {
                    collectionMain += '\t\t\t\t\t\t\t<p class="myOrderMakeSubStar"><span>星级：<img src="../images/icon/content_hotel_icon_grade.png" alt=""><img src="../images/icon/content_hotel_icon_grade.png" alt=""></span></p>\n'
                }else if (data.list[i].star == '3') {
                    collectionMain += '\t\t\t\t\t\t\t<p class="myOrderMakeSubStar"><span>星级：<img src="../images/icon/content_hotel_icon_grade.png" alt=""><img src="../images/icon/content_hotel_icon_grade.png" alt=""><img src="../images/icon/content_hotel_icon_grade.png" alt=""></span></p>\n'
                }else if (data.list[i].star == '4') {
                    collectionMain += '\t\t\t\t\t\t\t<p class="myOrderMakeSubStar"><span>星级：<img src="../images/icon/content_hotel_icon_grade.png" alt=""><img src="../images/icon/content_hotel_icon_grade.png" alt=""><img src="../images/icon/content_hotel_icon_grade.png" alt=""><img src="../images/icon/content_hotel_icon_grade.png" alt=""></span></p>\n'
                }else if (data.list[i].star == '5') {
                    collectionMain += '\t\t\t\t\t\t\t<p class="myOrderMakeSubStar"><span>星级：<img src="../images/icon/content_hotel_icon_grade.png" alt=""><img src="../images/icon/content_hotel_icon_grade.png" alt=""><img src="../images/icon/content_hotel_icon_grade.png" alt=""><img src="../images/icon/content_hotel_icon_grade.png" alt=""><img src="../images/icon/content_hotel_icon_grade.png" alt=""></span></p>\n'
                }
                collectionMain +=  '\t\t\t\t\t\t</td>\n' +
                    '\t\t\t\t\t\t\n' +
                    '\t\t\t\t\t\t\n' +
                    '\t\t\t\t\t\t<td>\n' +
                    '\t\t\t\t\t\t\t<a class="sucssBtn myOrderBtn" data-collectId = '+data.list[i].id+'>\n' +
                    '\t\t\t\t\t\t\t\t<span data-tit="查看详情 >">查看详情</span>\n' +
                    '\t\t\t\t\t\t\t</a>\n' +
                    '\t\t\t\t\t\t</td>\n' +
                    '\t\t\t\t\t</tr>'
            }
            $(".myOrderHaveTable").html(collection+collectionMain)
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

        }


    }
}
shopServer()
//实现全选
$(document).on("click","#allAndNotAll",function(){
    $("input[name='checkItem']").prop('checked',true);
})

// 取消收藏
$(document).on("click",".collectDel",function(){
    alert(11)
    var shopId = "";
    $("input[name='checkItem']:checked ").each(function(){
        shopId = $(this).attr("data-shopId")
        console.log(shopId)
    });

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

            myAjax(shopcartCollectionHotel, {hotelId:shopId,status:0}, handle)
            function handle(data, param) {
                console.log(data)
                $("input[name='checkItem']:checked").parents("tr").remove();
            }
        });
        $(".dialogue-mask").click(function () {
            $(this).hide();
        })

    }


})

// 收藏的详情页
$(document).on("click",".myOrderBtn",function () {
    var hotelCode = $(this).attr("data-collectid")
    window.location.href = "../html/hotelDetails.html?hotelCode="+hotelCode
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





