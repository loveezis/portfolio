import './Ad.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

//import { Component } from 'react'; 를 쓰게되면 class로 연결해야함

function Ad() {

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
    <div className="ad">
        <a href={banner3[1]}><img src={banner3[0]}/></a>
    </div>
  );
}

export default Ad;
