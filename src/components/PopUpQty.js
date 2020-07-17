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

class PopUpQty extends Component {
  constructor(props) {
    super(props);
    this.state = {
      qty: 0,
    };
    this.incrementOne = this.incrementOne.bind(this);
    this.incrementFive = this.incrementFive.bind(this);
    this.incrementTen = this.incrementTen.bind(this);
  }
  incrementOne() {
    this.setState((prevState) => ({
      qty: prevState.qty + 1,
    }));
  }
  incrementFive() {
    this.setState((prevState) => ({
      qty: prevState.qty + 5,
    }));
  }
  incrementTen() {
    this.setState((prevState) => ({
      qty: prevState.qty + 10,
    }));
  }
  render() {
    return (
      <>
        <div className="modal fade" id="popUpQty" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" id={style.close} className="close" data-dismiss="modal">
                  &times;&nbsp;
                </button>
                <h5 className="modal-title">Set Quantity</h5>
              </div>
              <div className="modal-body">
                <span id={style.checkedid}>
                  <input type="radio" name="payment" id="1" value="1" />
                  <label id={style.option} for="1">
                    <span style={labelspan}>1</span>
                  </label>
                </span>
                &nbsp;&nbsp;&nbsp;
                <span id={style.checkedid}>
                  <input type="radio" name="payment" id="2" value="2" />
                  <label id={style.option} for="2">
                    <span style={labelspan}>2</span>
                  </label>
                </span>
                &nbsp;&nbsp;&nbsp;
                <span id={style.checkedid}>
                  <input type="radio" name="payment" id="3" value="3" />
                  <label id={style.option} for="3">
                    <span style={labelspan}>3</span>
                  </label>
                </span>
                &nbsp;&nbsp;&nbsp;
                <span id={style.checkedid}>
                  <input type="radio" name="payment" id="4" value="4" />
                  <label id={style.option} for="4">
                    <span style={labelspan}>4</span>
                  </label>
                </span>
                &nbsp;&nbsp;&nbsp;
                <span id={style.checkedid}>
                  <input type="radio" name="payment" id="5" value="5" />
                  <label id={style.option} for="xl">
                    <span style={labelspan}>5</span>
                  </label>
                </span>
                &nbsp;&nbsp;&nbsp;
                <span id={style.checkedid}>
                  <input type="radio" name="payment" id="6" value="6" />
                  <label id={style.option} for="6">
                    <span style={labelspan}>6</span>
                  </label>
                </span>
                &nbsp;&nbsp;&nbsp;
              </div>
              <div className="modal-footer">
                <button type="button" data-dismiss="modal" className="btn btn-warning">
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

export default PopUpQty;
