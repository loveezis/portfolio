

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
	if(xhr.readyState === XMLHttpRequest.DONE){
		if(xhr.status === 200){
			camp(JSON.parse(this.response));
		}
	}
}
xhr.open("GET","./json/campsite.json",true);
xhr.send();


const camp1 = document.getElementById("camp1");
const camp2 = document.getElementById("camp2");
const ul0 = document.getElementById("ul0");
const ul1 = document.getElementById("ul1");
let ea = 0;
function camp(array){
let li1;
let ul;
let li2;
let div;
	console.log(array.camp);
	ea = array.camp.length;
	array.camp.forEach((a,i,o)=>{
		li1 = document.createElement("li");
		div = document.createElement("div");
		ul = document.createElement("ul");
		ul.setAttribute("class","Rin");
		ul.setAttribute("id","Rin"+i);
		li1.innerText = array.camp[i]['camp_name'];
		li1.setAttribute("onclick","doIn('"+i+"')");
		li1.setAttribute("id","Rout"+i)
		li1.append(div);
		if(i<4){
			ul0.append(li1);
			camp1.append(ul);
		}else{
			ul1.append(li1);
			camp2.append(ul);
		}
		Object.keys(array.camp[i]).forEach((a2,i2,o2)=>{
			if(a2 === "camp_part"){
					array.camp[i][a2].forEach((a3,i3,o3)=>{
					li2 = document.createElement("li");
					li2.className = "partbtn";
					li2.setAttribute("onclick","doDate('"+array.camp[i]['camp_name']+"','"+array.camp[i][a2][i3]+"',this)")
					li2.innerText = array.camp[i][a2][i3];
					ul.append(li2);
				});
			}
		});
	});
}

const login = document.getElementById("Rlogin");
const date = document.getElementById("Rdate");

function doIn(num){
	let iin = document.getElementById("Rin"+num);
	let out = document.getElementById("Rout"+num);
	let iins;
	for(let i = 0; i < ea; i++){
		iins = document.getElementById("Rin"+i);
		outs = document.getElementById("Rout"+i);
		outs.style.backgroundColor = "#ffffff";
		outs.style.color = "#666666";
		iins.style.display = "none";
	}
	iin.style.display = "flex";
	out.style.backgroundColor = "#666666";
	out.style.color = "#ffffff";
	
	login.innerText
}


//소메뉴 선택 함수
var partbtn = document.getElementsByClassName("partbtn");

function doDate(name,part,tag){
	reser.cname.value = name;
	reser.cpart.value = part;
	let b = document.createElement("b");
	b.innerText = name+" "+part;
	login.innerText = "";
	login.append(b);
	login.append(" 야영장을 선택하셨습니다.");
	date.style.display = "flex";
	
	var w = 0;
	while(w < partbtn.length){
		partbtn[w].style.backgroundColor = "";
		partbtn[w].style.color = "";
		w++;
	}
	tag.style.backgroundColor = "black";
	tag.style.color = "white";
}



function doPost(){
	var now = Date.now() / 1000 / 3600 / 24;
	var indate = new Date(reser.cindate.value).getTime() / 1000 / 3600 / 24;
	var outdate = new Date(reser.coutdate.value).getTime() / 1000 / 3600 / 24;
	if(reser.cindate.value == ""){
		alert("입실 일자를 선택해주세요.");
	}
	else if(reser.coutdate.value == ""){
		alert("퇴실 일자를 선택해주세요.");
	}
	else if(indate >= outdate){
		alert("퇴실 일자는 입실 일자 이후로 설정하세요.");
	}
	else if(indate < now){
		alert("당일 이전 일자는 예약 불가능합니다.(당일 예약은 오전 9시까지만 가능)");
	}
	else {
			reser.cday.value = outdate - indate;
			reser.method = "get";
			reser.action = "./camp_main.jsp";
			reser.submit();
	}
}

// 로그아웃 함수
function dologout(){
	reser.method = "post"
	reser.action ="./logout.do";
	reser.submit();
}