
var header = '';

header += '<div class="bodyHeader">'
header += '	<div class="subBodyHeader cssFlex headerSubCommon">'
header += '		<!--logo-->'
header += '		<div class="comNavLogo">'
header += '			<a href="javascript:;"><img src="../images/nav_logo.png" id="logoImg" /></a>'
header += '		</div>'
header += '		<!--nav导航条-->'
header += '		<div class="bodyNav cssFlex">'
header += '			<p class="cssFlex loginIf">'
header += '				<a href="login.html">登陆</a> |'
header += '				<a href="resiger.html">注册</a>'
header += '			</p>'
header += '			<a href="" class="bodyNavPhone serverPhone">010-8562 8831</a>'
header += '			<a href="../html/aboutLuWays.html">帮助</a>'
header += '		</div>'
header += '	</div>'
header += '</div>'

$(document.body).prepend(header);
var name = sessionStorage.getItem("name")

// 根据用户是否登陆   跳转对应页面
if (name != 'null'){
    $(".loginIf").hide()
    $(".comNavLogo").click(function () {
        window.location.href = "../index.html"
    })
}else{
    $(".comNavLogo").click(function () {
        window.location.href = "../html/indexNotLogin.html"
    })
}




//footerdom拼接
var footer = '';
footer += '<footer>';
footer += '<footer>'
footer += '		<div class="subFooter headerSubCommon">'
footer += '			<div class="aboutFooterCommon">'
footer += '				<h4>关于我们</h4>'
footer += '				<ul>'
footer += '					<li><a href="../html/aboutLuWays.html">关于路途</a></li>'
footer += '					<li><a href="../html/aboutLuCooperation.html">合作伙伴</a></li>'
footer += '					<li><a href="../html/aboutLuContact.html">联系我们</a></li>'
footer += '					<li><a href="../html/aboutLuServer.html">服务条款</a></li>'
footer += '					<li><a href="../html/aboutLuUser.html">用户协议</a></li>'
footer += '				</ul>'
footer += '			</div>'
footer += '			<div class="aboutFooterCommon">'
footer += '				<h4>业务介绍</h4>'
footer += '				<ul>'
footer += '					<li><a href="../html/businessIntroduction.html">关于业务</a></li>'
footer += '					<li><a href="../html/businessServer.html">服务内容</a></li>'
footer += '					<li><a href="../html/businessCooperation.html">合作方式</a></li>'
footer += '					<li><a href="">服务详情</a></li>'
footer += '					<li><a href="">服务优势</a></li>'
footer += '				</ul>'
footer += '			</div>'
footer += '			<div class="aboutFooterCommon">'
footer += '				<h4>平台特色</h4>'
footer += '				<ul>'
footer += '					<li><a href="../html/platformFeatures.html">商家平台</a></li>'
footer += '					<li><a href="../html/platformAPI.html">标准API</a></li>'
footer += '				</ul>'
footer += '			</div>'
footer += '			<div class="aboutFooterCommon">'
footer += '				<h4>帮助中心</h4>'
footer += '				<ul>'
footer += '					<li><a href="../html/helpPay.html">结算周期</a></li>'
footer += '					<li><a href="../html/helpComput.html">支付方式</a></li>'
footer += '				</ul>'
footer += '			</div>'
footer += '			<div class="aboutFooterCommon">'
footer += '				<h4>联系我们</h4>'
footer += '				<ul>'
footer += '					<li><a>全天在线服务电话</a></li>'
footer += '					<li class="need"><a href="">010-8562 8831</a></li>'
footer += '					<li><a>客服邮箱</a></li>'
footer += '					<li class="need"><a>info@luways.com</a></li>'
footer += '				</ul>'
footer += '			</div>'
footer += '		</div>'
footer += '		<hr size="1" />'
footer += '		<div class="footerFirm">'
footer += '			<p class="firmTop">北京路途科技有限公司</p>'
footer += '			<p>Copyright 2016 Luways.com 京ICP备16044893号-2</p>'
footer += '		</div>'
footer += '		    <div style="display:none;" id="rocket-to-top">'
footer += '		    <div style="opacity:0;display:block;" class="level-2"></div>'
footer += '		    <div class="level-3"></div>'
footer += '		    </div>'
footer += '	</footer>'
$(document.body).append(footer);
$(document).ready(
	 function() { 
	  	$("html").niceScroll({
		    cursorcolor: "#ff9600", // 改变滚动条颜色，使用16进制颜色值
		    cursoropacitymax: 1, // 当滚动条是显示状态时改变透明度, 值范围 1 到 0
		    cursorborder: "none", // CSS方式定义滚动条边框
		    autohidemode: true, // 隐藏滚动条的方式, 可用的值: 
		    background: "transparent", // 轨道的背景颜色
		    scrollspeed: 60, cursorwidth: "8px", // 滚动条的宽度，单位：便素
            cursorwidth: "8px", // 滚动条的宽度，单位：便素
			mousescrollstep: 20, // 鼠标滚轮的滚动速度 (像素)
			cursorminheight: 10, // 设置滚动条的最小高度 (像素)
			preventmultitouchscrolling: true, // 防止多触点事件引发滚动
			horizrailenabled: false, // nicescroll可以管理水平滚动
		}) 
	 }
);


