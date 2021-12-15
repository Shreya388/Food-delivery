import React from "react";
import "./style.css";
import {Container} from "react-bootstrap";
import Navbar from "./Navbar";
import "./Cover.css";

const Cover = () => {
    return ( 
        
        
        <div className="cover_img">
            <div className="cover_overlay">
            
            <Navbar />
                <Container>
                    <div className="col-md-12 text-center"><br />
                    <div style={{marginTop: "100pt"}}>
                    <h4 className="display-1 bold mt-4 text-white">Order Now</h4><br />
                    <input type="text" placeholder="Choose your location" style= {{padding: "13pt 16pt", width:"200pt", border: "none", borderRadius: "10pt 0pt 0pt 10pt"}} />
                    <button className="button">Find</button><br /><br />
                    <p className="" style={{color: "silver"}}>We are available on cities like:<p style={{color: "white", fontSize: "15px"}}>Mumbai, Bangalore, Chennai, Delhi, Hydrabad and more.</p></p>
                    </div>
                    </div>
                    </Container>
            </div>
        </div>
     );
}
 
export default Cover;