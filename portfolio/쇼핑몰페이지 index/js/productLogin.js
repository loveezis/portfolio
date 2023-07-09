window.addEventListener("load", function() {
  var ckId = document.getElementById("idSave");
  var setId = window.sessionStorage.getItem("setid");
  document.getElementById("userid").value = setId;
/*  if(setId != ""){
	  ckId.checked = true;
  }
  else if (setId == "" || setId == null) {
  	ckId.checked = false;
	}*/
});
document.getElementById("idSave").addEventListener("change",function(){
	window.sessionStorage.setItem("use","Y");
})

function nonMember(){
	var nonMember = document.querySelector("#nonMember");
	var nonNumber = document.querySelector("#nonNumber");
	if(nonMember.value == ""){
		alert("주문자명을 입력해주세요");
		return;
	}
	if(nonNumber.value = ""){
		alert("주문번호를 입력해주세요");
		return;
	}
	alert("해당 주문내역이 없습니다.");
}
document.querySelector("#loginForm").addEventListener("submit", function(event) {
	var userValue = document.getElementById("userid").value;
	window.sessionStorage.setItem("setid",userValue);
    event.preventDefault(); // 기본 동작인 페이지 새로고침을 막기 위해 사용할 수 있습니다.
	
    event.target.method = "post";
    event.target.action = "./memberLogin.do";
    event.target.submit();
});

