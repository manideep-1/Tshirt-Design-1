import React, { Component } from "react";
import style from "./appStyles.module.css";

const labelspan = {
  fontSize: "15px",
  fontFamily: "Poppins",
  fontWeight: "500",
  position: "absolute",
  left: "50%",
  bottom: "70%",
  transform: "translate(-50%, 80%)",
};

class PopUpSize extends Component {
  render() {
    return (
      <>
        <div className="modal fade" id="popUpSize" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">
                  &times;
                </button>
                <h5 className="modal-title">Select Size</h5>
              </div>
              <div className="modal-body">
                <span id={style.checkedid}>
                  <input type="radio" name="payment" id="xs" value="XS" />
                  <label id={style.option} for="xs">
                    <span style={labelspan}>XS</span>
                  </label>
                </span>
                &nbsp;&nbsp;&nbsp;
                <span id={style.checkedid}>
                  <input type="radio" name="payment" id="s" value="S" />
                  <label id={style.option} for="s">
                    <span style={labelspan}>S</span>
                  </label>
                </span>
                &nbsp;&nbsp;&nbsp;
                <span id={style.checkedid}>
                  <input type="radio" name="payment" id="m" value="M" />
                  <label id={style.option} for="m">
                    <span style={labelspan}>M</span>
                  </label>
                </span>
                &nbsp;&nbsp;&nbsp;
                <span id={style.checkedid}>
                  <input type="radio" name="payment" id="l" value="L" />
                  <label id={style.option} for="l">
                    <span style={labelspan}>L</span>
                  </label>
                </span>
                &nbsp;&nbsp;&nbsp;
                <span id={style.checkedid}>
                  <input type="radio" name="payment" id="xl" value="XL" />
                  <label id={style.option} for="xl">
                    <span style={labelspan}>XL</span>
                  </label>
                </span>
                &nbsp;&nbsp;&nbsp;
                <span id={style.checkedid}>
                  <input type="radio" name="payment" id="xxl" value="XXL" />
                  <label id={style.option} for="xxl">
                    <span style={labelspan}>XXL</span>
                  </label>
                </span>
                &nbsp;&nbsp;&nbsp;
              </div>
              <div className="modal-footer">
                <a href="/" className="badge badge-light mr-auto">
                  Size Chart
                </a>
                <button type="button" className="btn btn-warning">
                  Done
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default PopUpSize;
