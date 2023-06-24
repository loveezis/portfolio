const loginok = document.getElementById("loginok");
const loginno = document.getElementById("loginno");

// 로그인창 이동 함수
function dologin(){
	location.href="./login.jsp";
}

// 회원가입 이동 함수
function dojoin(){
	location.href="./join.html";
}

// 예약하기 이동 함수
function doRes(){
	location.href="./reserve.jsp";
}

// 예약번호 조회 함수
function doCon(){
	location.href="./part4_no.jsp";
}

function noservice(){
	alert("해당 서비스는 현재 준비중입니다.");
}