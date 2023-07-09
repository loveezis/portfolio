var middelul = document.getElementById("middelul");
var html = new XMLHttpRequest();
html.onreadystatechange = function() {
	if (html.readyState == XMLHttpRequest.DONE && html.status == 200) {
		var data = JSON.parse(html.response);
		// 여기서 data를 원하는 방식으로 처리
		if (data == "" || data == "null") {
			middelul.style.display = "block";
		}
		else {
			abc(data)
		}
	}
}
html.open("GET", "/portfolio/admin/admin_list_api.do?keys=notice_oksigh", true);
html.send();

function abc(array) {
	var mainPart = document.getElementById("mainPart");
	array.forEach(function(a, b, c) {
		var input;
		var input2;
		var li;
		var ul = document.createElement("ul");
		ul.className = "nextul";
		Object.keys(array[0]).forEach(function(a1, b1, c1) {

			if (a1 == "8") {
				a[a1] = "";
				li = document.createElement("li");
				input = document.createElement("input");
				input.type = "button";
				input.className = "btn1"
				input.setAttribute("onclick", "bbb('" + a[1] + "')");
				//input.setAttribute("onclick", "location.href='./admin_update.do?mid=" + a[1] + "'");
				input.value = "승인";
				li.append(input);
				input2 = document.createElement("input");
				input2.type = "button";
				input2.className = "btn2"
				input2.value = "미승인";
				li.append(input2);
				ul.append(li);
			}

			li = document.createElement("li");
			text = document.createTextNode(a[a1]);
			li.append(text);


			ul.append(li);
		})
		mainPart.append(ul);
	})
	var btn2 = document.getElementsByClassName("btn2");

	for (var i = 0; i < btn2.length; i++) {
		btn2[i].addEventListener("click", function(event) {
			alert("해당 관리자는 승인 되지 않으며, 로그인시 해당 사용자는 미승인 처리 되어 로그인 하실 수 없습니다.");
		});
	}
}
function bbb(no){
	if(confirm("승인하시겠습니다.")){
		location.href="./admin_update.do?mid="+no;
	}
	return;
}
