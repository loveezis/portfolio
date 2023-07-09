function gourl(a) {
	location.href = a.url;
}
//--------------클릭이벤트 ----------------//
var abc = new banner();

function banner() {
    var boxmove = document.getElementById("boxmove");
    var boxea = document.querySelectorAll(".boxmove > li").length;
    var tag;
    var found = false;
    var count = 1;

    this.left = function() {
        if (found == false) {
            found = true;
			
            if (count == 3) {
                document.querySelector("#box" + count).style.backgroundColor = "";
                count = 1;
            } else {
                document.querySelector("#box" + count).style.backgroundColor = "";
                count++;
            }

            tag = boxmove.firstElementChild.cloneNode(true);
            boxmove.style.transition = "all 1.5s ease";
            boxmove.style.transform = "translate(-1100px,0)";
            document.querySelector("#box" + count).style.backgroundColor = "red";
            setTimeout(function() {
                boxmove.removeChild(boxmove.firstElementChild);
                boxmove.append(tag);
                boxmove.style = "";
                found = false;

            }, 1500);
        }
    };

    // 최초에 첫 번째 박스를 빨간색으로 지정
    document.querySelector("#box1").style.backgroundColor = "red";

    this.right = function() {
        if (found == false) {
            found = true;
            tag = boxmove.lastElementChild.cloneNode(true);
            boxmove.style.left = "-1100px";	
            
             if (count == 1) {
                document.querySelector("#box" + count).style.backgroundColor = "";
                count = 3;
            } else {
                document.querySelector("#box" + count).style.backgroundColor = "";
                count--;
            }

            boxmove.removeChild(boxmove.lastElementChild);
            boxmove.prepend(tag);
            boxmove.style.transition = "all 1.5s ease";
            boxmove.style.transformStyle = "preserve-3d";
            boxmove.style.transform = "translate(1100px,0)";
            document.querySelector("#box" + count).style.backgroundColor = "red";
            setTimeout(function() {
                boxmove.style = "";
                found = false;

            }, 1500);
        }
    };
}


//배너 자동이동 function --------------------//
var intervalId;
var autoleft = document.getElementById("autoleft");

// 마우스가 올라가면 intervalId 해제
boxmove.addEventListener('mouseenter', function() {
	clearInterval(intervalId);
	console.log(autoleft.value)
});

// 마우스가 나가면 intervalId 재설정
boxmove.addEventListener('mouseleave', function() {
	if (autoleft.value === "true") {
		intervalId = setInterval(function() {
			abc.left();
		}, 3000);
	}
});

//해당함수 실행시 다시 타이머 동작
function autoLeft() {
	if (autoleft.value === "false") {
		autoleft.value = "true";
		intervalId = setInterval(function() {
			abc.left();
		}, 3000);
	}
}

//페이지 로드시 자동 실행 함수 ------------------//
window.onload = function() {
	autoLeft(); // 페이지가 로드된 후 자동으로 이동하는

}











