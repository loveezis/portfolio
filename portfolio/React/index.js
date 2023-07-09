import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Top from './Top';
import Nav from './Nav';
import Banner from './Banner';
import Product from './Product';
import Ad from './Ad';
import Md from './Md';
import Notice from './Notice';
import Trand from './Trand';
import Ad2 from './Ad2';
import Copyright from './Copyright';
import reportWebVitals from './reportWebVitals';

const top = ReactDOM.createRoot(document.getElementById('top'));
 top.render(
   <React.StrictMode>
    <Top />
   </React.StrictMode>
 )
 const nav = ReactDOM.createRoot(document.getElementById('nav'));
 nav.render(
   <React.StrictMode>
    <Nav />
   </React.StrictMode>
 )

//  function reactRender(elementId, reactComponent){
//   const domElement = document.getElementById(elementId)
//   if(domElement){
//     const reactRoot = ReactDOM.createRoot(document.getElementById('product'));
//     reactRoot.render(
//       <React.StrictMode>
//         {reactComponent}
//       </React.StrictMode>
//     )
//   } 
//  }
//  reactRender('product', <Product />)
//  reactRender('banner', <Banner />)
//  reactRender('ad', <Ad />)
//  reactRender('md',  <Md />)
//  reactRender('notice',  <Notice />)
//  reactRender('trand', <Trand />)
//  reactRender('ad2', <Ad2 />)

// const productElement = document.getElementById('product')
// if(productElement){
//    const product = ReactDOM.createRoot(document.getElementById('product'));
//    product.render(
//      <React.StrictMode>
//       <Product />
//      </React.StrictMode>
//    )
//  }

const product = ReactDOM.createRoot(document.getElementById('product'));
product.render(
  <React.StrictMode>
   <Product />
  </React.StrictMode>
)

 const banner = ReactDOM.createRoot(document.getElementById('banner'));
  banner.render(
   <React.StrictMode>
    <Banner />
    </React.StrictMode>
 )
 const ad = ReactDOM.createRoot(document.getElementById('ad'));
 ad.render(
   <React.StrictMode>
    <Ad />
   </React.StrictMode>
 )
  const md = ReactDOM.createRoot(document.getElementById('md'));
  md.render(
    <React.StrictMode>
     <Md />
   </React.StrictMode>
  )

 const notice = ReactDOM.createRoot(document.getElementById('notice'));
 notice && notice.render(
   <React.StrictMode>
    <Notice />
   </React.StrictMode>
 )
 const trand = ReactDOM.createRoot(document.getElementById('trand'));
 trand && trand.render(
   <React.StrictMode>
    <Trand />
   </React.StrictMode>
 )

 const ad2 = ReactDOM.createRoot(document.getElementById('ad2'));
 ad2.render(
   <React.StrictMode>
    <Ad2 />
   </React.StrictMode>
 )
 const copyright = ReactDOM.createRoot(document.getElementById('copyright'));
 copyright.render(
   <React.StrictMode>
    <Copyright />
   </React.StrictMode>
 )

//reportWebVitals();
