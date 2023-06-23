var userid = localStorage.getItem("userid");
var loginid = document.getElementById("m_id");
var autock = document.getElementById("autock");
if(userid != null){
    loginid.value = userid;
    autock.checked = true;
    
}
$(function(){
    
    $("#J_zz").click(function(){
        $(".Rjoin").css("display","block");
        $(".J_loginback").css("display","none");
    });
    
    $("#J_join").click(function(){
        alert("서비스 준비중");
    });
    
    $("#J_x").click(function(){
        $(".J_loginback").css("display","none");
    });
    
    
    $("#J_logingo").click(function(){
        if($("#m_id").val()==""){
            alert("아이디를 입력하세요.");
        }
        else if($("#m_pw").val()==""){
            alert("패스워드를 입력하세요.");
        }
        else{
            if($("#autock").is(":checked") == true){
                localStorage.setItem("userid",$("#m_id").val());
            }
            $("#J_logingoo").submit();
        }
    });
});

function auto(ck){
    console.log($("#autock").is(":checked"));
    if(ck == false){

    }
}