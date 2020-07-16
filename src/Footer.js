import React from "react";
import { Col, Row } from "react-bootstrap";
import "./App.css";

function Footer() {
  return (
    <div className="app">
      <div className="bg-dark py-5 px-sm-5 mb-0 w-100" style={{ bottom: "0" }}>
        <h3 className="text-warning mx-5">
          Chillar
          <i
            className="fa fa-registered pr-3 text-warning align-top pt-2 pl-1"
            style={{ fontSize: "10px" }}
          />
        </h3>
        <Row
          className="mx-5 pb-3 border-bottom border-light"
          style={{ fontSize: "13px" }}
        >
          <Col className="p-0 pt-4 col-6 col-lg-4 col-xl-3">
            <p className="text-warning">CUSTOMER SERVICE</p>
            <a href="/contact-us" className="text-white">
              Contact us
            </a>
            <br />
            <a href="/track" className="text-white">
              Track Order
            </a>
            <br />
            <a href="/return" className="text-white">
              Return Order
            </a>
            <br />
            <a href="/cancel" className="text-white">
              Cancel Order
            </a>
            <br />
          </Col>
          <Col className="p-0 pt-4 col-6 col-lg-4 col-xl-3">
            <p className="text-warning">COMPANY</p>
            <a href="/contact-us" className="text-white">
              About us
            </a>
            <br />
            <a href="/track" className="text-white">
              Terms & Conditions
            </a>
            <br />
            <a href="/return" className="text-white">
              Priacy policy
            </a>
            <br />
            <a href="/cancel" className="text-white">
              Blog
            </a>
            <br />
          </Col>
          <Col className="p-0 pt-4 col-6 col-lg-4 col-xl-3">
            <p className="text-warning">CONNECT WITH US</p>
            <a href="#twitter">
              <i
                className="fa fa-facebook pr-3 text-white"
                style={{ fontSize: "20px" }}
              />
            </a>
            <a href="#snapchat">
              <i
                className="fa fa-instagram pr-3 text-white"
                style={{ fontSize: "20px" }}
              />
            </a>
            <a href="#twitter">
              <i
                className="fa fa-twitter pr-3 text-white"
                style={{ fontSize: "20px" }}
              />
            </a>
            <br />
            <br />
            <a href="#snapchat">
              <i
                className="fa fa-snapchat pr-3 text-white"
                style={{ fontSize: "20px" }}
              />
            </a>
            <a href="#pinterest">
              <i
                className="fa fa-pinterest pr-3 text-white"
                style={{ fontSize: "20px" }}
              />
            </a>
          </Col>
          <Col className="p-0 pt-4 col-12 col-md-6 col-lg-4 col-xl-3">
            <p className="text-warning">KEEP UP TO DATE</p>
            <form className="row col-12">
              <input
                className="bg-dark form-control shadow-none border-warning rounded-0 col-7 text-white"
                type="text"
                style={{ fontSize: "13px" }}
                placeholder="Enter Email ID"
              ></input>
              <div
                className="btn btn-warning col-5 rounded-0"
                style={{ fontSize: "13px" }}
              >
                SUBSCRIBE
              </div>
            </form>
          </Col>
          <Col className="p-0 pt-4 col-6 col-lg-4 col-xl-3">
            <br />
            <a href="/contact-us" className="text-white">
              <i className="fa fa-repeat pr-2 text-white" />
              15 Days return policy
            </a>
            <br />
            <a href="/track" className="text-white">
              <i className="fa fa-money pr-2 text-white" />
              Cash on delivery
            </a>
            <br />
          </Col>
          <Col className="p-0 pt-4 col-6 col-lg-4 col-xl-3">
            <p className="text-warning">DOWNLOAD THE APP</p>
          </Col>
          <Col className="p-0 pt-4 col-6 col-lg-4 col-xl-3">
            <p className="text-warning">100% SECURE PAYMENT</p>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Footer;
