<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%
HttpSession session2 = request.getSession();
String userid = (String) session2.getAttribute("loginId");
%>
<footer>
	<div>Copyright ⓒ 도메인명 2023. All right researve</div>
	<div>개인정보처리 담당자 : <%=userid%></div>
</footer>