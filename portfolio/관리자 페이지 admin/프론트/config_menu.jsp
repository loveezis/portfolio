<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<link rel="stylesheet" type="text/css" href="./css/default.css">
<link rel="stylesheet" type="text/css" href="./css/admin_header.css">
<link rel="stylesheet" type="text/css" href="./css/admin_menu.css">
<link rel="stylesheet" type="text/css" href="./css/admin_footer.css">
<link rel="stylesheet" type="text/css" href="./css/config_menu.css">
<title>환경 설정 페이지</title>
</head>
<body>
	<!-- header -->
	<jsp:include page="./logout.jsp" />
	<jsp:include page="./admin_header.jsp" />
	<jsp:include page="./admin_menu.jsp" />
	<!-- header -->
	<!-- main -->
	<section class="configMain">
		<form id="configForm" class="configForm" method="post" action="./configOk.do" enctype="application/x-www-form-urlencoded">
			<div class="firstRedbox">
				<span class="redBox firstDiv"></span>
				<span>홈페이지 가입환경 설정</span>
			</div>
			<div>
				<span class="subjectSpan">홈페이지 제목</span>
				<input type="text" name="homename" id="insertValue0">
			</div>
			<div>
				<span class="subjectSpan">관리자 메일 주소</span>
				<input type="text" name="adminemail" id="insertValue1">
			</div>

			<div>
				<span class="subjectSpan">포인트 사용 유/무</span>
				<span>
					<label>
						<input type="radio" name="point_yn" value="Y" id="insertValue2">
						포인트사용
					</label>
					<label>
						<input type="radio" name="point_yn" value="N" checked>
						포인트 미사용
					</label>
				</span>
			</div>
			<div>
				<span class="subjectSpan">회원가입시 적립금</span>
				<input type="text" name="joinpoint" onkeyup="this.value=this.value.replace(/[^0-9]/g,'')" maxlength="6" id="insertValue3">
				점
				<span class="subjectSpan subjectMarginLeft1">회원가입시 권한레벨</span>
				<input type="text" maxlength="3" name="joinlevel" onkeyup="this.value=this.value.replace(/[^0-9]/g,'');" id="insertValue4">
				레벨
			</div>
			<!-- 메인 상단메노 끝  -->


			<div class="firstRedbox secondDiv">
				<span class="redBox firstDiv"></span>
				<span>홈페이지 기본환경 설정</span>
			</div>
			<div class="displayFlexDiv">
				<span>
					<span class="subjectSpan">회사명</span>
					<input type="text" class="inputSize1" name="companyname" maxlength="30" id="insertValue5">
					<span class="subjectSpan subjectMarginLeft2">사업자등록번호</span>
					<input type="text" class="inputSize1" maxlength="17" name="companynumber" onkeyup="this.value=this.value.replace(/[^0-9]/g,'')" id="insertValue6">
				</span>
			</div>
			<div class="displayFlexDiv">
				<span>
					<span class="subjectSpan">대표자명</span>
					<input type="text" class="inputSize1" name="companyboss" maxlength="30" id="insertValue7">
					<span class="subjectSpan subjectMarginLeft2">대표전화번호</span>
					<input type="text" class="inputSize1" maxlength="12" name="companytel" onkeyup="this.value=this.value.replace(/[^0-9]/g,'')" id="insertValue8">
				</span>
			</div>
			<div class="displayFlexDiv">
				<span>
					<span class="subjectSpan">통신판매업 신고번호</span>
					<input type="text" class="inputSize1" name="comtel" onkeyup="this.value=this.value.replace(/[^0-9]/g,'')" maxlength="15"  id="insertValue9">
					<span class="subjectSpan subjectMarginLeft2">부가통신 사업자번호</span>
					<input type="text" class="inputSize1" maxlength="17" name="comnumber" onkeyup="this.value=this.value.replace(/[^0-9]/g,'')"  id="insertValue10">
				</span>
			</div>
			<div class="displayFlexDiv">
				<span>
					<span class="subjectSpan">사업장 우편번호</span>
					<input type="text" class="inputSize1" maxlength="15" name="companypost" id="insertValue11">
					<span class="subjectSpan subjectMarginLeft2">사업장 주소</span>
					<input type="text" name="companyaddr" id="insertValue12">
				</span>
			</div>
			<div class="displayFlexDiv">
				<span>
					<span class="subjectSpan">정보관리책임자명</span>
					<input type="text" class="inputSize1" name="mastername" maxlength="30" id="insertValue13">
					<span class="subjectSpan subjectMarginLeft2">정보책임자 E-mail</span>
					<input type="text" class="inputSize1" name="masteremail" maxlength="30" id="insertValue14">
				</span>
			</div>

			<!-- 마지막 결제 기본환경 설정 파트 -->
			<div class="firstRedbox secondDiv">
				<span class="redBox firstDiv"></span>
				<span>결제 기본환경 설정</span>
			</div>

			<div class="displayFlexDiv">
				<span>
					<span class="subjectSpan">무통장 은행</span>
					<input type="text" class="inputSize1" name="bankname" maxlength="20" id="insertValue15">
					<span class="subjectSpan subjectMarginLeft3">은행계좌번호</span>
					<input type="text" maxlength="17" name="banknumber" onkeyup="this.value=this.value.replace(/[^0-9]/g,'')" id="insertValue16">
				</span>
			</div>
			<div>
				<span class="subjectSpan">신용카드 결제 사용</span>
				<span class="radioSpanMargin">
					<label>
						<input type="radio" name="card_yn" value="Y" id="insertValue17">
						사용
					</label>
					<label>
						<input type="radio" class="radioMarginleft" name="card_yn" value="N" checked>
						미사용
					</label>
				</span>
				<span>※해당 PG사가 있을 경우 사용으로 변경됩니다.</span>
			</div>
			<div>
				<span class="subjectSpan">휴대폰 결제 사용</span>
				<span class="radioSpanMargin">
					<label>
						<input type="radio" name="tel_yn" value="Y"  id="insertValue18">
						사용
					</label>
					<label>
						<input type="radio" class="radioMarginleft" name="tel_yn" value="N" checked>
						미사용
					</label>
				</span>
				<span>※주문시 휴대폰 결제를 가능하게 할 것인지를 설정합니다.</span>
			</div>
			<div>
				<span class="subjectSpan">도서상품권 결제 사용</span>
				<span class="radioSpanMargin">
					<label>
						<input type="radio" name="book_yn" value="Y"  id="insertValue19">
						사용
					</label>
					<label>
						<input type="radio" class="radioMarginleft" name="book_yn" value="N" checked>
						미사용
					</label>
				</span>
				<span>※도서상품권 결제만 적용이 되며, 그 외에 상품권은 결제 되지 않습니다.</span>
			</div>
			<div class="displayFlexDiv">
				<span>
					<span class="subjectSpan">결제 최소 포인트</span>
					<input type="text" class="inputSize1" name="minpoint" onkeyup="this.value=this.value.replace(/[^0-9]/g,'')"  maxlength="10" id="insertValue20">
					<span class="subjectSpan subjectMarginLeft2">결제 최대 포인트</span>
					<input type="text" class="inputSize1" name="maxpoint" onkeyup="this.value=this.value.replace(/[^0-9]/g,'')"  maxlength="10" id="insertValue21">
					점
				</span>
			</div>
			<div>
				<span class="subjectSpan">현금 영수증 발급사용</span>
				<span class="radioSpanMargin">
					<label>
						<input type="radio" name="cash_yn" value="Y"  id="insertValue22">
						사용
					</label>
					<label>
						<input type="radio" class="radioMarginleft" name="cash_yn" value="N" checked>
						미사용
					</label>
				</span>
				<span>※현금영수증 관련 사항은 PG사 가입이 되었을 경우 사용가능 합니다.</span>
			</div>
			<div class="displayFlexDiv">
				<span>
					<span class="subjectSpan">배송업체명</span>
					<input type="text" class="inputSize1" name="deliveryname" maxlength="20"  id="insertValue23">
					<span class="subjectSpan subjectMarginLeft2">배송비 가격</span>
					<input type="text" class="inputSize1" name="deliverymoney" onkeyup="this.value=this.value.replace(/[^0-9]/g,'');" maxlength="10" id="insertValue24">
					원
				</span>
			</div>
			<div>
				<span class="subjectSpan">희망배송일</span>
				<span class="radioSpanMargin">
					<label>
						<input type="radio" name="deliverydate" value="Y"  id="insertValue25">
						사용
					</label>
					<label>
						<input type="radio" class="deliverydate" name="deliverydate" value="N" checked id="insertValue26">
						미사용
					</label>
				</span>
				<span>※희망배송일 사용시 사용자가 직접 설정 할 수 있습니다.</span>
			</div>
			<div class="LastButton">
				<input type="button" value="설정 저장" id="settingOk">
				<input type="button" value="저장 취소" id="settingcancle">
			</div> 
			<!-- <input type="datetime-local" placeholder="yyyy-mm-dd"> -->
		</form>
	</section>
	<!-- main -->
	<!-- footer -->
	<jsp:include page="./admin_footer.jsp" />
</body>
<script src="./js/admin_logpage.js"></script>
<script src="./js/config_menu.js"></script>
</html>