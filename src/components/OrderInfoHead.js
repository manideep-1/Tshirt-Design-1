import React from 'react'
import style from './appStyle.module.css'
import MyAddressBody from './MyAddressBody'
import {Link} from 'react-router-dom'

const arrow={
    fontSize:'20px',
    opacity:'0.9',
    position:'relative',
    top:'5px'
}
 function OrdersInfoHead() {
    return (
    
        <div>
            <div class="container">
             <div class={`"row" ${style.websiteMyacTitle}`}>
                 
            <Link to="/accounts/orders">
            <a id={style.backtoaccount}><i class='fa fa-angle-left' style={arrow} ></i>&nbsp;Back to My Orders</a>
            </Link> 
             <div class={style.websiteMyacTitle}>
             < div class="float-left ">
                
                 
             </div>
         </div>
         </div>
     </div>
     </div>
       
    )
}
export default OrdersInfoHead