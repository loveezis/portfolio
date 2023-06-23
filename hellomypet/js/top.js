$(function(){

    var jx = 0;
    
    $("#J_top1").click(function(){
        
        if(jx == 0){
            $("#Cmenu_main").animate({
                "right": 0
            },200);
            $(".ALL").css({
                "display": "block"
            })




            jx++;
        }
        else {
            $("#Cmenu_main").animate({
                "right": "100%"
            },200);
            $(".ALL").css({
                "display": "none"
            })

            jx = 0;
        }
        // console.log(jx);
    });
    
    var jz = 0;

    $("#J_top3").click(function(){

        if(jz == 0){
            $("#J_search").fadeIn(500);
            jz++;
        }
        else {
            $("#J_search").fadeOut(500);
            jz = 0;
        }
        // console.log(jz);
        
    });
});