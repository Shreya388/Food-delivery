import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import one from "./one.jpg";
import two from "./two.jpg";
import three from "./three.jpg";
import four from "./four.jpg";
import five from "./five.jpg";


function Cards(props){
    return (
            <Col>
            
            <Card className="card_style" style={{border: "none"}}>
                <img className="card-img" src={props.image} alt="images" />
                <div class="card-img-overlay text-center text-white" style={{background: "rgb(0 0 0 / 15%)"}}>
                    <Container className="" style={{border: "1pt solid #222222", background: "rgb(0 0 0 / 80%)"}}>
                <p className="navbar-brand">{props.name}</p>
                    </Container>
                </div>

            </Card>
            
            
            </Col>
    )
}

const FoodItems = () => {
    return (
        <div style={{background: "black", paddingTop: "100pt", paddingBottom: "100pt"}}>
            
        <Container>

           <h1 className="display-3 p-4 text-white text-center">Menu</h1>
            <Row>
                <Cards name="Curry" image={one} />
                <Cards name="Pizza" image={two} />
                <Cards name="Burger" image={three} />
            </Row><br />
            <Row>
                <Cards name="Noodles" image={four} />
                <Cards name="Dessert" image={five} />
                <Col>
                
                </Col>
            </Row><br />
        </Container>
        </div> 
     );
}
 
export default FoodItems;