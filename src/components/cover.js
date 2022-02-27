import React from "react";
import "./style.css";
import { Container } from "react-bootstrap";
import Navbar from "./Navbar";
import "./css/Cover.css";

const Cover = () => {
    return (


        <div className="cover_img">
            <div className="cover_overlay">

                <Navbar />
                <Container>
                    <div className="col-md-12 text-center"><br />
                        <div style={{ padding: "140pt 0pt" }}>
                            <h4 className="display-1 bold mt-4">Order Now</h4><br />
                            <input type="text" placeholder="Choose your location" id="input" />
                            <button className="button">Find</button><br /><br />
                            <p className="tag">We are available on cities like:<p style={{ fontSize: "15px" }}>Mumbai, Bangalore, Chennai, Delhi, Hydrabad and more.</p></p>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default Cover;