
var loading = '';
loading += '<div id="loading">'
loading += '	<div id="loading-center">'
loading += '		<div id="loading-center-absolute">'
loading += '			<div class="object" id="object_one"></div>'
loading += '			<div class="object" id="object_two"></div>'
loading += '			<div class="object" id="object_three"></div>'
loading += '			<div class="object" id="object_four"></div>'
loading += '			<div class="object" id="object_five"></div>'
loading += '			<div class="object" id="object_six"></div>'
loading += '			<div class="object" id="object_seven"></div>'
loading += '			<div class="object" id="object_eight"></div>'
loading += '		</div>'
loading += '	</div>'
loading += '</div>'

/*

loading += '<div id="loading">'
loading += '	<div id="loading-center">'
loading += '		<div id="loading-center-absolute">'
loading += '			<div><img src="../images/loading.png" alt=""></div>'
loading += '		</div>'
loading += '	</div>'
loading += '</div>'
*/


$(document.body).append(loading);

function load() {
	var a= setTimeout("loading.style.transition='opacity 0.3s'",0)   
	//设置透明度改变的过渡时间为0.3秒
	var b= setTimeout("loading.style.opacity=0",500)
	//0.5秒后加载动画开始变为透明
	var c= setTimeout("loading.style.display='none'",800)
	//当透明度为0的时候，隐藏掉它
}
$(window).load(function() {
   $("#loading").fadeOut(500);
})




$(function() {
    var e = $("#rocket-to-top"),
        t = $(document).scrollTop(),
        n,
        r,
        i = !0;
    $(window).scroll(function() {
        var t = $(document).scrollTop();
        t == 0 ? e.css("background-position") == "0px 0px" ? e.fadeOut("slow") : i && (i = !1, $(".level-2").css("opacity", 1), e.delay(100).animate({
                marginTop: "-1000px"
            },
            "normal",
            function() {
                e.css({
                    "margin-top": "-125px",
                    display: "none"
                }),
                    i = !0
            })) : e.fadeIn("slow")
    }),
        e.hover(function() {
                $(".level-2").stop(!0).animate({
                    opacity: 1
                })
            },
            function() {
                $(".level-2").stop(!0).animate({
                    opacity: 0
                })
            }),
        $(".level-3").click(function() {
            function t() {
                var t = e.css("background-position");
                if (e.css("display") == "none" || i == 0) {
                    clearInterval(n),
                        e.css("background-position", "0px 0px");
                    return
                }
                switch (t){
                    case "0px 0px":
                        e.css("background-position", "-298px 0px");
                        break;
                    case "-298px 0px":
                        e.css("background-position", "-447px 0px");
                        break;
                    case "-447px 0px":
                        e.css("background-position", "-596px 0px");
                        break;
                    case "-596px 0px":
                        e.css("background-position", "-745px 0px");
                        break;
                    case "-745px 0px":
                        e.css("background-position", "-298px 0px");
                }
            }
            if (!i) return;
            n = setInterval(t, 50),
                $("html,body").animate({scrollTop: 0},"slow");
        });
});



















