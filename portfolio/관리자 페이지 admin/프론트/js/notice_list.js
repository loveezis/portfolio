var list_display = document.querySelector(".list_display");

function ajax(pagenum) {
	var html = new XMLHttpRequest();
	html.onreadystatechange = function() {
		if (html.readyState == XMLHttpRequest.DONE && html.status == 200) {
			var data = JSON.parse(this.responseText);
			if (data == "" || data == null) {
				list_display.style.display = "";
			} else {
				list_display.style.display = "none";
				abc(data);
			}
		}
	};

	html.open("GET", "./notice_list_api.do?keys=notice_ok&page=" + (pagenum || 0), true);
	html.send();
}

window.addEventListener('load', function() {
	ajax(0); // 최초로 ajax() 함수 실행
});

let pageea = 0;
let pagenumber = document.querySelector("#pagenumber");

function leftbtn() {
	var currentPage = parseInt(pagenumber.innerHTML);
	if (currentPage > 1) {
		currentPage--;
		var pagelist = (currentPage - 1) * 10;
		pagenumber.innerHTML = currentPage;
		ajax(pagelist);
	}
}

function rightbtn() {
	var currentPage = parseInt(pagenumber.innerHTML);
	var maxPage = parseInt(pagenumber.getAttribute("data"));
	var yea = parseInt(pagenumber.getAttribute("yea"));
	if (currentPage < maxPage) {
		currentPage++;
		var pagelist = (currentPage - 1) * 10;
		//var totalpage = pagelist - yea;
		//console.log(totalpage);
		pagenumber.innerHTML = currentPage;
		ajax(pagelist);
	}
}
function leftfirst() {
	var fisrtpage = 0;
	var w = 1;
	pagenumber.innerHTML = w;

	ajax(fisrtpage);
}

function rightlast() {
	var maxPage = parseInt(pagenumber.getAttribute("data"));
	var lastpage = (maxPage - 1) * 10;
	pagenumber.innerHTML = maxPage;
	ajax(lastpage);
}
var dataea = "";

function abc(array) {
	var ulplus = document.querySelector("#ulplus");
	ulplus.innerHTML = "";
	var count = 0;
	var yea = 0;
	var maxLength = 12; //글자수 제한을 위한 변수

	array.arr.forEach(function(a) {
		if (a[0] == "Y") {
			count++;
		}
	});
	yea = count;
	//Y페이지에 대한 갯수 3개

	//ulplus.innerHTML = "";
	dataea = array["key"]; // 데이터베이스 row값
	var total = dataea / 10;
	var page = Math.round(total);
	pagenumber.setAttribute("data", page);
	pagenumber.setAttribute("yea", yea);

	array.arr.forEach(function(a) {
		var ul = document.createElement("ul");
		ul.className = "notice_ul1";
		a.forEach(function(value, key) {
			if (key == 0) {
				var li = document.createElement("li");
				var input = document.createElement("input");
				input.type = "checkbox";
				input.setAttribute("name","idx")
				input.setAttribute("value",a[1]);
				li.append(input);
				ul.append(li);
			} else {
				var li2 = document.createElement("li");
				if (key == 2) {
					li2.setAttribute("onclick", "update('" + a[1] + "')");
				}
				var text = document.createTextNode(value);
				li2.append(text);
				ul.append(li2);
			}
		})
		ulplus.append(ul);
	});
}

/* 선택 삭제 구간 */
document.querySelector("#noticeDel").addEventListener("click", function() {
	var checkboxes = document.querySelectorAll('input[name="idx"]');
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
		frm.action = "./noticeDel.do";
		frm.submit();
	}
});
function update(listdata) {
	location.href = "./notice_view.jsp?userid=" + listdata;
}