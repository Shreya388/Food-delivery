import React from "react";
import "./style.css";
import {Carousel, Col, Container, Row} from "react-bootstrap";
import cover from "./cover.jpg";
import cover2 from "./cover2.jpg";
import cover3 from "./cover3.jpg";
import Navbar from "./Navbar";


const Cover = () => {
    return ( 
        /*
        <div className="background">
            <div className="overlay">
            <Topbar />

            <Container className="head_sec">
                <h1></h1>
            </Container>
            </div>
        </div>
        */
        
        <div className="col-md-12" style={{background: "black"}}>
            
            <Navbar />
            <div className="container-fluid">
            <Row>
            <Col>
            
            <Carousel>
            
                <Carousel.Item>
                    
                <img
                className="d-block w-100"
                src={cover}
                alt="First slide"
                />
                </Carousel.Item>
                
                <Carousel.Item>
                <img
                className="d-block w-100"
                src={cover2}
                alt="Second slide"
                />
                </Carousel.Item>
                
                <Carousel.Item>
                <img
                className="d-block w-100"
                src={cover3}
                alt="Third slide"
                />
                </Carousel.Item>
            </Carousel>
            
            </Col>
            
            <Col>
                <div style={{background:"black"}}>
                    <Container>
                    <br /><h4 className="display-3 bold mt-4 text-white">Order Now</h4><br /><br />
                    <input type="text" placeholder="Choose your location" style= {{padding: "13pt 26pt", border: "none", borderRadius: "10pt 0pt 0pt 10pt"}} />
                    <button className="button">Find Food</button><br /><br />
                    <p className="display-6" style={{color: "silver"}}>We are available on cities like:</p>
                    <p style={{color: "white"}}>Mumbai, Bangalore, Chennai, Delhi, Hydrabad etc.</p>
                    </Container>
                </div>
            </Col>
            </Row>
            </div>
        </div>
     );
}
 
export default Cover;