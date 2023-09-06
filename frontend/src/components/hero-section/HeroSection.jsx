import React, {useRef, useEffect} from 'react'
import './hero-section.css'
import { Container, Row, Col } from 'reactstrap'
import {init} from 'ityped'
import heroImg from '../../assets/images/vaishnavik.jpeg'

const HeroSection = () => {
    const textRef = useRef();
    useEffect(() => {
        init(textRef.current, {
            backDelay: 1500,
            showCursor: true,
            strings : [
                'Vaishnavi Kulkarni', 
                'Web Developer', 
                'UI/UX Designer', 
                'Freelancer'
            ]
        })
    }, [])
  return <section className='hero_section' id='home'>
    <Container>
        <Row>
            <Col lg='6' md='6'>
            <div className="hero_content">
                    <p className='mb-3'>Welcome, to my world!!</p>
                    <h5 className='mb-4'>Hii</h5>
                    <h2 className='hero_title mb-4'>I'm <span ref={textRef}></span></h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam rem id labore rerum illum blanditiis ut totam adipisci dolores error.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, labore?</p>
                    <div className="mt-5 hero_btns d-flex align-items-center gap-4">
                        <button className="btn hire_btn"><a href="!#">Hire Me</a></button>
                        <button className="btn">Contact</button>
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