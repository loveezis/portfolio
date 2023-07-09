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
<link rel="stylesheet" href="./css/main.css?v=6" />
<title>베스트샵</title>
	<script defer="defer" src="./static/js/main.df0ff27c.js"></script>
	<link href="./static/css/main.f3b29f66.css" rel="stylesheet">
<link rel="stylesheet" type="text/css" href="./css/productAgree.css?v=5">
</head>
<body>
	<header class="header_css">
		<%@include file="./header.jsp"%>
	</header>
	<nav class="topNav">
		<%@include file="./nav.jsp"%>
	</nav>
	<main>
		<div class="joinPath">HOME > 회원가입 > 약관동의</div>
		<div class="joinHeader">
			<p>회원가입</p>
			<span>
				<a class="fontGray">01 약관동의</a>
				<img src="./ico/step.png" />
				02 정보입력
				<img src="./ico/step.png" />
				03 가입완료
			</span>
		</div>
		<form class="frmClass">
			<div class="frmHeader">
				<h3>약관동의</h3>
			</div>
			<div>
				<input type="checkbox" name="agreeCheck" class="ckMargin" id="allCheck">
				<span>
					<a class="aTagBold">베스트샵의 모든 약관을 확인하고 전체 동의합니다.</a>(전체동의.선택항목도 포함됩니다.)
				</span>
			</div>
			<div>
				<input type="checkbox" name="agreeCheck" class="ckMargin">
				<span>
					<a class="aTagBold">(필수)</a>이용약관 <a class="underLine" href="./agreement/webagree1.txt" target="_blank" chaset="utf-8">전체보기 ></a>
				</span>
			</div>
			<div>
				<div id="agree1" class="greeFont"></div>
			</div>
			<div>
				<input type="checkbox" name="agreeCheck" class="ckMargin">
				<span>
					<a class="aTagBold">(필수)</a>개인정보 수집 및 이용 <a class="underLine" href="./agreement/webagree2.txt" target="blank" chaset="utf-8">전체보기 ></a>
				</span>
			</div>
			<div>
				<div id="agree2" class="greeFont"></div>
			</div>
			<div class="btnDiv">
				<input type="button" value="다음단계" id="nextStep">
			</div>
		</form>
	</main>
	<footer class="footer">
		<%@include file="./copyright.jsp"%>
	</footer>
</body>
<script src="./js/productAgree.js"></script>
</html>
