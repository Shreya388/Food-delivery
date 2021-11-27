import React from "react";
import "./style.css";
import { Container, Row, Col} from "react-bootstrap";
import Fork from "./fork.png";

const sec3 = () => {
    return ( 
        <div style={{marginTop:"", background: "rgb(16 16 16)", paddingTop: "100pt", paddingBottom: "100pt"}}>
            <Container>
            <Row>
            <Col>
            <Container>
                <h1 className="display-6 mt-4 text-white">Our Menu</h1><br />
                <p className="text-white">sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?</p>
            </Container>
            </Col>
            <Col>
            <Container>
               <img alt="fork" src={Fork} height="300px"/>
            </Container>
            </Col>
            
            </Row>
            </Container>
        </div>
     );
}
 
export default sec3;
