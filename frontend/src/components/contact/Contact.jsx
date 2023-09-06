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
                            <p>1234 Street Name, City, England</p>
                        </div>

                        <div className="single_info-box w-50">
                            <h6>Phone</h6>
                            <p>+123 456 7890</p>
                        </div>
                    </div>

                    <div className="contact_info-container d-flex align-items-center gap-5">
                        <div className="single_info-box w-50">
                            <h6>Email</h6>
                            <p>abc@gmail.com</p>
                        </div>

                        <div className="single_info-box w-50">
                            <h6>Location</h6>
                            <p>London, England</p>
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