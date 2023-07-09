<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%
	HttpSession session2 = request.getSession();
	String userid = (String)session2.getAttribute("loginId");
%>
<header class="headerTop">
	<ul>
		<li onclick="location.href='./admin_list.jsp'">
			<img src="./img/logo.png" class="logoImg"> ADMINSTRATOR
		</li>
		<li>
			<div><%=userid%> 관리자</div>
			<div onclick="config_setting()">[개인정보 수정]</div>
			<div onclick="addmin_logout()">[로그아웃]</div>
		</li>
	</ul>
</header>
