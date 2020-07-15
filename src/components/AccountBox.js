import React from 'react'
import style from './appStyle.module.css'
import {Link} from 'react-router-dom'

const arrow={
    fontSize:'1.43vw',
    opacity:'0.9',
    position:'relative',
    top:'2px'
}

export default function AccountBox() {
    return (
      <div class={`"accBox w-100 p-3 " `}>
        <div class= {`${style.accOptions}`}>
            <div class="row">
            {/* <div class="col"></div> */}
            <div class="col">
            <Link to="/accounts/orders" style={{textDecoration:'none',color:'inherit'}}>
                <div class={style.addbordertocards}> <a class={style.font_set}>
                <span class={style.accdetails}>My Orders &nbsp;</span>
                <i class='fa fa-angle-right' style={arrow} ></i><br></br>
                <span class={style.accinfo}>View, modify and track orders</span>
                </a></div>
                </Link> 
            </div>
            <div class="col">
            <Link to="/accounts/mywallet" style={{textDecoration:'none',color:'inherit'}}>
                 <div class={style.addbordertocards}> <a class={style.font_set}>
                <span class={style.accdetails}>My Wallet &nbsp;</span>
                <i class='fa fa-angle-right' style={arrow} ></i><br></br>
                <span class={style.accinfo}>Your Wallet History</span>
                </a></div></Link></div>
      
           
            <div class="col"> 
            <Link to="/accounts/addresses" style={{textDecoration:'none',color:'inherit'}}>
            <div class={style.addbordertocards}> <a class={style.font_set}>
                <span class={style.accdetails}>My Addresses &nbsp;</span>
                <i class='fa fa-angle-right' style={arrow} ></i><br></br>
                <span class={style.accinfo}>Edit,Add or Remove Addresses</span>
                </a></div></Link> </div>
                
       
            <div class="col">
            <Link to="/accounts/myprofile" style={{textDecoration:'none',color:'inherit'}}>
                 <div class={style.addbordertocards}> <a class={style.font_set}>
                <span class={style.accdetails}>My Profile  &nbsp;</span>
                <i class='fa fa-angle-right' style={arrow} ></i><br></br>
                <span class={style.accinfo}>Edit personal info, change password</span>
                </a></div></Link></div>
            </div>
            <div class="row">
                <div class="col"></div>
                <div class="col-6">
                   <div class={style.displaycenter}>
                   <img class={style.cartoon} src={require('./shoppingcartoon.jpg')}/>
                       <br></br>
                     <span class={style.spanbuy}> &nbsp; Buy Something More <br></br> &nbsp; Or Customize Yourself </span>  
                     <span>&nbsp;&nbsp;</span>
                        <button type="button" id={style.buttonset} class="btn btn-warning">Continue Shopping</button>
                        
                       
                   </div>
                   
                   </div>
                   <div class="col"></div>
            </div>
        </div>
      </div>
           
    )
}
