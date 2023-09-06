import React from 'react'
import { Container,Row, Col } from 'reactstrap'
import 'remixicon/fonts/remixicon.css'
import './services.css'

const serviceData = [
    {
        icon: 'ri-code-line',
        title: 'Web Design',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, saepe.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, saepe.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, saepe.'
    },
    {
        icon: 'ri-code-s-slash-line',
        title: 'Web Development',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, saepe.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, saepe.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, saepe.'
    },
    {
        icon: 'ri-qr-code-line',
        title: 'App development',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, saepe.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, saepe.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, saepe.'
    },
    {
        icon: 'ri-search-line',
        title: 'SEO Expert',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, saepe.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, saepe.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, saepe.'
    },
    {
        icon: 'ri-landscape-line',
        title: 'Graphic Design',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, saepe.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, saepe.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, saepe.'
    },
    {
        icon: 'ri-gallery-line',
        title: 'Photography',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, saepe.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, saepe.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, saepe.'
    }
    
]

const Services = () => {
  return <section id="services">
    <Container>
        <Row>
            <Col lg="12"className="services_top mb-5">
                <h6>Features</h6>
                <h2>What services I provide</h2>
            </Col>

            {
                serviceData.map((service, index) => (
                    <Col lg="4" md="6" sm="6" key={index} className="mb-5">
                <div className="single_service">
                    <span className="service_icon">
                        <i class={service.icon}></i>
                    </span>

                    <h4>{service.title}</h4>
                    <p>{service.description}</p>
                </div>
            </Col>
                ))

            }

            
        </Row>
    </Container>
  </section>
}

export default Services