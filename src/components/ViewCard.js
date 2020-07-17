import React, { Component } from "react";
import data from "./data";
import style from "./viewCard.module.css";

const close = {
  position: "absolute",
  color: "black",
  top: "0",
  right: "0",
  margin: "5px",
};
const cardImgTop = {
  width: "100%",
  height: "15vw",
  objectFit: "cover",
};
const titleHeight = {
  height: "50px",
};
const widthSet = {
  width: "18rem",

};
// const marginSet = {
//   margin: "70px",
// };
const rectangleSet = {
  position: "absolute",
  display: "inline-block",
  top: "5px",
  left: "0px",
};
const triangleSet = {
  position: "absolute",
  display: "inline-block",
  top: "5px",
  left: "80px",
};

const OrderDetails = data.OrderDetails;

class ViewCard extends Component {
  render() {
    return (
          <div class="row d-flex justify-content-end">
            {OrderDetails.map((order_info, index) => (
              // change

              <div class="card my-4 mx-5" style={widthSet}>
                <span class={style.rectangle} style={rectangleSet}>
                  <p class={style.text}>TRENDING</p>
                </span>
                <span class={style.triangle} style={triangleSet}></span>
                <div ng-repeat="file in imagefinaldata">
                  <a href="/#">
                    {/* change */}
                    <img
                      src={require(`./${order_info.OrderImg}.jpg`)}
                      className="card-img-top"
                      style={cardImgTop}
                      alt="..."
                    ></img>
                  </a>
                  <a href="/#full">
                    <i
                      class="fa fa-heart-o"
                      id="#empty"
                      style={close}
                      aria-hidden="true"
                    ></i>
                  </a>
                </div>
                <div className="card-body">
                  {" "}
                  {/* change */}
                  <h5 className="card-title" style={titleHeight}>
                    {order_info.OrderName}
                  </h5>
                  {order_info.actualPrice != null ? (
                    <p className="card-text">
                      ${order_info.currentPrice}&nbsp;
                      <span className="font-weight-light card-text">
                        <del>${order_info.actualPrice}</del>
                      </span>
                      <span className="text-success">
                        {" "}
                        {order_info.discount}% OFF
                      </span>
                    </p>
                  ) : (
                    <p className="card-text">
                      ${order_info.currentPrice}&nbsp;
                    </p>
                  )}
                  <p>
                    Get it for {order_info.offerPrice}{" "}
                    <span className="card-text badge badge-secondary">
                      {order_info.offer}
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
    );
  }
}

export default ViewCard;
