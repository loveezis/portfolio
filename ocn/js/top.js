  $(function(){
  
  //header 파트
  var menuleft = $(`<div title=OCN-대한민국No.1채널></div>`).addClass("menuleft")
  var headerUl = $("<ul></ul>")
  var headerli = $(`<li><img src="./images/tving_logo.png"></li>`)

  menuleft.append(headerUl)
  headerUl.append(headerli)
  $("#topmenu").append(menuleft)
  
  var menuright = $("<div></div>").addClass("menuright")
  var headerUl2 = $("<ul></ul>").addClass("rightnode")
  var headerli2 = $(`
                  <li class="logout">로그인</li>
                  <li class="logout">티빙 회원가입</li>
                  <li class="login" style="display:none;"><span id="username1" class="username1"></span> 님 환영합니다.<a href="./logout.php">[로그아웃]</a></li>
                  <li>이용권 구매</li>
                  <li>프로그램 검색</li>
                  `)
  menuright.append(headerUl2)
  headerUl2.append(headerli2)
  $("#topmenu").append(menuright)

  if(username1!=""){
    $(".logout").css({
        "display":"none"
    });
    $(".login").css({
        "display":"block"
    });
    $("#username1").text(username1);
  }

  $(".rightnode li").click(function () {
      var node = $(this).index()
      $(".rightnode li").val(node)

      if (node == 0) {
          location.href = "./login.html"
      }
      else if (node == 1) {
          location.href = "./membership.html"
      }
      else if (node == 3) {
        //   location.href = "./coupon.html"
         alert("현재 서비스는 별도의 이용권 없이 이용가능합니다")
      }
      else if(node == 4){
         window.open("https://ocn.cjenm.com/ko/no1weekend/");
      }
  })

  //해더파트 메뉴 끝

})