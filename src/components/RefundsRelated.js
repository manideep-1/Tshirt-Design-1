import React from 'react';
import style from './appStyleTwo.module.css'
import { Link } from 'react-router-dom'
const arrow={
    fontSize:'20px',
    opacity:'0.9',
    position:'relative',
    top:'2.5px'
}

function RefundsRelated() {
    return(
        <div>
        <div class="container">
         <div class={`"row" ${style.websiteMyacTitle}`}>
             
        <Link to="/helpandsupport">
        <a id={style.backtoaccount}><i class='fa fa-angle-left' style={arrow} ></i>&nbsp;Back</a>
        </Link> 
         <div class={style.websiteMyacTitle}>
         < div class="float-left ">
             <div class={`${style.WebAccHeading} "h-50 d-inline-block"`}>
             <div>Returns</div>
             <hr></hr>
             </div>  
         </div>
     </div> 
     </div>
 </div>
 </div>

    );
}

export default RefundsRelated;