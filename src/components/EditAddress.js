import React, { Component } from 'react'
import style from './appStyle.module.css'
import axios from 'axios'


export class EditAddress extends Component {
  
    // componentDidMount(){
    //     if(this.props.match && this.props.match.params.obj1){
    //         console.log(this.props.match.params.obj1)
    //         const obj2=this.props.match.params.obj1
    //         console.log(obj2)
    //          axios.get(`http://localhost:3000/addresses/editaddress/${obj2}`)
    //          .then(res=>{
    //              this.setState({obj2:res.data})
    //              console.log(obj2)
    //              console.log("hello")
    //          })
    //     }
    // }
    render() {
        // console.log(this.props)
        // console.log(window.location.href)
      //  console.log(this.props.match.params.obj1)
        return (
            <div class="container">
               
               
                    <div class={style.gaplimit}> </div>
                    <br></br>
                    <div class={style.gaplimit}></div>
                    <div class={`${style.Heading} "h-50 d-inline-block"`}>
                    <div>Delivery Info</div>
                    <hr></hr>
                    <form spellCheck="false">
                        <br></br>
                        <label >
                            <input id={style.recname}  placeholder=" "/>
                            <span class={style.inputname}>Receivers Name</span>
                        </label>
                        <br></br>
                        <label>
                            <input id={style.phonenumber} placeholder=" "/>
                            <span class={style.inputname}>Phone Number</span>
                        </label>
                        <span>&nbsp; &nbsp;</span>
                        <label>
                            <input id={style.phonenumber} placeholder=" "/>
                            <span class={style.inputname}>Alternate Number(Optional)</span>
                        </label>
                        <br></br>
                        <label>
                            Address
                            <hr></hr>
                        </label>
                        <br></br>
                        <label>
                            <input id={style.phonenumber}  placeholder=" "/>
                            <span class={style.inputname}>Pincode</span>
                        </label>
                        <br></br>
                        <label>
                            <input id={style.addressbox} placeholder=" "/>
                            <span class={style.inputname}>Address</span>
                        </label>
                        <br></br>
                        <label>
                            <input id={style.phonenumber} placeholder=" "/>
                            <span class={style.inputname}>Locality</span>
                        </label>
                        <br></br>
                        <label>
                            <input id={style.phonenumber} placeholder=" "/>
                            <span class={style.inputname}>Landmark (Optional)</span>
                        </label>
                        <br></br>
                        <label>
                            <input id={style.phonenumber} placeholder=" "/>
                            <span class={style.inputname}>City</span>
                        </label>
                        <span>&nbsp;&nbsp;</span>
                        <label>
                            <input id={style.phonenumber} placeholder=" "/>
                            <span class={style.inputname}>State</span>
                        </label>
                        <br></br>
                        <label>
                            <input id={style.phonenumber} placeholder=" " value="India" />
                            <span class={style.inputname}>Country</span>
                        </label>
                        <br></br>
                        <label>
                            <span id={style.thisismy}>This is My</span>
                          <br></br>
                            <div class="btn-group btn-group-toggle form-group" data-toggle="buttons">
                            <label class="btn btn-outline-warning active" id={style.option}>
                                    <input type="radio" name="options"  class={style.toggled}  autocomplete="off" />Home
                             </label>
                            <label class="btn btn-outline-warning" id={style.option}>
                                    <input type="radio" name="options" id="option2" class={style.toggled} autocomplete="off"/> Office
                            </label>
                            <label class="btn btn-outline-warning" id={style.option}>
                                    <input type="radio" name="options" id="option3" class={style.toggled} autocomplete="off" />Other
                            </label>
                            </div>
                            <br>
                            </br>
                            <div class="form-group">
                                <div class="row">
                                <div class="col-1">
                                <button class="btn btn-primary" id={style.removeborderrad}>Cancel</button>
                                </div>
                                <div class="col-8">

                                </div>
                                <div class="col">
                                <button class="btn btn-primary" id={style.removeborderrad}>Submit</button>
                                </div>
                                </div>
                                
                            </div>
                            <div class="form-group">

                            </div>
                        </label>
                    </form>
                    </div>
            </div>
        )
    }
}

export default EditAddress
