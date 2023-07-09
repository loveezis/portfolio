<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<%
HttpSession session2 = request.getSession();
String userid = (String) session2.getAttribute("loginId");
if (userid == null) {
	out.println("<script>alert('접근 권한이 없습니다.'); location.href='./login.jsp';</script>");
	out.println("<script>location.reload();</script>");
}
%>
<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<link rel="stylesheet" type="text/css" href="./css/default.css">
<link rel="stylesheet" type="text/css" href="./css/admin_header.css">
<link rel="stylesheet" type="text/css" href="./css/admin_menu.css">
<link rel="stylesheet" type="text/css" href="./css/admin_footer.css">
<link rel="stylesheet" type="text/css" href="./css/notice_view.css">
<title>공지사항 view 페이지</title>
<script src="./ckeditor/ckeditor.js"></script>
</head>
<body>
	<jsp:include page="./logout.jsp" />
	<jsp:include page="./admin_header.jsp" />
	<jsp:include page="./admin_menu.jsp" />
	<section>
		<form id="frm" name="frm">
			<main class="noticeMother">
				<div class="redBoxMother">
					<span></span>
					<span class="listNode noticeHeader">공지사항 view페이지</span>
				</div>
				<div>
					<span class="subject_name">공지 일자</span>
					<span class="listNode" id="listNode0"></span>
				</div>
				<div>
					<span class="subject_name">공지사항 제목</span>
					<input class="writeInput" name="nt_subject" id="listNode1"></input>
				</div>
				<div>
					<span class="subject_name">글쓴이</span>
					<span class="listNode" id="listNode2"></span>
				</div>
				<div>
					<span class="subject_name">첨부파일</span>
					<span class="listNode" id="listNode3"></span>
				</div>
				<div class="notice_div">
					<span class="subject_name">공지내용</span>
					<textarea id="ck_area" name="ck_area" class="ck_area" class="listNode"></textarea>
				</div>
			</main>

			<div class="register_btn">
				<input type="button" value="공지목록" id="noticeList">
				<input type="button" value="공지수정" id="noticeModify">
				<input type="button" value="공지삭제" id="noticeDel">
			</div>
			<input type="hidden" name="idx" value="" id="hiddenIdx">
		</form>
	</section>
	<jsp:include page="./admin_footer.jsp" />
</body>
<script src="./js/notice_view.js"></script>
<script>
  // CKEditor 인스턴스 생성
  var editor = CKEDITOR.replace('ck_area');

  // 폭과 높이 설정
  editor.config.width = '700px';
  editor.config.height = '400px';
  editor.config.resize_enabled = false;
</script>
<script>
	var mid = "<%=userid%>"
	if (mid == null) {
		alert("장시간 미사용으로 로그아웃 되었습니다.")
		location.href = "./login.jsp";
	}
</script>
<script src="./js/admin_logpage.js"></script>
</html>