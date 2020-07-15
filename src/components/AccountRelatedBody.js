/*import React,{Component} from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import { Card,UncontrolledCollapse,  Button, CardBody, Media } from 'reactstrap';
import {Accordion} from 'react-bootstrap';
import style from './appStyle.module.css'
import { DISHES } from './queries';
import { Link } from 'react-router-dom'
import { Arrow } from 'react-popper';
import data from './data.json';

const arrow={
    fontSize:'5px',
    opacity:'1.0',
    position:'relative',
    top:'5px'
    
}
const socialMediaList = data.SocialMedias;


class AccountRelatedBody extends Component {
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
        const menu = this.props.accountqueries.map((q)=>{
            return(
               
                <div className="col-12  mt-5">
                      <div  style={arrow} key={q.id} onClick={()=>this.onDishSelect(q)}>
                      <div class={style.addbordertocards1}> <a class={style.font_set}>
                <span class={style.accdetails}>{q.name} </span>
                <i class='fa fa-angle-right' style={arrow} ></i>
            <span class={style.accinfo}></span>                
                </a></div>
                      </div>
                      <br/><br/>
                </div>
             );
        });
       return(
            <div class="ass">
            <div class="container">
                   <div class="box">

                           
                               <Media list>
                              {menu}
                              </Media>
                          <div  class="col-sm-4">
                            {this.renderDish(this.state.selectedDish)}
                        </div>
                         
                     
                  </div>
              </div>
              </div>
              

  
        
        );
    }

}

export default AccountRelatedBody;*/


import React, {useState} from 'react';
//import data from './accountqueries';

function AccountRelatedBody() {
    const [faqs, setfaqs] = useState([
        {
          "question": 'I have forgotten my password',
          description : 'To generate a new password, please click the link below',
         
          "open": false
        },
        {
          question: "I want to delete my Bewakoof account.",
          description: "Please write to us here, and our customer care executive will help you resolve this.",
        
          open: false
        },
        {
          question: 'I would like to unsubscribe from Bewakoof promotional SMS and emails.',
          description:'We’re sorry to see you go. Please write to us here, and our customer care executive will help you resolve this.',
       
          open: false
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
          <faq faq={faq} index={i} toggleFAQ={toggleFAQ} />
        ))}
      </div>
    </div>
  );
}



export default AccountRelatedBody;

