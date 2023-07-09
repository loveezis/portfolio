function masterLogin(){
	var loginId = document.getElementById("loginId");
	var loginPw = document.getElementById("loginPw");
	var loginForm = document.getElementById("loginForm");
	
	if(loginId.value == ""){
		alert("아이디를 확인해주세요");
		return;
	}
	if(loginPw.value == ""){
		alert("패스워드를 확인해주세요");
		return;
	}
	else{
		loginForm.method = "post";
		loginForm.action = "./loginok.do";
		loginForm.submit();
	}	
}
function newMaster(){
	location.href="./add_master.html";	
}
function ipsearch(){
	location.href="./add_master_search.html";
}
