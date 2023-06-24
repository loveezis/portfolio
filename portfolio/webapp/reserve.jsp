<%@page import="java.sql.Date"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<% 
	HttpSession session2 = request.getSession();

	String name = (String)session2.getAttribute("username");
	String tel = (String)session2.getAttribute("usertel");
	long time = System.currentTimeMillis(); 
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link rel="stylesheet" type="text/css" href="./css/reserv.css?v=<%=time%>">
<link rel="stylesheet" type="text/css" href="./css/default.css?v=<%=time%>">
<link rel="stylesheet" type="text/css" href="./css/top.css?v=<%=time%>">
<title>야영장 예약하기</title>
</head>
<body>
	<jsp:include page="./top.jsp" />
	<form id="reser">
		<input type="hidden" name="cname" value="">
		<input type="hidden" name="cpart" value="">
		<input type="hidden" name="mname" value="<%=name %>">
		<input type="hidden" name="mtel" value="<%=tel %>">
		<section>
			<label class="Rtop">야영장 예약하기</label>
			<div id="camp1">
				<ul class="camp" id="ul0"></ul>
			</div>
			<div id = "camp2">
				<ul class="camp bottom" id="ul1">
				</ul>
			</div>
			<label class="Rico"></label>
			<label id="Rlogin">로그인하셔야만 예약하실 수 있습니다.</label>
			<div class="yDateSize">
			<ul id="Rdate">
				<li>입실일자 : </li><li><input type="date" name="cindate"></li>
				<li>퇴실일자 : </li><li><input type="date" name="coutdate"></li>
				<li><div onclick="doPost()">야영장 선택</div></li>
			</ul>
			</div>
		</section>
		<input type="hidden" name="cday" value="">
	</form>
	<footer class="copy">
			<ol>
				<li>(국립공원공단) 강원도 원주시 혁신로 22 (우)26466 사업자등록번호: 211-82-06541 예약안내: 1670-9201 (평일 09-18시, 점심시간 12-13시) FAX: 033-769-9579 이메일: csnp@knps.or.kr
				</li>
				<li>Copyright @ Korea National Park Service. All Rights Reserved.</li>
			</ol>
		</footer>
</body>
<script src="./js/reserve.js?v=<%=time%>"></script>
<script src="./js/common.js?v=<%=time%>"></script>
<script>
	if("<%= name %>" != "null"){
		loginok.style.display = "block";
		loginno.style.display = "none";
		camp1.style.display ="block";
		camp2.style.display = "block";
		login.innerText = "야영장을 선택해주세요.";
	}else{
		loginok.style.display = "none";
		loginno.style.display = "block";
		camp1.style.display ="none";
		camp2.style.display = "none";
	}
</script>
</html>