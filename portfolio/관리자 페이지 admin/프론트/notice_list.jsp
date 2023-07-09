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
<link rel="stylesheet" type="text/css" href="./css/notice_list.css">
<title>관리자 승인 페이지</title>
</head>
<body>
	<jsp:include page="./logout.jsp" />
	<jsp:include page="./admin_header.jsp" />
	<jsp:include page="./admin_menu.jsp" />
	<section>
	<form id="frm">
		<div class="redBoxMother">
			<span></span>
			<span>공지사항 관리페이지</span>
		</div>
		<ul class="notice_ul1 noticeTop">
			<li><input type="checkbox" name="checkNumber"></li>
			<li>NO</li>
			<li>제목</li>
			<li>글쓴이</li>
			<li>날짜</li>
			<li>조회</li>
		</ul>
		<main class="noticeMother" id="ulplus">

			<div class="list_display">등록된 공지 내용이 없습니다.</div>
		</main>
		<div class="notice_btnmenu">
			<input type="button" value="공지삭제" id="noticeDel">
			<input type="button" value="공지등록" onclick="location.href='./notice_write.jsp'">
		</div>
		<div class="notice_page">
			<span onclick="leftfirst()" class="cursorPointer"><<</span>
			<span onclick="leftbtn()" class="cursorPointer"><</span>
			<span id="pagenumber">1</span>
			<span onclick="rightbtn()" class="cursorPointer">></span>
			<span onclick="rightlast()" class="cursorPointer">>></span>
		</div>
		</form>
	</section>
	<jsp:include page="./admin_footer.jsp" />
</body>
<script src="./js/notice_list.js"></script>
<script>
	var mid = "<%=userid%>"
	if (mid == null) {
		alert("장시간 미사용으로 로그아웃 되었습니다.")
		location.href = "./login.jsp";
	}
</script>
<script src="./js/admin_logpage.js"></script>
</html>