$(function () {

    $.ajax({

        url: "./json/menu.json",
        cache: false,
        type: "GET",
        dataType: "json",
        success: function (a) {
            $.fn.menu(a)
        },
        error: function () {
            console.log("통신오류")
        }
    })

      //상단메뉴 시작

      $.fn.menu = function (data) {

        // console.log(data)
        var ocnMenu = $(`<div><img src="./images/ocn_logo.png" class=ocnimg></div>`).addClass("ocnSize")
        $("#ocnTop").append(ocnMenu)
        var ocnDiv = $("<div></div>").addClass("ocnMenu")
        var ocnUl = $("<ul></ul>")

        $.each(data, function (a, b) {
            var ocnLi = $(`<li class=somenu` + a + `>` + data[a].main_menu + `</li>`)
            ocnUl.append(ocnLi)
            ocnDiv.append(ocnUl)
            $("#ocnTop").append(ocnDiv)
        })
        $(".ocnimg").click(function () {
            location.href = "http://ocn.cjenm.com/ko"
        })

        // 소메뉴 생성 함수


        //첫번째 소메뉴   (ocn 스토리)
        var ocnSubOl = $("<ol class=ocnSub1></ol>")

        $.each(data[0].menu_list, function (a, b) {
            // console.log(a)
            var ocnSubLi = $(`<li><a href="` + data[0].menu_link[a] + `">` + data[0].menu_list[a] + `</a></li>`)
            ocnSubOl.append(ocnSubLi)
        })
        $(".somenu0").append(ocnSubOl)

        //첫번째 마우스
        $(".somenu0").click(function () {
            $(".ocnSub1").animate({
                "height":"show"
            },600);
        }).mouseleave(function(){
            $(".ocnSub1").stop().slideUp();
          })
        //-----------------------(1)--------------------------//

        //두번째 소메뉴  (ocn 편성표)
        var ocnSubOl1 = $("<ol class=ocnSub2></ol>")
        $.each(data[1].menu_list, function (a, b) {

            var ocnSubLi = $(`<li><a href="` + data[1].menu_link[a] + `">` + data[1].menu_list[a] + `</li>`)
            ocnSubOl1.append(ocnSubLi)
        })
        $(".somenu1").append(ocnSubOl1)

        //두번째 메뉴 마우스컨트롤
        $(".somenu1").click(function () {
            $(".ocnSub2").animate({
                "height":"show"
            },600);
        }).mouseleave(function(){
            $(".ocnSub2").stop().slideUp();
        })
        //-------------------------(2)------------------------//
        //세번째 소메뉴 (동영상)
        var ocnSubOl2 = $("<ol class=ocnSub3></ol>")
        var ocnSubLiMovie = $(`<li><a href="` + data[2].menu_link + `">` + data[2].menu_list + `</li>`)
        ocnSubOl2.append(ocnSubLiMovie)
        $(".somenu2").append(ocnSubOl2)

        //세번째 메뉴 (마우스)
        $(".somenu2").click(function () {
            $(".ocnSub3").animate({
                "height":"show"
            },600);
        }).mouseleave(function(){
            $(".ocnSub3").stop().slideUp();
        })
        //-------------------------(3)-----------------------//

        //네번째 소메뉴 (ocn블록)

        var ocnSubOl3 = $("<ol class=ocnSub4></ol>")
        $.each(data[3].menu_list, function (a, b) {
            var ocnSubLi = $(`<li><a href="` + data[3].menu_link[a] + `">` + data[3].menu_list[a] + `</li>`)
            ocnSubOl3.append(ocnSubLi)
        })
        $(".somenu3").append(ocnSubOl3)

        //네번째 메뉴 (마우스)
        $(".somenu3").click(function () {
            $(".ocnSub4").animate({
                "height":"show"
            },600);
        }).mouseleave(function(){
            $(".ocnSub4").stop().slideUp();
        })
        //-------------------------(4)------------------------//
        //다섯번째 소메뉴 (ocn오리지널)

        var ocnSubOl4 = $("<ol class=ocnSub5></ol>")
        $.each(data[4].menu_list, function (a, b) {
            var ocnSubLi = $(`<li><a href="` + data[4].menu_link[a] + `">` + data[4].menu_list[a] + `</li>`)
            ocnSubOl4.append(ocnSubLi)
        })
        $(".somenu4").append(ocnSubOl4)

        //다섯번째 메뉴 (마우스)
        $(".somenu4").click(function () {
            $(".ocnSub5").animate({
                "height":"show"
            },600);
        }).mouseleave(function(){
            $(".ocnSub5").stop().slideUp();
        })
        //--------------------------(5)-----------------------//

    }

})