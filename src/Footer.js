import React from "react";
import {Container, Nav, Row, Col } from "react-bootstrap";
import "./Footer.css";

const Section = (props) => {
  return (
    <div className="text-center">
      <h6>{props.tag}</h6>
      <Nav.Link className="Link" href="#fd">{props.link}</Nav.Link>
      <Nav.Link className="Link" href="#fsd">{props.link2}</Nav.Link>
      <Nav.Link className="Link" href="#fsdsd">{props.link3}</Nav.Link>
      
    </div>
  )
};


const Footer = () => {
    return (
      <div className="Footer">
        <div style={{background: "black", paddingTop: "140pt", paddingBottom: "50pt"}}>
          <Container>
            
            
            <Row>
              <Col>
              <h1 className="display-4" style={{color: "red"}}>Fooduo</h1>
              </Col>
              <Col>
              <Section tag="Pages" link="Home" link2="About" link3="Features" />
              </Col>
              <Col>
              <Section tag="Products" link="Events" link2="Contact" link3="Mentors" />
              </Col>
             <Col> 
              <Section tag="Contact" link="tarun nagar, guwahati, Assam" link2="No: 91 9134567893" />
                
             
              </Col>
            </Row>
            <hr />
         
          </Container>
        </div>
       </div>
     
     );
}
 
export default Footer;