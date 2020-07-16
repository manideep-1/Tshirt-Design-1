import React, { Component } from "react";
import style from "./appStyle.module.css";
import { Link } from "react-router-dom";
import data from "./data";

const addon = {
  fontSize: "30px",
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
  width: "39%",
  float: "right",
};

const DeliveryInfo = data.DeliveryInfo;

export default class MyAddressBody extends Component {
  // constructor(props) {
  //   super(props);

  //    this.state = {
  //         users:["Anudeep","Abhishek","RaviChandra","Kedareshwari"]
  //    }
  //   this.removeAddress= this.removeAddress.bind(this);
  // }
  removeAddress = (comp_info, index) => {
    // let {users}= this.state;
    // let ind = DeliveryInfo.indexOf(comp_info);
    //   console.log(ind)
    console.log(comp_info);
    DeliveryInfo.splice(comp_info, 1);
    this.setState({
      // DeliveryInfo : DeliveryInfo.faq(e1 => e1!==comp_info)
      //     // users:this.state.users.faq(e1=>e1!==name)
      DeliveryInfo: DeliveryInfo,
    });
  };

  render() {
    return (
      <div class={`${style.accOptions} ${style.scaled}`}>
        <div className="row">
          {DeliveryInfo.map((comp_info, index) => (
            <div className="col-4">
              <div class={style.addbordertoadd}>
                {" "}
                <p class={style.font_set}>
                  <span class={style.accdetails}>
                    {comp_info.Recievers_name}&nbsp;
                  </span>
                  <br></br>
                  <span class={style.addinfo}>
                    {comp_info.Addr},&nbsp;{comp_info.Landmark}
                  </span>
                  <span class={style.cityinfo}>
                    {comp_info.City},{comp_info.Pincode}
                  </span>
                  <span class={style.cityinfo}>
                    Contact Number:{comp_info.Phone_number}
                  </span>
                </p>
                <Link
                  to="/accounts/addresses/editaddress/"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <button
                    className="btn btn-outline-warning"
                    id={style.buttonedit}
                  >
                    Edit
                  </button>
                </Link>
                {/* <span id={style.middleline}>| </span> */}
                <button
                  className="btn btn-outline-warning"
                  id={style.buttonremove}
                  onClick={this.removeAddress.bind(comp_info, index)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="col-4">
            <Link
              to="/accounts/addresses/addaddress"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div class={style.addbordertonew}>
                {" "}
                <p class={style.font_set}>
                  <span class={style.accdetails}>
                    &nbsp;&nbsp;&nbsp;Add Address
                  </span>
                  <i class="fa fa-plus" style={addon}></i>
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
