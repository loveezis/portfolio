$(function(){

    $.ajax({
        url: "./json/qanda.json",
        cache: false,
        type: "get",
        dataType: "json",
        success: function (data) {
            $.fn.qst(data);
        },
        error: function () {
            console.log("통신오류");
        }
    })

    $.fn.qst = function(n){
        $.each(n,function(a,b){
            
            $("#Cqst").append(
                `<li><span>`+b.q_subject+" &nbsp &nbsp"+b.q_date+`</span></li>`
            )
        })
    }

    $("#Cloginbtn").click(function(){
        $(".J_loginback").css("display","block");
    })

    $("#Cjoinbtn").click(function(){
        $("#Rjbase").css("display","block");
    })

    $("#Clogoutbtn").click(function(){
        $(".Clogin").css("display","none");
        $(".Clogout").css("display","block");
    })

})