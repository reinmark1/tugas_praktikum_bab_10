"use client"
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';

const HeroSection = () => {
    return (
        <div style={{ 
            backgroundColor: "var(--dark-bg)", 
            minHeight: "100vh", 
            display: "flex", 
            alignItems: "center",
            position: "relative",
            paddingTop: "80px",
            overflow: "hidden"
        }}>
            <div className="bg-grid"></div>

            <div style={{
                position: 'absolute', top: '-10%', right: '-5%', width: '500px', height: '500px',
                background: 'radial-gradient(circle, rgba(37,99,235,0.15) 0%, rgba(0,0,0,0) 70%)',
                zIndex: 1
            }}></div>

            <Container style={{ position: "relative", zIndex: 2 }}>
                <Row className="align-items-center gy-5">
                    <Col lg={6}>
                        <div className="d-inline-flex align-items-center border border-secondary border-opacity-25 rounded-pill px-3 py-1 mb-4 bg-dark">
                            <span className="dot bg-success rounded-circle me-2" style={{width:'8px', height:'8px'}}></span>
                            <small className="text-secondary fw-bold text-uppercase" style={{fontSize:'0.75rem'}}>Tech & Leadership Enthusiast</small>
                        </div>
                        <h1 className="display-3 fw-bold text-white mb-0 lh-sm">
                            Hi, I'm <br />
                            <span className="text-gradient">Rein Mark</span>
                        </h1>
                        <p className="text-secondary fs-4 fw-bold mb-4 mt-2" style={{ letterSpacing: '2px' }}>
                            535240194
                        </p>
                        <h4 className="fw-normal text-light mb-4 d-flex align-items-center gap-2 flex-wrap">
                            <span>Tech Enthusiast</span>
                            <span className="text-secondary">|</span> 
                            <span>Web Developer</span>
                            <span className="text-secondary">|</span> 
                            <span className="text-white fw-bold" style={{fontSize: '0.9em', borderBottom: '2px solid #2563eb'}}>Active Student</span>
                        </h4>
                        <p className="lead text-secondary mb-5 pe-lg-5">
                            Mahasiswa Teknik Informatika FTI Untar yang memadukan ketertarikan teknologi dengan kemampuan kepemimpinan melalui pengalaman organisasi.
                        </p>
                        <div className="d-flex gap-3">
                            <Button variant="primary" size="lg" className="px-4 py-2 fw-bold" href="#work">
                                Lihat Portfolio
                            </Button>
                            <Button variant="outline-secondary" size="lg" className="px-4 py-2" href="#contact">
                                Hubungi Saya
                            </Button>
                        </div>
                    </Col>

                    <Col lg={6}>
                        <div className="position-relative ps-lg-5">
                            <div className="tech-card mb-3 p-3 bg-opacity-10" style={{transform: 'rotate(-2deg)', marginLeft: '-20px'}}>
                                <div className="d-flex align-items-center gap-3">
                                    <div className="bg-primary bg-opacity-25 p-3 rounded text-primary">
                                        <i className="bi bi-search fs-4"></i>
                                    </div>
                                    <div>
                                        <h5 className="mb-0 fw-bold text-white">IT Exploration</h5>
                                        <small className="text-secondary">Exploring New Tech & Trends</small>
                                    </div>
                                </div>
                            </div>

                            <div className="tech-card mb-3 p-3 shadow-lg position-relative bg-dark" style={{zIndex: 10, borderLeft: '4px solid #2563eb'}}>
                                <div className="d-flex align-items-center gap-3">
                                    <div className="bg-info bg-opacity-25 p-3 rounded text-info">
                                        <i className="bi bi-code-slash fs-4"></i>
                                    </div>
                                    <div>
                                        <h5 className="mb-0 fw-bold text-white">Fullstack Dev</h5>
                                        <small className="text-secondary">Next.js, React, Python Basics</small>
                                    </div>
                                </div>
                            </div>

                            <div className="tech-card p-3 bg-opacity-10" style={{transform: 'rotate(2deg)', marginLeft: '20px'}}>
                                <div className="d-flex align-items-center gap-3">
                                    <div className="bg-warning bg-opacity-25 p-3 rounded text-warning">
                                        <i className="bi bi-people-fill fs-4"></i>
                                    </div>
                                    <div>
                                        <h5 className="mb-0 fw-bold text-white">Teamwork</h5>
                                        <small className="text-secondary">Active in BEM FTI Organization</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default HeroSection;