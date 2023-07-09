<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%
String titles = "합리적인 쇼핑 베스트숍 [BEST SHOP]";
%>
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
<link rel="stylesheet" href="./css/main.css" />
<title>베스트샵</title>
<script defer="defer" src="./static/js/main.b86b4dbe.js"></script>
<link href="./static/css/main.5872c7c8.css" rel="stylesheet">
<link href="./css/index4.css" type="text/css" rel="stylesheet">
</head>

<title><%=titles%></title>
<body>
	<header class="header_css">
		<%@include file="./header.jsp"%>
	</header>
	<nav class="topNav">
		<%@include file="./nav.jsp"%>
	</nav>
	<main>
		<section class="slidershow middle">
			<div class="slides">
				<input type="radio" name="r" id="r1" checked>
				<input type="radio" name="r" id="r2">
				<input type="radio" name="r" id="r3">
				<div class="slide s1">
					<img src="./banners/banner0.png" />
				</div>
				<div class="slide">
					<img src="./banners/banner1.png" />
				</div>
				<div class="slide">
					<img src="./banners/banner2.png" />
				</div>
				<div class="navigation">
					<label for="r1" class="bar barColor1"></label>
					<label for="r2" class="bar barColor2"></label>
					<label for="r3" class="bar barColor3"></label>
				</div>
			</div>
		</section>
		<section class="mainProduct">
			<%@include file="./product.jsp"%>
		</section>
		<article class="mainAd">
			<%@include file="./ad.jsp"%>
		</article>
		<section class="mainNotice">
			<div class="noticeMenu">
				<%@include file="./notice.jsp"%>
				<%@include file="./trand.jsp"%>
			</div>
		</section>
		<article class="mainAd2">
			<%@include file="./ad2.jsp"%>
		</article>
	</main>
	<footer class="footer">
		<%@include file="./copyright.jsp"%>
	</footer>
</body>
<script>
	var counter = 1;
	var totalSlides = 3;

	// 첫 번째 노드의 배경색 초기 설정
	document.querySelector(".barColor" + counter).style.backgroundColor = "red";

	setInterval(
			function() {
				var previousCounter = counter;
				counter++;
				if (counter > totalSlides) {
					counter = 1;
				}

				// 현재 배경색 변경
				document.querySelector(".barColor" + counter).style.backgroundColor = "red";

				// 이전 배경색 초기화
				document.querySelector(".barColor" + previousCounter).style.backgroundColor = "";

				// 슬라이드 변경
				document.getElementById('r' + counter).checked = true;
			}, 3000);
</script>
<script src="./js/index4.js"></script>
</html>