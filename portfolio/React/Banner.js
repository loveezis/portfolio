import './Banner.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';


function Banner() {
  let [banner2, product] = useState([]);

  function abc(array) {
    product(array.main[0]);
  }
  const [active, setActive] = useState(0);
  useEffect(() => {
    const items = document.querySelectorAll('.slider .list .item');
    const dots = document.querySelectorAll('.slider .dots li');
    const prev = document.getElementById('prev');
    const next = document.getElementById('next');
    let lengthItems = items.length - 1;
    let refreshSlider = setInterval(() => next.click(), 5000);

    function reloadSlider() {
      let checkLeft = items[active].offsetLeft;
      const list = document.querySelector('.slider .list');
      list.style.left = -checkLeft + 'px';

      let lastActiveDot = document.querySelector('.slider .dots li.active');
      lastActiveDot.classList.remove('active');
      dots[active].classList.add('active');
      clearInterval(refreshSlider);
      refreshSlider = setInterval(() => next.click(), 3000);
    }

    next.onclick = function () {
      if (active + 1 > lengthItems) {
        setActive(0);
      } else {
        setActive(active + 1);
      }
    };

    prev.onclick = function () {
      if (active - 1 < 0) {
        setActive(lengthItems);
      } else {
        setActive(active - 1);
      }
    };

    dots.forEach((li, key) => {
      li.addEventListener('click', function () {
        setActive(key);
      });
    });

    reloadSlider();

    return () => {
      clearInterval(refreshSlider);
    };
  }, [active]);




  useEffect(() => {
    axios.get("/portfolio/admin/bannerList_api.do?keys=bannerok")
      .then(response => {
        let data = response.data;
        abc(data)
      })
      .catch(error => {
        console.log("엑시오스 오류");
      })
  }, []);

  return (
    <div className="slider">
      <div className="list">
        <div className="item">
          <a href={banner2[1]}><img src={banner2[0]} alt="Banner 0" /></a>
        </div>
        <div className="item">
          <a href={banner2[3]}><img src={banner2[2]} alt="Banner 1" /></a>
        </div>
        <div className="item">
          <a href={banner2[5]}><img src={banner2[4]} alt="Banner 2" /></a>
        </div>
      </div>
      <div className="buttons">
        <button id="prev">{"<"}</button>
        <button id="next">{">"}</button>
      </div>

      <ul className="dots">
        <li className={active === 0 ? 'active' : ''}></li>
        <li className={active === 1 ? 'active' : ''}></li>
        <li className={active === 2 ? 'active' : ''}></li>
      </ul>
    </div>
  );

}

export default Banner;
