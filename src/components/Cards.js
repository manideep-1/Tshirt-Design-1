import React, { Component } from "react";
import data from "./data";
// import Octicon from "react-octicon";
// import style from './appStyles.module.css';

const close ={
  position: "absolute",
  color: "black",
  top: "0",
  right: "0",
  margin:"5px"
}
const cardImgTop = {
  width: "100%",
  height: "15vw",
  objectFit: "cover",
}
const titleHeight={
  height:"50px"
}
const widthSet = {
  width: "18rem",
  margin: "30px",
};
// const closeMargin = {
//   margin: "3px",
// };
const contentSet = {
  position: "absolute",
  left: "50%",
  top: "40%",
  transform: "translate(-50%, -50%)",
};
const marginSet={
  margin:"70px"
}
const OrderDetails = data.OrderDetails;
let noOfItems;

class Cards extends Component {
  constructor(props) {
    super(props);
    noOfItems = Object.keys(OrderDetails).length;
  }
  render() {
    return (
      <>
        {noOfItems === 0 && (
          <div style={contentSet}>
            <i class='fas fa-heart-broken' style={{fontSize:"100px",color:"red"}}></i>
            <h2>Your WishList is Empty!</h2>
          </div>
        )}
        <div className="container" style={marginSet}>
        <div class="col-12">
        <div className="row">
          {OrderDetails.map((order_info, index) => (
            <div className="card" style={widthSet}>
              <div ng-repeat="file in imagefinaldata">
                <a href="/">
                  <img
                    src={require(`./${order_info.OrderImg}.jpg`)}
                    className="card-img-top" style={cardImgTop}
                    alt="..."
                  ></img>
                </a>
                <a href="/">
                <i class="fa fa-times" style={close} aria-hidden="true"></i>
                  {/* <img className="close" style={closeMargin} src="closeicon.png" height="20" width="20" /> */}
                </a>
              </div>
              <div className="card-body">
                <h5 className="card-title" style={titleHeight}>
                  {order_info.OrderName}&nbsp; ({order_info.Size})
                </h5>
                {order_info.actualPrice != null ? (
                  <p className="card-text">
                    ${order_info.currentPrice}&nbsp;
                    <span className="text-muted card-text">
                      <del>${order_info.actualPrice}</del>
                    </span>
                    <span className="text-success">
                      {" "}
                      {order_info.discount}% OFF
                    </span>
                  </p>
                ) : (
                  <p className="card-text">${order_info.currentPrice}&nbsp;</p>
                )}
                <p>
                  Get it for {order_info.offerPrice}{" "}
                  <span className="card-text badge badge-secondary">
                    {order_info.offer}
                  </span>
                </p>
                <a href="/" className="btn btn-warning">
                  MOVE TO BAG
                </a>
              </div>
            </div>
          ))}
        </div>
        </div>
        </div>
      </>
    );
  }
}

export default Cards;
