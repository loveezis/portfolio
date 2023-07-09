<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>로그인</title>
<link rel="stylesheet" type="text/css" href="./css/default.css?v=2">
<link rel="stylesheet" type="text/css" href="./css/login.css?v=2">
<link rel="stylesheet" type="text/css" href="./css/login_top.css?v=4">
</head>
<body>
	<jsp:include page="./login_top.jsp" />
	<form id="form">
			<ul class="base">
				<li>로그인</li>
				<li>간편로그인은 회원가입 후 최초 1회 연동이 필요합니다.</li>
				<li><input type="text" name="mid" placeholder="아이디를 입력">
				<li><input type="password" name="mpass" placeholder="비밀번호 대,소문자 구분 9~15자로 입력" maxlength="15"></li>
				<li><div class="btn1" onclick="login()">로그인</div></li>
				<li>
					<ol class="ol1">
						<li>휴면계정복구</li>
						<li>아이디 찾기</li>
						<li>비밀번호 찾기</li>
					</ol>
				</li>
				<li><label></label><div>간편로그인</div><label></label></li>
				<li>
					<ol class="ol2">
						<li><span title="카카오톡" onclick="location.href='http://kakaotalk.com'"></span></li>
						<li><span title="네이버" onclick="location.href='http://naver.com'"></span></li>
						<li><span title="모바일" onclick="alert('준비중')"></span></li>
						<li><span title="ipin" onclick="location.href='http://niceipin.co.kr'"></span></li>
					</ol>
				</li>
				<li><div class="btn2" onclick="join()">회원가입</div></li>
			</ul>
	</form>
		<footer class="copy">
		<ol>
			<li>(국립공원공단) 강원도 원주시 혁신로 22 (우)26466 사업자등록번호: 211-82-06541 예약안내:
				1670-9201 (평일 09-18시, 점심시간 12-13시) FAX: 033-769-9579 이메일:
				csnp@knps.or.kr</li>
			<li>Copyright @ Korea National Park Service. All Rights
				Reserved.</li>
		</ol>
	</footer>
</body>
<script src="./js/login.js?v=10"></script>
<script src="./js/common.js?v=5"></script>
</html>