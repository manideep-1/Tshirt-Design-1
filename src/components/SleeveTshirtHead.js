import React from "react";
import style from "./appStyle.module.css";
import { Link } from "react-router-dom";

const arrow = {
  fontSize: "20px",
  opacity: "0.9",
  position: "relative",
  top: "5px",
};
function SleeveTshirtHead() {
  return (
    <div className="px-md-5 -md-1">
      <div className="bg-warning p-5 row">
        <div className="col-md-5 d-none d-md-block"></div>
        <div className="col-md-5">
          <div
            className="text-light"
            id={style.customizehead}
            style={{ letterSpacing: "1px" }}
          >
            customize to your liking
          </div>
          <h1
            className=""
            id={style.customizehead}
            style={{ letterSpacing: "1px" }}
          >
            customize to your liking
          </h1>
          <div
            className="tnbutton bg-white col-6 text-center rounded mt-4 p-4"
            id={style.customizeheadbtn}
          >
            <span className="tnbutton-name">Try Now</span>
            <i className="tnbutton-icon fa fa-arrow-right"></i>
          </div>
        </div>
        <img
          className="col-2 mt-3 d-none d-md-block"
          src={require(`./next.png`)}
          style={{ width: "50%", height: "50%" }}
          alt=""
        />
      </div>
      <div class={`"row" ${style.websiteMyacTitlehome}`}>
        <div className="container">
          <Link to="/accounts/">
            <p id={style.backtoaccount}>
              <i className="fa fa-angle-left" style={arrow}></i>&nbsp;Back to
              Home Page
            </p>
          </Link>
        </div>

        <div className="container">
          <div class={style.websiteMyacTitle}>
            <div className="float-left ">
              <div
                class={`${style.WebAccHeading} "h-50 d-inline-block" ${style.gapforheading}`}
              >
                <div>Sleeve Tshirt </div>
                <hr></hr>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SleeveTshirtHead;
