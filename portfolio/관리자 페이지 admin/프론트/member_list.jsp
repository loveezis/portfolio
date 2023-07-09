<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
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
<link rel="stylesheet" type="text/css" href="./css/default.css">
<link rel="stylesheet" type="text/css" href="./css/admin_header.css">
<link rel="stylesheet" type="text/css" href="./css/admin_menu.css">
<link rel="stylesheet" type="text/css" href="./css/admin_footer.css">
<link rel="stylesheet" type="text/css" href="./css/member_list.css">
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<jsp:include page="./logout.jsp" />
	<jsp:include page="./admin_header.jsp" />
	<jsp:include page="./admin_menu.jsp" />
	<form id="frm" name="frm">
	<section class="mainPart" id="mainPart">
		<div>
			<span class="redBox"></span> <span>회원관리</span>
		</div>
		<div>
			<select id="selectValue">
				<option value="mid">아이디</option>
				<option value="mname">고객명</option>
				<option value="mtel">휴대폰</option>
			</select>
			<input type="text" name="mid" id="inputValue">
			<input type="hidden" id="selectUser">
			<input type="button" value="검색" id="search_check" onclick="member_serch()">
		</div>
		<ul class="firstul">
			<li>
			<input type="checkbox" onclick="ck_mother(this.checked)">
			</li>
			<li>아이디</li>
			<li>고객명</li>
			<li>휴대폰</li>
			<li>전화번호</li>
			<li>레벨</li>
			<li>포인트</li>
			<li>최종접속</li>
			<li>가입일</li>
			<li>메일수신</li>
			<li>SMS수신</li>
			<li>관리</li>
		</ul>
		<span class="displayli" id="displayli">등록된 회원이 없습니다.</span>
		<span class="displayUser" id="displayUser">일치하는 정보가 없습니다.</span>
		<div id="ulAppend" class="ulAppend"></div>
		<input type="hidden" id="checkvalue">
		<input type="hidden" id="selectck">
	</section>
	</form>
	<div class="botDivSize1" id="pageNumber">

	</div>
	<div class="botDivSize2">
		<input type="button" value="선택삭제" id="selectDel">
	</div>
	
	<jsp:include page="./admin_footer.jsp" />
</body>
<script src="./js/admin_logpage.js"></script>
<script src="./js/member_list.js"></script>
</html>
