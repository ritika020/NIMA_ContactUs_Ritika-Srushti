import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import First from "../src/first/first";
import Header from "../src/header/header";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <div className="contactus_maindiv">
      <Header />
      <First />
      <div className="Contact_lastDiv"></div>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
