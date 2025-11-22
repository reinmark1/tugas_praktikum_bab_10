"use client";
import React from "react";
import Image from "next/image";

// Components
import Navbar from "../components/navbar";
import HeroSection from "../components/herosection";
import WorkSection from "../components/worksection";
import ServiceSection from "../components/servicesection";
import ContactSection from "../components/contactsection";
import Footer from "../components/footer";

// Bootstrap
import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <section id="home">
            <HeroSection />
        </section>

        <section className="py-5" style={{position: 'relative'}}>
          <Container className="my-5">
            <Row className="align-items-center gy-5">
              <Col lg={6}>
                <div className="d-flex align-items-center mb-3">
                  <span className="bg-primary" style={{width: '40px', height: '2px', marginRight: '15px'}}></span>
                  <h6 className="text-primary text-uppercase letter-spacing-2 mb-0 fw-bold">
                    Profil Singkat
                  </h6>
                </div>
                
                <h2 className="display-5 fw-bold text-white mb-4">
                  Tech Enthusiast & <br />
                  <span className="text-gradient">Student Leader</span>
                </h2>
                
                <p className="text-secondary mb-4 lh-lg" style={{fontSize: '1.1rem'}}>
                  Saya <b>Rein Mark</b>, mahasiswa Semester 3 Teknik Informatika Untar. 
                  <br/><br/>
                  Fokus utama saya saat ini adalah mengembangkan keahlian di bidang <b>IT</b> melalui berbagai proyek kreatif. Selain teknis, saya juga aktif menempa diri di Organisasi untuk melatih kepemimpinan, komunikasi, dan manajemen tim yang solid.
                </p>

                <div className="d-flex gap-4 mb-5 border-top border-secondary border-opacity-25 pt-4">
                  <div>
                    <h2 className="fw-bold text-white mb-0 display-6">3rd</h2>
                    <small className="text-secondary text-uppercase fw-bold" style={{fontSize: '0.75rem'}}>Semester</small>
                  </div>
                  <div className="border-start border-secondary border-opacity-25 mx-2"></div>
                  <div>
                    <h2 className="fw-bold text-white mb-0 display-6">Web</h2>
                    <small className="text-secondary text-uppercase fw-bold" style={{fontSize: '0.75rem'}}>Development</small>
                  </div>
                  <div className="border-start border-secondary border-opacity-25 mx-2"></div>
                  <div>
                    <h2 className="fw-bold text-white mb-0 display-6">Active</h2>
                    <small className="text-secondary text-uppercase fw-bold" style={{fontSize: '0.75rem'}}>Organization</small>
                  </div>
                </div>

                <Button variant="outline-light" className="rounded-pill px-4 py-2">
                  Lihat Proyek Saya <i className="bi bi-code-square ms-2"></i>
                </Button>
              </Col>

              <Col lg={6}>
                <div className="position-relative ps-lg-5">
                  <div className="p-2 border border-secondary border-opacity-25 rounded-4 bg-dark position-relative z-1">
                      <Image 
                          src="/images/profile1.jpg" 
                          alt="Rein Mark Profile" 
                          width={600} 
                          height={400} 
                          className="img-fluid rounded-3"
                          style={{ filter: 'brightness(0.95) contrast(1.05)' }}
                      />
                  </div>
                  
                  <div style={{
                      position: 'absolute', top: '30px', right: '-20px', bottom: '-30px', left: '60px',
                      background: 'var(--card-border)', borderRadius: '20px', zIndex: 0
                  }}></div>

                  <div className="position-absolute bottom-0 start-0 translate-middle-y bg-dark border border-secondary p-3 rounded-3 shadow-lg d-flex align-items-center gap-3 z-2" style={{maxWidth: '280px', marginLeft: '30px'}}>
                      <div className="bg-primary bg-opacity-25 rounded-circle p-2 d-flex justify-content-center align-items-center" style={{width: '45px', height: '45px'}}>
                          <i className="bi bi-laptop text-primary fs-5"></i>
                      </div>
                      <div>
                          <h6 className="text-white mb-0 fw-bold">IT Student</h6>
                          <div className="d-flex align-items-center gap-2">
                            <span className="badge bg-success rounded-circle p-1" style={{width: '8px', height: '8px'}}></span>
                            <small className="text-secondary" style={{fontSize: '12px'}}>+ Org Experience</small>
                          </div>
                      </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section id="work" className="bg-dark">
          <WorkSection />
        </section>

        <section id="services">
          <ServiceSection />
        </section>

        <section id="contact">
          <ContactSection />
        </section>

        <Footer />
      </main>
    </div>
  );
}