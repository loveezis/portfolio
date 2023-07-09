function ajax(pgnumber) {
	var inputValue = document.querySelector("#inputValue").value;
	var selectValue = document.querySelector("#selectValue").value;
	var displayli = document.getElementById("displayli");
	var html = new XMLHttpRequest();
	html.onreadystatechange = function() {
		if (html.readyState == XMLHttpRequest.DONE && html.status == 200) {
			//200 성공
			//300 성공 200~300 성공
			//400 실패
			//500 실패
			var data = JSON.parse(html.responseText);  // html.response 대신 html.responseText 사용
			// 여기서 data를 원하는 방식으로 처리
			if (data == "" || data == null) {  // "null" 대신 null 사용
				displayli.style.display = "block";
			} else {
				abc(data);
			}
		}
	};
	
	if(inputValue != ''){
		html.open("GET", "/portfolio/admin/member_list_api.do?keys=member_ok&page=0&"+selectValue+"="+inputValue , true);
	}else{
		html.open("GET", "/portfolio/admin/member_list_api.do?keys=member_ok&page=" +(pgnumber !== undefined ? pgnumber : 0) , true);
	}

	html.send();

}
ajax();

var inputValue = document.getElementById("inputValue").value;
var inputName = document.getElementById("inputValue").getAttribute("name");

function abc(array) {
	var ulAppend = document.getElementById("ulAppend");
	ulAppend.innerHTML = "";
	array.list.forEach(function(a, index) {
		var ul = document.createElement("ul");
		ul.className = "middelul";

		var li = document.createElement("li");
		var input = document.createElement("input");
		input.type = "checkbox";
		input.setAttribute("name", "userid")
		input.setAttribute("value", a[0]);
		input.className = "checkboxea";

		li.appendChild(input);
		ul.appendChild(li);
		Object.values(a).forEach(function(value, index) {
			if (index !== 10) {  // 10번째 값은 제외
				li = document.createElement("li");
				var text = document.createTextNode(value);
				li.appendChild(text);
				ul.appendChild(li);
			}
		});

		var liButtons = document.createElement("li");
		var editButton = document.createElement("input");
		editButton.type = "button";
		editButton.value = "수정";
		editButton.setAttribute("onclick", "modifyok('" + a[0] + "," + a[1] + "," + a[4] + "," + a[5] + "," + a[10] + "')");

		var stopButton = document.createElement("input");
		stopButton.type = "button";
		stopButton.value = "정지";
		if (a[10] === "Y" || a[10] === "N") {
			stopButton.setAttribute("onclick", "downok('" + a[0] + "," + a[10] + "')");
		}

		liButtons.appendChild(editButton);
		liButtons.appendChild(stopButton);
		ul.appendChild(liButtons);

		ulAppend.appendChild(ul);
	});
	
	var pageNumber = document.getElementById("pageNumber");
	var ea = array.ea;
	var dividedValue = Math.ceil(ea / 5);
	var zz = 0; // 0부터 시작하도록 수정
	var pNumber = 5;
	var pageNumbers = "";
	while (zz < dividedValue) { // '<'로 변경하여 5씩 증가
		var value = pNumber * zz; // 고유한 값을 계산
		pageNumbers += "<span onclick='ajax(" + value + ")'>" + (zz + 1) + "</span>"; // zz + 1로 페이지 번호 출력
		zz++;
	}
	pageNumber.innerHTML = pageNumbers;
}
document.getElementById("selectValue").addEventListener("change",function(event){
	document.getElementById("inputValue").name = event.target.value; 
	
})
function member_serch(){
	ajax(0)
	//최초 ajax를 먼저 호출한다.
}

/* 체크박스 전체 선택 전체 해제 */
function ck_mother(check) {
	var checkboxea = document.getElementsByClassName("checkboxea");
	var checkvalue = document.getElementById("checkvalue");
	var w = 0;
	var z = 0;
	if (check) {
		while (w < checkboxea.length) {
			checkboxea[w].checked = true;
			w++;
		}
	}
	else {
		while (z < checkboxea.length) {
			checkboxea[z].checked = false;
			z++;
		}
	}
}
/*----------------------------------------*/

/* 선택 삭제 구간 */
document.querySelector("#selectDel").addEventListener("click", function() {
	var checkboxes = document.querySelectorAll('input[name="userid"]');
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
		frm.action = "./choiceDel.do";
		frm.submit();
	}
});
function modifyok(userid) {
	if (confirm("수정하시겠습니까?")) {
		// member_update.jsp 페이지를 팝업창으로 열기
		var url = "./member_update.jsp?mid=" + userid;
		var features = "width=600,height=500,resizable=no";
		window.open(url, "memberUpdatePopup", features);
	}
	return;
}
function downok(userinfo) {
	let data = userinfo.split(",");
	if (data[1] == "Y") {
		alert("이미 휴면계정입니다.");
		return;
	}
	if (confirm("휴면으로 전환하시겠습니까?")) {
		location.href = "./modify_human.do?mid=" + data[0];
	}
	return;
}
