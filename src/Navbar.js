import React from "react";
import {Nav, Navbar, Container, NavDropdown, Button} from "react-bootstrap";

const Topbar = () => {
    return (
        <Navbar className="fixed-top" expand="lg" variant="dark" style={{background: "rgb(0 0 0 / 79%)", boxShadow: "0pt 1pt 2pt 0pt black" ,backdropFilter: "blur(8px)", padding: "13pt", borderBottom: "1pt solid rgb(44 44 44)"}}>
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
            <Button className="btn btn-dark">Login</Button>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
};

export default Topbar;