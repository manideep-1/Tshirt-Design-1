import React, { Component } from "react";
import style from "./Login.module.css";
// import {OTPInput} from "otp-input-react";

export class LoginPage extends Component {
  // state={
  //     otp:'',
  // };
  // handleotp = otp =>this.setState({otp});
  state = { email: true, password: true, login: true, otp: true };
  render() {
    const { email, password, login, otp } = this.state;
    return (
      <div class="container" style={{ backgroundColor: "white" }}>
        <div class="row" id={style.loginbox}>
          <div
            class="col-5"
            style={{
              backgroundColor: "#fec107",
              height: "100%",
              padding: "20px",
            }}
          >
            <span class={style.logintext}>
              {login ? <span>Login </span> : <span>SignUp</span>}
            </span>

            <span class={style.loginpagedata}>
              <br></br>
              <br></br>
              {login ? (
                <span>
                  {" "}
                  Get access to your Customizations, Orders, Wislists and
                  Recommendations
                </span>
              ) : (
                <span>
                  Looks like you're new here. SignUp and customize your own
                  tshirts and enjoy piggibank benefits
                </span>
              )}
            </span>
            <img
              class={style.hand}
              style={{ marginTop: "130px" }}
              src={require("./tshirt.png")}
            />
          </div>

          {login ? (
            <div class="col-7" style={{ padding: "20px", paddingTop: "100px" }}>
              <form>
                {email ? (
                  <div class="form-group" style={{ marginLeft: "30px" }}>
                    <label>
                      <input id={style.emailId} type="email" placeholder=" " />
                      <span class={style.inputname}>Email Id</span>
                    </label>
                    <br></br>
                    <a
                      class="btn btn-link"
                      onClick={() => this.setState({ email: !email })}
                      type="button"
                      style={{
                        fontSize: "12px",
                        float: "right",
                        cursor: "pointer",
                        paddingTop: "0px",
                      }}
                    >
                      {" "}
                      Login With Phone Number
                    </a>
                  </div>
                ) : (
                  <div class="form-group" style={{ marginLeft: "30px" }}>
                    <label>
                      <input id={style.emailId} type="tel" placeholder=" " />
                      <span class={style.inputname}>Phone Number </span>
                    </label>
                    <br></br>
                    <a
                      class="btn btn-link"
                      onClick={() => this.setState({ email: !email })}
                      type="button"
                      style={{
                        fontSize: "12px",
                        float: "right",
                        cursor: "pointer",
                        paddingTop: "0px",
                      }}
                    >
                      {" "}
                      Login With Email{" "}
                    </a>
                  </div>
                )}

                {password ? (
                  <div class="form-group" style={{ marginLeft: "30px" }}>
                    <label>
                      <input
                        id={style.emailId}
                        type="password"
                        placeholder=" "
                      />
                      <span class={style.inputname}>Password</span>
                    </label>
                    <br></br>
                    <a
                      class="btn btn-link"
                      onClick={() => this.setState({ password: !password })}
                      type="button"
                      style={{
                        fontSize: "12px",
                        float: "right",
                        cursor: "pointer",
                        paddingTop: "0px",
                      }}
                    >
                      {" "}
                      Login With OTP
                    </a>
                  </div>
                ) : (
                  <div class="form-group" style={{ marginLeft: "30px" }}>
                    <label>
                      <input type="tel" placeholder=" " />
                      <span class={style.inputname}>Enter OTP</span>
                    </label>
                    {/* <OTPInput onChange={this.handleotp} value="123456" OTPLength={6} /> */}
                    <br></br>
                    <a
                      class="btn btn-link"
                      onClick={() => this.setState({ password: !password })}
                      type="button"
                      style={{
                        fontSize: "12px",
                        float: "right",
                        cursor: "pointer",
                        paddingTop: "0px",
                      }}
                    >
                      {" "}
                      Login With Password
                    </a>
                  </div>
                )}

                <div
                  class="form-group"
                  style={{ marginLeft: "30px", marginTop: "50px" }}
                >
                  <button
                    class="btn btn-warning"
                    style={{
                      width: "100%",
                      height: "50px",
                      borderRadius: "0px",
                    }}
                  >
                    Login
                  </button>
                </div>

                <div
                  style={{
                    textAlign: "center",
                    fontSize: "14px",
                    cursor: "pointer",
                  }}
                >
                  <br></br>
                  <a onClick={() => this.setState({ login: !login })}>
                    <span>New to Chillar? Create an account</span>
                  </a>
                </div>
              </form>
            </div>
          ) : (
            <div class="col-7" style={{ padding: "20px", paddingTop: "20px" }}>
              <form>
                {email ? (
                  <div class="form-group" style={{ marginLeft: "30px" }}>
                    <label>
                      <input id={style.emailId} type="email" placeholder=" " />
                      <span class={style.inputname}>Email Id</span>
                    </label>
                    <br></br>
                    <a
                      class="btn btn-link"
                      onClick={() => this.setState({ email: !email })}
                      type="button"
                      style={{
                        fontSize: "12px",
                        float: "right",
                        cursor: "pointer",
                        paddingTop: "0px",
                      }}
                    >
                      {" "}
                      Signup With Phone Number
                    </a>
                  </div>
                ) : (
                  <div class="form-group" style={{ marginLeft: "30px" }}>
                    <label>
                      <input id={style.emailId} type="tel" placeholder=" " />
                      <span class={style.inputname}>Phone Number </span>
                    </label>
                    <br></br>
                    <a
                      class="btn btn-link"
                      onClick={() => this.setState({ email: !email })}
                      type="button"
                      style={{
                        fontSize: "12px",
                        float: "right",
                        cursor: "pointer",
                        paddingTop: "0px",
                      }}
                    >
                      {" "}
                      Signup With Email{" "}
                    </a>
                  </div>
                )}

                <div class="form-group" style={{ marginLeft: "30px" }}>
                  <label>
                    <input id={style.emailId} placeholder=" " />
                    <span class={style.inputname}>Enter OTP</span>
                  </label>
                  {otp ? (
                    <a
                      class="btn btn-link"
                      onClick={() => this.setState({ otp: !otp })}
                      type="button"
                      style={{
                        fontSize: "12px",
                        float: "right",
                        cursor: "pointer",
                        paddingTop: "0px",
                      }}
                    >
                      {" "}
                      Request OTP
                    </a>
                  ) : (
                    <a
                      class="btn btn-link"
                      type="button"
                      style={{
                        fontSize: "12px",
                        float: "right",
                        cursor: "pointer",
                        paddingTop: "0px",
                      }}
                    >
                      {" "}
                      Request OTP Again
                    </a>
                  )}
                </div>

                <div class="form-group" style={{ marginLeft: "30px" }}>
                  <label>
                    <input id={style.emailId} type="password" placeholder=" " />
                    <span class={style.inputname}>Set Password</span>
                  </label>
                  <br></br>
                </div>

                <div
                  class="form-group"
                  style={{ marginLeft: "30px", marginTop: "50px" }}
                >
                  <button
                    class="btn btn-warning"
                    style={{
                      width: "100%",
                      height: "50px",
                      borderRadius: "0px",
                    }}
                  >
                    SignUp
                  </button>
                </div>

                <div
                  style={{
                    textAlign: "center",
                    fontSize: "14px",
                    cursor: "pointer",
                  }}
                >
                  <a onClick={() => this.setState({ login: !login })}>
                    <span>Existing User ? Log in</span>
                  </a>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default LoginPage;
