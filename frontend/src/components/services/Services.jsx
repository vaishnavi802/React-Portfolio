import React from 'react'
import { Container,Row, Col } from 'reactstrap'
import 'remixicon/fonts/remixicon.css'
import './services.css'

const serviceData = [
    {
        icon: 'ri-code-line',
        title: 'Web Based WCE Event Manager',
        description: 'This web-app effectively manage and schedule college events, club events in the college. This web-app prevents the clash of events and also provides a platform for students to see the events at one place.'
    },
    {
        icon: 'ri-code-s-slash-line',
        title: 'EduTech: An Education Verification Web Service',
        description: 'Developed an automated WebApp to verify documents and provide certificate. This web-app is used to verify the documents of the students and provide them with the certificate.'
    },
    {
        icon: 'ri-code-line',
        title: 'Portfolio Website',
        description: 'Developed a portfolio website using ReactJS and Bootstrap. Basically, this website is used to showcase my skills and projects. This website is hosted on Netlify. '
    }
    // {
    //     icon: 'ri-search-line',
    //     title: 'SEO Expert',
    //     description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, saepe.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, saepe.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, saepe.'
    // },
    // {
    //     icon: 'ri-landscape-line',
    //     title: 'Graphic Design',
    //     description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, saepe.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, saepe.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, saepe.'
    // },
    // {
    //     icon: 'ri-gallery-line',
    //     title: 'Photography',
    //     description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, saepe.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, saepe.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, saepe.'
    // }
    
]

const Services = () => {
  return <section id="services">
    <Container>
        <Row>
            <Col lg="12"className="services_top mb-5">
                <h6>Features</h6>
                <h2>My Projects</h2>
            </Col>

            {
                serviceData.map((service, index) => (
                    <Col lg="4" md="6" sm="6" key={index} className="mb-5">
                <div className="single_service">
                    <span className="service_icon">
                        <i class={service.icon}></i>
                    </span>

                    <h4>{service.title}</h4>
                    <br />
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