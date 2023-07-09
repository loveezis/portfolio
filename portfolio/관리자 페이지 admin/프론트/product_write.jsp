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
<link rel="stylesheet" type="text/css" href="./css/product_write.css">
<script src="./ckeditor/ckeditor.js"></script>
<title>상품등록 메뉴</title>
</head>
<body>
	<jsp:include page="./logout.jsp" />
	<jsp:include page="./admin_header.jsp" />
	<jsp:include page="./admin_menu.jsp" />
	<form id="frm" name="frm" method="post" enctype="multipart/form-data" action="./product_insert.do">
		<section class="product_menu">
			<div class="divSize">
				<span></span>
				<span>상품 등록 페이지</span>
			</div>
			<div class="divSize">
				<span class="pd_name">대메뉴 카테고리</span>
				<select class="select_size" name="pd_bmenu">
					<option value="">카테고리 선택</option>
					<option value="1">기획상품</option>
					<option value="2">이벤트 상품</option>
					<option value="3">무료배송상품</option>
					<option value="4">베스트 상품</option>
					<option value="5">이주의 핫딜</option>
				</select>
			</div>
			<div class="divSize">
				<span class="pd_name">소메뉴 카테고리</span>
				<select class="select_size" name="pd_smenu">
					<option value="">카테고리 선택</option>
					<option value="1">채소/과일/농수산물</option>
					<option value="2">간식/간편음식</option>
					<option value="3">베이커리/우유</option>
					<option value="4">냉장고/김치냉장고</option>
					<option value="5">주방용품/생활가전</option>
					<option value="6">컴퓨터/스마트폰</option>
					<option value="7">공기청정기</option>
				</select>

			</div>
			<div class="divSize">
				<span class="pd_name">상품코드</span>
				<input type="text" class="select_size" name="pd_code" id="pd_code">
				<input type="button" value="중복확인" class="codeCkBtn" onclick="codecheck()">
			</div>
			<div class="divSize">
				<span class="pd_name sellname">상품명</span>
				<input type="text" name="pd_name">
			</div>
			<div class="divSize">
				<span class="pd_name">상품 부가설명</span>
				<input type="text" name="pd_info">
			</div>
			<div class="divSize">
				<span class="pd_name">판매가격</span>
				<input type="text" class="inputSize100" value="0" name="pd_money" id="pd_money" onkeyup="handleMoneyInput(event)">
				※　,　없이 숫자만 입력하세요 최대 7자리
			</div>
			<div class="divSize">
				<span class="pd_name">할인율</span>
				<input type="text" class="inputSize100" value="0" name="pd_sail" id="pd_sail" onkeyup="handleSailInput(event)">
				※ 숫자만 입력하세요
			</div>
			<div class="divSize">
				<span class="pd_name">할인가격</span>
				<input type="text" class="inputSize100" value="0" name="pd_price" id="pd_price" readonly="readonly">
				<div>※ 할인율이 0%일 경우 할인가격은 0으로 처리 합니다.</div>
			</div>
			<div class="divSize">
				<span class="pd_name">상품재고</span>
				<input type="text" class="inputSize100" value="0" name="pd_ea" onkeyup="this.value=this.value.replace(/[^0-9]/g,'');">
				EA
				<span>※숫자만 입력하세요. 재고가 0일 경우 soldout이 됩니다.</span>
			</div>
			<div class="divSize">
				<span class="pd_name">판매 유/무</span>
				<span class="radioSize">
					<input type="radio" name="pd_cell" value="Y" checked>
					판매시작
					<input type="radio" class="radioMargin" name="pd_cell" value="N">
					판매종료
				</span>
				<span>※숫자만 입력하세요. 재고가 0일 경우 soldout이 됩니다.</span>
			</div>
			<div class="divSize">
				<span class="pd_name">조기품절</span>
				<span class="radioSize">
					<input type="radio" name="pd_useyn" value="Y" checked>
					사용
					<input type="radio" class="radioMargin" name="pd_useyn" value="N">
					미사용
				</span>

			</div>
			<div class="divSize2">
				<span class="pd_name pdimg_name">상품 대표이미지</span>
				<span class="pdimg_size">
					<input type="file" name="v_file1">
					※상품대표이미지 이며,이미지 이미지 용량은 2MB까지 입니다.
					<input type="file" name="v_file2">
					※추가 이미지 이며,이미지 이미지 용량은 2MB까지 입니다.
					<input type="file" name="v_file3">
					※추가 이미지 이며,이미지 이미지 용량은 2MB까지 입니다.
				</span>
			</div>
			<div class="divSize3">
				<span class="pd_name pdinfo_name">상품 상세설명</span>
				<textarea id="pd_editor" name="pd_editor" class="cksize"></textarea>
			</div>
			<div>
				<input type="button" value="상품리스트" onclick="location.href='./product_list.jsp'">
				<input type="button" value="상품등록" onclick="formsend()">
			</div>
		</section>
	</form>
	<jsp:include page="./admin_footer.jsp" />
</body>
<script src="./js/product_write.js"></script>
<script>
  // CKEditor 인스턴스 생성
  var editor = CKEDITOR.replace('pd_editor');

// 폭과 높이 설정
editor.config.width = '830px';
editor.config.height = '280px';
editor.config.resize_enabled = false;
editor.config.filebrowserUploadUrl = "./imageupload.do";

</script>
<script>
	var mid = "<%=userid%>";
	if (mid == null) {
		alert("장시간 미사용으로 로그아웃 되었습니다.")
		location.href = "./login.jsp";
	}
</script>
<script src="./js/admin_logpage.js"></script>
</html>