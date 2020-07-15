/*import React,{Component} from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import { Card,UncontrolledCollapse,  Button, CardBody, Media } from 'reactstrap';
import style from './appStyle.module.css'
import { DISHES } from './queries';

import { Link } from 'react-router-dom'
import { Arrow } from 'react-popper';
const arrow={
    fontSize:'20px',
    opacity:'0.9',
    position:'relative',
    top:'35px'
    
}


class OrdersrelatedBody extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedDish: null,
           
        }
        


            
    }

   

    onDishSelect(dish) {
        this.setState({ selectedDish: dish});
    }
    
    


    renderDish(dish) {
        if (dish != null)
            return(
              <div class="container">
                  <div style={arrow}>
          <p>{dish.description}</p>
          <br/>
          <p>{dish.des1}</p>
          <br/>
        <p> {dish.des2}</p>
          <br/>
          <p>{dish.des3}</p>
          <br/>
          <p>{dish.des4}</p>
          <br/>
          <p>{dish.des5}</p>
          <br/>
          <p>{dish.des6}</p>
          </div>
          </div> 
                
            );
        else
            return(
                <div></div>
            );
    }
    render() {
        const menu = this.props.dishes.map((q)=>{
            return(
               
                <div className="col-12 mt-5">
                      <Media  style={arrow} key={q.id} onClick={()=>this.onDishSelect(q)}>
                      <div class={style.addbordertocards}> <a class={style.font_set}>
                <span class={style.accdetails}>{q.name} </span>
                <i class='fa fa-angle-right' style={arrow} ></i><br></br>
                
                </a></div>
                      </Media>
                      <br/><br/>
                </div>
                   
            );
        });
        return(
            <div class="ass">
            <div class="container">
                   <div class="box">
                       <div class="box-row">
                           <div class="col-sm-4" >
                               <Media list>
                              {menu}
                              </Media>
                          </div>
                          <br/>
                          <div  class="col-sm-4">
                            {this.renderDish(this.state.selectedDish)}
                        </div>
                         
                      </div>
                  </div>
              </div>
              </div>
        
        );
    }

}

export default OrdersrelatedBody;*/


import React, {useState} from 'react';
import FAQ1 from './FAQ1';

function OrdersRelatedBody() {
    const [faqs, setfaqs] = useState([
        {  
          "question": 'How do I place an order?',
          description : 'To place an order, please follow these steps:',
          b:"1. Select the product you'd like to buy and 'Check Availability at' your preferred pincode",
          c:"2. Add products to your cart or just hit 'Buy Now'",
          d:"3. Choose or 'Add delivery address'. Use a preferred payment mode and confirm the order",
          "open": false
        },
        {
          question: "My Order is not yet packed/shipped",
          description: "We usually ship orders 3-4 business days before the delivery date so that they reach you on time. In case your order hasn't been shipped within this time please contact our Customer Support so that we can look into it.",
          open: false
        },
        {
          question: 'What are the charges that will apply on my order?',
          description:'1. We levy no shipping charges on your order. Except for certain Categories/Products such as Kawach Masks and Surgical Mask where Rs. 50 is applied as shipping charges due to operational reasons.',
          a:"2. COD charges of Rs. 25 per product if you choose cash-on-delivery as your mode of payment. ",
          b:"3. The price of the products you see are inclusive of taxes.",
          open: false
        },
        {
            question:"Why can't I see the COD option?",
            description:"In a few pincodes, we are unable to provide the cash-on-delivery payment option currently.",
            a:"You may however, opt for any other mode of payment such as Debit Card, Credit Card, or using an Online Wallet.",
            open:false
        }
      ]);
      const toggleFAQ = index => {
        setfaqs(faqs.map((faq, i) => {
          if (i === index) {
            faq.open = !faq.open
          } else {
            faq.open = false;
          }
    
          return faq;
        }))
      }
      
  return (
    <div className="App">
      
      <div className="faqs">
        {faqs.map((faq, i) => (
          <FAQ1 faq={faq} index={i} toggleFAQ={toggleFAQ} />
        ))}
      </div>
    </div>
  );
}



export default OrdersRelatedBody;


