import React, { Component } from "react";
import style from "./appStyle.module.css";

// const addon = {
//   fontSize: "30px",
//   display: "block",
//   marginLeft: "auto",
//   marginRight: "auto",
//   width: "39%",
//   float: "right",
// };

// const OrderDetails = data.OrderDetails;

export default class OrdersBody extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div class={`${style.accOptions} "container"`}>
        <div className="row">
          <div className="col-md-7">
            <br></br>
            <span class={style.orderId}>Order:</span>
            <span class={style.orderIdval}>#13345</span>

            <span class={style.orderIdvalpadding}>03-05-2020</span>
            <span class={style.orderIdvalpadding}>Order Placed :</span>
            <div class={`${style.addbordertoorder}  ${style.orderscardcolor}`}>
              <img alt="" class={style.tshirtorder} src={require(`./tshirt4.jpg`)} />
              <br></br>
              <span class={style.orderpadding}>
                Misty White Half Sleeve Tshirt&nbsp;
              </span>
              <br></br>
              <span class={style.orderpadding}>Rs.349 | &nbsp; Size:M</span>
              <br></br>
              <label class={style.labeldeliveryfailed}>Order Failed</label>
            </div>
          </div>
          <div className="col-5">
            <div class={`${style.adddetailsorderinfo}`}>
              <span class={style.shippingDetails}>Shipping Details</span>
              <br></br>
              <span class={style.shippingDetailsinfoname}>Anudeep Chandra</span>
              <br></br>
              <span class={style.shippingDetailsinfo}>
                Opposite Platina, Gachibowl, sree Vishnu Hostel, Gachibowli,
                Hyderabad 500032,Telangana,India
              </span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-7">
            <div class={style.helpmarginset}>
              <div
                class={`${style.addbordertoorder}  ${style.ordersinfohelpsupport}`}
              >
                <br></br>
                <span class={style.helporder}>
                  Need Help With Your Order&nbsp;
                </span>
                <br></br>
                <div class={style.helporder}>
                  <button className="btn btn-outline-primary">
                    VISIT HELP AND SUPPORT
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-5">
            <div class={`${style.adddetailsorderinfo}`}>
              <div className="row">
                <div className="col-8">
                  <span class={style.shippingDetails}>Payment summary</span>
                  <br></br>
                </div>

                <div className="col-4"></div>
              </div>

              <div className="row">
                <div className="col-9">
                  <span class={style.paymentsummaryinfoname}>Cart Total</span>
                  <br></br>
                </div>
                <div className="col-3">
                  <span class={style.paymentsummaryinfoname}>Rs.349</span>
                </div>
              </div>

              <div className="row">
                <div className="col-9">
                  <span class={style.paymentsummaryinfoname}>
                    Shipping Cost
                  </span>
                  <br></br>
                </div>
                <div className="col-3">
                  <span class={style.paymentsummaryinfoname} id={style.free}>
                    FREE
                  </span>
                </div>
              </div>

              <div className="row">
                <div className="col-9">
                  <span class={style.paymentsummaryinfoname}>COD</span>
                  <br></br>
                </div>
                <div className="col-3">
                  <span class={style.paymentsummaryinfoname} id={style.free}>
                    FREE
                  </span>
                </div>
              </div>

              <div className="row">
                <div className="col-9">
                  {" "}
                  <span class={style.paymentsummaryinfoname}>Order Total</span>
                  <br></br>
                </div>
                <div className="col-3">
                  <span class={style.paymentsummaryinfoname}>Rs.349</span>
                </div>
              </div>

              <div className="row">
                <div className="col-9">
                  {" "}
                  <span class={style.paymentsummaryinfoname}>
                    Paid from Wallet
                  </span>
                  <br></br>
                </div>
                <div className="col-3">
                  <span class={style.paymentsummaryinfoname}>Rs.175</span>
                </div>
              </div>
              <hr></hr>
              <div className="row">
                <div className="col-9">
                  {" "}
                  <span class={style.amountpaid}>Amount Paid</span>
                  <br></br>
                </div>
                <div className="col-3">
                  <span class={style.amountpaid}>Rs.174</span>
                </div>
              </div>

              <div className="row"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
