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
 function SleeveTshirtHead() {
    return (
    
        <div>
          
             <div class={`"row" ${style.websiteMyacTitlehome}`}>
            <div class="container">
            <a id={style.backtoaccount}><i class='fa fa-angle-left' style={arrow} ></i>&nbsp;Back to Home Page</a>
            </div>

            {/* <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner" >
    <div class="carousel-item active">
      <img class="d-block w-100" src={require(`./slide2.jpg`)}/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={require(`./slide2.jpg`)} alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={require(`./slide3.jpg`)} alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div> */}







        <div class="container">
           
            <div class={style.websiteMyacTitle}>
             < div class="float-left ">
                 <div class={`${style.WebAccHeading} "h-50 d-inline-block" ${style.gapforheading}`}>
                 <div  >Sleeve Tshirt </div>
                 <hr ></hr>
                 </div>  
             </div>
         </div>
         </div>
         </div>
    
     </div>
       
    )
}
export default SleeveTshirtHead