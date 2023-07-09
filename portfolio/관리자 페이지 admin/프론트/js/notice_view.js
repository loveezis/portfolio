function ajax() {
	let url = window.location.search;
	let userid = url.split("=")[1];
	var html = new XMLHttpRequest();
	html.onreadystatechange = function() {
		if (html.readyState == XMLHttpRequest.DONE && html.status == 200) {
			var data = JSON.parse(this.responseText);
			listPrint(data);
		}
	};

	html.open("GET", "./notice_view_api.do?keys=view_ok&userid=" + userid, true);
	html.send();
}
window.addEventListener('load', function() {
	ajax(0); // 최초로 ajax() 함수 실행
});
function listPrint(list) {
  var w = 0;
  while (w < list.nt_view[0].length) {
    list.nt_view.forEach(function(a) {
      if (w !== 4) {
        document.getElementById("listNode" + w).innerHTML = a[w];
      } else {
        var ckEditorTextArea = CKEDITOR.instances.ck_area;
        ckEditorTextArea.setData(a[w]);
      }
      
      if (w == 1) {
        document.getElementById("listNode" + w).value = a[w];
      }
    });
    w++;
  }
}

var url = window.location.href;
var user = url.split("?")
var idx = user[1].split("=")[1];
var hiddenIdx = document.getElementById("hiddenIdx");
hiddenIdx.value = idx;

document.querySelector("#noticeModify").addEventListener("click",function(){
	document.getElementById("frm");
	if(frm.nt_subject == ""){
		alert("수정할 제목을 입력해주세요");
		return;
	}
	if(CKEDITOR.instances.ck_area.getData() == ""){
		alert("수정할 내용을 입력해주세요")
		return;
	}
	frm.method="post";
	frm.action="./noticeModify.do";
	frm.submit();	
})
document.querySelector("#noticeList").addEventListener("click",function(){
	location.href="./notice_list.jsp";
	
})
document.querySelector("#noticeDel").addEventListener("click",function(){
	location.href="./noticeDel.do?idx="+hiddenIdx.value;	
})


