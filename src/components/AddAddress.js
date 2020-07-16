import React, { Component } from "react";
import style from "./appStyle.module.css";

export class AddAddress extends Component {
  render() {
    return (
      <div className="container">
        <div class={style.gaplimit}> </div>
        <br></br>
        <div class={style.gaplimit}></div>
        <div class={`${style.Heading} "h-50 d-inline-block"`}>
          <div>Delivery Info</div>
          <hr></hr>
          <form spellCheck="false">
            <br></br>
            <label>
              <input id={style.recname} placeholder=" " />
              <span class={style.inputname}>Receivers Name</span>
            </label>
            <br></br>
            <label>
              <input id={style.phonenumber} placeholder=" " />
              <span class={style.inputname}>Phone Number</span>
            </label>
            <span>&nbsp; &nbsp;</span>
            <label>
              <input id={style.phonenumber} placeholder=" " />
              <span class={style.inputname}>Alternate Number(Optional)</span>
            </label>
            <br></br>
            <label>
              Address
              <hr></hr>
            </label>
            <br></br>
            <label>
              <input id={style.phonenumber} placeholder=" " />
              <span class={style.inputname}>Pincode</span>
            </label>
            <br></br>
            <label>
              <input id={style.addressbox} placeholder=" " />
              <span class={style.inputname}>Address</span>
            </label>
            <br></br>
            <label>
              <input id={style.phonenumber} placeholder=" " />
              <span class={style.inputname}>Locality</span>
            </label>
            <br></br>
            <label>
              <input id={style.phonenumber} placeholder=" " />
              <span class={style.inputname}>Landmark (Optional)</span>
            </label>
            <br></br>
            <label>
              <input id={style.phonenumber} placeholder=" " />
              <span class={style.inputname}>City</span>
            </label>
            <span>&nbsp;&nbsp;</span>
            <label>
              <input id={style.phonenumber} placeholder=" " />
              <span class={style.inputname}>State</span>
            </label>
            <br></br>
            <label>
              <input id={style.phonenumber} placeholder=" " value="India" />
              <span class={style.inputname}>Country</span>
            </label>
            <br></br>
            <label>
              <span id={style.thisismy}>This is My</span>
              <br></br>
              <div
                className="btn-group btn-group-toggle form-group"
                data-toggle="buttons"
              >
                <label
                  className="btn btn-outline-warning active"
                  id={style.option}
                >
                  <input
                    type="radio"
                    name="options"
                    class={style.toggled}
                    autocomplete="off"
                  />
                  Home
                </label>
                <label className="btn btn-outline-warning" id={style.option}>
                  <input
                    type="radio"
                    name="options"
                    id="option2"
                    class={style.toggled}
                    autocomplete="off"
                  />{" "}
                  Office
                </label>
                <label className="btn btn-outline-warning" id={style.option}>
                  <input
                    type="radio"
                    name="options"
                    id="option3"
                    class={style.toggled}
                    autocomplete="off"
                  />
                  Other
                </label>
              </div>
              <br></br>
              <div className="form-group">
                <div className="row">
                  <div className="col-1">
                    <button
                      className="btn btn-primary"
                      id={style.removeborderrad}
                    >
                      Cancel
                    </button>
                  </div>
                  <div className="col-8"></div>
                  <div className="col">
                    <button
                      className="btn btn-primary"
                      id={style.removeborderrad}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
              <div className="form-group"></div>
            </label>
          </form>
        </div>
      </div>
    );
  }
}

export default AddAddress;
