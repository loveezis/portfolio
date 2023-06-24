<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%
long time = System.currentTimeMillis();
%>
<!DOCTYPE html>
<html>
<head>
<meta name="viewport"
	content="width=device-width, initial-scale=1, maximum-scale=1">
<meta charset="UTF-8">
<link rel="stylesheet" type="text/css"
	href="./css/default.css?v=<%=time%>">
<link rel="stylesheet" type="text/css"
	href="./css/part4_no.css?v=<%=time%>">
<title>Insert title here</title>
</head>
<body>
	<form id="jf">
		<section class="jpart4no">
			<p class="jno">야영장 예약확인</p>
			<div>※야영장 예약은 PC에서만 신청 가능합니다.</div>
			<ol class="jpartmain">
				<li>
					<span></span>
					<span>예약자 정보</span>
				</li>
				<li>
					<span>예약번호</span>
					<input type="text" name="jpart4no" id="jpart4no" maxlength="8"
						value="21932155">
				</li>
				<li>
					<span onclick="jpartnobtn()">예약 확인</span>
				</li>
			</ol>

		</section>
	</form>
</body>
<script>
window.onresize = function() {
	var w = window.innerWidth;
	if (w > 580 || w < 360) {
		alert("모바일 전용 사이트 입니다.");
		location.href = "about:blank";
	}
};

</script>
<script src="./js/jpartno.js?v=<%=time%>"></script>
<script src="./js/common.js?v=<%=time%>"></script>
</html>