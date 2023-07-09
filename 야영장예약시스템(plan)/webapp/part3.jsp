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
<title>야영장 예약하기</title>
<link rel="stylesheet" type="text/css" href="./css/default.css?v=<%=time%>">
<link rel="stylesheet" type="text/css" href="./css/part3.css?v=<%=time%>">
<link rel="stylesheet" type="text/css" href="./css/top.css?v=<%=time%>">
</head>
<body>
	<jsp:include page="./top.jsp" />
	<section>
		<form id="campform" method="post" action="./part3_insert.do"
			enctype="application/x-www-form-urlencoded">
			<input type="hidden" name="info"
				value="<%=request.getAttribute("area")%>"> <input
				type="hidden" name="info" value="<%=request.getAttribute("part")%>">
			<input type="hidden" name="info"
				value="<%=request.getAttribute("partno")%>"> <input
				type="hidden" name="info"
				value="<%=request.getAttribute("indate")%>"> <input
				type="hidden" name="info"
				value="<%=request.getAttribute("outdate")%>"> <input
				type="hidden" name="info" value="<%=request.getAttribute("name")%>">
			<input type="hidden" name="info"
				value="<%=request.getAttribute("tel")%>"> <input
				type="hidden" name="info"
				value="<%=request.getAttribute("person")%>"> <input
				type="hidden" name="info" value="<%=request.getAttribute("code")%>">
			<input type="hidden" name="info" value=""> <input
				type="hidden" name="info" value=""> <input type="hidden"
				name="info" value="<%=request.getAttribute("money")%>">

			<p>야영장 예약하기</p>
			<ul class="ul_cy">
				<li><span class="title_cy"><%=request.getAttribute("area")%></span>
					<span class="font20"><%=request.getAttribute("indate")%> ~ <%=request.getAttribute("outdate")%></span></li>
				<li><div>야영장 위치</div>
					<div><%=request.getAttribute("part")%>
						-
						<%=request.getAttribute("partno")%>동
					</div></li>
				<li>총 금액 : <%=df.format(Integer.parseInt((String)request.getAttribute("money")))%> 원
				</li>
				<li class="title_cy">예약자 정보</li>
				<!-- 5번 -->
				<li><div>고객명</div>
					<div><%=request.getAttribute("name")%></div></li>
				<li><div>연락처</div>
					<div><%=request.getAttribute("tel")%></div></li>
				<li><div>인원수</div>
					<div><%=request.getAttribute("person")%>명
					</div></li>
				<li><div>예약번호</div>
					<div><%=request.getAttribute("code")%></div></li>
				<li></li>
				<!-- 10번 -->
				<li class="title_cy">결제수단</li>
				<li id="btnli"><span onclick="paytypes(0)"
					class="selectbtn type1">무통장 입금</span> <span onclick="paytypes(1)"
					class="selectbtn type1">신용카드</span> <span onclick="paytypes(2)"
					class="selectbtn type1">계좌이체</span></li>
				<li id="bank">신한은행 : 102-202306-0606 (국립공원공단) <input
					type="text" placeholder="입금자명을 입력" name="info">
				</li>
				<li id="paytext1"><span class="selectbtn type2">무통장 입금</span> <span>신한은행
						: 102-202306-0606 (국립공원공단)</span></li>
				<li id="paytext2"><span class="selectbtn type2">신용카드</span> <span
					class="cardtext">입금완료</span></li>
				<li id="paytext3"><span class="selectbtn type2">계좌이체</span> <span>신한은행
						: 102-202306-0606 (국립공원공단)</span></li>
				<li>
					<button type="button" class="paybtn" onclick="payselect(0)">결제
						선택</button>
					<button type="button" class="paybtn" onclick="payselect(1)">예약완료</button>
					<button type="button" class="paybtn" onclick="payselect(2)">예약취소</button>
				</li>
			</ul>
		</form>
	</section>
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
<script src="./js/part3.js?v=<%=time%>"></script>
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