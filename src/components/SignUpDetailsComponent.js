import React ,{ useState} from 'react'
// import Component from 'react'
import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'
//import Switch from "react-switch";
const SignUpDetails = () => {
    
const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
    return(
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
            
            
			<h4 className="text-center"><strong>Sign Up</strong></h4><br />
            <div className="container">
            <form>
			    <div className="form-row">
					<div className="col-sm-4 offset-sm-2">
						<input type="text" className="form-control form-control-sm mr-1" id="fname" placeholder="First Name" />
					</div>
					<div className="col-sm-4 ">
						<input type="text" className="form-control form-control-sm mr-1" id="lname" name="lname" placeholder="Last Name" />
					</div>
				</div>	
				<br />
				<div className="form-row">
					<div className="col-sm-8 offset-sm-2">
						<input type="tel" className="form-control form-control-sm mr-1" id="phone" name="phone" placeholder="Enter Mobile" />
					</div>
				</div>
				<br />
				<div className="form-row">
					<div className="col-sm-8 offset-sm-2">
						<input type="email" className="form-control form-control-sm mr-1" id="emailadd" name="emailadd" placeholder="Enter Email" />
					</div>
				</div>
				<br />
				<div className="form-row">
					<div className="col-sm-8 offset-sm-2">
						<input type="password" className="form-control form-control-sm mr-1" id="psw" name="psw" placeholder="Enter Password" />
					</div>
				</div>
				<br />
				<div className="form-row">
                    <div className="form-check-inline col-sm-2 offset-sm-2">
                        <label className="form-check-label" for="radio1">
                            <input type="radio" className="form-check-input" id="radio1" name="gender" value="option1" checked /> Male
                        </label>
                    </div>
                    <div className="form-check-inline col-sm-3">
                        <label className="form-check-label" for="radio2">
                            <input type="radio" className="form-check-input" id="radio2" name="gender" value="option2" /> Female
                        </label>
                    </div>
                    <div className="form-check-inline col-sm">
                        <label className="form-check-label">
                            <input type="radio" className="form-check-input" name="gender" /> Other
                        </label>
                    </div>
				</div>
				<br />	
				<div className="form-row">
					<div className="col-sm-0 offset-sm-2">
                    <div className="toggle-switch">
                         <input type="checkbox" className="toggle-switch-checkbox" name="toggleSwitch" id="toggleSwitch" />
                        <label className="toggle-switch-label" for="toggleSwitch">
                        <span className="toggle-switch-inner"></span>
                        <span className="toggle-switch-switch"></span>
                        </label>
                    </div>
				    </div>
					<div className="col-sm">
						<p>I want to receive order updates on Whatsapp</p>
					</div>
				</div>
				<br />
				<div className="form-row">
					<button className="btn btn-block" style={{background:"#51CCCC"}}>Sign Up</button>
				</div>
			</form>
			</div>
        </Modal.Body>
        <Modal.Footer>
        <div className="options textCenter text-md-right mt-1">
                <p>Have an account?
				<Link
              to="/login/continue"
              style={{ textDecoration: "none", color: "inherit" }}>
					 <button class="blue-text" data-toggle="modal" 
						data-target="#Login-demo" data-dismiss="modal">Log In</button>
						</Link>
						</p>				
              </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default SignUpDetails