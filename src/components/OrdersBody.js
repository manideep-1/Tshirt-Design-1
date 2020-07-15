import React, { Component } from 'react'
import style from './appStyle.module.css'
import {Link} from 'react-router-dom'
import data from './data';


const addon={
    fontSize:'30px',
    display:'block',
    marginLeft:'auto',
    marginRight:'auto',
    width:'39%',
    float:'right',
}

 const OrderDetails=data.OrderDetails;

 export default class OrdersBody extends Component {
     constructor(props) {
         super(props)
     
        //  this.state = {
        //       users:["Anudeep","Abhishek","RaviChandra","Kedareshwari"]
        //  }
         //this.removeAddress= this.removeAddress.bind(this);

     }
    //  removeAddress = (comp_info,index) => 
    //  {
    //        // let {users}= this.state;
    //       let ind=OrderDetails.indexOf(comp_info);
    //     //   console.log(ind)
    //       console.log(comp_info)
    //        OrderDetails.splice(comp_info,1);
    //         this.setState({
    //             // OrderDetails : OrderDetails.faq(e1 => e1!==comp_info)
    //         //     // users:this.state.users.faq(e1=>e1!==name)
    //             OrderDetails:OrderDetails
    //         })
    //  }
     
     render() {
         
         return (
            <div class= {`${style.accOptions} "container"`}>
                <div class="row">    
                {OrderDetails.map((order_info,index)=> (<div class="col-12">
                <br></br>
                <span class={style.orderId}>Order:</span>
                <span class={style.orderIdval}>{order_info.OrderId}</span>
                <div class={`${style.addbordertoorder}  ${style.orderscardcolor}`}> 
                <img class={style.tshirtorder} src={require(`./${order_info.OrderImg}.jpg`)}/>
                <br></br>
                <span class={style.orderpadding}>{order_info.OrderName}&nbsp;</span>
                <br></br>
                <span class={style.orderpadding}>Size:{order_info.Size}</span>
                <br></br>
               { order_info.Orderdone ? <label class={style.labeldelivery}>delivered</label> :<label class={style.labeldeliveryfailed}>order failed</label>}
               <Link to="/accounts/orders/ordersinfo" style={{textDecoration:'none',color:'inherit'}}>
                <button class="btn btn-outline-primary" id={style.buttonorderinfo} >ORDER INFO</button>
                </Link>
                </div>
               
            </div>)

                 ) }
                
                </div>
               
            </div>
          
         )
     }
    }
 



