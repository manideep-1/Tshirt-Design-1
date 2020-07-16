import React, { Component } from "react";
import style from "./appStyle.module.css";

const arrow = {
  fontSize: "25px",
  opacity: "0.6",
};

export class SleeveTshirtBody extends Component {
  state = { show: false, show2: false, show3: false };
  render() {
    const { show, show2, show3 } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-3">
            <div id={style.faq}>
              <span>faqs</span>
            </div>
            <div>
              <div
                className=" col-12 "
                id={style.dropmenuhead}
                onClick={() => this.setState({ show: !show })}
              >
                <p>
                  {" "}
                  <span>Sizes </span>
                  {show ? (
                    <span>
                      {" "}
                      <i
                        className="fa fa-angle-up"
                        id={style.arrowright}
                        style={arrow}
                      ></i>
                    </span>
                  ) : (
                    <span>
                      {" "}
                      <i
                        className="fa fa-angle-down"
                        id={style.arrowright}
                        style={arrow}
                      ></i>
                    </span>
                  )}{" "}
                </p>
              </div>

              {show ? (
                <ul id={style.dropmenu}>
                  <span id={style.dropmenulist}>S </span> <br></br>
                  <span id={style.dropmenulist}>M </span> <br></br>
                  <span id={style.dropmenulist}>L </span> <br></br>
                  <span id={style.dropmenulist}>XL </span> <br></br>
                  <span id={style.dropmenulist}>2XL </span> <br></br>
                  <span id={style.dropmenulist}>3XL </span> <br></br>
                </ul>
              ) : null}

              <hr class={style.setline}></hr>
            </div>

            <div>
              <div
                className=" col-12 "
                id={style.dropmenuhead}
                onClick={() => this.setState({ show2: !show2 })}
              >
                <p>
                  {" "}
                  <span>Sleeves </span>
                  {show2 ? (
                    <span>
                      {" "}
                      <i
                        className="fa fa-angle-up"
                        id={style.arrowright}
                        style={arrow}
                      ></i>
                    </span>
                  ) : (
                    <span>
                      {" "}
                      <i
                        className="fa fa-angle-down"
                        id={style.arrowright}
                        style={arrow}
                      ></i>
                    </span>
                  )}{" "}
                </p>
              </div>

              {show2 ? (
                <div className="col-12" id={style.dropmenu}>
                  <span id={style.dropmenulistsort}>Full Sleeves </span>{" "}
                  <br></br>
                  <span id={style.dropmenulistsort}>Half Sleeves </span>{" "}
                  <br></br>
                </div>
              ) : null}

              <hr class={style.setline}></hr>
            </div>

            <div>
              <div
                className=" col-12 "
                id={style.dropmenuhead}
                onClick={() => this.setState({ show3: !show3 })}
              >
                <p>
                  {" "}
                  <span>Sort By </span>
                  {show3 ? (
                    <span>
                      {" "}
                      <i
                        className="fa fa-angle-up"
                        id={style.arrowright}
                        style={arrow}
                      ></i>
                    </span>
                  ) : (
                    <span>
                      {" "}
                      <i
                        className="fa fa-angle-down"
                        id={style.arrowright}
                        style={arrow}
                      ></i>
                    </span>
                  )}{" "}
                </p>
              </div>

              {show3 ? (
                <ul id={style.dropmenu}>
                  <span id={style.dropmenulistsort}>Popular </span> <br></br>
                  <span id={style.dropmenulistsort}>New </span> <br></br>
                  <span id={style.dropmenulistsort}>
                    Price: Low to High{" "}
                  </span>{" "}
                  <br></br>
                  <span id={style.dropmenulistsort}>
                    Price: High to Low{" "}
                  </span>{" "}
                  <br></br>
                </ul>
              ) : null}

              <hr class={style.setline}></hr>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SleeveTshirtBody;
