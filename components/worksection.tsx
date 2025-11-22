'use client'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col, Badge } from 'react-bootstrap';

function WorkSection() {
    return (
        <Container className="py-5">
            <Row className='mb-5'>
                <Col md={12} className="text-center">
                    <h2 className="text-white display-5 fw-bold">Featured <span className="text-gradient">Projects</span></h2>
                    <p className="text-secondary">Portofolio teknis dan kontribusi kegiatan mahasiswa</p>
                </Col>
            </Row>
            <Row>
                <Col md={4} className="mb-4">
                    <Card className="glass-card h-100 border-0 bg-transparent text-white">
                        <div style={{height: '200px', overflow: 'hidden', borderRadius: '15px 15px 0 0'}}>
                            <Card.Img variant="top" src="/images/image-44.jpg" className="h-100 w-100 object-fit-cover" />
                        </div>
                        <Card.Body>
                            <div className="mb-2">
                                <Badge bg="info" className="me-1">Python</Badge>
                                <Badge bg="primary" className="me-1">Socket</Badge>
                            </div>
                            <Card.Title className="fw-bold">WeMail App</Card.Title>
                            <Card.Text className="text-white opacity-75 small">
                                Aplikasi pengiriman pesan terdistribusi menggunakan Python AsyncIO. Proyek ini mengajarkan saya tentang arsitektur client-server.
                            </Card.Text>
                            <Button variant="outline-light" className="w-100 rounded-pill mt-3 btn-sm">Lihat Code</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4} className="mb-4">
                    <Card className="glass-card h-100 border-0 bg-transparent text-white">
                        <div style={{height: '200px', overflow: 'hidden', borderRadius: '15px 15px 0 0'}}>
                            <Card.Img variant="top" src="/images/banner_01.JPG" className="h-100 w-100 object-fit-cover" />
                        </div>
                        <Card.Body>
                            <div className="mb-2">
                                <Badge bg="secondary" className="me-1">Archive</Badge>
                                <Badge bg="light" text="dark" className="me-1">Full Stack</Badge>
                            </div>
                            <Card.Title className="fw-bold">Project Repository</Card.Title>
                            <Card.Text className="text-white opacity-75 small">
                                Akses ke seluruh dokumentasi proyek perkuliahan, tugas praktikum, dan eksperimen coding yang pernah saya kerjakan secara lengkap.
                            </Card.Text>
                            <Button variant="outline-light" className="w-100 rounded-pill mt-3 btn-sm">Lihat Semua Project</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4} className="mb-4">
                    <Card className="glass-card h-100 border-0 bg-transparent text-white">
                        <div style={{height: '200px', overflow: 'hidden', borderRadius: '15px 15px 0 0'}}>
                            <Card.Img variant="top" src="/images/banner_02.JPG" className="h-100 w-100 object-fit-cover" />
                        </div>
                        <Card.Body>
                            <div className="mb-2">
                                <Badge bg="success" className="me-1">BEM FTI</Badge>
                                <Badge bg="light" text="dark" className="me-1">Event</Badge>
                            </div>
                            <Card.Title className="fw-bold">Campus Event Team</Card.Title>
                            <Card.Text className="text-white opacity-75 small">
                                Berpartisipasi aktif dalam kepanitiaan acara kampus. Melatih kemampuan manajemen waktu dan komunikasi antar divisi.
                            </Card.Text>
                            <Button variant="outline-light" className="w-100 rounded-pill mt-3 btn-sm">Lihat Dokumentasi</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default WorkSection;