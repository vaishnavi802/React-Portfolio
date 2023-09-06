import React from 'react'
import './experience.css'
import 'remixicon/fonts/remixicon.css'
import { Container, Row, Col } from 'reactstrap'


const developerExperienceData = [
    {
        year: '2020-21',
        title: 'Frontend Developer',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, ipsam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, ipsam.'
    },
    {
        year: '2020-21',
        title: 'Frontend Developer',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, ipsam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, ipsam.'
    },
    {
        year: '2020-21',
        title: 'Frontend Developer',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, ipsam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, ipsam.'
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
        </Row>
    </Container>

  </section>
}

export default Experience