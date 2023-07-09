document.querySelector("#nt_yn").addEventListener("click", function() {
	ck_hidden = document.getElementById("ck_hidden");
    if (!this.checked) {
        ck_hidden.value = "N"
        // "N" 값을 nt_yn 파라미터로 전송
        // 예: ajax 요청을 사용하여 서버에 전송하거나, form 데이터에 추가할 수 있음
    } else if (this.checked) {
        ck_hidden.value = "Y"
    }
});
document.querySelector("#notice_send").addEventListener("click", function() {
	var text = CKEDITOR.instances.ck_area.getData();
	frm.enctype="multipart/form-data";
	frm.action = "./notice_insert.do";
	frm.method = "post";
	frm.submit();
	
});