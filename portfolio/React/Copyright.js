import './Copyright.css';
import axios from 'axios';
import React, { useState,useEffect} from "react";

//import { Component } from 'react'; 를 쓰게되면 class로 연결해야함

function Copyright() {
  const [copyright, copyList] = useState([]);

  useEffect(() => {
    axios.get("/portfolio/admin/configList_api.do")
      .then(response => {
        const cList = response.data;
        copyList(cList)
        console.log(cList);
      })
      .catch(error => {
        console.log("엑시오스 오류");
      })
  }, []);

  return (
    <div className="copyright">
      <div className='copyheader'>
        <ul>
          <li>회사소개</li>
          <li>이용약관</li>
          <li>개인정보취급방침</li>
          <li>이용안내</li>
          <li>광고제휴문의</li>
          <li>CUSTOMER CENTER</li>
          <li>{copyright[8]}</li>
        </ul>
      </div>
      <ul className="ulCss2">
        <li>
          <div>
            <span>상호명:{copyright[5]}</span>
            <span>대표:{copyright[7]}</span>
            <span>사업자등록번호:{copyright[6]}</span>
            <span>[사업자정보확인]</span>
          </div>
          <div>
            <span>통신판매업신고번호:{copyright[9]}</span>
            <span>{copyright[12]}</span>
          </div>
          <div>
            <span>개인정보책임자:{copyright[13]}</span>
            <span>개인정보 책임자E-mail:{copyright[14]}</span>
          </div>
          <div>
            <span>copyright (c) 도메인 주소 All Right reserved.</span>
          </div>
        </li>
        <li>
          <div>
            <span>BANK INFO</span>
          </div>
          <div>
            <span>무통장 은행:{copyright[15]}</span>
          </div>
          <div>
            <span>은행계좌번호:{copyright[16]}</span>
          </div>
        </li>
      </ul>

    </div>
  );
}
export default Copyright;
