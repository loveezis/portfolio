function corp(no) {
    window.open("http://www.ftc.go.kr/bizCommPop.do?wrkr_no=" + no, "", "width=500 height=500");

}
var data = "event_user,event_email,event_tel,event_number,event_check"
var datalist = data.split(",");
var ea;
function eventCheck(){

    if(eventgo.event_user.value== "" || eventgo.event_user.value == 0){
        alert("참여자 이름을 확인해주세요");
    }
    else if(eventgo.event_email.value == "" || eventgo.event_email.value == 0){

        alert("이메일 주소를 입력해주세요");
    }
    else if(eventgo.event_tel.value == "" || eventgo.event_tel.value.length == 0){
        alert("휴대폰 번호를 입력해주세요"); 
    }
    else if(eventgo.event_tel.value.length < 10){
        alert("휴대폰 번호는 최소 10자리 입니다.");
    }
    else if(isNaN(eventgo.event_tel.value)){
        alert("휴대폰 번호는 숫자만 입력가능합니다")
    }
    else if(eventgo.event_number.value == ""){
        alert("티켓번호는 숫자만 입력해주세요");
    }
    else if(eventgo.event_number.value.length < 8){
        alert("티켓번호는 무조건 8자리 입니다.")
    }
    else if(isNaN(eventgo.event_number.value)){
        alert("티켓번호는 숫자만 입력가능합니다")
    }
    else if(eventgo.event_check.checked == false){
        alert("이용약관에 동의하셔야 합니다.")
    }
    else{
        eventgo.submit();
    }
}
