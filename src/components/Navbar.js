import React from "react";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import "./css/Navbar.css";

const Topbar = () => {
    return (
        <Navbar className="fixed-top p-4" id="topBar" expand="lg" variant="dark">
            <Container>
                <Navbar.Brand href="#home">FOODUO</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto mx-auto">
                        <Nav.Link active href="#home">Home</Nav.Link>
                        <Nav.Link active href="#link">Desserts</Nav.Link>
                        <Nav.Link active href="#link">Chinese Menu</Nav.Link>
                        <Nav.Link active href="#link">South Indian Menu</Nav.Link>
                        <NavDropdown active title="Your Cart" id="basic-nav-dropdown" style={{padding:"0 60pt"}}>
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};

export default Topbar;