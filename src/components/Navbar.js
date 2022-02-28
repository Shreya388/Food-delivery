import React from "react";
import { Nav, Navbar} from "react-bootstrap";
import "./css/Navbar.css";

const Topbar = () => {
    return (
        <Navbar className="fixed-top p-4" id="topBar" expand="lg" variant="dark">
            <div className="container-fluid">
                <Navbar.Brand href="#home">FOODUO</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto mx-auto">
                        <Nav.Link active href="#home">Home</Nav.Link>
                        <Nav.Link active href="#link">Desserts</Nav.Link>
                        <Nav.Link active href="#link">Chinese Menu</Nav.Link>
                        <Nav.Link active href="#link">South Indian Menu</Nav.Link>
                        <Nav.Link active href="#link">Our Special Items</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    )
};

export default Topbar;