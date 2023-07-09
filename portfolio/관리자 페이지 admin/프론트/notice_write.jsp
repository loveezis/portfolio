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
<link rel="stylesheet" type="text/css" href="./css/notice_writer.css">
<title>관리자 승인 페이지</title>
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
					<span>공지사항 등록페이지</span>
				</div>
				<div>
					<span class="subject_name">공지사항 여부</span>
					<span>
						<input type="checkbox" id="nt_yn">
						공지출력 ※공지출력을 체크할 시 해당 글 내용은 최상단에 노출 되어 집니다.
					</span>
				</div>
				<div>
					<span class="subject_name">공지사항 제목</span>
					<input type="text" name="nt_subject">
				</div>
				<div>
					<span class="subject_name">글쓴이</span>
					<input type="text" name="nt_writer">
					※관리자 이름이 노출 됩니다.
				</div>
				<div>
					<span class="subject_name">첨부파일</span>
					<input type="file" name="nt_file2" id="nt_file2"> 
					※첨부파일 최대 용량은 2MB 입니다.
				</div>
				<div class="notice_div">
					<span class="subject_name">공지내용</span>
					<textarea id="ck_area" name="ck_area" class="ck_area"></textarea>
				</div>
			</main>

			<div class="register_btn">
				<input type="button" value="공지목록">
				<input type="button" value="공지등록" id="notice_send">
			</div>
			<input type="hidden" value="N" id="ck_hidden" name="nt_yn">
		</form>
	</section>
	<jsp:include page="./admin_footer.jsp" />
</body>
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
<script src="./js/notice_writer.js"></script>
</html>