import React ,{ useState} from 'react'
// import Component from 'react'
import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'
const SignUp = () => {
    
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
            
            
			<h4 className="text-center"><strong>Sign Up</strong></h4>
			<h5 className="text-center"><strong>Discover Fashion!</strong></h5>
			<h6 className="text-center">You're just one step away from signing up</h6><br />

            <div className="container">
				<div className="row">
					<div className="col-5 offset-1">
						 <a href="http://www.facebook.com/profile.php?id=" class="btn btn-lg btn-social btn-facebook">
							<i className="fa fa-facebook fa-fw"></i>Facebook
						</a>
					</div>
					<div className="col-5 offset-1">
					<p className="btn btn-lg btn-social btn-google">
						<i className="fa fa-google fa-fw"></i> Google
					</p>
					</div>
				</div><br />
                <div className="row">
                <Link
              to="/signupdetails"
              style={{ textDecoration: "none", color: "inherit" }}>
		            <button className="btn btn-primary offset-4" data-toggle="modal"  data-dismiss="modal" >
				        <i className="glyphicon glyphicon-phone" ></i> Login with mobile</button>
                </Link>
                <br />
                </div>
			</div>


        </Modal.Body>
        <Modal.Footer>
        <div className="options textCenter text-md-right mt-1">
                <p>Have an account?
                <Link
              to="/login/continue"
              style={{ textDecoration: "none", color: "inherit" }}>
                   <button href="#" class="blue-text" data-toggle="modal" 
						data-target="#Login-demo" data-dismiss="modal">Log In</button>
            </Link>
            </p>				
              </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default SignUp