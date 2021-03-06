import React, { Component } from "react";
import data from "./data";
import PopUpSize from "./PopUpSize";
import PopUpQty from "./PopUpQty";
import PriceDetails from "./PriceDetails";

const widthSet = {
  maxWidth: "540px",
};
const removeSet = {
  position: "absolute",
  left: "5.75%",
  bottom: "5%",
};
const moveToWishlistSet = {
  position: "absolute",
  right: "5.75%",
  bottom: "5%",
};
const marginSpan = {
  marginBottom: "50px",
};
const OrderDetails = data.OrderDetails;

let totalPrice = 0;
class CartCards extends Component {
  calculateTotalPrice() {
    totalPrice = 0;
    OrderDetails.map(
      (order_info, index) =>
        (totalPrice = totalPrice + parseInt(order_info.currentPrice))
    );
  }
  render() {
    this.calculateTotalPrice();
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            {OrderDetails.map((order_info, index) => (
              <div className="card mb-3 marginSet" style={widthSet}>
                <div className="row no-gutters">
                  <div className="col-md-4 h-100">
                    <img
                      src={require(`./${order_info.OrderImg}.jpg`)}
                      className="card-img"
                      alt="..."
                    ></img>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">
                        {order_info.OrderName}&nbsp;
                      </h5>
                      {order_info.actualPrice != null ? (
                        <h6 className="card-text">
                          ${order_info.currentPrice}&nbsp;
                          <span className="text-muted card-text">
                            <del>${order_info.actualPrice}</del>
                          </span>
                        </h6>
                      ) : (
                        <h6 className="card-text">
                          ${order_info.currentPrice}&nbsp;
                        </h6>
                      )}
                      <h6>
                        <span>
                          <a
                            data-toggle="modal"
                            data-target="#popUpSize"
                            href="/"
                            className="card-text badge badge-light"
                            style={marginSpan}
                          >
                            Size: {order_info.Size}&nbsp;
                            <i
                              className="fa fa-caret-down"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </span>
                        &nbsp;&nbsp;&nbsp;
                        <span>
                          <a
                            data-toggle="modal"
                            data-target="#popUpQty"
                            href="/"
                            className="card-text badge badge-light"
                            style={marginSpan}
                          >
                            Qty: {order_info.quantity}&nbsp;
                            <i
                              className="fa fa-caret-down"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </span>
                      </h6>
                      <span>
                        <a
                          href="/"
                          className="btn btn-outline-danger"
                          style={removeSet}
                        >
                          REMOVE
                        </a>
                      </span>
                      <span>
                        <a
                          href="/"
                          className="btn btn-warning"
                          style={moveToWishlistSet}
                        >
                          MOVE TO WISHLIST
                        </a>
                      </span>
                      <PopUpSize></PopUpSize>
                      <PopUpQty></PopUpQty>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <PriceDetails totalPrice={totalPrice}></PriceDetails>
        </div>
      </div>
    );
  }
}

export default CartCards;
