<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%
String username = (String) request.getParameter("mid");
String data[] = username.split(",");
%>
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" type="text/css" href="./css/member_update.css?v=2">
<title>회원 수정</title>
</head>
<body>
	<form class="m_modfiy" id="frm">

		<div>[ 고객정보 수정 ]</div>
		<div>
			<span class="spanSize1">아이디</span>
			<span><%=data[0]%></span>
		</div>
		<div>
			<span class="spanSize1">고객명</span>
			<span><%=data[1]%></span>
		</div>
		<div>
			<span class="spanSize1">레벨</span>
			<input type="text" value="<%=data[2]%>" id="user_level" name="level" onkeyup="this.value=this.value.replace(/[^0-9]/g,'')" maxlength="3">
		</div>
		<div>
			<span class="spanSize1">포인트</span>
			<input type="text" value="<%=data[3]%>" id="user_point" name="point" onkeyup="this.value=this.value.replace(/[^0-9]/g,'')" maxlength="8">
		</div>
		<div>
			<span class="spanSize1">휴먼상태</span>
			<span class="dormant_display">
				<label>
					<input type="radio" name="is_dormant" value="Y">
					적용
				</label>
				<label>
					<input type="radio" name="is_dormant" value="N" checked>
					미적용
				</label>
			</span>

		</div>
		<div>
			<span>탈퇴일자</span>
			<span></span>
		</div>
		<div>
			<input type="button" value="정보수정" id="btn1">
			<input type="button" value="창닫기" oncl>
			<input type="hidden" name="userid" value="<%=data[0]%>">
			<input type="hidden" name="username" value="<%=data[1]%>">

		</div>
	</form>
</body>
<script>
	document.querySelector("#btn1").addEventListener("click", function() {
		if (confirm("정보를 변경하시겠습니까?")) {
			frm.method = "post";
			frm.action = "./modify_member.do";
			frm.submit();
		}
		return;
	})
</script>
</html>
