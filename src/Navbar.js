import React from "react";
import {Nav, Navbar, Container, NavDropdown} from "react-bootstrap";

const Topbar = () => {
    return (
        <Navbar expand="lg" variant="dark" style={{padding: "13pt", borderBottom: "1pt solid #444444"}}>
        <Container>
            <Navbar.Brand href="#home">Fooduo</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link active href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Desserts</Nav.Link>
                <Nav.Link href="#link">Chinese Menu</Nav.Link>
                <Nav.Link href="#link">South Indian Menu</Nav.Link>
                <NavDropdown title="Your Cart" id="basic-nav-dropdown">
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