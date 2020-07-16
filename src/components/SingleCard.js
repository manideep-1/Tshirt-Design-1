import React, { Component } from "react";
// import tshirt1 from '../Images/tshirt1.jpg'
// import tshirt2 from '../Images/tshirt2.jpg'
// import tshirt3 from '../Images/tshirt3.jpg'
// import plus1 from '../Images/plus1.jpg'
import Heart from "./Heart";

const tshirtStyle = {
  width: "100%",
  // height:'90%'
};
// const colorwhite={
//     color:'white'
// }
class SingleCard extends Component {
  render() {
    return (
      <div className="cardprop  card my-3 mx-3 col-md-3 " style={tshirtStyle}>
        <p className="card-text"></p>
        <img
          className="card-img-top mx-auto"
          src={this.props.srcName}
          alt="tshirt"
          style={tshirtStyle}
        />
        {/* <div className="card-img-overlay d-flex"><div className="col-8"></div><Heart></Heart></div> */}
        <div className="card-body">
          {/* <div className="float-right"><Heart></Heart></div> */}
          <h6 className="px-1 py-1">{this.props.content}</h6>
          <div className="row">
            <div className="col-md-3"></div>
            <div>
              <h6 className="px-0 py-1">{this.props.cost}/-</h6>
              <strike className="px-0 py-1">{this.props.cuttingRate}/-</strike>
            </div>
          </div>
          {/* <div className="btn-group" role="group" aria-label="Basic example">
                                <a href="/" className="col-xs-6 btn btn-secondary"><i className="fa fa-heart-o"></i></a>         
                                <a href="/" className="col-xs-6 btn btn-warning">Add to Cart</a>
                                </div> */}
          <div className="d-flex justify-content-center padding:0px;">
            <Heart></Heart>
          </div>
          {/* </div> */}
        </div>
      </div>
    );
  }
}

export default SingleCard;
