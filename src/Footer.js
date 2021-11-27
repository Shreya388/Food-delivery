import React from "react";
import {Container, Nav, Row, Col } from "react-bootstrap";
import "./Footer.css";

const Section = (props) => {
  return (
    <div>
      <h4>{props.tag}</h4>
      <Nav.Link className="Link" href="#fd">{props.link}</Nav.Link>
      <Nav.Link className="Link" href="#fsd">{props.link2}</Nav.Link>
      <Nav.Link className="Link" href="#fsdsd">{props.link3}</Nav.Link>
    </div>
  )
};


const Footer = () => {
    return (
      <div className="Footer">
        <div style={{background: "black", paddingTop: "80pt", paddingBottom: "60pt"}}>
          <Container>
            <Row>
              <Col>
              <Section tag="Pages" link="Home" link2="About" link3="Features" />
              </Col>
              <Col>
              <Section tag="Products" link="Events" link2="Contact" link3="Mentors" />
              </Col>
             <Col> 
              <div>
                <h4>Contact</h4>
                <p>Tarun Nagar, Guwahati, Assam</p>
                <p>meenaxjha@gmail.com</p>
                <p>+91 55948 89977</p>
              </div>
              </Col>
            </Row>
            <hr />
         
          </Container>
        </div>
       </div>
     
     );
}
 
export default Footer;