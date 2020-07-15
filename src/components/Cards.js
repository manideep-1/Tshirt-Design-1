import React,{Component} from 'react'
import data from './data';
import Octicon from 'react-octicon';

const widthSet = {
    width: "18rem"
  };
const closeMargin = {
    margin: "3px"
}
const contentSet = {
    position: 'absolute', left: '50%', top: '40%',
    transform: 'translate(-50%, -50%)'    
}
const heartSet = {
    position: 'absolute', left: '50%',bottom:'200%',
    transform: 'translate(-50%)'
}
const OrderDetails = data.OrderDetails;
let noOfItems

class Cards extends Component
{
    constructor(props)
    {
        super(props)
        noOfItems = Object.keys(OrderDetails).length
    }
    render()
    {
        return (
            <>
            {noOfItems==0 && 
            <div style={contentSet}>
                <img src="brhrt.jpg" style={heartSet} height="100" width="100"/>
                <h2>Your WishList is Empty!</h2>
            </div>
            }
            <div className="row">
            {OrderDetails.map((order_info,index)=> (
            <div className="card marginSet" style={widthSet}>
                <div ng-repeat="file in imagefinaldata" className="img_wrp">
                    <a href="#">
                        <img src={require(`./${order_info.OrderImg}.jpg`)} className="card-img-top" alt="...">
                    </img>
                    </a>
                    <a href="#">
                    <Octicon className="close" style={closeMargin} name="x"/>
                    {/* <img className="close" style={closeMargin} src="closeicon.png" height="20" width="20" /> */}
                    </a>
                </div>
                <div className="card-body">
                <h5 className="card-title">{order_info.OrderName}&nbsp; ({order_info.Size})</h5>
                        {order_info.actualPrice!=null ?
                        <p className="card-text">${order_info.currentPrice}&nbsp;
                        <span className="text-muted card-text"><del >${order_info.actualPrice}</del></span>
                        <span className="text-success"> {order_info.discount}% OFF</span></p>:
                        <p className="card-text">${order_info.currentPrice}&nbsp;</p>}
                <p>Get it for {order_info.offerPrice} <span className="card-text badge badge-secondary">{order_info.offer}</span></p>
                    <a href="#" className="btn btn-warning">MOVE TO BAG</a>
                </div>
            </div>))}
            </div>
            </>
        )
    }
}

export default Cards