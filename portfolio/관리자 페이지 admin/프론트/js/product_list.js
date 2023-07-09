function ajax(page) {
	var inputValue = document.getElementById("inputValue").value;
	var selectName = document.getElementById("selectName").value;
	var noDataDisplay = document.querySelector(".noDataDisplay");
	var html = new XMLHttpRequest();
	html.onreadystatechange = function() {
		if (html.readyState == XMLHttpRequest.DONE && html.status == 200) {
			var data = JSON.parse(html.responseText);  // html.response 대신 html.responseText 사용
			// 여기서 data를 원하는 방식으로 처리
			if (data == "" || data == null) {  // "null" 대신 null 사용
				noDataDisplay.style.display = "block";
			} else {
				listData(data);
			}
		}
	};
	if(inputValue != ""){
	html.open("GET", "/portfolio/admin/product_list_api.do?keys=listok&page=0&"+selectName+"="+inputValue, true);
		
	}
	else{
	html.open("GET", "/portfolio/admin/product_list_api.do?keys=listok&page=" + page, true);
	}
	html.send();
}

window.addEventListener("load", function() {
	ajax(0);
})
document.querySelector("#selectName").addEventListener("change", function(event) {
	if (event.target.value == "상품코드") {
		event.target.name = "pd_code";
	}
	else if (event.target.value == "상품명") {
		event.target.name = "pd_name";
	}
})


document.querySelector("#ckBoss").addEventListener("click", function(event) {
	var checkboxEa = document.getElementsByClassName("checkboxEa").length;
	var w = 0;
	while (w < checkboxEa) {
		if (event.target.checked == true) {
			document.getElementsByClassName("checkboxEa")[w].checked = true;
		}
		else {
			document.getElementsByClassName("checkboxEa")[w].checked = false;
		}
		w++;
	}
})

function productSearch(){
	ajax(0);	
}
function listData(array) {
	var bigmenu = ["", "기획상품", "이벤트 상품", "무료배송상품", "베스트 상품", "이주의 핫딜"];
	 //데이터베이스 데이터 갯수

	var ulAppend = document.querySelector("#ulAppend");
	ulAppend.innerHTML = "";
	array["list"].forEach(function(value) {
		var ul = document.createElement("ul");
		ul.className = "firstUlcss nextUlcss";
		value.forEach(function(a, index) {
			if (index === 0) {
				var li = document.createElement("li");
				var input = document.createElement("input");
				input.type = "checkbox";
				input.className = "checkboxEa";
				input.setAttribute("name", "pd_code");
				input.value = value[0];
				li.append(input);
				ul.appendChild(li);
			} else if (index === 1) {
				var li = document.createElement("li");
				var text = document.createTextNode(value[1]);
				li.append(text);
				ul.appendChild(li);
			} else if (index === 2) {
				if (value[2] != null) {
					var li = document.createElement("li");
					var img = document.createElement("img");
					img.src = "." + value[2];
					li.append(img);
					ul.appendChild(li);
				}
				else if (value[2] == null) {
					var li = document.createElement("li");
					ul.appendChild(li);
				}
			} else if (index === 4) {
				var li = document.createElement("li");
				var text = document.createTextNode(bigmenu[value[4]]);
				li.append(text);
				ul.appendChild(li);
			}
			else if (index === 10) {
				var li = document.createElement("li");
				var input = document.createElement("input");
				input.type = "button";
				input.value = "관리";
				input.setAttribute("onclick", "listModify('" + value[0] + "')");
				li.append(input);
				ul.appendChild(li);
			} else {
				var li = document.createElement("li");
				var text = document.createTextNode(a);
				li.append(text);
				ul.appendChild(li);
			}
		});
		ulAppend.appendChild(ul);
	});
	//페이지 번호 찍는곳
	var pageNumberDiv = document.querySelector("#pageNumberDiv");
	var ea = array.ea;
	var pageNum = Math.ceil(ea / 5); // 올림 함수인 Math.ceil을 사용하여 페이지 수 계산
	var w = 0;
	var span = "";
	while (w < pageNum) {
	  		span += "<span onclick='gopage(" + w + ")'>" + (w + 1) + "</span>";;
	  		w++;
		}
		pageNumberDiv.innerHTML = span;
}
let gopage = (data) => {
	var number5 = 5;
	var total = data * number5;
	ajax(total);

	// 페이지 번호 버튼 제거
	var pageNumberDiv = document.querySelector("#pageNumberDiv");
	var ckBoss = document.querySelector("#ckBoss");
	var ckDel = document.getElementById("ckDel");
	while (pageNumberDiv.firstChild) {
		pageNumberDiv.removeChild(pageNumberDiv.firstChild);
		ckBoss.checked = false;
		ckDel.value = "";
	}
}
let productDel = () => {
	var frm = document.getElementById("frm");
	var checkboxes = document.querySelectorAll('input[name="pd_code"]');
	var checkedCount = 0;

	checkboxes.forEach(function(checkbox) {
		if (checkbox.checked) {
			checkedCount++;
		}
	});
	if (checkedCount === 0) {
		alert("최소 1개 이상 체크해주세요");
	} else {
		frm.method = "post";
		frm.action = "./productDel.do";
		frm.submit();
		
	}
}
let listModify = () => {
	console.log("test");
}
