<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!doctype html>
<html lang="ko">
<head>
<meta charset="utf-8" />
<meta http-equiv="imagetoolbar" content="no" />
<meta name="title" content="합리적인 쇼핑 베스트 샵 [BEST SHOP]" />
<meta name="description" content="합리적인 쇼핑 베스트 샵 [BEST SHOP]" />
<meta name="publisher" content="Designer_Yun" />
<meta name="robots" content="index,follow" />
<meta name="keywords" content="채소,과일,수산물,베이커리,우유,간식,간편식,냉장고,주방용품" />
<meta name="twitter:card" content="채소,과일,수산물,베이커리,우유,간식,간편식,냉장고,주방용품" />
<meta name="twitter:description" content="합리적인 쇼핑 베스트 샵 [BEST SHOP]" />
<meta name="twitter:title" content="합리적인 쇼핑 베스트 샵 [BEST SHOP]" />
<meta property="og:locale" content="ko_KR" />
<meta property="og:site_name" content="합리적인 쇼핑 베스트 샵 [BEST SHOP]" />
<meta property="og:type" content="website" />
<meta property="og:author" content="Designer_Yun" />
<meta property="og:url" content="http://loveezis.cafe24.com/portfolio" />
<meta property="og:img" content="./bs_logo.png" />
<meta property="al:ios:url" content="http://loveezis.cafe24.com/portfolio" />
<meta property="al:android:url" content="http://loveezis.cafe24.com/portfolio" />
<meta property="al:web:url" content="http://loveezis.cafe24.com/portfolio" />
<link rel="icon" href="./bs_logo.png" size="256x256" />
<link rel="icon" href="./bs_logo.png" size="100x100" />
<link rel="icon" href="./bs_logo.png" size="64x64" />
<link rel="icon" href="./bs_logo.png" size="32x32" />
<link rel="icon" href="./bs_logo.png" size="16x16" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<meta name="theme-color" content="#000000" />
<link rel="stylesheet" href="./css/main.css?=v6" />
<title>베스트샵</title>
	<script defer="defer" src="./static/js/main.df0ff27c.js"></script>
	<link href="./static/css/main.f3b29f66.css" rel="stylesheet">
<link rel="stylesheet" type="text/css" href="./css/productJoin.css">
</head>
<body>
	<header class="header_css">
		<%@include file="./header.jsp"%>
	</header>
	<nav class="topNav">
		<%@include file="./nav.jsp"%>
	</nav>
	<main>
		<div class="joinPath">HOME > 회원가입 > 정보입력</div>
		<div class="joinHeader">
			<p>회원가입</p>
			<span>
				01 약관동의
				<img src="./ico/step.png" />
				<a class="fontGray">02 정보입력</a>
				<img src="./ico/step.png" />
				03 가입완료
			</span>
		</div>
		<form class="frmClass" id="frmClass">
			<div class="frmHeader">
				<h3>기본정보</h3>
				<span style="color: red">※모든정보는 필수항목이므로 반드시 입력 하셔야 합니다.</span>
			</div>
			<div>
				<span class="joinName">아이디</span>
				<input type="text" name="userid">
			</div>
			<div>
				<span class="joinName">비밀번호</span>
				<input type="password" name="password">
			</div>
			<div>
				<span class="joinName">비밀번호 확인</span>
				<input type="password" id="passwordCheck">
			</div>
			<div>
				<span class="joinName">이름</span>
				<input type="text" name="username">
			</div>
			<div>
				<span class="joinName">이메일</span>
				<span>
					<input type="text" name="email" id="emailInput">
					<select id="emailSelect" onchange="updateEmailValue()">
						<option value="">직접입력</option>
						<option value="naver.com">naver.com</option>
						<option value="google.com">google.com</option>
						<option value="hanmail.net">hanmail.net</option>
						<option value="daum.net">daum.net</option>
						<option value="hotmail.com">hotmail.com</option>
					</select>
					<div>
						<input type="checkbox" name="email_subscription" id="emailId">
						정보/이벤트 메일 수신에 동의합니다.
					</div>
				</span>
			</div>
			<div>
				<span class="joinName">휴대폰번호</span>
				<span>
					<input type="text" name="phone" maxlength="11" onkeyup="this.value=this.value.replace(/[^0-9]/g,'');">
					<div>
						<input type="checkbox" name="sms_subscription" id="smsId">
						정보/이벤트SMS 수신에 동의합니다
					</div>
				</span>
			</div>
			<div>
				<span class="joinName">전화번호</span>
				<input type="text" name="telephone" maxlength="15" onkeyup="this.value=this.value.replace(/[^0-9]/g,'');">
			</div>
			<div>
				<span class="joinName">주소</span>
				<span>
					<div>
						<input type="text" name="addr1" id="member_post" placeholder="Zip Code" readonly>
						<input type="button" value="우편번호찾기" onclick="findAddr()">
					</div>
					<input id="member_addr" type="text" name="addr2" placeholder="Address" readonly>
					<input type="text" placeholder="Detailed Address" name="addr3">
				</span>
			</div>
			<span class="joinBottomDiv">
				<input type="button" value="취소">
				<input type="button" value="회원가입" id="memberJoin">
			</span>

			<input type="hidden" name="addr1" value="" id="totalValue">
 			<input type="hidden" name="level" value="1">
			<input type="hidden" name="point" value="0">
		</form>
	</main>
	<footer class="footer">
		<%@include file="./copyright.jsp"%>
	</footer>
</body>
<script src="./js/productJoin.js"></script>
<script src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>
</html>