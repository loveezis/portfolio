function updateEmailValue() {
	var input = document.getElementById("emailInput");
	var select = document.getElementById("emailSelect");
	var selectedValue = select.value;

	if (selectedValue !== "") {
		if (!input.value.includes("@")) {
			input.value += "@" + selectedValue;
			input.readOnly = true;
		} else {
			var confirmation = confirm("수정하시겠습니까?");
			if (confirmation) {
				select.value = "";
				input.value = "";
				input.readOnly = false;
			}
		}
	}
}

var emailId = document.getElementById("emailId");
var smsId = document.getElementById("smsId");
var passwordCheck = document.getElementById("passwordCheck");
var frm = document.getElementById("frmClass");
var phoneTest = /^01[\d]{9}$/;
document.getElementById('memberJoin').addEventListener("click", function() {
	if (frm.userid.value == "") {
		alert("아이디를 입력해주세요");
		return;
	}
	if (frm.password.value == "") {
		alert("패스워드를 입력해주세요")
		return;
	}
	if (passwordCheck.value != frm.password.value) {
		alert("동일한 패스워드를 입력해주세요")
		return;
	}
	if (frm.username.value == "") {
		alert("사용할 이름을 입력해주세요");
		return;
	}
	if (frm.email.value == "") {
		alert("이메일 주소를 입력해주세요");
		return;
	}
	if (emailId.checked == true) {
		emailId.value = "Y";
	} else {
		emailId.value = "N";
	}
	if (frm.phone.value == "") {
		alert("핸드폰 번호를 입력해주세요");
		return;
	}
	if (!phoneTest.test(frm.phone.value)) {
		alert("올바른 핸드폰번호를 입력해주세요");
		return;
	}
	if(smsId.checked == true){
		smsId.value = "Y";
	}
	else{
		smsId.value = "N";
	}
	if(frm.addr3.value == ""){
		alert("상세주소를 입력해주세요");
		frm.addr3.focus();
		return;
	}else{
		frm.method="post";
		frm.action="./productJoin.do";
		frm.submit();
	}

})
function findAddr() {
	new daum.Postcode({
		oncomplete: function(data) {
			var roadAddr = data.roadAddress; // 도로명 주소 변수
			var jibunAddr = data.jibunAddress; // 지번 주소 변수

			document.getElementById('member_post').value = data.zonecode;

			if (roadAddr !== '') {
				document.getElementById("member_addr").value = roadAddr;
			} else if (jibunAddr !== '') {
				document.getElementById("member_addr").value = jibunAddr;
			}
		}
	}).open();
}