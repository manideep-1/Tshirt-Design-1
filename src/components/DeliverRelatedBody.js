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
import FAQ5 from './FAQ5';

function DeliverRelatedBody() {
    const [faqs, setfaqs] = useState([
        {
          "question": 'My order is shipped but not yet delivered',
          description : 'We apologise for the inconvenience. Please share your query in detail along with the order id number, our customer care executive will work on your query . We will get back to you in the next 24 hours.',
         
          "open": false
        }, 
        {
          question: "I have not received an order confirmation.",
          description: "An e-mail & SMS will be sent once you've successfully placed your order. We'll also let you know as soon as the seller ships the item(s) to you along with the tracking number(s) for your shipment(s). You can track your orders from the 'My Orders' section on your Flipkart account.",
          
          open: false
        },
        {
          question: 'I placed multiple orders, but I haven\'t received all of them.',
          description:'Multiple orders are split to ensure there is no delay in shipping the order which is ready. The rest should be arriving soon',

          open: false
        },
        {
            question:"My order status reads delivered, but I have not yet received it.",
            description:"Your order may have been received by someone else on your behalf.",
            
            a:"If your address is a residential address please check with your neighbour/security guard.",
            b:"If your address is non-residential then please check with the reception.",
            c:"If you think that isnt the case, please reach out to us.",
            open:false
        },
        {
          question:"I want to change my delivery address or phone number.",
         
          description:"If your order has been shipped we will not be able to make any changes in the delivery address. We can inform our courier partner to send the shipment back to us.Please share the order id number and let us know the next course of action.",
          open:false
        },
        {
          question:"I wasn't available at the time of delivery, but I want my order. What do I do?",
          description:"Contact our customer service executive, and we will resolve this. We’ll get back to you within 24 hours:",
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
          <FAQ5 faq={faq} index={i} toggleFAQ={toggleFAQ} />
        ))}
      </div>
    </div>
  );
}



export default DeliverRelatedBody;
