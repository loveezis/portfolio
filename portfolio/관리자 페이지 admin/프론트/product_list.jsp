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
<link rel="stylesheet" type="text/css" href="./css/product_list.css">
<title>쇼핑몰 메인 배너관리</title>
</head>
<body>
	<section>
		<jsp:include page="./logout.jsp" />
		<jsp:include page="./admin_header.jsp" />
		<jsp:include page="./admin_menu.jsp" />
		<div class="headerRedbox">
			<span></span>
			<span>상품 관리 페이지</span>
		</div>
		<div class="searchDiv">
			<select id="selectName" name="pd_name">
				<option value="pd_name">상품명</option>
				<option value="pd_code">상품코드</option>
			</select>
			<input type="text" id="inputValue">
			<input type="button" value="검색" id="searchId" onclick="productSearch()">
		</div>
		<ul class="firstUlcss">
			<li>
				<input type="checkbox" id="ckBoss">
			</li>
			<li>상품코드</li>
			<li>이미지</li>
			<li>상품명</li>
			<li>대 카테고리</li>
			<li>판매금액</li>
			<li>할인가격</li>
			<li>할인율</li>
			<li>재고현황</li>
			<li>판매 유/무</li>
			<li>관리</li>
		</ul>
		<div class="noDataDisplay">등록된 상품이 없습니다.</div>
		<form id="frm" name="frm">
		<main id="ulAppend">
		</main>
		</form>
	</section>
	<div class="pageNumberDiv" id="pageNumberDiv">

	</div>
	<div class="listButtonDiv">
		<input type="button" value="선택삭제" onclick="productDel()">
		<input type="button" value="상품등록" onclick="location.href='./product_write.jsp'">
	</div>
	<input type="hidden" id="ckDel">
	<jsp:include page="./admin_footer.jsp" />
</body>
<script src="./js/product_list.js"></script>
<script>
	var mid = "<%=userid%>"
	if (mid == null) {
		alert("장시간 미사용으로 로그아웃 되었습니다.")
		location.href = "./login.jsp";
	}
</script>
<script src="./js/admin_logpage.js"></script>
</html>
