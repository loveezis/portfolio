function ajax() {
	var html = new XMLHttpRequest();
	html.onreadystatechange = function() {
		if (html.readyState == XMLHttpRequest.DONE && html.status == 200) {
			var data = JSON.parse(this.response);
			list(data);
		}
	};

	html.open("GET", "./bannerList_api.do?keys=bannerok", true);
	html.send();
}
window.addEventListener('load', function() {
	ajax(0); // 최초로 ajax() 함수 실행
});
var frm1 = document.getElementById("frm1")
var frm2 = document.getElementById("frm2")
var frm3 = document.getElementById("frm3")

document.getElementById("mainBanner").addEventListener("click", function(event) {

  // 각 입력 필드의 값을 가져옵니다.
  var banner1 = document.getElementsByName("banner1")[0].value;
  var banner2 = document.getElementsByName("banner2")[0].value;
  var banner3 = document.getElementsByName("banner3")[0].value;
  var banner4 = document.getElementsByName("banner4")[0].value;

  // 4개 중 최소 하나라도 값이 있는지 확인합니다.
  if (banner1 === '' && banner2 === '' && banner3 === '' && banner4 === '') {
    event.preventDefault(); // submit 동작 막기
    alert("배너를 최소 1개 등록해주세요");
  } else {
    // submit 동작 처리
    frm1.method = "post";
    frm1.action = "./mainBanner.do";
    frm1.submit();
  }
});

document.getElementById("popupBanner").addEventListener("click",function(){
   var p_banner1 = document.getElementsByName("p_banner1")[0].value;
   if(p_banner1 === ""){
	   alert("이미지 경로를 등록해주세요");
	   return;
   }
   if(frm2.popupUse.checked == true){
	   frm2.popupUse.value = "Y";
   }
   else{
	   frm2.popupUse.value = "N";
   }
   frm2.method="post";
   frm2.action="./popupBanner.do";
   frm2.submit();
})

document.getElementById("adBanner").addEventListener("click",function(){
  var adAdd0 = document.getElementById("adAdd0").value;
  var adAdd2 = document.getElementById("adAdd2").value;

	if(adAdd0 == "" || adAdd2 == ""){
		alert("배너를 한개이상 등록해주세요");
		return;
	}
	
   frm3.method="post";
   frm3.action="./adBanner.do";
   frm3.submit();
})
function list(banner){
	var ad = banner.ad[0].length; //4개
	var mainlength = banner.main[0].length;   //8개ㅑ
	var pop = banner.pop[0].length;  //3개
	console.log(banner.pop[0])
	var w = 0;
	while(w < mainlength){
		document.getElementById("bannerAdd"+w).value = banner.main[0][w];
		w++;
	}
	var z = 0;
	while(z < pop){
		document.getElementById("pAdd"+z).value = banner.pop[0][z];
		if(z == 2){
			document.getElementById("pAdd"+z).value = banner.pop[0][z];
			document.getElementById("pAdd"+z).checked = true;
			
		}
		z++;
	}
	var x = 0;
	while(x < ad){
		document.getElementById("adAdd"+x).value = banner.ad[0][x];
	 x++;
	}

}