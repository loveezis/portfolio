import './Trand.css';
//import { Component } from 'react'; 를 쓰게되면 class로 연결해야함

const Insta = () => {
  return (
    <iframe src="https://snapwidget.com/embed/1037189"
     className="snapwidget-widget" allowtransparency="true" 
     frameBorder="0" scrolling="no" 
     style={{border:"none", overflow:"hidden",  width:"495px", height:"300px",paddingLeft:"1px"}}>
     </iframe>
  )
}

function trand() {
  return (
    <div>
      <div className='instagramName'>
        <span>INSTAGRAM</span>
        <span>FOLLOW ON @0123456</span>
      </div>
      <Insta></Insta>
    </div>
  )
}
export default trand;
