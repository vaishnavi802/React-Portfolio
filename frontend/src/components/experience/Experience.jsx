import React from 'react'
import './experience.css'
import 'remixicon/fonts/remixicon.css'
import { Container, Row, Col } from 'reactstrap'


const developerExperienceData = [
    {
        year: '2022-23',
        title: 'Frontend Developer(intern)',
        description: 'Developed an Web application Performance Dashboard in Nice Systems, Pune.'
    },
    {
        year: '2022-23',
        title: 'Mentor at WLUG',
        description: 'Directs and guides the students of the college in the field of Open Source and Linux.'
    },
    {
        year: '2021-22',
        title: 'Main Club Service Director at WLUG',
        description: 'Organized sessions on Linux and opensource related topics and managed different events.'
    }
]

const Experience = () => {
  return <section id='experience'>
    <Container>
        <Row>
            <Col lg="12" className="mb-5">
                <h2>Experience</h2>
            </Col>

            <Col lg="6" md="6">
                <div className="single_experience-container">
                    {
                        developerExperienceData.map((experience, index) => (
                            <div className="single_experience">
                            <span className='experience_icon'> <i class="ri-briefcase-line"></i></span>
                            <h6>{experience.year}</h6>
                            <h4>{experience.title}</h4>
                            <p>{experience.description}</p>
                        </div>
                        ))
                    }
                </div>
            </Col>

            {/* <Col lg="6" md="6">
                <div className="single_experience-container">
                    {
                        developerExperienceData.map((experience, index) => (
                            <div className="single_experience">
                            <span className='experience_icon'> <i class="ri-briefcase-line"></i></span>
                            <h6>{experience.year}</h6>
                            <h4>{experience.title}</h4>
                            <p>{experience.description}</p>
                        </div>
                        ))
                    }
                </div>
            </Col> */}
        </Row>
    </Container>

  </section>
}

export default Experience