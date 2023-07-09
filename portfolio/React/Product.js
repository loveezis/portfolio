import './Product.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
//import { Component } from 'react'; 를 쓰게되면 class로 연결해야함

function Product() {
  var bigmenu = ["", "기획상품", "이벤트 상품", "무료배송상품", "베스트 상품", "이주의 핫딜"];
  const [pd_list, product] = useState([]);
  useEffect(() => {
    axios.get("/portfolio/admin/react_product_api.do?keys=listok")
      .then(response => {
        let data = response.data;
        product(data);
        console.log(data);
      })
      .catch(error => {
        console.log("엑시오스 오류");
      })
  }, []);


  return (
    <div className="productMenu">
      {pd_list.map((data, index) => (
        <ul key={index}>
          <li className='liChild'>
            {data[1] !== null && (
              <span>
                <a className='sailBox'>{data[1]}%</a>
                <img src={'/portfolio/' + data[0]} alt="Product Image" />
              </span>
            )}
            <span>{data[2]}</span>
            <span>{data[3]}</span>
            <span>{data[1] !== null ? data[5]+"원" : data[4] +"원"}</span>
          </li>
        </ul>
      ))}

    </div>
  );
}

export default Product;
