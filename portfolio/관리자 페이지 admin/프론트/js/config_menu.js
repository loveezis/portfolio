function ajax() {
	var html = new XMLHttpRequest();
	html.onreadystatechange = function() {
		if (html.readyState == XMLHttpRequest.DONE && html.status == 200) {
			var data = JSON.parse(html.responseText);  // html.response 대신 html.responseText 사용
			configSetting(data);
		}
	};
	html.open("GET", "/portfolio/admin/configList_api.do", true);
	html.send();
}
ajax(0);

document.querySelector("#settingOk").addEventListener("click", function() {
	configForm.submit();
})

document.querySelector("#settingcancle").addEventListener("click",function(){
	if(confirm("취소하시겠습니까?")){
		 location.href="./admin_list.jsp";
	}
})




function configSetting(data) {
console.log(data)
  var configForm = document.getElementById("configForm");
  var w = 0;
  while (w < data.length) {
    if (w == 2) {
      if (data[2] == 'Y') {
        document.getElementById("insertValue" + w).checked = true;  // == 대신 = 사용하여 체크 설정
      } else {
        document.getElementById("insertValue" + w).checked = false;  // == 대신 = 사용하여 체크 해제
      }
    }
    if (w == 17) {
      if (data[17] == "Y") {
        document.getElementById("insertValue" + w).checked = true;
      } else {
        document.getElementById("insertValue" + w).checked = false;
      }
    }
    if (w == 18) {
      if (data[18] == "Y") {
        document.getElementById("insertValue" + w).checked = true;
      } else {
        document.getElementById("insertValue" + w).checked = false;
      }
    }
    if (w == 19) {
      if (data[19] == "Y") {
        document.getElementById("insertValue" + w).checked = true;
      } else {
        document.getElementById("insertValue" + w).checked = false;
      }
    }
    if (w == 22) {
      if (data[22] == "Y") {
        document.getElementById("insertValue" + w).checked = true;
      } else {
        document.getElementById("insertValue" + w).checked = false;
      }
    }
    if (w == 25) {
      if (data[25] == "Y") {
        document.getElementById("insertValue" + w).checked = true;
      } else {
        document.getElementById("insertValue" + w).checked = false;
      }
    }
    document.getElementById("insertValue" + w).value = data[w];
    w++;
  }
}


