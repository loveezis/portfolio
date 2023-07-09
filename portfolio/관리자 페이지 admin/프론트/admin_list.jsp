<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<%	
	HttpSession session2 = request.getSession();
	String userid = (String)session2.getAttribute("loginId");
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
<link rel="stylesheet" type="text/css" href="./css/admin_list.css">
<link rel="stylesheet" type="text/css" href="./css/admin_footer.css">
<title>관리자 승인 페이지</title>
</head>
<body>
	<jsp:include page="./logout.jsp" />
	<jsp:include page="./admin_header.jsp" />
	<jsp:include page="./admin_menu.jsp" />
	<form id="adminboss" name="adminboss">
	<section class="mainPart" id="mainPart">
		<div>
			<span class="redBox"></span> <span>신규등록 관리자</span>
		</div>
		<ul class="firstul">
			<li>no</li>
			<li>관리자명</li>
			<li>아이디</li>
			<li>전화번호</li>
			<li>이메일</li>
			<li>담당부서</li>
			<li>담당직책</li>
			<li>가입일자</li>
			<li>승인여부</li>
		</ul>
		<ul class="middelul" id="middelul">
			<li>신규 등록된 관리자가 없습니다.</li>
		</ul>
	</section>
	</form>
	<jsp:include page="./admin_footer.jsp" />
</body>
<script>
	var mid = "<%=userid%>"
	if(mid == null){
		alert("장시간 미사용으로 로그아웃 되었습니다.")	
		location.href="./login.jsp";
	}
</script>
<script src="./js/admin_logpage.js"></script>
<script src="./js/admin_list.js"></script>
</html>