<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<% 
	HttpSession session2 = request.getSession();

	String name = (String)session2.getAttribute("username");
	long time = System.currentTimeMillis(); 
%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<link rel="stylesheet" type="text/css" href="./css/default.css?v=<%=time%>">
		<link rel="stylesheet" type="text/css" href="./css/top.css?v=<%=time%>">
		<link rel="stylesheet" type="text/css" href="./css/part4_no.css?v=<%=time%>">
		<title>Insert title here</title>
	</head>
	<body>
	<jsp:include page="./top.jsp" />
		<form id="jf">
		<section class="jpart4no">
			<p class="jno">야영장 예약확인</p>
			<ol class="jpartmain">
				<li>
					<span></span>
					<span>예약자 정보</span>
				</li>
				<li>
					<span>예약번호</span>
					<input type="text" name="jpart4no" id="jpart4no" maxlength="8">
					<span>예약번호 8자리 입력</span>
				</li>
				<li>
					<span onclick="jpartnobtn()">예약 확인</span>
				</li>
			</ol>
	
		</section>
		</form>
		<footer class="copy">
			<ol>
				<li>(국립공원공단) 강원도 원주시 혁신로 22 (우)26466 사업자등록번호: 211-82-06541 예약안내: 1670-9201 (평일 09-18시, 점심시간 12-13시) FAX: 033-769-9579 이메일: csnp@knps.or.kr
				</li>
				<li>Copyright @ Korea National Park Service. All Rights Reserved.</li>
			</ol>
		</footer>
	</body>
	<script src="./js/jpartno.js?v=<%=time%>"></script>
	<script src="./js/common.js?v=<%=time%>"></script>
	<script>
	var name = "<%=name%>";
	if(name != "null"){
		loginok.style.display = "block";
		loginno.style.display = "none";
	}else{
		loginok.style.display = "none";
		loginno.style.display = "block";
	}
		function logout() {
			location.href= "./.html";
		}
	</script>
</html>