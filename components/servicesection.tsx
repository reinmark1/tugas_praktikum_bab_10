"use client";
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';

function ServiceSection() {
    return (
        <Container className='my-5'>
            <Row className="justify-content-center">
                <Col md={12} className="text-center mb-5">
                    <h2 className="text-white fw-bold">Keahlian & Minat</h2>
                    <p className="text-secondary">Fokus pengembangan diri di dunia IT dan Organisasi</p>
                </Col>
                
                <Col md={4} className="mb-4 text-center py-3">
                    <div className="mb-3 d-inline-flex align-items-center justify-content-center bg-info bg-opacity-10 rounded-circle" style={{width: '90px', height: '90px'}}>
                        <i className="bi bi-window-fullscreen text-info fs-1"></i>
                    </div>
                    <h3 className="text-white h4 mt-3">Web Development</h3>
                    <p className="text-secondary px-3">
                        Membangun website yang interaktif, responsif, dan dinamis menggunakan teknologi modern seperti Next.js dan React.
                    </p>
                </Col>

                <Col md={4} className="mb-4 text-center py-3">
                    <div className="mb-3 d-inline-flex align-items-center justify-content-center bg-primary bg-opacity-10 rounded-circle" style={{width: '90px', height: '90px'}}>
                        <i className="bi bi-terminal-fill text-primary fs-1"></i>
                    </div>
                    <h3 className="text-white h4 mt-3">Software Logic</h3>
                    <p className="text-secondary px-3">
                        Mengeksplorasi logika pemrograman dan pengembangan aplikasi sederhana.
                    </p>
                </Col>

                <Col md={4} className="mb-4 text-center py-3">
                    <div className="mb-3 d-inline-flex align-items-center justify-content-center bg-success bg-opacity-10 rounded-circle" style={{width: '90px', height: '90px'}}>
                        <i className="bi bi-people-fill text-success fs-1"></i>
                    </div>
                    <h3 className="text-white h4 mt-3">Student Activity</h3>
                    <p className="text-secondary px-3">
                        Aktif berkontribusi dalam kegiatan organisasi kampus untuk melatih kemampuan komunikasi, kerjasama tim, dan kepemimpinan.
                    </p>
                </Col>
            </Row>
        </Container>
    )
}

export default ServiceSection;