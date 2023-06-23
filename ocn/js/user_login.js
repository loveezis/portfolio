function logins(){
    var login = document.getElementById("login");
    var user_id = document.getElementById("user_id");
    var user_pw = document.getElementById("user_pw");
    if(user_id.value == ""){
        alert("아이디를 입력해주세요")
        return
    }
    if(user_id.length < 5){
        alert("아이디를 최소 5글자 이상입니다")
        return
    }
    if(user_pw.value == ""){
        alert("패스워드를 입력해주세요")
        return
    }
    if(user_pw.length < 8){
        alert("패스워드는 최소 8자이상입니다")
        return
    }
    login.submit();
}