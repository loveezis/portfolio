import './Ad2.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
//import { Component } from 'react'; 를 쓰게되면 class로 연결해야함

function Ad2() {
  const [banner3, adlist] = useState([]);

  useEffect(() => {
    axios.get("/portfolio/admin/bannerList_api.do?keys=bannerok")
      .then(response => {
        const data = response.data;
        adlist(data.ad[0])
      })
      .catch(error => {
        console.log("엑시오스 오류");
      })
  }, []);
  
  return (
    <div className="ad2">
        <a href={banner3[3]}><img src={banner3[2]}></img></a>
    </div>
  );
}

export default Ad2;
