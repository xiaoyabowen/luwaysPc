if (location.search == '') {
    // 将存储的字符串转换成对象
    var payData = JSON.parse(localStorage.getItem("payData"));
    console.log(payData.contractPhone)
    $(".formGo").html(payData.aliSubmitHtml)
    $(".goThumbnailUrl").attr("src", payData.thumbnailUrl)
    $(".goTitle").html(payData.productTitle)
    $(".goOrderNo").html(payData.orderNo)
    $(".goOrderName").html(payData.contractName)
    $(".contractPhone").html(payData.contractPhone)
    $(".nowPrice").html(payData.nowPrice)
    $(".nowPrice").html(payData.monthlyPrice)
    $(".hotelPayGoTypeChatShop").click(function () {
        $("#alipaysubmit").submit()
    })
} else {
    var orderId = GetQueryString("orderId")
    console.log(orderId)
    var payShopData = {}
    payShopData.id = orderId
    myAjax(orderRestControllerDetail, payShopData, handle)

    function handle(data, param) {
        console.log(data)
        $(".goThumbnailUrl").attr("src", serverHttpUrlImg + data.productSku.product.thumbnailUrl)
        $(".goTitle").html(data.productSku.product.title)
        $(".goOrderNo").html(data.order.orderNo)
        $(".goOrderName").html(data.order.contractName)
        $(".contractPhone").html(data.order.contractPhone)
        $(".nowPrice").html(data.order.nowPrice)
    }

    $(".hotelPayGoTypeChatShop").click(function () {
        window.location.href = "../html/myOrder.html"
    })

}