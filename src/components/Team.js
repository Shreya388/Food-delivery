import React from "react";
import {Row, Container, Col} from "react-bootstrap";
import one from "./team/one.jpg";
import two from "./team/two.jpg";
import three from "./team/three.jpg";

const Team = (props) => {
   return (
      <Col>
            <div>
            <Container className= "text-white">
            <img alt={props.alte} src={props.source} style={{borderRadius: "50pt", border: "1pt solid #121212"}} /><br />
            <p className="navbar-brand">{props.name}<p style={{fontSize: "15px", color: "silver"}}>{props.tag}</p></p>
            <p style={{margin: "0 30pt", textAlign: "left"}}>{props.text}</p>
            
            </Container>
            </div>
      </Col>
   )
}

const Gallery = () => {
    return ( 
        <div style={{marginTop:"", background: "rgb(26 26 26)", paddingTop: "150pt", paddingBottom: "150pt"}}>
            <Container className="text-center">
            <Row>
               <Team alte ="ff" source={one} name="Jenny Smith" tag="Manager" text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantiu"/>
               <Team alte ="ffdf" source={two} name="Kevin bates" tag="CEO" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
               <Team alte ="ffdssda" source={three} name="Steve colson" tag="Chef" text="quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute " />
            </Row>
            </Container>
        </div>
     );
}
 
export default Gallery;
