import React from "react";
import "./style.css";
import { Container, Row, Col } from "react-bootstrap";
import Fork from "./img/fork.png";

const About = () => {
    return (
        <div style={{ marginTop: "", background: "#dfdfdf", paddingTop: "150pt", paddingBottom: "150pt" }}>
            <Container>
                <Row>
                    <Col>
                        <Container>
                            <h1 className="display-6 mt-4">About</h1><br />
                            <p className="">sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?</p>
                        </Container>
                    </Col>
                    <Col>
                        <Container>
                            <img alt="fork" src={Fork} height="300px" />
                        </Container>
                    </Col>

                </Row>
            </Container>
        </div>
    );
}

export default About;
