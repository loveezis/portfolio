var data;
function win() {
	if (window.XMLHttpRequest) {
		return new XMLHttpRequest();
	}
}
function file() {
	if (data.readyState == XMLHttpRequest.DONE && data.status == 200) {
		var array = JSON.parse(this.response);
		abc(array);
	}
}
data = win();
data.onreadystatechange = file;;
data.open("GET", "./json/campsite.json", true);
data.send()

function abc(array2) {
	var yname = document.getElementById("yname"); //산이름 출력
	var ydate = document.getElementById("ydate");
	var cmoney = document.getElementById("cmoney");
	//?cname=가야산&cpart=백운동&mname=김용림&mtel=01012341234&cindate=2023-06-02&coutdate=2023-06-04&cday=2
	var s = decodeURIComponent(window.location.search);

	if (s != "") {
		var word = s.split("?");
	}
	var data1 = word[1].split("&")
	// ['cname=가야산', 'cpart=백운동', 'mname=김용림', 'mtel=01012341234', 'cindate=2023-06-02', 'coutdate=2023-06-04', 'cday=2']
	var mdata = data1[0].split("=")[1]; // 산이름
	var marea = data1[1].split("=")[1]; // 구역
	var mname = data1[2].split("=")[1]; // 이름
	var mtel = data1[3].split("=")[1]; //전화번호
	var indate = data1[4].split("=")[1]; // 시작날짜
	var outdate = data1[5].split("=")[1]; // 종료날짜
	var day = data1[6].split("=")[1]; // 2박
	var ylist = "";

	const xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
			ylist = this.response;
			userArray(ylist);
		}
	}
	xhr.open("POST", "./testok.do", true);
	xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
	xhr.responseType = "json";
	xhr.send("carea=" + mdata + "," + marea + "," + indate + "," + outdate);

	function userArray(ylist) {

		// 라디오 버튼 요소들을 선택합니다
		var radioButtons = document.querySelectorAll('input[name="cpartno"]');

		// 반복문을 사용하여 각 라디오 버튼을 확인합니다
		for (var i = 0; i < radioButtons.length; i++) {
			var radioButton = radioButtons[i];
			var value = radioButton.value;

			// 배열 데이터와 라디오 버튼 값(value)을 비교하여 일치하는 경우 비활성화(disabled) 처리합니다
			if (ylist.indexOf(value) !== -1) {
				radioButton.disabled = true;

				var completeLink = document.createElement('a');
				completeLink.className = 'ysucces';
				completeLink.textContent = '완료';

				radioButton.parentElement.appendChild(completeLink);

			}
		}
	}



	var targetPrice = 0;
	yname.innerHTML = "<img src='./ico/camping.svg' class='yicon'>" + mdata + " " + marea +  " 야영장";
	ydate.innerText = indate + "~" + outdate;

	var ea;
	var yimage;
	array2.camp.forEach((a, b, c) => {
		if (array2.camp[b]['camp_name'] == mdata) {
			Object.keys(array2.camp[b]).forEach((a2, b2, c2) => {
				if (array2.camp[b]['camp_part'][b2] == marea) {
					targetPrice = array2.camp[b]['camp_money'][b2]
					ea = array2.camp[b]["camp_person"][b2]; //인원수
					yimage = array2.camp[b]["camp_image"][b2]; //이미지파일
				}
			});
		}
	});
	var totalresult = targetPrice * Number(day);
	cmoney.innerText = "총 금액 : " + totalresult.toLocaleString() + "원";

	/*---------------------------------------------------- */
	var ybox1 = document.getElementById("ybox1");
	ybox1.style.backgroundImage = "url(" + yimage + ")";

	var i = 0;
	while (i < 4) {
		var yyname = document.getElementById("yyname" + i);
		yyname.innerText = marea;
		i++;
	}

	var yuserid = document.getElementById("yuserid");
	yuserid.value = mname;
	yuserid.readOnly = true;


	var yusertel = document.getElementById("yusertel");
	yusertel.value = mtel;


	var cperson = document.getElementById("cperson");
	var option;
	var zz = 1;

	while (zz <= ea) {
		option = document.createElement("option");
		option.innerText = zz + "명";
		option.value = zz;
		cperson.append(option);
		zz++;
	}
	/* 랜덤 코드번호 */
	var rnumber = document.getElementById("rcode");
	var rcode = "";
	for (var i = 0; i < 8; i++) {
		var randomNumber = Math.floor(Math.random() * 9) + 1;
		rcode += randomNumber;
	}
	rnumber.value = rcode;

	console.log(mname)
	console.log(mdata);   //가야산
	console.log(marea);   //백운동
	console.log(indate);  //indate
	console.log(outdate); //outdate
	console.log(totalresult); //88000
	console.log(mtel);   //0101231231
	console.log(rcode) //8개랜덤번호
	//인원수 셀렉트 cperson
	//라디오 선텍 name

	ymainbox.carea.value = mdata; //가야산
	ymainbox.cpart.value = marea; //백운동
	ymainbox.cindate.value = indate;
	ymainbox.coutdate.value = outdate;
	ymainbox.ccode.value = rcode;
	ymainbox.cmoney.value = totalresult;

}
function bbb() {
	if(ymainbox.cpartno.value == ""){
		alert("야영장을 선택해주세요");
		return;
	}
	else{
		ymainbox.action = "./part3.do";
		ymainbox.method = "post";
		ymainbox.submit();
		
	}
	
}
function dologout() {
	ymainbox.method = "post";
	ymainbox.action = "./logout.do";
	ymainbox.submit();
}



















