import React from 'react'
import style from './appStyle.module.css'
import {Link} from 'react-router-dom'

const arrow={
    fontSize:'2.52vh',
    opacity:'0.9',
    position:'relative',
    top:'2.5px'
}
 function Orders() {
    return (
    
        <div>
            <div class="container">
             <div class={`"row" ${style.websiteMyacTitle}`}>
                 
            <Link to="/accounts/">
            <a id={style.backtoaccount}><i class='fa fa-angle-left' style={arrow} ></i>&nbsp;Back to My Account</a>
            </Link> 
             <div class={style.websiteMyacTitle}>
             < div class="float-left ">
                 <div class={`${style.WebAccHeading} "h-50 d-inline-block"`}>
                 <div>My Orders</div>
                 <hr></hr>
                 </div>  
             </div>
         </div>
         </div>
     </div>
     </div>
       
    )
}
export default Orders