$(function () {



    $.ajax({
        url: "./json/notice.json",
        cache: false,
        type: "GET",
        dataType: "json",
        success: function (b) {
            $.fn.notice(b)

        },
        error: function () {
            console.log("통신오류")

        }
    })
    $.ajax({
        url: "./json/pullmenu.json",
        cache: false,
        type: "GET",
        dataType: "json",
        success: function (c) {
            $.fn.tvProgram(c)

        },
        error: function () {
            console.log("통신오류")

        }
    })



    $.fn.notice = function(data){
        var copyDiv = $("<div class=somenu></div>")
        $.each(data.notice,function(a,b){   
            var copySpan = $(`<span>` + b[0] + `</span>`) // 
            copyDiv.append(copySpan)
        })
        $(".somenutop").append(copyDiv)

                
    // 공지사항 메뉴 핸들링 파트
    
    var ea = $(".somenu > span").length 
    var timer = 0;
    var listheight = $(".somenu > span").height();
    var totalheight = listheight * ea
   
    $(".somenu").css({
        "height": totalheight + "px"
    })

    $.fn.noticeMenu = function () {

        $(".somenu").animate({
            "top": -listheight + "px" // -45px; 당김
        }, 800, function () {
            var copy = $(".somenu > span").eq(0).clone();
            $(".somenu > span").eq(0).remove();
            $(".somenu").append(copy)
            $(".somenu").css({
                "top": 0
            })
        })
        timer = setTimeout($.fn.noticeMenu, 3000)
    }
    timer = setTimeout($.fn.noticeMenu, 3000)

    $(".somenu").bind({
        "mouseenter": function () {
            clearTimeout(timer);
        },
        "mouseleave": function () {
            timer = setTimeout($.fn.noticeMenu, 3000)
        }
    })

}
    $(".brandBox1").click(function(){
        $(".brandBoxChild").animate({
          height: 'show'
        }, 600);
      }).mouseleave(function(){
        $(".brandBoxChild").stop().slideUp();
      })
      
      $(".brandBox2").click(function(){
        $(".brandBoxChild2").animate({
          height: 'show'
        }, 600);
      }).mouseleave(function(){
        $(".brandBoxChild2").stop().slideUp();
      })




    //notice 내용 배열 값

    $.fn.tvProgram = function(copy){
   

        $.each(copy[0].brand,function(a,b){
             var tvProgram = $(`<span>`+b+`</span>`)
             $(".brandBoxChild").append(tvProgram) 
        })
        $.each(copy[0].subsidi,function(a,b){
            var tvProgram2 = $(`<span>`+b+`</span>`)
            $(".brandBoxChild2").append(tvProgram2)
        })
   
    }
})

