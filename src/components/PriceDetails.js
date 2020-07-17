import React, { Component } from "react";
import style from "./appStyles.module.css";

const marginSet = {
  marginTop: "300px",
  borderRadius: "10px",
};

class PriceDetails extends Component {
  render() {
    return (
      <>
        <div className="col-5">
          <div class={`${style.adddetailsorderinfo}`} style={marginSet}>
            <div className="row">
              <div className="col-8">
              <h5 class="card-title">Payment summary</h5>
                <br></br>
              </div>

              <div className="col-4"></div>
            </div>

            <div className="row">
              <div className="col-9">
              <h6 className="card-text">Cart Total</h6> 
                <br></br>
              </div>
              <div className="col-3">
              <h6 className="card-text">${this.props.totalPrice}</h6>
                              </div>
            </div>

            <div className="row">
              <div className="col-9">
              <h6 className="card-text ">Coupon Discount</h6>
                <br></br>
              </div>
              <div className="col-3">
              <h6 className="card-text .text-primary"><a href="#">Apply Coupon</a></h6>
              </div>
            </div>

            <div className="row">
              <div className="col-9">
              <h6 className="card-text ">Order Total</h6>
              </div>
              <div className="col-3">
              <h6 className="card-text" >${this.props.totalPrice}</h6>
              </div>
            </div>

            <div className="row">
              <div className="col-9">
          
                <h6 className="card-text">Delivery charges</h6>
                <br></br>
              </div>
              <div className="col-3">
              <h6 className="text-muted card-text"><del>$99</del></h6>
              <h6 className="card-text text-success">FREE</h6>
              </div>
            </div>

            <hr></hr>
            <div className="row">
              <div className="col-9">
              <h5 className="card-text">Total</h5>
                <br></br>
              </div>
              <div className="col-3">
              <h5 className="card-text">${this.props.totalPrice}</h5>
              </div>
            </div>
            <div className="row">
              <div
                className="col"
                style={{ textAlign: "center", marginTop: "20px" }}
              >
                <button type="button" className="btn btn-warning">
                  SELECT DELIVERY ADDRESS
                </button>
              </div>
            </div>

            <div className="row"></div>
          </div>
        </div>
      </>
    );
  }
}

export default PriceDetails;
