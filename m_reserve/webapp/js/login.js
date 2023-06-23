function join(){
	alert("회원가입은 pc버전에서만 이용이 가능합니다.")
}

function login(){
	if(form.mid.value == ""){
		alert("아이디를 입력해주세요.");
	}else if(form.mpass.value == ""){
		alert("비밀번호를 입력해주세요.")
	}else{
		if(form.mpass.value.length > 15 || form.mpass.value.length < 9){
			alert("비밀번호는 9자 이상 15자 이하입니다.");
		}else{
			form.method = "post";
			form.enctyle = "application/x-www-form-urlencoded";
			form.action = "loginok.do";
			form.submit();
		}
	}
}