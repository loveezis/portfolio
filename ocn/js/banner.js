$(function () {

    $.ajax({

        url: "./json/banner.json",
        cache: false,
        type: "GET",
        dataType: "json",
        success: function (b) {
            $.fn.mainbanner(b)

        },
        error: function () {
            console.log("통신오류")

        }
    })

    $.fn.mainbanner = function (banner) {
        var mainUl = $("<ul></ul>").addClass("mainbanner")
        $.each(banner.banners, function (a, b) {
            var mainli = $(`<li class="b`+a+`"><a href="` + b[1] + `"><img src=` + b[0] + `></a></li>`)
            mainUl.append(mainli)
        })
        $(".mainview").append(mainUl)
        $(".mainview").append(
            `<span>
             <img src="./banner/leftbtn.png" class=leftBtn>
        </span>
        <span>
            <img src="./banner/rightbtn.png" class=rightBtn>
        </span>`
        )


        var discUl = $("<ul></ul>").addClass("discbanner")
        var discLi = $(`
            <li class="b0"></li>
            <li class="b1"></li>
            <li class="b2"></li>
            <li class="b3"></li> `)
        discUl.append(discLi)
        $(".mainview").append(discUl)


        var ea = $(".mainbanner li").length // 4개
        var banner_width = $(".mainbanner li").width();
        // console.log(banner_width) 1200
        var total_size = banner_width * ea;
        // console.log(total_size) 4800
        var timer;

        $(".mainbanner").css({
            "width": total_size + "px"
        })


        var node = 0;
        $.fn.mainbanner2 = function () {
            clearTimeout(timer);
            $(".mainbanner").animate({
                "left": -banner_width + "px"

            }, 1500, function () {
                var copy = $(".mainbanner li").eq(0).clone();
                //첫번째 노드를 복사 
                $(".mainbanner li").eq(0).remove();
                //첫번째 노드를 삭제
                $(".mainbanner").append(copy);
                //첫번째 노드를 붙여넣기
                $(".mainbanner").css({
                    "left": 0
                })

            })
            timer = setTimeout($.fn.mainbanner2, 3000);
        }
        timer = setTimeout($.fn.mainbanner2, 3000);

        //배너 핸들링 파트

        $(".mainview").bind({
            "mouseenter": function () {
                clearTimeout(timer)
            },
            "mouseleave": function () {
                timer = setTimeout($.fn.mainbanner2, 4000)
            }
        })
        //디스크 출력 파트 

        var node = 0;
        var timer2 = 0;
        var w = 0;

        $.fn.banner2 = function () {
            node++;

            $(".discbanner > li").css({
            "background-color": "rgba(255,255,255,0.5)" //일단 전체칼라를 투명하게
            })
       
            if (node >= ea) {
                node = 0
            }
            $(".discbanner > li").eq(node).css({
                "background-color": "white" //노드 순서대로 화이트로 바꿔줌
            })
            timer2 = setTimeout($.fn.banner2, 4000);
        }
        timer2 = setTimeout($.fn.banner2, 4000)


        //디스크 핸들링 파트 ------------------------------------------//

        $(".discbanner > li").bind({
            "click": function () {
                node = $(this).index()
                // console.log(node)

                $(".discbanner>li").css({
                    "background-color": "rgba(255, 255, 255, 0.5)"
                })

                $(".discbanner>li").eq(node).css({
                    "background-color": "white"
                })
                $.fn.mybanner(node);
                console.log(node)
                //해당 배너의 노드값을 인수값으로 적용하여 확장함수로 전송함
            },
            "mouseleave": function () {
                clearTimeout(timer2);
                timer2 = setTimeout($.fn.banner2, 4000);
            }
        })
        $.fn.mybanner = function (i) {

            var classname = ".b"+i
            // console.log(classname)
            //디스크가 선택된 상태에서의 .b+에 노드값을 더한다 (i)
            // 현재 클레스명 + 현재클릭된 노드값 i(node)
          
    
            var nos = Math.ceil($(".mainbanner>"+classname).offset().left);
            //클릭된 상자에 화면 좌측부터 상자까지의 길이를 측정
            var pnos = Math.ceil($(".mainbanner").offset().left);
            //클릭된 화면 좌측부터 banners(부모전체400width)까지의 길이
            var total_left = nos - pnos;
            var now_node = total_left / banner_width;
            console.log(now_node, banner_width, total_left)

            $(".mainbanner").stop().animate({
                "left": -total_left + "px"
            }, 1000, function () {

                var z = 0;
                while (z < now_node) {
                    copy = $(".mainbanner  li").eq(0).clone()
                    $(".mainbanner  li").eq(0).remove()
                    $(".mainbanner").append(copy);
                    z++;
                }
                $(".mainbanner").css({
                    "left": "0px"

                })
            })
        }
        //이전,다음 버튼 핸들링 버튼


        $(".leftBtn").click(function () {
            node--;  //  역순으로 -1씩감소
            var last = ea - 1;  //가장마지막 노드번호를 알아내는변수
            console.log(last)
            if (node < 0) { //노드는 절대 -값이 없음,해당조건시 마지막 노드번호를 변경
                node = last
            }
            $(".discbanner > li").css({
                "background-color": "rgba(255,255,255,0.5)"
            })
            $(".discbanner > li").eq(node).css({ // priv를 눌럿을때 마지막 3번째 디스크를 빨간색으로 교체함
                "background-color": "white"
            });

            var z = $(".mainbanner > li").eq(last).clone();
            $(".mainbanner >li").eq(last).remove();
            $(".mainbanner").prepend(z);
            $(".mainbanner").css({
                "left": -banner_width + "px"
            }, 2000)
            $(".mainbanner").stop().animate({
                "left": 0
            })
        })
        $(".rightBtn").click(function () {
            node++;
            if (node >= ea) {
                //노드번호가 노드갯수와 같거나 클 경우 노드번호를 초기화
                node = 0;
            }
            $(".mainbanner").animate({
                "left": -banner_width + "px" //해당되는 배너크기만큼 잡아당김
            }, 1000, function () { //콜백함수로 노드를 제어함
                var z = $(".mainbanner>li").eq(0).clone(); //복제
                $(".mainbanner >li").eq(0).remove(); //삭제
                $(".mainbanner").append(z) //후열에추가
                $(".mainbanner").css({
                    //마지막 부모태그위치 원래대로 400을 왼쪽으로 100당겻다가 300에서 다시400으로
                    "left": 0
                },1000)
            })
            $(".discbanner > li").css({
                "background-color": "rgba(255,255,255,0.5)"
            })
            $(".discbanner > li").eq(node).css({
                "background-color": "white"
            })
        })

    }
})