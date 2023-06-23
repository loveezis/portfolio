function allagree(){
    var ag = document.getElementsByClassName("ag");
    var allag = document.getElementById("all_agree");

    var agea = ag.length;

    var aw = 0;
    while(aw < agea){
        ag[aw].checked = true

        if(allag.checked == false){
            ag[aw].checked = false;
        }
        aw++
    }


}

function agree(){
    if(ship.m_agree1.checked == false){
        alert("이용약관에 동의 하세요");
    }
    else if(ship.m_agree2.checked == false){
        alert("개인정보 수집에 동의 하세요")
    }
    else{
        ship.submit();
    }
}
$(function(){
    $("#agreeText1").load("./agree1.txt",function(a,b){
        //load 함수는 ajax함수를 축소시킨 통신함수
        $(this).attr("style","overflow-y:auto")
        if(b == "error"){
            console.log("올바른 파일접근이 아닙니다");
        }
    })
    $("#agreeText2").load("./agree2.txt",function(a,b){
        //load 함수는 ajax함수를 축소시킨 통신함수
        $(this).attr("style","overflow-y:auto")
        if(b == "error"){
            console.log("올바른 파일접근이 아닙니다");
        }
    })

})    
