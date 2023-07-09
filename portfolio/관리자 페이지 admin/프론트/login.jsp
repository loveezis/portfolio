<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%	
	HttpSession session2 = request.getSession();
	String message = (String)session2.getAttribute("message");
%>
<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<link rel="stylesheet" type="text/css" href="./css/login.css?v=5">
<link rel="stylesheet" type="text/css" href="./css/default.css">
<script src="./js/login.js?v=111"></script>
<title>관리자 로그인</title>
</head>
<body>
	<form id="loginForm" enctype="application/x-www-form-urlencoded">
		<div class="logo">
			<span>
				<img src="./img/logo.png">ADMINISTRATOR
			</span>
		</div>
		<div class="backpart">
			<div class="mainbox">
				<div>
					<input type="text" name="loginId" id="loginId" value="admin">
					<input type="password" name="loginPw"  id="loginPw" value="a123456">
				</div>
				<div onclick="masterLogin()">MASTER LOGIN</div>
				<div>※본 사이트는 관리자 외에는 접근을 금합니다. 페이지 접속에 대한 정보는 모두 기록 됩니다.</div>
				<div class="menubot">
					<span onclick="newMaster()">신규 관리자 등록요청</span>
					<span onclick="alert('서비스 준비중입니다.')">아이디/패스워드 찾기</span>
				</div>
			</div>
		</div>
	</form>
</body>
</html>
