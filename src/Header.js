import React from 'react';
import { Navbar,Nav,InputGroup,FormControl,Dropdown } from 'react-bootstrap';
import { Heart,Cart,Search,Person } from 'react-bootstrap-icons';
import './App.css'

function Header(){
  return(
    <div className="app" >
      <Navbar collapseOnSelect expand="lg" bg="white" className="bg-primary border-bottom border-dark-1 mx-sm-5 pt-3" variant="light" sticky="top">
        <Navbar.Brand className="ml-4 text-secondary" href="/"><h3>Chillar<i className="fa fa-registered pr-3 text-secondary align-top pt-2 pl-1" style={{fontSize:"10px"}}/></h3></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto d-flex justify-content-end mr-2 align-items-center">
            <Nav.Link href="/temp" active>Home</Nav.Link>
            <Nav.Link href="#Design">Design</Nav.Link>
            <Nav.Link href="#Customize">Customize</Nav.Link>
            <InputGroup className="mx-2">
              <InputGroup.Prepend>
                <InputGroup.Text className="bg-light border-right-0 d-none d-lg-flex" ><Search className="text-muted" size={14}/></InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                className="bg-light shadow-none border-left-0 pl-0 d-none d-lg-block"
                placeholder="Search"
                style={{fontSize:"14px"}}
              />
            </InputGroup>
            <span className="bg-secondary m-2 d-none d-lg-block" style={{width:"2px"}}>⠀</span>
            <Nav.Link href="#Login">Login</Nav.Link>
            <Nav.Link className="d-none d-lg-block" href="/wishlist"><Heart className="ml-1 text-muted mt-1" size={15}/></Nav.Link>
            <Nav.Link className="d-none d-lg-block" href="/cart"><Cart className="ml-2 text-muted" size={16}/></Nav.Link>
            <Dropdown alignRight className="ml-1 pt-1">{/*  Add/Remove hidden  */}
              <Dropdown.Toggle className="text-muted shadow-none" variant="white">
                <Person className=" text-muted rounded-circle" size={19}/>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Header>Pk</Dropdown.Header>{/* Username */}
                <Dropdown.Item eventKey="1" variant="white" href="/wishlist">Wishlist</Dropdown.Item>
                <Dropdown.Item eventKey="2" variant="white" href="/accounts/mywallet">Wallet</Dropdown.Item>
                <Dropdown.Item eventKey="3" variant="white" href="/accounts/orders">My Orders</Dropdown.Item>
                <Dropdown.Item eventKey="4" variant="white" href="/accounts">My Account</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="4" variant="white">Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;