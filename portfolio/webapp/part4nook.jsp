<%@page import="java.text.DecimalFormat"%>
<%@page import="java.util.ArrayList"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%
HttpSession session2 = request.getSession();
DecimalFormat df = new DecimalFormat();

String name = (String)session2.getAttribute("username");
long time = System.currentTimeMillis(); 

ArrayList<String> al =(ArrayList<String>)request.getAttribute("4data");


String A= "상태";
if(al.get(9).equals("Y") && al.get(8).equals("신용카드") ){
	A = "결제완료";
}
else if(al.get(9).equals("N") && al.get(8).equals("신용카드") ){
	A = "미결제";
}
else if(al.get(9).equals("Y") && al.get(8).equals("계좌이체") ){
	A = "입금완료";
}
else if(al.get(9).equals("N") && al.get(8).equals("계좌이체") ){
	A = "미입금";
}
else if(al.get(9).equals("N") && al.get(8).equals("무통장 입금") ){
	A = "미입금";
}
else if(al.get(9).equals("Y") && al.get(8).equals("무통장 입금") ){
	A = "입금완료";
}

%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>야영장 예약하기</title>
		<link rel="stylesheet" type="text/css" href="./css/default.css?v=<%=time%>">
		<link rel="stylesheet" type="text/css" href="./css/part4nook.css?v=<%=time%>">
		<link rel="stylesheet" type="text/css" href="./css/top.css?v=<%=time%>">
	</head>
	<body>
	<jsp:include page="./top.jsp" />
		<form id="jjf">
		<section class="part4okmain">
			<p>야영장 예약확인</p>
			<ul class="ul_cy">
				<li>
					<span class="title_cy"><%=al.get(0)%> 야영장</span>
					<span class="font20"><%=al.get(1)%> ~ <%=al.get(10)%></span>
				</li>
				<li>
					<div>야영장 위치</div>
					<div><%=al.get(2)%> - <%=al.get(11)%>동</div>
				</li>
				<li>총 금액 : <%=df.format(Integer.parseInt(al.get(3)))%> 원</li>
				<li class="title_cy">예약자 정보</li>
				<li>
					<div>고객명</div>
					<div><%=al.get(4)%></div>
				</li>
				<li>
					<div>연락처</div>
					<div><%=al.get(5)%></div>
				</li>
				<li>
					<div>인원수</div>
					<div><%=al.get(6)%> 명</div>
				</li>
				<li>
					<div>예약번호</div>
					<div><%=al.get(7)%></div>
					<input type="hidden" value="<%=al.get(7)%>" name="ccode">
				</li>
				<li></li>
				<li class="title_cy">결제수단</li>
				<li>
					<span><%=al.get(8)%></span>
					<label><%=A%></label>
				</li>
				<li>
					<button type="button" class="paybtn" onclick="delet()" value="del">예약취소</button>
				</li>
			</ul>
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
	<script src="./js/common.js?v=<%=time%>"></script>	
	<script>
		alert("예약정보가 확인되었습니다.");
		var name = "<%=name%>";
		if(name != "null"){
			loginok.style.display = "block";
			loginno.style.display = "none";
		}else{
			loginok.style.display = "none";
			loginno.style.display = "block";
		}
		function dologout() {
			jjf.method = "post";
			jjf.action = "./logout.do";
			jjf.submit();
		}
		function delet() {
			confirm("예약을 취소 하시겠습니까?");
			jjf.method = "post";
			jjf.action = "./part4del.do";
			jjf.submit();
		}
	</script>
	
</html>