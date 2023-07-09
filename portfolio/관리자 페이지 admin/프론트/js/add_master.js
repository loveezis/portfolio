var sign = true;
function joingo() {
	var tellvalue = document.getElementsByClassName("tellvalue");
	var mpass = document.getElementById("mpass");
	var mpass2 = document.getElementById("mpass2");
	var tellhidden = document.getElementById("tellhidden");
	var firstTel = document.getElementById("firstTel");
	var mmail = document.getElementById("mmail");
	var mname = document.getElementById("mname");
	var mteam1 = document.getElementById("mteam1");
	var mteam2 = document.getElementById("mteam2");
	var telcheck = /^01[0-9]{9}$/
	var emailcheck = /^[a-z0-9]{5,}@[a-z0-9]{5,}.[a-z0-9]{2,}$/i
	var namecheck = /^[가-힣a-z]{3,}$/i


	if (mpass.value == "" && mpass2.value == "") {
		alert("패스워드를 입력하세요");
		return;
	}
	if (mpass.value != mpass2.value) {
		alert("동일한 비밀번호를 입력해주세요");
		mpass.focus();
		return;
	}
	if (mname.value == "") {
		alert("사용자 이름을 입력해주세요");
		return;
	}
	if (!namecheck.test(mname.value)) {
		alert("고객님의 성함을 입력해주세요 (영어나 숫자만 입력가능)");
		return;
	}

	if (!emailcheck.test(mmail.value)) {
		alert("이메일 형식이 올바르지 않습니다");
		return;
	}
	if (sign == true) {
		var w = 0;
		while (w < tellvalue.length) {
			tellhidden.value += tellvalue[w].value;
			w++;
		}
	}
	if(telcheck.test(tellhidden.value)){
		sign = false;
	}
	if (!telcheck.test(tellhidden.value)) {
		alert("핸드폰 번호가 올바르지 않습니다.");
		tellhidden.value = "";
		sign = true;
		firstTel.focus();
		return;
	}
	if (mteam1.value == "" && mteam2.value == "") {
		alert("관리자 부서 및 직책을 선택해주세요");
		return;
	} else {

		var adminJoin = document.getElementById("adminJoin");

		adminJoin.action = "./add_masterok.do";
		adminJoin.method = "post";
		adminJoin.submit();
	}
}

function idcheck() {
	var mid = document.getElementById("mid");
	var checkid = /^[a-z0-9]{2,}$/i
	var http = new XMLHttpRequest();
	http.onreadystatechange = function() {
		if (http.readyState == XMLHttpRequest.DONE && http.status == 200) {
			var result = this.response;
			if (result == "" || !checkid.test(mid.value)) {
				alert("해당 아이디는 사용할 수 없습니다");
				mid.value = "";
				return;
			}
			if (result == "use" && result != "") {
				alert("사용가능한 아이디입니다.");
				return;
			}
			else {
				alert("사용할 수 없는 아이디 입니다.");
				mid.value = "";
				return;
			}
		}
	}
	http.open("post", "./id_checkok.do", true);
	http.setRequestHeader("content-type", "application/x-www-form-urlencoded");
	http.send("mid=" + mid.value);

}

