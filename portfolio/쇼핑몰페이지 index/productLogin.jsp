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
<link rel="manifest" href="./manifest.json" />
<link rel="stylesheet" href="./css/main.css?v=5" />
<title>베스트샵</title>
	<script defer="defer" src="./static/js/main.df0ff27c.js"></script>
	<link href="./static/css/main.f3b29f66.css" rel="stylesheet">
<link rel="stylesheet" type="text/css" href="./css/login.css">
</head>
<body>
	<header class="header_css">
		<%@include file="./header.jsp"%>
	</header>
	<nav class="topNav">
		<%@include file="./nav.jsp"%>
	</nav>
	<main>
			<div class="container">
				<div class="contents">
					<span> HOME ▶ 로그인 </span>
					<div class="sub_cotents">
						<span>로그인</span>
						<div class="member_info">
							<h3>회원 로그인</h3>
							<form id="loginForm">
							<ul>
								<li>
									<div class="member_login_box">
										<span>
											<input type="text" class="login_input" name="userid" id="userid" placeholder="아이디를 입력하세요!">
										</span>
										<span>
											<input type="password" class="login_input" name="password" placeholder="패스워드를 입력하세요!">
										</span>
										<button type="submit" class="login_btn" title="회원 로그인" id="loginSubmit">로그인</button>
									</div>
								</li>
								<li>
									<label class="id_save"><input type="checkbox" id="idSave"> 아이디 저장</label>
								</li>
							</ul>
							<h3 class="none"></h3>
							<ol class="btn_login_box">
								<li>
									<input type="button" value="회원가입" class="btn_box1" title="회원가입" onclick="location.href='./productJoin.jsp'">
								</li>
								<li>
									<input type="button" value="아이디 찾기" class="btn_box1 reserve1" title="아이디 찾기" onclick="alert('서비스 준비중입니다')">
								</li>
								<li>
									<input type="button" value="비밀번호 찾기" class="btn_box1 reserve1" title="비밀번호 찾기" onclick="alert('서비스 준비중입니다')">
								</li>
							</ol>
							</form>
							<h3>비회원 로그인</h3>
							<ul>
								<li>
									<div class="member_login_box">
										<span>
											<input type="text" class="login_input" placeholder="주문자명" id="nonMember">
										</span>
										<span>
											<input type="text" class="login_input" placeholder="주문번호" id="nonNumber" maxlength="8">
										</span>
										<button type="submit" class="login_btn reserve1" title="비회원 로그인" onclick="nonMember()">확인</button>
									</div>
								</li>
								<li style="font-size: 12px; height: 40px; line-height: 40px;">※ 주문번호와 비밀번호를 잊으신 경우, 고객센터로 문의하여 주시기 바랍니다.</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
	</main>
	<footer class="footer">
		<%@include file="./copyright.jsp"%>
	</footer>
</body>
<script src="./js/productLogin.js"></script>

</html>