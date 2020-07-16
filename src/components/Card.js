import React, { Component } from "react";
import SingleCard from "./SingleCard";
import customise from "../Images/customise.jpg";
import PostData from "../jsondata/tshirtsmen.json";
import FilterFull from "./FilterFull";

// src\components\tshirt1.jpg
// const tshirt1=require('./tshirt1.jpg')
const tshirtStyle = {
  width: "100%",
  // height:'90%'
};
const hrstyle = {
  // color:'yellow'
  border: "1px solid #ffbb33",
};
class Card extends Component {
  render() {
    return (
      <div>
        <br />
        <div className="d-flex justify-content-center">
          {/* <div className="col-2"></div> */}
          <div className="col-md-5">
            <div className="card">
              <p className="card-text col-md-10"></p>
              <img
                alt=""
                className="card-img-top mx-auto"
                src={customise}
                style={tshirtStyle}
              />
              <div className="card-body">
                <h6>Customise your T-shirts</h6>
                <p></p>
                <a href="/" className="btn btn-warning">
                  <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                  <i class="fa fa-plus"></i>
                  <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                </a>
              </div>
            </div>
            {/* <div className="col-2"></div> */}
          </div>
        </div>
        <br />
        <br />
        <hr style={hrstyle}></hr>
        {/* <div className="d-flex justify-content-center align-items-center">
           
           <SingleCard srcName={tshirt1} cost={199} content={"Half-Sleeves"}></SingleCard>
           <div className="col-1"></div>
           <SingleCard srcName={tshirt2} cost={199} content={"Half-Sleeves"}></SingleCard>
           <div className="col-1"></div>
           <SingleCard srcName={tshirt3} cost={199} content={"Half-Sleeves"}></SingleCard>
                     
           </div>
        <br/> */}
        <div className="container d-flex">
          <div className="row">
            <div className="col-md-3">
              <h4>Filters:</h4>
              <hr style={hrstyle}></hr>
              <FilterFull></FilterFull>
            </div>
            <div className="col-md-9">
              <div
                className="d-flex flex-wrap align-content-around"
                id="cardsl"
              >
                <div className="row">
                  {PostData.map((data, i) => {
                    return (
                      <SingleCard
                        srcName={require(`../Images/${data.image}.jpg`)}
                        cost={data.cost}
                        content={data.content}
                        cuttingRate={data.cuttingRate}
                      ></SingleCard>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="py-4 ">
            <div className="container ">
                <div className="row">
                    
                {
                    
                PostData.map((data,i)=>{
                    return (
                        
                    <div className="card col-md-4" style={tshirtStyle}>
                        <div className="card-block">
                            <p className="card-text"></p>
                            <img className="card-img-top mx-auto" src={require(`../Images/${data.image}.jpg`)} style={tshirtStyle}/>
                            <div className="card-img-overlay d-flex"><div className="col-8"></div><Heart></Heart></div>
                            <div className="card-body">
                            <div className="float-right"><Heart></Heart></div>
                                <h6>{data.content}</h6>
                                <div className="row">
                                    <div className="col-md-2"></div>
                                    <h6 className="col-md-5">{data.cost}/-</h6>
                                    <strike className="col-md-5">{data.cuttingRate}/-</strike>
                                    
                                </div>
                                <div className="btn-group" role="group" aria-label="Basic example">
                                <a href="/" className="col-xs-6 btn btn-secondary"><i className="fa fa-heart-o"></i></a>         
                                <a href="/" className="col-xs-6 btn btn-warning">Add to Cart</a>
                                </div>
                                <div className="d-flex justify-content-center padding:0px;"><Heart></Heart></div>
                            </div>
                    </div>
                    
                    </div>
                    );
                })
                }
   
                </div>
            </div>
        </div> */}
      </div>
    );
  }
}

export default Card;
