<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%
String mid = (String) session.getAttribute("mid");
String mname = (String) session.getAttribute("mname");
String mtel = (String) session.getAttribute("mtel");
String memail = (String) session.getAttribute("memail");
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>결제자 정보 확인 및 배송정보</title>
</head>
<body>
	<form id="frm" enctype="application/x-www-form-urlencoded">
	<!-- pg사에 제공되는 모든 hidden값들 -->
	<input type="hidden" name="version" value="1.0">
	<input type="hidden" name="mid" value="">
	<input type="hidden" name="oid" value="">
	<input type="hidden" name="price" value="${product_money}">
	<input type="hidden" name="timestamp" value="">
	<input type="hidden" name="currency" value="WON"> <!-- 원단위 -->
	<input type="hidden" name="goodname" value="${product_name}"> <!-- 상품명 -->
	<input type="hidden" name="buyername" value="<%=mname%>"> <!-- 고객명 -->
	<input type="hidden" name="buyertel" value="<%=mtel%>"> <!-- 전화번호  -->
	<input type="hidden" name="buyerid" value="<%=mid%>"> <!-- 로그인아이디 -->
	<input type="hidden" name="goodcode" value="${product_code}"> <!-- 랜덤코드 -->
	<input type="hidden" name="goodea" value="${product_ea}"> <!-- 수량 -->
	
	<p> ---------------- 배송 정보 입력 ------------------</p>
	수령인 : <input type="text" name="rec_name" value=""><br>
	수령인 연락처 : <input type="text" name="rec_tel" value=""><br>
	배송지 주소 : <input type="text" name="rec_addr" value=""><br>
	적립금 사용 : <input type="text" name="point" value="0" readonly="readonly">
	
	<p>--------------- 결제 파트 -------------------<p>
	<input type="radio" name="gopaymethod" value="CARD">신용카드
	<input type="radio" name="gopaymethod" value="Directbank">계좌이체
	<input type="radio" name="gopaymethod" value="vbank">가상계좌<br>
	<button type="button" id="payment">결제하기</button>
	</form>
</body>
<script>
	document.querySelector("#payment").addEventListener("click",function(){
		if(frm.rec_name.value == ""){
			alert("수령인을 입력하세요");
			return;
		}
		if(frm.rec_tel.value==""){
			alert("수령인 연락처를 입력하세요");
			return;
		}
		if(frm.rec_addr.value==""){
			alert("주소를 입력하세요");
			return;
		}
		else{
			frm.method="post";
			frm.action="payok.do";
			frm.submit();
		}
	})
</script>
</html>








