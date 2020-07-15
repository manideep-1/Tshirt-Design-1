import React, { Component } from 'react'
import style from './appStyle.module.css'

const arrow={
    fontSize:'25px',
    opacity:'0.6',

}

export class SleeveTshirtBody extends Component {
    state={show:false,show2:false,show3:false};
    render() {
        const {show,show2,show3} = this.state;
        return (
            
            <div class="container">
                <div class="row">
                    <div class="col-3">
                        <div  id={style.faq}><span>faqs</span></div>
                        <div  >
                        <div   class=" col-12 " id={style.dropmenuhead} onClick={() => this.setState({ show: !show })} >
                            <a> <span >Sizes </span>
                            {show ?<span> <i class='fa fa-angle-up' id={style.arrowright} style={arrow} ></i></span>:<span> <i class='fa fa-angle-down' id={style.arrowright} style={arrow} ></i></span>} </a>
                           
                        </div> 
                       
                        {show
                        ? <ul   id={style.dropmenu}>
                        <span id={style.dropmenulist} >S </span> <br></br>
                        <span id={style.dropmenulist} >M </span> <br></br>
                        <span id={style.dropmenulist} >L </span> <br></br>
                        <span id={style.dropmenulist} >XL </span> <br></br>
                        <span id={style.dropmenulist} >2XL </span> <br></br>
                        <span id={style.dropmenulist} >3XL </span> <br></br>
                        
                        </ul> :null
                    }
                        
                        <hr class={style.setline}></hr>
                        </div>


                        <div  >
                        <div   class=" col-12 " id={style.dropmenuhead} onClick={() => this.setState({ show2: !show2 })} >
                            <a> <span >Sleeves </span>
                            {show2 ?<span> <i class='fa fa-angle-up' id={style.arrowright} style={arrow} ></i></span>:<span> <i class='fa fa-angle-down' id={style.arrowright} style={arrow} ></i></span>} </a>
                           
                        </div> 
                       
                        {show2
                        ? <div class="col-12"  id={style.dropmenu}>

                        <span id={style.dropmenulistsort} >Full Sleeves </span> <br></br>
                      
                        <span id={style.dropmenulistsort} >Half Sleeves </span> <br></br>
                        
                        
                        </div> :null
                    }
                        
                        <hr class={style.setline}></hr>
                        </div>

                        
                        <div  >
                        <div   class=" col-12 " id={style.dropmenuhead} onClick={() => this.setState({ show3: !show3 })} >
                            <a> <span >Sort By </span>
                            {show3 ?<span> <i class='fa fa-angle-up' id={style.arrowright} style={arrow} ></i></span>:<span> <i class='fa fa-angle-down' id={style.arrowright} style={arrow} ></i></span>} </a>
                           
                        </div> 
                       
                        {show3
                        ? <ul   id={style.dropmenu}>
                        <span id={style.dropmenulistsort} >Popular </span> <br></br>
                        <span id={style.dropmenulistsort} >New </span> <br></br>
                        <span id={style.dropmenulistsort} >Price: Low to High </span> <br></br>
                        <span id={style.dropmenulistsort} >Price: High to Low </span> <br></br>
                        
                        
                        </ul> :null
                    }
                        
                        <hr class={style.setline}></hr>
                        </div>

                        </div>
               
                    <div class="col-9">
                        
                        <div class="row"  id={style.customize}>     
                        <div class="col-6">
                        <h1 class="display-3" id={style.customizeyourself}>customize yourself</h1>
                        </div>
                        <div class="col-6" class={style.nexticonpadding}>
                        <img class={style.nexticon} src={require(`./next.png`)}/>
                        </div>
                        
                               
                              
                        </div>
                    </div>
                    {/* <div class="col-3"></div>
                    <div class="col-9">
                        <div class="row"  id={style.customizecarousel}>
                             <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
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
</div>
</div>
                    </div> */}

                </div>
            </div>
        )
    }
}

export default SleeveTshirtBody
