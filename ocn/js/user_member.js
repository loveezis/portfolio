var uri = window.location.search
var checkbtn = ""; //아이디 중복체크 유무

if (uri == "") {
    alert("올바른 접근이 아닙니다.")
    history.go(-1);
}
else {
    var agree2 = uri.split("&m_agree2=");
    join.m_agree2.value = agree2[1];
    var agree1 = agree2[0].split("?m_agree1=");
    join.m_agree1.value = agree1[1]
}

//정규식 코드 조건 체크

function member_fn() {
    var patternphone = /^01[0,1,6,7,9]{1}[0-9]{3,4}[0-9]{4}$/
    var patternName = /^(?=.*[a-zA-Z가-힣])[a-zA-Z가-힣\d]{3,14}(?![0-9])$/
    var patternEmail = 
    /^(?=.*[a-zA-Z])[a-zA-Z0-9]{4,12}[@](?!@)[a-zA-Z0-9]{5,10}(?:.com|.net|.co.kr|.co|.kr|.io)$/
    var patternAddress = /^[0-9가-힣]{3,13}$/

    if(join.m_userid.value == ""){
        alert("아이디를 먼저 작성해주세요")
        return
    }
    if(join.m_userid.value.length < 5){
        alert("아이디는 최소 5글자 이상입니다.")
        return
    }
    if(join.m_userpw.value == "" || join.checkpw.value == ""){
        alert("패스워드는 최소6자 이상입니다")
        return
    }
    else if(join.m_userpw.value != join.checkpw.value){
        alert("동일한 패스워드를 입력해주세요")
        return
    }
    if(join.m_usernm.value == ""){
        alert("고객명을 입력해주세요")
        return
    }
    if(!patternName.test(join.m_usernm.value)){
        alert("고객명을 형식에 맞게 입력해주세요")
        return
    }
    if(!patternEmail.test(join.m_usermail.value)){
        alert("이메일 형식에 맞게 입력해주세요")
        return
    }
    if(!patternphone.test(join.m_usertel.value)){
        alert("핸드폰번호를 형식에 맞게 입력해주세요")
        return 
    }
    if(join.m_post.value == ""){
        alert("주소를 입력해주세요")
        return 
    }
    if(!patternAddress.test(join.m_addr.value)){
        alert("상세주소는 숫자와 한글만 사용가능합니다.")
        return
    }
    else{
        join.submit();

    } 
}
//아이디 중복체크 
function memberid_ck() {
    var patternid = /^(?=.*[a-zA-Z])[a-zA-Z\d]{5,14}(?![0-9])$/
    if (join.m_userid.value == "") {
        alert("아이디 중복체크를 하셔야 합니다.")
        return
    }
    if(!patternid.test(join.m_userid.value)){
        alert("아이디를 형식에 맞게 입력해주세요")
        return
    }
    else {
        var sign;
        function ajax() {
            if (window.XMLHttpRequest) {
                return new XMLHttpRequest();
            }
        }
        function postdata() {
            
            if (sign.readyState == XMLHttpRequest.DONE && sign.status == 200) {
             
                var call = this.response;
             
                if (call == "ok") {
                    alert("사용가능한 아이디 입니다.");
                    join.m_userid.readOnly = true;
                    checkbtn = "ok";
                }
                else if (call == "cancel") {
                    alert("해당 아이디는 사용하실 수 없습니다");
                    join.m_userid.value = "";
                }
                else {
                    console.log("통신오류 발생!!")
                }
            }
        }

    }
    sign = ajax();
    sign.onreadystatechange = postdata;
    sign.open("POST", "./id_check.php", true);
    sign.setRequestHeader("content-type", "application/x-www-form-urlencoded")
    sign.send("m_userid=" + join.m_userid.value);
}

function mail_input(m) {

    //indexof : -1이뜨는건 없는경우 그외에 숫자는 노드몇번째에있는지 숫자로 나옴
    var m_usermail = join.m_usermail.value;
    var indexof = m_usermail.indexOf("@");
    var mselect = document.getElementById("mselect");
    if (m == "" || m_usermail == "") {
        join.m_usermail.focus();
        mselect.value = "";
        join.m_usermail.value = "";
    }
    else {
        if (indexof == -1) {
            join.m_usermail.value = m_usermail + "@" + mselect.value;
        }
        else {
            var sp = m_usermail.split("@")[0]
            join.m_usermail.value = sp + "@" + mselect.value;
        }
    }
}

$(function () {
    $("#addpost").postcodifyPopUp();
})
// 회원가입 취소
function memberCancle(){
    window.location.href="http://loveezis.dothome.co.kr/portfolio/ocn";
}
