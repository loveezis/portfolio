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
<link href="./css/index2.css?v=5" type="text/css" rel="stylesheet">
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
		<section class="bannerSize">
			<ul id="boxmove" class="boxmove">
				<li data-index="0" class="active">
					<img src="./banners/banner0.png" class="bannerSize">
				</li>
				<li data-index="1">
					<img src="./banners/banner1.png" class="bannerSize">
				</li>
				<li data-index="2">
					<img src="./banners/banner2.png" class="bannerSize">
				</li>
			</ul>

			<div class="btnMenu">
				<span onclick="abc.left()"></span>
				<span onclick="abc.right()"></span>
				<input type="hidden" id="autoleft" value="false" onclick="autoLeft()">
			</div>
			<div class="btnMenu2" id="btnMenu2">
				<span id="box1">1</span>
				<span id="box2">2</span>
				<span id="box3">3</span>
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
<script src="./js/index2.js"></script>
</html>