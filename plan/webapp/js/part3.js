var bank = document.getElementById("bank");
var disnone = document.getElementById("disnone");
var btnli = document.getElementById("btnli");
var paytext1 = document.getElementById("paytext1")
var paytext2 = document.getElementById("paytext2")
var paytext3 = document.getElementById("paytext3")

var paytype = document.getElementsByName("info")[9]
var payok = document.getElementsByName("info")[10];
var payer = document.getElementsByName("info")[12];

var paybtn = document.getElementsByClassName("paybtn");
var type1 = document.getElementsByClassName("type1");
var type2 = document.getElementsByClassName("type2");

paybtn[0].style.display = "block";

function paytypes(a) {

	if (a == 0) {
		payok.value = "N";
		paytype.value = "무통장 입금";
		bank.style.display = "block";
	}
	else if (a == 1) {
		payok.value = "Y";
		paytype.value = "신용카드";
		bank.style.display = "none";
		payer.value = "";
	}
	else {
		payok.value = "N";
		paytype.value = "계좌이체";
		bank.style.display = "block";
	}
	
	var w = 0;
	while(w < type1.length){
		type1[w].style.backgroundColor = "";
		type1[w].style.color = "";
		type2[w].style.backgroundColor = "";
		type2[w].style.color = "";
		w++;
	}
		type1[a].style.backgroundColor = "#000000";
		type1[a].style.color = "#FFFFFF";
		type2[a].style.backgroundColor = "#000000";
		type2[a].style.color = "#FFFFFF";
}

function payselect(a) {
	if (a == 0) {
		if(paytype.value == ""){
			alert("결제수단을 선택하세요.");
		}
		else if(payer.value == "" && paytype.value != "신용카드"){
			alert("입금자명을 입력하세요.");
		}
		else {
			paybtn[0].style.display = "none";
			paybtn[1].style.display = "block";
			paybtn[2].style.display = "block";
			btnli.style.display = "none";
			bank.style.display = "none";
			if (paytype.value == "무통장 입금") {
				paytext1.style.display = "flex";
			}
			if (paytype.value == "신용카드") {
				paytext2.style.display = "flex";
			}
			if (paytype.value == "계좌이체") {
				paytext3.style.display = "flex";
			}
		}
	}
	
	if (a == 1) {
		campform.submit();
	}
	if (a == 2) {
		location.href = "./reserve.jsp";
	}
}

function dologout(){
	campform.action = "./logout.do";
	campform.submit();
}