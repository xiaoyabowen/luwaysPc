var orderId = GetQueryString("orderId")
console.log(orderId)
var payShopData = {}
payShopData.id = orderId
myAjax(orderRestControllerSuborder, payShopData, handle)
function handle(data, param) {
    console.log(data)
    console.log(data.cart.nowPrice)
    $(".goThumbnailUrl").attr("src",serverHttpUrlImg+data.product.thumbnailUrl)
    $(".goTitle").html(data.product.title)
    $(".goOrderName").html(data.company.lkm)
    $(".contractPhone").html(data.company.lkmPhone)
    $(".nowPrice").text(data.cart.nowPrice)
}

$(".hotelPayGoTypeChatShop").click(function () {
    window.location.href = "../html/shoppingCar.html"
})
