"use strict"
const agreeText = function(url){
	const xhr = new XMLHttpRequest();
	xhr.open("GET",url,false);
	xhr.send();
	return xhr.responseText;	
}
document.getElementById("agree1").innerText = agreeText("./agreement/agree1.txt");
document.getElementById("agree2").innerText = agreeText("./agreement/agree2.txt");


document.querySelector("#allCheck").addEventListener("click",function(event){
	
	var ckMargin = document.querySelectorAll(".ckMargin").length;
	var w = 0;
		while (w < ckMargin) {
		if (event.target.checked == true) {
			document.getElementsByClassName("ckMargin")[w].checked = true;
		}
		else {
			document.getElementsByClassName("ckMargin")[w].checked = false;
		}
		w++;
	}
})

document.querySelector("#nextStep").addEventListener("click",function(){
	var frmClass = document.querySelector("#frmClass");
	
	var agreeEa = document.querySelectorAll("input[name='agreeCheck']");
	var checkedCount = 0;
	agreeEa.forEach(function(ckea) {
		if (ckea.checked) {
			checkedCount++;
			console.log(checkedCount);
		}
	});
	if(checkedCount != 3){
		alert("필수 항목을 모두 체크해주세요")
	}
	else{
		location.href="./productJoin.jsp";
	}
})