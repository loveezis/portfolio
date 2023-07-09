import './Md.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
function Md() {

  const [md_list, setData] = useState([]);
  useEffect(() => {
    axios.get("/portfolio/admin/react_product_api.do?keys=listok&hot=hotok")
      .then(response => {
        const md = response.data;
        setData(md);
        console.log(md);
      })
      .catch(error => {
        console.error("엑시오스 에러");
      });
  }, []);

  return (
    <div className="md2">
    <ul className='mdList'>
      <li><img src="./ico/part1.jpg"/>
      </li>
      <li>이번주 핫딜~!</li>
    </ul>
    {md_list.map((data, index) => (
      <ul key={index} className='mdList'>
        <li>
          {data[1] != null && (
            <span>
              <a className='mdBox'>{data[1]}%</a>
              <img src={'/portfolio/' + data[0]} alt="hotdeal" />
            </span>
          )}
          <span>{data[2]}</span>
          <span>{data[5]}</span>
        </li>
      </ul>
    ))}
  </div>
  
  );
}

export default Md;
