import React from "react";
import { Container, Nav, Navbar, Row, Col } from "react-bootstrap";
import "./css/Footer.css";

const Section = (props) => {
  return (
    <Col md={3}>
    <div className="text-center">
      <h3 className="text-white">{props.tag}</h3>
      <Nav.Link className="Link" href="#fd">{props.link}</Nav.Link>
      <Nav.Link className="Link" href="#fsd">{props.link2}</Nav.Link>
      <Nav.Link className="Link" href="#fsdsd">{props.link3}</Nav.Link>
    </div>
    </Col>
  )
};


const Footer = () => {
  return (
    <div className="Footer">
      <div className="footer_div">
        <Container>
          <Row>
              <Col md={3}>
                <h1 className="display-4 text-white">FOODUO</h1>
                <p className="text-white">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum</p>
              </Col>

              <Section tag="Pages" link="Home" link2="About" link3="Features" />
              <Section tag="Products" link="Events" link2="Contact" link3="Mentors" />
              <Section tag="Contact" link="tarun nagar, guwahati, Assam" link2="No: 91 9134567893" />
          </Row>
        </Container>
      </div>

      {/*Navbar /*/}
      <Navbar id="navbar">
      <Container>
        <Nav className="me-auto mx-auto">
         <Nav.Link className="text-white">Copyright 2022</Nav.Link>
        </Nav>
      </Container>
      </Navbar>

    </div>


  );
}

export default Footer;