<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
<title>로그인</title>
<link rel="stylesheet" type="text/css" href="./css/default.css?v=2">
<link rel="stylesheet" type="text/css" href="./css/login.css?v=2">
</head>
<body>
	<form id="form">
		<ul class="base">
			<li>로그인</li>
			<li>간편로그인은 회원가입 후 최초 1회 연동이 필요합니다.</li>
			<li>
				<input type="text" name="mid" value="lovemehi">
			<li>
				<input type="password" name="mpass"
					value="123123123123" maxlength="15">
			</li>
			<li>
				<div class="btn1" onclick="login()">로그인</div>
			</li>
			<li class="li_desize">
				<ol class="ol1">
					<li>휴면계정복구</li>
					<li>아이디 찾기</li>
					<li>비밀번호 찾기</li>
				</ol>
			</li>
			<li class="li_desize">
				<span>───────────</span>
				<span>간편로그인</span>
				<span>───────────</span>
			</li>
			<li>
				<ol class="ol2">
					<li>
						<span title="카카오톡" onclick="location.href='http://kakaotalk.com'"></span>
					</li>
					<li>
						<span title="네이버" onclick="location.href='http://naver.com'"></span>
					</li>
					<li>
						<span title="모바일" onclick="alert('준비중')"></span>
					</li>
					<li>
						<span title="ipin" onclick="location.href='http://niceipin.co.kr'"></span>
					</li>
				</ol>
			</li>
			<li>
				<div class="btn2" onclick="join()">회원가입</div>
			</li>
		</ul>
	</form>
</body>
<script>
window.onresize = function() {
	var w = window.innerWidth;
	if (w > 580 || w < 360) {
		alert("모바일 전용 사이트 입니다.");
		location.href = "about:blank";
	}
};

</script>
<script src="./js/login.js?v=10"></script>
<script src="./js/common.js?v=5"></script>
</html>