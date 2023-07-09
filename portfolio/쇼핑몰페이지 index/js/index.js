var data; // 전역 변수로 선언

function ajax() {
	var html = new XMLHttpRequest();
	html.onreadystatechange = function() {
		if (html.readyState == XMLHttpRequest.DONE && html.status == 200) {
			data = JSON.parse(html.responseText); // data 전역 변수에 값 할당
			abc(data);
		}
	};

	html.open("GET", "/portfolio/admin/bannerList_api.do?keys=bannerok", true);
	html.send();
}
ajax();
function abc(imgSrc) {
	console.log(imgSrc);
	var bannerBox = document.getElementById("bannerBox");
	var img = document.createElement("img");
	img.src = imgSrc.pop[0][0];
	bannerBox.append(img);
}
var bannerBox = document.getElementById("bannerBox");
document.querySelector("#box").addEventListener("click", function() {
  var bannerBox = document.getElementById("bannerBox");
  bannerBox.remove();
});
