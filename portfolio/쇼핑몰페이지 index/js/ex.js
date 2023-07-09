//배너 리스트를 갖고온다
let list = document.querySelector(".slider .list");

//배너 리스트의 img를 움직일배너
let items = document.querySelectorAll('.slider .list .item');

//페이지네이션 아이콘이 움직이는 위치를 조정하기위한 변수
let dots = document.querySelectorAll('.slider .dots li');

//왼쪽버튼 클릭
let prev = document.getElementById('prev');

//오른쪽버튼 클릭
let next = document.getElementById('next');

//노드를체크하기 위한 변수
let active = 0;

//배너갯수 3개-1
let lengthItems = items.length -1;

next.onclick = function(){
	if(active + 1 > lengthItems){
		active = 0;
	}
	else{
		active = active +1;
	}
	reloadSlider();
}
prev.onclick = function(){
	if(active - 1 < 0){
		active = lengthItems;
	}
	else{
		active = active - 1;
	}
	reloadSlider();
}
let refreshSlider = setInterval(() =>{next.click()},5000);

function reloadSlider(){
	let checkLeft= items[active].offsetLeft;
	list.style.left = -checkLeft +"px";
	
	let lastActiveDot = document.querySelector(".slider .dots li.active");
	lastActiveDot.classList.remove('active');
	dots[active].classList.add('active');
	clearInterval(refreshSlider);
	refreshSlider = setInterval(()=>{next.click()},3000);
}
dots.forEach((li, key) =>{
	li.addEventListener('click',function(){
		active = key;
		reloadSlider();
	})
})