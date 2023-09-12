import React from 'react'
import './contact.css'
import { Container, Row, Col } from 'reactstrap'
import Form from '../form/Form'

const Contact = () => {
    return <section id='contact'>
        <Container>
            <Row>
                <Col lg="12" className="mb-5">
                    <h2>Get in touch</h2>
                </Col>

                <Col lg="6" md="6">
                    <div className="contact_info-container d-flex align-items-center gap-5">
                        <div className="single_info-box w-50">
                            <h6>Address</h6>
                            <p>Satsang Kalyan Nagar, Ambajogai Dist. Beed</p>
                        </div>

                        <div className="single_info-box w-50">
                            <h6>Phone</h6>
                            <p>+91 9579434590</p>
                        </div>
                    </div>

                    <div className="contact_info-container d-flex align-items-center gap-5">
                        <div className="single_info-box w-50">
                            <h6>Email</h6>
                            <p>kulkarnivaishnavi499@gmail.com</p>
                        </div>

                        <div className="single_info-box w-50">
                            <h6>Location</h6>
                            <p>Maharashtra, India</p>
                        </div>
                    </div>
                </Col>

                <Col lg="6" md="6">
                    <Form />
                </Col>
            </Row>
        </Container>
    </section>
}

export default Contact