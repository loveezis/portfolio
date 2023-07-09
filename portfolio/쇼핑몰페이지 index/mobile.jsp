<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta charset="UTF-8">
<title>모바일 전용 사용시 오브젝트 변화(calc)</title>
<!-- 340 ~ 580px -->
</head>
<style>
* {
	box-sizing: border-box;
}

/* 가로크기가 340px 이상일 때 */
@media screen and (min-width: 340px) {
	.mid2 {
		width: calc(100% - 40px);
		height: 30px;
	}

	.btn {
		width: calc(100% - 40px);
		height: 30px;
	}
}

.mid2 {
	width: calc(100% - 40px);
	height: 30px;
}

.btn2 {
	width: calc(100% - 40px);
	height: 30px;
}

/* 가로크기가 341px 이상, 580px 이하일 때 */
@media screen and (min-width: 341px) and (max-width: 580px) {
	.mid2 {
		max-width: 540px;
	}

	.btn {
		max-width: 540px;
	}
}

</style>
<body>
	<input type="text" class="mid2" placeholder="아이디를 입력하세요">
	<br>
	<input type="submit" value="로그인" class="btn2">
</body>
<script>
	window.onresize = function() {
    	var w = window.innerWidth;
    	if(w > 580 || w < 340){
    		alert("모바일 전용 사이트 입니다.");
    	 	location.href="about:blank";
    	}

   
	}; 

</script>
</html>