"use strict"
const agreeText = function(url){
	const xhr = new XMLHttpRequest();
	xhr.open("GET",url,false);
	xhr.send();
	return xhr.response;	
}
document.getElementById("agree1").innerText = agreeText("./agree/agree_info1.txt");
document.getElementById("agree2").innerText = agreeText("./agree/agree_info2.txt");


function doCheck(){
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function(){
		if(xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200){
			var msg = xhr.responseText; // 서버로부터 받은 텍스트 데이터 출력
			if(join.mid.value == ""){
				alert("해당아이디는 사용할 수 없습니다.")
				return;
			}
			if(join.mid.value != ""){
				
				if(msg == "use"){
					alert("사용가능한 아이디입니다.");
				}
				else{
					alert("사용할 수 없는 아이디 입니다.")
				}
			}
		}
	}
	xhr.open("POST","joinckok.do",true);
	xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
	xhr.send("mid="+join.mid.value);
}

const emailck = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/gi;

function doPost(check){
	if(!join.agree1.checked || !join.agree2.checked){
		alert("모든 약관에 동의해주세요.");
	}else if(join.mpass[0].value == ""){
		alert("비밀번호를 입력해주세요.");
	}else if(join.mpass[1].value == ""){
		alert("비밀번호 확인을 입력해주세요.");
	}else if(join.mpass[0].value != join.mpass[1].value){
		alert("비밀번호 확인이 일치하지 않습니다.")
	}else if(join.mname.value == ""){
		alert("고객명을 입력해주세요.");
	}else if(join.mtel.value == ""){
		alert("연락처를 입력해주세요.");
	}else if(join.memail.value == ""){
		alert("이메일을 입력해주세요.");
	}else{
		if(join.mpass[0].value.length < 9){
			alert("비밀번호는 9자리 이상입니다.");
		}else if(join.mtel.value.length < 10){
			alert("올바른 연락처를 입력해주세요.");
		}else if(!emailck.test(join.memail.value)){
			alert("올바른 이메일을 입력해주세요.");
		}else{
			join.method = "post";
			join.action = "joinok.do";
			join.enctype = "application/x-www-form-urlencoded";
			join.submit();
		}
	}
}