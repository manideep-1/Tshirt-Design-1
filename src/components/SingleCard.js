import React, { Component } from 'react'
// import tshirt1 from '../Images/tshirt1.jpg'
// import tshirt2 from '../Images/tshirt2.jpg'
// import tshirt3 from '../Images/tshirt3.jpg'
// import plus1 from '../Images/plus1.jpg'
import Heart from './Heart'

const tshirtStyle={
    width:'100%',
    // height:'90%'
}
// const colorwhite={
//     color:'white'
// }
class SingleCard extends Component {
    render() {
        return (
        
            <div class="cardprop  card my-3 mx-3 col-md-3 " style={tshirtStyle}>
                <p class="card-text"></p>
               <img class="card-img-top mx-auto" src={this.props.srcName}  alt="tshirt" style={tshirtStyle}/>
               {/* <div class="card-img-overlay d-flex"><div class="col-8"></div><Heart></Heart></div> */}
               <div class="card-body">
               {/* <div class="float-right"><Heart></Heart></div> */}
                    <h6 class="px-1 py-1">{this.props.content}</h6>
                        <div class="row">
                            <div class="col-md-3"></div>
                            <div>
                            <h6 class="px-0 py-1">{this.props.cost}/-</h6>
                            <strike class="px-0 py-1">{this.props.cuttingRate}/-</strike>
                            </div>     
                                </div>
                                {/* <div class="btn-group" role="group" aria-label="Basic example">
                                <a href="#" class="col-xs-6 btn btn-secondary"><i class="fa fa-heart-o"></i></a>         
                                <a href="#" class="col-xs-6 btn btn-warning">Add to Cart</a>
                                </div> */}
                                <div class="d-flex justify-content-center padding:0px;"><Heart></Heart></div>
                            {/* </div> */}
               </div>

           </div>
            
        )
    }
}

export default SingleCard
