import React from 'react';

import ReactDOM from 'react-dom/client';

import {
  BrowserRouter,Routes, Route
} from "react-router-dom";

import './index.css';
// 通用元件
import HeadNav from './components/HeadNav/HeadNav';
import Footer from './components/Footer/Footer';
// 頁面
import Home from './views/home/home';
import Contact from './views/contact/contact';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      {/* 頭部 */}
      <HeadNav/>
      <div className="App">
        <div className="App-header">
          {/* 需變更 的內容 位置 */}
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>

      {/* 底部 */}
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>
);

