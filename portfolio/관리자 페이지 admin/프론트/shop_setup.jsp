<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<%
HttpSession session2 = request.getSession();
String userid = (String) session2.getAttribute("loginId");
if (userid == null) {
	out.println("<script>alert('접근 권한이 없습니다.'); location.href='./login.jsp';</script>");
	out.println("<script>location.reload();</script>");
}
%>
<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<link rel="stylesheet" type="text/css" href="./css/default.css">
<link rel="stylesheet" type="text/css" href="./css/admin_header.css">
<link rel="stylesheet" type="text/css" href="./css/admin_menu.css">
<link rel="stylesheet" type="text/css" href="./css/admin_footer.css">
<link rel="stylesheet" type="text/css" href="./css/shop_setup.css">
<title>쇼핑몰 메인 배너관리</title>
</head>
<body>
	<section>
		<jsp:include page="./logout.jsp" />
		<jsp:include page="./admin_header.jsp" />
		<jsp:include page="./admin_menu.jsp" />
		<div class="headerRedbox">
			<span></span>
			<span>쇼핑몰 메인 배너 관리</span>
		</div>
		<form id="frm1">
		<div class="nextDiv">
			<span class="setupName">메인 배너 등록</span>
			<ul class="fristUl">
				<li>
					<input type="text" class="inputSize" name="banner1" id="bannerAdd0">
					<span>배너1</span>
					<span class="redFont">※ 배너 이미지 url을 입력하세요</span>
				</li>
				<li>
					<input type="text" class="inputSize" name="banner1Url" id="bannerAdd1">
					<span>링크 URL</span>
				</li>
				<li>
					<input type="text" class="inputSize" name="banner2"  id="bannerAdd2">
					<span>배너2</span>
					<span class="redFont">※ 배너 이미지 url을 입력하세요</span>
				</li>
				<li>
					<input type="text" class="inputSize" name="banner2Url"  id="bannerAdd3">
					<span>링크 URL</span>
				</li>
				<li>
					<input type="text" class="inputSize" name="banner3"  id="bannerAdd4">
					<span>배너3</span>
					<span class="redFont">※ 배너 이미지 url을 입력하세요</span>
				</li>
				<li>
					<input type="text" class="inputSize" name="banner3Url"  id="bannerAdd5">
					<span>링크 URL</span>
				</li>
				<li>
					<input type="text" class="inputSize" name="banner4"  id="bannerAdd6">
					<span>배너4</span>
					<span class="redFont">※ 배너 이미지 url을 입력하세요</span>
				</li>
				<li>
					<input type="text" class="inputSize" name="banner4Url"  id="bannerAdd7">
					<span>링크 URL</span>
				</li>
			</ul>
		</div>
		<div class="btnDiv">
			<input type="button" value="배너 변경" id="mainBanner">
		</div>
		</form>
		<form id="frm2">
		<div class="headerRedbox">
			<span></span>
			<span>쇼핑몰 메인 팝업 관리</span>
		</div>
		<div class="nextDiv nextUlDiv">
			<span class="setupName">메인 팝업 등록</span>
			<ul class="fristUl nextUl">
				<li>
					<input type="text" class="inputSize" name="p_banner1" id="pAdd0"> 
					<span>배너1</span>
					<span class="redFont">※ 팝업 이미지 url을 입력하세요</span>
				</li>
				<li>
					<input type="text" class="inputSize" name="p_banner1Url" id="pAdd1">
					<span>링크 URL</span>
				</li>
				<li>
					<input type="checkbox" name="popupUse" id="pAdd2">
					<div>팝업창 사용</div>
				</li>
			</ul>
		</div>
		<div class="btnDiv">
			<input type="button" value="팝업창 변경" id="popupBanner">
		</div>
		</form>
		<form id="frm3">
		<div class="headerRedbox">
			<span></span>
			<span>쇼핑몰 AD 배너</span>
		</div>
		<div class="nextDiv thirdUlDiv">
			<span class="setupName">AD 배너 등록</span>
			<ul class="fristUl nextUl">
				<li>
					<input type="text" class="inputSize" name="adBanner1" id="adAdd0">
					<span>AD 배너1</span>
					<span class="redFont">※ 이미지 url을 입력하세요</span>
				</li>
				<li>
					<input type="text" class="inputSize" name="adBanner1Url" id="adAdd1">
					<span class="marginCtrl">링크 URL</span>
				</li>
				<li>
					<input type="text" class="inputSize" name="adBanner2" id="adAdd2">
					<span>AD 배너2</span>
					<span class="redFont">※ 이미지 url을 입력하세요</span>
				</li>
				<li>
					<input type="text" class="inputSize" name="adBanner2Url" id="adAdd3">
					<span class="marginCtrl">링크 URL</span>
				</li>
			</ul>
		</div>
		<div class="btnDiv">
			<input type="button" value="AD 배너 변경" id="adBanner">
		</div>
		</form>
	</section>
	<jsp:include page="./admin_footer.jsp" />
</body>
<script src="./js/shop_setup.js?v=5">
<script>
	var mid = "<%=userid%>";
	if (mid == null) {
		alert("장시간 미사용으로 로그아웃 되었습니다.")
		location.href = "./login.jsp";
	}
</script>
<script src="./js/admin_logpage.js"></script>
</html>
