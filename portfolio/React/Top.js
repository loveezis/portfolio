import { useEffect, useState } from 'react';
import './Top.css';

//import { Component } from 'react'; 를 쓰게되면 class로 연결해야함
function bannerClose() {
  var topBannerimg = document.querySelector(".topBannerimg");
  topBannerimg.style.height = 0;
}
function logout() {
  if (window.confirm("로그아웃 하시겠습니까?")) { 
      window.localStorage.clear();
      window.location.href = "./productLogout.do";
  }
}
function myPage() {
  alert("페이지 준비중입니다.");
}
function Service() {
  alert("페이지 준비중입니다.");
}
function loginPage() {
  window.location.href = "./productLogin.jsp";
}
function memberjoin() {
  window.location.href = "./productAgree.jsp";
}
function sendIndex(){
  window.location.href="./index.jsp";

}
function searchPage(){
  var searchValue = document.getElementById("searchValue").value;
  window.location.href="./index.jsp?search="+searchValue;
}
function Top() {

  // useState
  const [mid, setMid] = useState('')
  const [loginDisplay, setLoginDisplay] = useState("block")
  const [logoutDisplay, setLogoutDisplay] = useState("none")

  window.addEventListener('storage', (evnetObject) => {
    setMid(evnetObject.newValue)
  })

  // DidMount useEffect return영역이 그려지면 1번 호출됨
  useEffect(() => {
    setMid(window.localStorage.getItem('mid'))
  }, [])

  useEffect(() => {
    if (mid !== null && mid !== "") {
      setLoginDisplay('none')
      setLogoutDisplay('block')
    } else {
      setLoginDisplay('block')
      setLogoutDisplay('none')
      window.localStorage.clear();
    }
  }, [mid])

return (
  <div className="topDiv">
    <div className="topBannerimg">
      <span>
        <div className="closeBanner" onClick={bannerClose}>x</div>
      </span>
    </div>
    <div className="ulDiv">
      <div className="ulChild">
        <div>합리적인 쇼핑 베스트샵! 네이버에서 베스트샵을 검색하세요</div>
        <ul className="topUlcss">
          <li style={{ display: loginDisplay }} className="loginLi" onClick={loginPage}>로그인</li>
          <li style={{ display: logoutDisplay }} className="logoutLi">{mid}</li>
          <li style={{ display: logoutDisplay }} onClick={logout} className="logoutLi">로그아웃</li>
            <li style={{ display: logoutDisplay }} onClick={memberjoin}>회원가입</li>
            <li>장바구니</li>
            <li>
              마이페이지<em onClick={myPage}>▼</em>
            </li>
            <li>
              고객센터<em onClick={Service}>▼</em>
            </li>
          </ul>
        </div>
      </div>
      <div className='topUnderDiv'>
        <div className='topDivChild'>
          <span onClick={sendIndex}></span>
          <span>
            <input type="text" placeholder='검색할 상품명을 입력하세요' id="searchValue"/>
            <div onClick={searchPage}></div>
          </span>
          <span></span>
        </div>
      </div>
    </div>

  );
}
export default Top;
