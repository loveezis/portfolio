import './Nav.css';
//import { Component } from 'react'; 를 쓰게되면 class로 연결해야함
function sendMsg(){
  alert("해당서비스는 준비중입니다.")
}
function moveFaq(){
  window.location.href="./productFaq.jsp";
}
function nav() {
  return (
    <div className="nav">
        <ul className='navUlcss'>
          <li>전체카테고리</li>
          <li>기획상품</li>
          <li>무료배송상품</li>
          <li>베스트상품</li>
          <li>이벤트상품</li>
          <li>이번주 핫딜</li>
          <li onClick={sendMsg}><img src="./topimage/top_ico_notice.gif"/>공지사항</li>
          <li onClick={moveFaq}><img src="./topimage/top_ico_qa.gif"/>고객문의</li>
        </ul>
    </div>
  );
}

export default nav;
