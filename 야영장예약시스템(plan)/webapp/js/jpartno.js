function jpartnobtn () { // 예약 번호확인 클릭
	var jf = document.getElementById("jf") ;
	var jpart4no = document.getElementById("jpart4no") ;
	var jnock = /^\d{8}$/;
	var jnock1 = jnock.test(jpart4no.value);

	if(jpart4no.value == ""){
		alert("예약번호를 입력하세요");
		jpart4no.focus();
		jpart4no.value = ""
	}
	else if(jnock1 == false){
		alert("올바른 예약번호를 입력하세요");
		jpart4no.focus();
		jpart4no.value = "";
	}
	else{
		jf.method = "post";
		jf.action = "./jpartnook.do";
		jf.submit();
	}
}
function dologout(){
	jf.method = "post";
	jf.action = "./logout.do";
	jf.submit();
}
