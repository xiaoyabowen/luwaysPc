text = [];
$(".subCusLiSer li").click(function () {
  $(this).toggleClass('CusLiActive');

  // cusLiTextSer += $(this).attr("data-name")
  if ($(this).hasClass("CusLiActive")) {
    text.push($(this).attr("data-name"))
  } else {
    text.splice($(this)[0].innerHTML, 1)
  }
  textJoin = text.join(",");

  $("#subCusLiSerVal").val(textJoin)
  console.log($("#subCusLiSerVal").val())
})
cusLiTextTra = [];
$(".subCusLiTra li").click(function () {
  $(this).toggleClass('CusLiActive');
  // cusLiTextTra += $(this).attr("data-name")

  if ($(this).hasClass("CusLiActive")) {
    cusLiTextTra.push($(this).attr("data-name"))
  } else {
    cusLiTextTra.splice($(this)[0].innerHTML, 1)
  }
  cusLiTextTraJoin = cusLiTextTra.join(",");

  $("#subCusLiVal").val(cusLiTextTraJoin)
})
// 提交需求
$(".companyName").blur(function () {
  checkUserNameOnly()
})

function checkUserNameOnly() {
  myAjax(check, {
    username: $(".companyName").val()
  }, handle)

  function handle(data, param) {
    console.log(data.success)
    if (data.success) {
      $(".companTrue").show()
      $("img.del-companyName").hide()
      return true
    } else {
      $("input.companyName").val('')
      $(".companTrue").hide()
      $("input.companyName").css("border", "2px solid #FF0000")
      $("img.del-companyName").show()
      $("#judgeCompanyName").text("该用户名已注册")
      return false;
    }
  }
}



$(".personBtn").click(function () {
  checkUserNameOnly();
  var personalCus = $("#personalCus").serialize();
  myAjax(insertIntentionSheet, personalCus, handle)

  function handle(data, param) {

    console.log(data)
    if (data.success) {
      window.location.href = 'customWait.html';
      $("#personalCus")[0].reset();
    }
  }
})


//限制文本框字数
function LimitTextArea(field) {
  var maxlimit = 500;
  $("#showTextNum").html(maxlimit + '/')
  var overNum = (maxlimit - field.value.length) * 1;
  if (overNum == -1) {
    $("#overTextNum").html("0")
  } else {
    $("#overTextNum").html(overNum)
  }
  if (field.value.length > maxlimit) {
    field.value = field.value.substring(0, maxlimit);
  }
}
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
// 返回顶部  js
$(function () {
  var e = $("#rocket-to-top"),
    t = $(document).scrollTop(),
    n,
    r,
    i = !0;
  $(window).scroll(function () {
      var t = $(document).scrollTop();
      t == 0 ? e.css("background-position") == "0px 0px" ? e.fadeOut("slow") : i && (i = !1, $(".level-2").css(
        "opacity", 1), e.delay(100).animate({
          marginTop: "-1000px"
        },
        "normal",
        function () {
          e.css({
              "margin-top": "-125px",
              display: "none"
            }),
            i = !0
        })) : e.fadeIn("slow")
    }),
    e.hover(function () {
        $(".level-2").stop(!0).animate({
          opacity: 1
        })
      },
      function () {
        $(".level-2").stop(!0).animate({
          opacity: 0
        })
      }),
    $(".level-3").click(function () {
      function t() {
        var t = e.css("background-position");
        if (e.css("display") == "none" || i == 0) {
          clearInterval(n),
            e.css("background-position", "0px 0px");
          return
        }

        switch (t) {
          case "0px 0px":
            e.css("background-position", "-2968px 0px");
            break;
          case "-298px 0px":
            e.css("background-position", "-448px 0px");
            break;
          case "-448px 0px":
            e.css("background-position", "-597px 0px");
            break;
          case "-597px 0px":
            e.css("background-position", "-747px 0px");
            break;
          case "-747px 0px":
            e.css("background-position", "-298px 0px");
        }
      }
      if (!i) return;
      n = setInterval(t, 50),
        $("html,body").animate({
          scrollTop: 0
        }, "slow");
    });
});

// 定制选项卡

$(".subMenuCus>li").click(function () {
  $(this).addClass("platFormTabActive").siblings().removeClass("platFormTabActive")
  var _index = $(".subMenuCus>li").index($(this));

  $(".customBox .formMain").eq(_index).removeClass("formMainNone").siblings().addClass("formMainNone");
})

//出发地
const checkUserName = () => {
  user_name_text = $('.setPlace').val();
  if (user_name_text == "") {
    $("#judgeUserName").text("出发地不能为空")
    $(".del-userName").show()
    $(".userNameTrue").hide()
    $("input.setPlace").css("border", "2px solid #FF0000")
    return false;
  } else {
    $("input.setPlace").css("border", "1px solid #7D7D7D")
    $("#judgeUserName").text("")
    $("img.del-userName").hide()
    $(".userNameTrue").show()
    return true;
  }
}
$('.setPlace').blur(checkUserName)
//验证  目的地
function checkPwd() {
  pwd_text = $(".arivePlace").val();
  var pwd_prov = /^.{4,}$/;
  if (pwd_text == "") {
    $("#judgeuserPass").text("目的地不能为空")
    $("input.arivePlace").css("border", "2px solid #FF0000")
    $(".userPassTrue").hide()
    $("img.del-userPass").show()
    return false;
  } else {
    $("#judgeuserPass").text("")
    $(".userPassTrue").show()
    $("img.del-userPass").hide()
    $("input.arivePlace").css("border", "1px solid #7d7d7d")
    return true;
  }
}
$(".arivePlace").blur(checkPwd)

function checkTel() {
  tel_text = $('.userPhone').val();
  tel_prov = /^(0|86|17951)?(13[0-9]|15[012356789]|17[03678]|18[0-9]|14[57])[0-9]{8}$/;
  if (tel_text == "") {
    $("#judgePhone").text("手机号不能为空")
    $(".companyUrlTrue").hide()
    $("input.userPhone").css("border", "2px solid #FF0000")
    $("img.del-userPhone").show()
    return false;
  } else if (!tel_text.match(tel_prov)) {
    $("#judgePhone").text("手机格式不正确")
    $("input.userPhone").css("border", "2px solid #FF0000")
    $(".companyUrlTrue").hide()
    $("img.del-userPhone").show()
    return false;
  } else {
    $("input.userPhone").css("border", "1px solid #7D7D7D")
    $("#judgePhone").text("")
    $("img.del-userPhone").hide()
    $(".userPhoneTrue").show()
    return true;
  }
}
$('.userPhone').blur(checkTel)

function checkCompanyName() {
  user_name_text = $('.companyName').val();
  if (user_name_text == "") {
    $("#judgeCompanyName").text("姓名不能为空")
    $(".companyNameTrue").css("display", "none")
    $("input.companyName").css("border", "2px solid #FF0000")
    $("img.del-companyName").css("display", "inline-block")
    return false;
  } else {
    $("input.companyName").css("border", "1px solid #7D7D7D")
    $("#judgeCompanyName").text("")
    $("img.del-companyName").hide()
    $(".companyNameTrue").show()
    return true;
  }
}
$('.companyName').blur(checkCompanyName)
// js控制input框只能输入数字
function keyUp(ob) {
  if (!ob.value.match(/^[\+\-]?\d*?\.?\d*?$/)) ob.value = ob.t_value;
  else ob.t_value = ob.value;
  if (ob.value.match(/^(?:[\+\-]?\d+(?:\.\d+)?)?$/)) ob.o_value = ob.value;
}