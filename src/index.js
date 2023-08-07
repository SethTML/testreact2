import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let path = window.location.pathname;
if (path === "/immerfit" || path === "/immerfit/home"){
  //import("./immerfit/immerfit.css").then(() => {
    //console.log("Immerfit CSS import");
  //})
}
else if (path === "/"){
  import("./portfolio/portfolio3.css").then ( () => {
    console.log("Portfolio CSS Imported");
  })
}
else if (path === "/porsche") {
  import("./porsche/porsche.css").then ( () => {
    console.log("Porsche CSS Imported");
  })
}

const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
