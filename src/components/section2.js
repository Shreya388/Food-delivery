import React from "react";
import { Container } from "react-bootstrap";
import "./css/Section2.css";

const Sec2 = () => {
    return (
        <div className="sec2">
            <div className="container-fluid text-center">
                <Container>
                    <h1 className="display-6 mt-4">qui dolorem ipsum quia</h1>
                    <p className="">sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?</p>
                    <button className="btn btn-danger">Learn More</button>
                </Container>
            </div>
        </div>
    );
}

export default Sec2;