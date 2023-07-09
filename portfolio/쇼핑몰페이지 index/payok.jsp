<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="com.inicis.std.util.SignatureUtil"%>
<%@page import="java.util.*"%>
<%
	String mid = "INIpayTest";
	String signKey    = "SU5JTElURV9UUklQTEVERVNfS0VZU1RS";
	String goodcode	= request.getParameter("goodcode"); 
	
	String mKey = SignatureUtil.hash(signKey, "SHA-256");

	String timestamp = SignatureUtil.getTimestamp();		
	String orderNumber  = mid+"_"+goodcode;	
	String price = request.getParameter("price");	


	Map<String, String> signParam = new HashMap<String, String>();

	signParam.put("oid", orderNumber);
	signParam.put("price", price);
	signParam.put("timestamp", timestamp);

	String signature = SignatureUtil.makeSignature(signParam);
	
	/* index2.jsp 데이터 이관 */
	String version = request.getParameter("version");
	String currency = request.getParameter("currency");
	String goodname = request.getParameter("goodname");
	String buyername = request.getParameter("buyername");
	String buyertel = request.getParameter("buyertel");
	String buyeremail = request.getParameter("buyeremail");
	String rec_name = request.getParameter("rec_name");
	String rec_tel = request.getParameter("rec_tel");
	String rec_addr = request.getParameter("rec_addr");
	String point = request.getParameter("point");
	String gopaymethod = request.getParameter("gopaymethod");
	String goodea = request.getParameter("goodea");
	String buyerid = request.getParameter("buyerid");
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>결제 페이지</title>
</head>
<body>
<form id="frm" name="frm">
	<input type="hidden" name="version" value="<%=version%>">
	<input type="hidden" name="gopaymethod" value="<%=gopaymethod%>">
	<input type="hidden" name="mid" value="<%=mid%>">
	<input type="hidden" name="oid" value="<%=orderNumber%>">	
	<input type="hidden" name="price" value="<%=price%>">
	<input type="hidden" name="timestamp" value="<%=timestamp%>">
	<input type="hidden" name="currency" value="<%=currency%>"> <!-- 원단위 -->
	<input type="hidden" name="goodname" value="<%=goodname%>"> <!-- 상품명 -->
	<input type="hidden" name="buyername" value="<%=buyername%>"> <!-- 고객명 -->
	<input type="hidden" name="buyertel" value="<%=buyertel%>"> <!-- 전화번호  -->
	<input type="hidden" name="buyerid" value="<%=buyerid%>"> <!-- 로그인아이디 -->
	<input type="hidden" name="goodcode" value="<%=goodcode%>"> <!-- 랜덤코드 -->
	<input type="hidden" name="goodea" value="<%=goodea%>"> <!-- 수량 -->
	<input type="hidden" name="mKey" value="<%=mKey%>">
	<input type="hidden" name="returnUrl" value="http://localhost:8080/portfolio/return.jsp">
	<input type="hidden" name="closeUrl" value="http://localhost:8080/portfolio/close.jsp">
	<input type="hidden" name="signature" value="<%=signature%>">
	<p>----------------상품결제 정보출력되어야함 --------------<p>
	<input type="button" value="결제하기" id="btn">
</form>
</body>
<script src="https://stgstdpay.inicis.com/stdjs/INIStdPay.js" charset="UTF-8"></script>
<script>
	document.querySelector("#btn").addEventListener("click",function(){
		INIStdPay.pay("frm");
	})
</script>
</html>


















