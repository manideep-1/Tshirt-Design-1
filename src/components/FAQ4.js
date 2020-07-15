import React from 'react'
import {Link } from 'react-router-dom';
//import style from './appStyle.module.css'
//import App from '../App';


function FAQ4 ({faq, index, toggleFAQ}) {

	return (
		<div
			className={"faq " + (faq.open ? 'open' : '')}
			key={index}
			onClick={() => toggleFAQ(index)}
		>
            <div class="pointer">
			<div  className="faq-question">
				<p>{faq.question}</p>
			</div>
            
			<div  className="faq-answer">
				<p>{faq.description}</p>
			</div>
            <div  className="faq-answer">
                <p>{faq.a}</p>
            </div>
            <div className="faq-answer">
                <p>{faq.b}</p>
            </div>
            <div className="faq-answer">
                <p>{faq.c}</p>
    
            </div>
            
            <div className="faq-answer">
                <hr style={{margin:'2px'}} />


                
            <div class="answer"  class="sdf" >Was this information helpful?<span class="dfg">
            <div >
                <a class="qwerty" style={{color:'gray'}}   class="button" href="#popup1" >
                    Yes
                </a>
                <a class="zxc" style={{color:'gray'}}   class="button" href="#popup1">
                    No
                </a>
                </div>
   
                </span>
                </div>
            
            <hr style={{margin:'1px'}} />
            </div>
            


                <div id="popup1" class="overlay">
                    <div class="popup">
                        
                        <a class="close" href="#">&times;</a>
                        <div class="content">
                            <h1>Thanks For Your Feedback</h1>
                        </div>
                    </div>
                </div>


                
            </div>


  

  
            
		</div>

        
	)
}


export default FAQ4