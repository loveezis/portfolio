import './Notice.css';
//import { Component } from 'react'; 를 쓰게되면 class로 연결해야함
import axios from 'axios';
import React, { useEffect, useState } from 'react';
function Notice() {
  const [json, setData] = useState([]);
  useEffect(() => {
    axios.get("/portfolio/admin/react_notice_api.do?keys=notice_ok&page=0")
      .then(response => {
        const jsonData = response.data;
        setData(jsonData);
        console.log(jsonData);
      })
      .catch(error => {
        console.error("엑시오스 에러");
      });
  }, []);

  return (
    <div className='noticeHeader'>
      <div>
        <span>NOTICE</span>
        <span>+More</span>
      </div>
      <ul className='NoticeUlcss'>
        {json.map((data, index) => (
          <li key={index}>
            <span className='noticeName'>{data[0]}</span>
            <span className='noticeFloat'>{data[1]}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Notice;
