import React, {useRef, useEffect} from 'react'
import './hero-section.css'
import { Container, Row, Col } from 'reactstrap'
import {init} from 'ityped'
import heroImg from '../../assets/images/vaishnavik.jpeg'
import { ResumePDF } from '../../constant'

const HeroSection = () => {
    const textRef = useRef();
    useEffect(() => {
        init(textRef.current, {
            backDelay: 1500,
            showCursor: true,
            strings : [
                'Vaishnavi   Kulkarni', 
                'Web  Developer', 
                'Open  Source  Enthusiast', 
            ]
        })
    }, [])
  return <section className='hero_section' id='home'>
    <Container>
        <Row>
            <Col lg='6' md='6'>
            <div className="hero_content">
                    <p className='mb-3'>Welcome, to my world!!</p>
                    {/* <h5 className='mb-4'>Hii</h5> */}
                    <h2 className='hero_title mb-4'>I'm  &nbsp;<span ref={textRef}></span></h2>
                    <p>I like to explore various technologies and contribute to different open source technologies.
                        I want to learn and grow as a developer. I want to work on different projects and learn new things.
                    </p>
                    <div className="mt-5 hero_btns d-flex align-items-center gap-4">
                        <button className="btn hire_btn"><a href="!#">Hire Me</a></button>
                        {/* download resume button */}
                        <a href={ResumePDF.resume} className="btn" target='_blank'>
                        Download Resume
                        </a>
                    </div>
                </div>
            </Col>

            <Col lg='6' md='6'>
                <div className="hero_img">
                    <img src={heroImg} alt="" className='w-100' />
                    </div>
            </Col>    
        </Row>
    </Container>
  </section>
}

export default HeroSection