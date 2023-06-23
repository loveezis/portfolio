$(function () {

    $.ajax({
        url: "./json/new_program.json",
        cache: false,
        type: "GET",
        dataType: "json",
        success: function (a) {
            $.fn.movieSection(a)
        },
        error: function () {
            console.log("통신에러")

        }
    })

    $.fn.movieSection = function (movie) {
        var moviediv2 = $("<div class=movieleft></div>")
        var movieUl = $("<ul class=movielist></ul>")
        var moviediv3 = $("<div class=movieleft2></div>")
        var movieUl2 = $("<ul class=movielist></ul>")

        $.each(movie, function (a, b) {
          
            if(a <= 7){  // 위쪽 영화
                var movieLi = $(`
                <li title="`+movie[a].new_pg+`"><img src=` + movie[a].new_thumb + `></li>
                `)
                moviediv2.append(movieUl)
                movieUl.append(movieLi)
                
            } 
            else if(a > 7){  //아래쪽 영화
              
                var movieLi2 = $(`
                <li title="`+movie[a].new_pg+`"><img src=` + movie[a].new_thumb + `></li>
                `)
                moviediv3.append(movieUl2)
                movieUl2.append(movieLi2)
            }
        })
        $(".onair").append(moviediv2)
        $(".onair").append(moviediv3)
    }

    //동영상 페이드 인 아웃
    var m = 0
    $(".more").click(function() {
        var movieLeft = $(".movieleft > ul");
        var movieLeft2 = $(".movieleft2 > ul");
    
        movieLeft.fadeToggle();
        movieLeft2.fadeToggle();

    })
})

