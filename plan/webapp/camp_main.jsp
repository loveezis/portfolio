<%@page import="java.text.DecimalFormat"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<% 
	HttpSession session2 = request.getSession();
	DecimalFormat df = new DecimalFormat();

	String name = (String)session2.getAttribute("username");
	long time = System.currentTimeMillis(); 
%>
	

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link rel="stylesheet" type="text/css" href="./css/default.css?v=<%=time%>">
<link rel="stylesheet" type="text/css" href="./css/plan_main.css?v=<%=time%>">
<link rel="stylesheet" type="text/css" href="./css/top.css?v=<%=time%>">
<title>야영장 예약하기</title>
</head>
<body>
	<jsp:include page="./top.jsp" />
	<div class="yTopMenu">
		<p>야영장 예약하기</p>
	</div>
	<form class="ymainbox" id="ymainbox">
		<input type="hidden" name="carea"> <input type="hidden"
			name="cpart"> <input type="hidden" name="cindate"> <input
			type="hidden" name="coutdate"> <input type="hidden"
			name="ccode" id="rcode"> <input type="hidden" name="cmoney">
		<div class="ybox1" id="ybox1"></div>
		<div class="ybox2">
			<div class="ybox_child ydate">
				<span id="yname">야영장</span> <span
					id="ydate"></span>
			</div>
			<div class="ybox_child ypartno">
				<input type="radio" name="cpartno" value="가" class="radiovalue">
				<span id="yyname0" class="yboxadd"></span> - 가동
			</div>
			<div class="ybox_child ypartno">
				<input type="radio" name="cpartno" value="나" class="radiovalue">
				<span id="yyname1" class="yboxadd"></span> - 나동
			</div>
			<div class="ybox_child ypartno">
				<input type="radio" name="cpartno" value="다" class="radiovalue">
				<span id="yyname2" class="yboxadd"></span> - 다동
			</div>
			<div class="ybox_child ypartno">
				<input type="radio" name="cpartno" value="라" class="radiovalue">
				<span id="yyname3" class="yboxadd"></span> - 라동
			</div>
			<div class="ybox_child cmoney" id="cmoney"></div>
			<div class="ybox_child Yuser">
				<img src="./ico/report.svg" class="yicon">예약자 정보
			</div>
			<div class="ybox_child yboxuser">
				<span>고객명</span> <input type="text" id="yuserid" class="yuserid"
					name="cname">
			</div>
			<div class="ybox_child yboxphone">
				<span>연락처</span> <input type="text" id="yusertel" class="yuserid"
					name="ctel">
			</div>
			<div class="ybox_child yboxperson">
				<span>인원수</span> <select id="cperson" name="cperson">
				</select>
			</div>
			<div class="ybtnMenu">
				<input type="button" value="예약 선택" onclick="bbb()">
			</div>
		</div>
	</form>
	<footer class="copy">
		<ol>
			<li>(국립공원공단) 강원도 원주시 혁신로 22 (우)26466 사업자등록번호: 211-82-06541 예약안내:
				1670-9201 (평일 09-18시, 점심시간 12-13시) FAX: 033-769-9579 이메일:
				csnp@knps.or.kr</li>
			<li>Copyright @ Korea National Park Service. All Rights
				Reserved.</li>
		</ol>
	</footer>
</body>
<script src="./js/plan_main.js?v=<%=time%>"></script>
<script src="./js/common.js?v=<%=time%>"></script>
<script>
	
	var name = "<%=name%>";
	if(name == "null"){
		alert('로그인 세션이 만료되어 로그아웃 되었습니다.');
		location.href = "./login.html";
	}
	else {
		loginok.style.display = "block";
		loginno.style.display = "none";
	}
</script>
</html>