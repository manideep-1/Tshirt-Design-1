import React, { Component } from 'react'
import style from './appStyle.module.css'


export class MyProfile extends Component {
    render() {
        return (
            <div class="container">
               
                    <div class={style.gaplimit}> </div>
                    <br></br>
                    
                    <div class={`${style.Heading} "h-50 d-inline-block"`}>
                    <form spellCheck="false">
                        <label>
                            <input id={style.phonenumber} placeholder=" "/>
                            <span class={style.inputname}>First Name</span>
                        </label>
                        <span>&nbsp; &nbsp;</span>
                        <label>
                            <input id={style.phonenumber} placeholder=" "/>
                            <span class={style.inputname}>Last Name</span>
                        </label>
                        <br></br>
                        <br></br>
                        <label>
                            <input id={style.emailId}  value="kanudeep2@gmail.com"  type="email"placeholder=" "/>
                            <span class={style.inputname}>Email Id</span>
                        </label>
                        <br></br>
                        <label>
                            <input id={style.phonenumber} type="password" value="anudeep2000" placeholder=" "/>
                            <span class={style.inputname}>Password</span>
                        </label>
                        <br></br>
                        <label>
                            <input id={style.phonenumber} type="tel" placeholder=" "/>
                            <span class={style.inputname}>Phone Number</span>
                        </label>
                        <br></br>
                        <label>
                            <input id={style.phonenumber} type="date" placeholder=" "/>
                            <span class={style.inputname}>Date Of Birth</span>
                        </label>
                        <br></br>
                        <label>
                            <span id={style.thisismy}>Gender</span>
                          <br></br>
                            <div class="btn-group btn-group-toggle form-group" data-toggle="buttons">
                            <label class="btn btn-outline-warning active" id={style.option}>
                                    <input type="radio" name="options"  class={style.toggled}  autocomplete="off" />Male
                             </label>
                            <label class="btn btn-outline-warning" id={style.option}>
                                    <input type="radio" name="options" id="option2" class={style.toggled} autocomplete="off"/> Female
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
                                <button class="btn btn-primary" id={style.removeborderrad}>Save </button>
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

export default MyProfile
