let frm = document.getElementById("frm");
let pd_code = document.getElementById("pd_code");
window.addEventListener("load", function() {
  var w = 0;
  var randomCode = "";
  while (w < 6) {
    randomCode += Math.floor(Math.random() * 10); // 0부터 9까지의 숫자 중 랜덤하게 선택
    w++;
  }
  pd_code.value = randomCode;
});
function codecheck(){
	var html = new XMLHttpRequest();
	var code = pd_code.value;
	console.log(code);
	html.onreadystatechange = function(){
		if(html.readyState == XMLHttpRequest.DONE && html.status == 200){
			var data = this.response;
			if(data == "no"){
				alert("사용할 수 없는 코드입니다");
				pd_code.focus();
			}
			else{
				alert("사용가능한 코드입니다.");
				pd_code.readOnly = true;
				frm.pd_name.focus();
			}
		}
	}
	html.open("get","./code_check.do?code="+code,true);
	html.setRequestHeader("content-type","application/x-www-form-urlencoded");
	html.send();
}

function handleMoneyInput(event) {
  var input = event.target;
  input.value = input.value.replace(/[^0-9]/g, '').substr(0, 7); // 숫자만 입력하고 최대 7자리까지 제한
  calculateDiscount();
}
function handleSailInput(event) {
  var input = event.target;
  input.value = input.value.replace(/[^0-9]/g, '');
  calculateDiscount();
}
function calculateDiscount() {
  var pd_money = document.getElementById("pd_money").value;
  var pd_sail = document.getElementById("pd_sail").value;
  var pd_price = document.getElementById("pd_price");
  var result = pd_money - (pd_money * pd_sail / 100)
  var totalPrice = Math.round(result).toLocaleString().slice(0,-1) + "0";
  pd_price.value = totalPrice;
}

function formsend() {
	var editor = CKEDITOR.instances.pd_editor;

	if (frm.pd_bmenu.value === "") {
		alert("대메뉴 카테고리를 선택해주세요");
	} else if (frm.pd_smenu.value === "") {
		alert("소메뉴 카테고리를 선택해주세요");
	} else if (frm.pd_name.value === "") {
		alert("상품명을 입력해주세요");
	} else if (frm.pd_info.value === "") {
		alert("상품 설명을 입력해주세요");
	} else if (frm.pd_money.value === "") {
		alert("판매금액을 설정해주세요");
	} else if (frm.pd_price.value === "") {
		alert("최종금액을 입력해주세요");
	} else if (editor.getData() === "") {
		alert("상품 상세내용을 입력해주세요");
	} else {
		frm.submit();
	}
}
