import React,{Component} from 'react'
import style from './appStyles.module.css'

const marginSet = {
    marginTop: "300px",
    borderRadius:"10px"
}

class PriceDetails extends Component
{
    render()
    {
        return (
            <>
            <div class="col-5" >
            <div class={`${style.adddetailsorderinfo}`} style={marginSet}> 
                <div class="row">
                <div class="col-8">
                <span class={style.shippingDetails}>Payment summary</span>             
                <br></br>
                </div>
                
                <div class="col-4">

                </div>
                </div>

                <div class="row">
                <div class="col-9">
                <span class={style.paymentsummaryinfoname}>Cart Total</span>           
                <br></br>
                </div>
                <div class="col-3">
                <span class={style.paymentsummaryinfoname}>${this.props.totalPrice}</span>
                </div>
                </div>

                <div class="row">
                <div class="col-9">
                <span class={style.paymentsummaryinfoname}>Coupon Discount</span>       
                <br></br>
                </div>
                <div class="col-3">
                <span class={style.paymentsummaryinfoname} id={style.free}><a href="#">Apply Coupon</a></span>
                </div>
                </div>   

                <div class="row">
                <div class="col-9"><span class={style.paymentsummaryinfoname}>Order Total</span><br></br>
                </div>
                <div class="col-3">
                <span class={style.paymentsummaryinfoname} >${this.props.totalPrice}</span>
                </div>
                </div> 

                <div class="row">
                <div class="col-9">  <span class={style.paymentsummaryinfoname}>Delivery charges</span><br></br>
                </div>
                <div class="col-3">
                <span className="font-weight-light card-text"><del>$99</del></span>
                <span class={style.paymentsummaryinfoname} id={style.free}>FREE</span>
                </div>
                </div> 

                <hr></hr>
                <div class="row">
                <div class="col-9">  <span class={style.amountpaid}>Total</span><br></br>
                </div>
                <div class="col-3">
        <span  class={style.amountpaid}>${this.props.totalPrice}</span>
                </div>
                </div> 
                <div class="row">
                <div class="col" style={{textAlign:"center",marginTop:"20px"}}>
                <button type="button" class="btn btn-warning">SELECT DELIVERY ADDRESS</button>
                </div>
                </div>
            
                <div class="row"></div>
                
                
                </div>



            </div>  
            </>
        )
    }
}

export default PriceDetails