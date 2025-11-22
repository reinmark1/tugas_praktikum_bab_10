"use client"
import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Footer() {
    return (
        <footer style={{ backgroundColor: '#050505', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '80px', paddingBottom: '40px' }}>
            <Container>
                <Row className="gy-4">
                    {/* Brand & Info */}
                    <Col md={4} className="mb-4">
                        <h3 className="fw-bold text-white mb-3">
                            Rein<span className="text-gradient">.Tech</span>
                        </h3>
                        <p className="text-secondary">
                            Menyediakan solusi terbaik untuk kebutuhan teknologi Anda.
                        </p>
                        <div className="d-flex gap-3 mt-4">
                            <a href="#" className="text-white fs-4 social-icon"><i className="bi bi-github"></i></a>
                            <a href="#" className="text-white fs-4 social-icon"><i className="bi bi-linkedin"></i></a>
                            <a href="#" className="text-white fs-4 social-icon"><i className="bi bi-instagram"></i></a>
                            <a href="#" className="text-white fs-4 social-icon"><i className="bi bi-whatsapp"></i></a>
                        </div>
                    </Col>

                    {/* Navigation Links */}
                    <Col md={2} xs={6}>
                        <h5 className="text-white fw-bold mb-3">Services</h5>
                        <ul className="list-unstyled text-secondary footer-link-list">
                            <li className="mb-2"><a href="#" className="text-decoration-none link-secondary">Network Design</a></li>
                            <li className="mb-2"><a href="#" className="text-decoration-none link-secondary">PC Assembly</a></li>
                            <li className="mb-2"><a href="#" className="text-decoration-none link-secondary">Web Dev</a></li>
                            <li className="mb-2"><a href="#" className="text-decoration-none link-secondary">Consultation</a></li>
                        </ul>
                    </Col>

                    <Col md={2} xs={6}>
                        <h5 className="text-white fw-bold mb-3">Company</h5>
                        <ul className="list-unstyled text-secondary footer-link-list">
                            <li className="mb-2"><a href="#" className="text-decoration-none link-secondary">About Me</a></li>
                            <li className="mb-2"><a href="#" className="text-decoration-none link-secondary">Projects</a></li>
                            <li className="mb-2"><a href="#" className="text-decoration-none link-secondary">Contact</a></li>
                            <li className="mb-2"><a href="#" className="text-decoration-none link-secondary">Privacy Policy</a></li>
                        </ul>
                    </Col>

                    {/* Newsletter / Search */}
                    <Col md={4}>
                        <h5 className="text-white fw-bold mb-3">Stay Updated</h5>
                        <p className="text-secondary small">Dapatkan info terbaru seputar teknologi.</p>
                        <Form>
                            <InputGroup className="mb-3">
                                <Form.Control
                                    type="email"
                                    placeholder="Email address"
                                    aria-label="Email address"
                                    style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white' }}
                                />
                                <Button variant="primary" id="button-addon2">
                                    Subscribe
                                </Button>
                            </InputGroup>
                        </Form>
                    </Col>
                </Row>

                <hr style={{ borderColor: 'rgba(255,255,255,0.1)', margin: '40px 0' }} />

                <Row>
                    <Col className="text-center text-secondary">
                        <small>&copy; {new Date().getFullYear()} 535240194 - Rein Mark. All Rights Reserved. Built with Next.js & Bootstrap.</small>
                    </Col>
                </Row>
            </Container>
            
            <style jsx>{`
                .social-icon:hover {
                    color: var(--primary-color) !important;
                    transform: translateY(-3px);
                    transition: all 0.3s ease;
                }
                .footer-link-list li a:hover {
                    color: white !important;
                    padding-left: 5px;
                    transition: all 0.3s ease;
                }
            `}</style>
        </footer>
    )
}