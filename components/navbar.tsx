'use client'
import { useEffect, useState } from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';

function Navigation() { 
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    return (
        <Navbar expand="lg" fixed="top" className={scrolled ? "navbar-custom shadow" : "bg-transparent"} data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home" className="fw-bold fs-3">
                    Rein<span className="text-primary">.Tech</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="ms-auto my-2 my-lg-0 gap-3" navbarScroll>
                        <Nav.Link href="#home" className="text-white">Home</Nav.Link>
                        <Nav.Link href="#work" className="text-white">Projects</Nav.Link>
                        <Nav.Link href="#services" className="text-white">Services</Nav.Link>
                        <Nav.Link href="#contact" className="text-white">Contact</Nav.Link>
                    </Nav>    
                    <Button variant="primary" className="ms-3 rounded-pill">Download CV</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation;