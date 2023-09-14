import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App name="chiikawa" animal="hamster" color="pink" imgSrc="img/chiikawa.png"/>
    <App name="hachiware" animal="cat" color="thistle" imgSrc="img/hachiware.jpg"/>
    <App name="usagi" animal="rabbit" color="lemonchiffon" imgSrc="img/usagi.jpeg"/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();