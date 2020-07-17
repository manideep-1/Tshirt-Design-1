import React ,{ useState} from 'react'
// import Component from 'react'
import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'
const Login = () => {
    
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
            
            
			<h4 className="text-center"><strong>Log In</strong></h4>
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
				</div>
                <br />
                <div style={{width: "100%", height:" 20px", borderBottom: "1px solid black", textAlign: "center"}}>
                  <span style={{fontSize: "20px", backgroundColor:" #FFFFFF", padding:"0 10px"}}>
                     or
                </span>
                </div>
                <br />
                <form spellCheck="false">		
                		<input type="tel" class="form-control form-control-sm mr-1" name="mobile" id="mobile" placeholder="Enter Mobile" />
                        <br/>
                
                        <Link
              to="/login/continue"
              style={{ textDecoration: "none", color: "inherit" }}>
						<button class="btn btn-primary justifyCenter" data-toggle="modal" 
						data-target="#hello" data-dismiss="modal">Continue</button>
            </Link>
                </form>

			</div>


        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default Login