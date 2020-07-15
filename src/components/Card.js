import React, { Component } from 'react'
// import tshirt1 from '../Images/tshirt1.jpg'
// import tshirt2 from '../Images/tshirt2.jpg'
// import tshirt3 from '../Images/tshirt3.jpg'
// import plus1 from '../Images/plus1.jpg'
import SingleCard from './SingleCard'
import customise from '../Images/customise.jpg'
import PostData from '../jsondata/tshirtsmen.json'
import Heart from './Heart'
import style1 from './myStyle.module.css'
import FilterFull from './FilterFull'



// src\components\tshirt1.jpg
// const tshirt1=require('./tshirt1.jpg')
const tshirtStyle={
    width:'100%',
    // height:'90%'
}
const hrstyle={
    // color:'yellow'
    border : '1px solid #ffbb33',
}
class Card extends Component {     
    render() {
        return (
            <div>
            
            <br/>
            <div class="d-flex justify-content-center">
                {/* <div class="col-2"></div> */}
                <div class="col-md-5">
            <div class="card">
                
                <p class="card-text col-md-10"></p>
               <img class="card-img-top mx-auto" src={customise} style={tshirtStyle}/>
               <div class="card-body">
                   <h6>Customise your T-shirts</h6>
                   <p></p>
                   <a href="#" class="btn btn-warning"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><i class='fa fa-plus'></i><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></a>

               </div>
               </div>
               {/* <div class="col-2"></div> */}

           </div>
           </div>
           <br/>
        <br/>
        <hr style={hrstyle}></hr>
        {/* <div class="d-flex justify-content-center align-items-center">
           
           <SingleCard srcName={tshirt1} cost={199} content={"Half-Sleeves"}></SingleCard>
           <div class="col-1"></div>
           <SingleCard srcName={tshirt2} cost={199} content={"Half-Sleeves"}></SingleCard>
           <div class="col-1"></div>
           <SingleCard srcName={tshirt3} cost={199} content={"Half-Sleeves"}></SingleCard>
                     
           </div>
        <br/> */}
        <div class="container d-flex">
            <div class="row">
                <div class="col-md-3">
                    <h4>Filters:</h4>
                    <hr style={hrstyle}></hr>
                    <FilterFull></FilterFull>
                </div>
                <div class="col-md-9">
                        <div class="d-flex flex-wrap align-content-around" id="cardsl">
                            <div class="row">
                    
                             {
                    
                                PostData.map((data,i)=>{
                                    return <SingleCard srcName={require(`../Images/${data.image}.jpg`)} cost={data.cost} content={data.content} cuttingRate={data.cuttingRate}></SingleCard>;
                                })
                            }
                             </div>
                        </div>
                </div>
            </div>
        </div>
        
        {/* <div class="py-4 ">
            <div class="container ">
                <div class="row">
                    
                {
                    
                PostData.map((data,i)=>{
                    return (
                        
                    <div class="card col-md-4" style={tshirtStyle}>
                        <div class="card-block">
                            <p class="card-text"></p>
                            <img class="card-img-top mx-auto" src={require(`../Images/${data.image}.jpg`)} style={tshirtStyle}/>
                            <div class="card-img-overlay d-flex"><div class="col-8"></div><Heart></Heart></div>
                            <div class="card-body">
                            <div class="float-right"><Heart></Heart></div>
                                <h6>{data.content}</h6>
                                <div class="row">
                                    <div class="col-md-2"></div>
                                    <h6 class="col-md-5">{data.cost}/-</h6>
                                    <strike class="col-md-5">{data.cuttingRate}/-</strike>
                                    
                                </div>
                                <div class="btn-group" role="group" aria-label="Basic example">
                                <a href="#" class="col-xs-6 btn btn-secondary"><i class="fa fa-heart-o"></i></a>         
                                <a href="#" class="col-xs-6 btn btn-warning">Add to Cart</a>
                                </div>
                                <div class="d-flex justify-content-center padding:0px;"><Heart></Heart></div>
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
        )
    }
}

export default Card