$(".myOrderALLHoverUp").hover(function () {
	// alert(1)
    var _index = $(".myOrderALLHoverUp").index($(this));
    $(".myOrderALLHoverUp>a>div").eq(_index).stop().show();
},function () {
    var _index = $(".myOrderALLHoverUp").index($(this));
    $(".myOrderALLHoverUp>a>div").eq(_index).stop().hide();
})

// 链接跳转
// 业务介绍

/*$(".bussFeacther").click(function () {
    window.location.href = 'businessIntroduction.html'
})*/
$(".bussntro").click(function () {
	window.location.href = 'businessIntroduction.html'
})
$(".busServer").click(function () {
    window.location.href = 'businessServer.html'
})
$(".busCooper").click(function () {
    window.location.href = 'businessCooperation.html'
})

// 平台特色

/*$(".platFormFeacther").click(function () {
    window.location.href = 'platformFeatures.html'
})*/
$(".platformFeatures").click(function () {
    window.location.href = 'platformFeatures.html'
})
$(".platformAPI").click(function () {
    window.location.href = 'platformAPI.html'
})

// 关于路途
/*$(".aboutLuWaysClick").click(function () {
    window.location.href = 'aboutLuWays.html'
})*/

$(".aboutLuWays").click(function () {
    window.location.href = 'aboutLuWays.html'
})
$(".aboutLuCooperation").click(function () {
    window.location.href = 'aboutLuCooperation.html'
})
$(".aboutLuContact").click(function () {
    window.location.href = 'aboutLuContact.html'
})
$(".aboutLuServer").click(function () {
    window.location.href = 'aboutLuServer.html'
})
$(".aboutLuUser").click(function () {
    window.location.href = 'aboutLuUser.html'
})
$(".aboutLuOur").click(function () {
    window.location.href = 'aboutLuOur.html'
})
$(".aboutLuBig").click(function () {
    window.location.href = 'aboutLuBig.html'
})

// 帮助中心

$(".helpComput").click(function () {
    window.location.href = 'helpComput.html'
})
$(".helpPay").click(function () {
    window.location.href = 'helpPay.html'
})




// 联系我们百度地图
//百度地图API功能


    var map = new BMap.Map("contactMapBeijing");            // 创建Map实例
    var point = new BMap.Point(116.404, 39.915); // 创建点坐标
    map.centerAndZoom(point,15);
    map.enableScrollWheelZoom();                 //启用滚轮放大缩小
    map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
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


    var opts = {
        position : point,    // 指定文本标注所在的地理位置
        offset   : new BMap.Size(30, -30)    //设置文本偏移量
    }
    var label = new BMap.Label("北京路途科技有限公司-北京办公室", opts);  // 创建文本标注对象
    label.setStyle({
        color : "#333",
        fontSize : "16px",
        height : "30px",
        lineHeight : "30px",
        fontFamily:"微软雅黑"
    });
    map.addOverlay(label);



    // 上海办公室、
    var map = new BMap.Map("contactMapShanghai");            // 创建Map实例
    var point = new BMap.Point(116.404, 39.915); // 创建点坐标
    map.centerAndZoom(point,15);
    map.enableScrollWheelZoom();                 //启用滚轮放大缩小
    map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
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


    var opts = {
        position : point,    // 指定文本标注所在的地理位置
        offset   : new BMap.Size(30, -30)    //设置文本偏移量
    }
    var label = new BMap.Label("北京路途科技有限公司-上海办公室", opts);  // 创建文本标注对象
    label.setStyle({
        color : "#333",
        fontSize : "16px",
        height : "30px",
        lineHeight : "30px",
        fontFamily:"微软雅黑"
    });
    map.addOverlay(label);

    // 香港办公室

// 上海办公室、
var map = new BMap.Map("contactMapHK");            // 创建Map实例
var point = new BMap.Point(114.182818,22.308569); // 创建点坐标
map.centerAndZoom(point,15);
map.enableScrollWheelZoom();                 //启用滚轮放大缩小
map.centerAndZoom(new BMap.Point(114.182818,22.308569), 11);
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


var opts = {
    position : point,    // 指定文本标注所在的地理位置
    offset   : new BMap.Size(30, -30)    //设置文本偏移量
}
var label = new BMap.Label("北京路途科技有限公司-香港办公室", opts);  // 创建文本标注对象
label.setStyle({
    color : "#333",
    fontSize : "16px",
    height : "30px",
    lineHeight : "30px",
    fontFamily:"微软雅黑"
});
map.addOverlay(label);
