import React, {useState} from 'react'
import './about.css'
import { Container, Row, Col } from 'reactstrap'
import 'remixicon/fonts/remixicon.css'
import aboutImg from '../../assets/images/vaishnavik.jpeg'
import Education from './Education'
import Skills from './Skills'
import Awards from './Awards'

const About = () => {

  const [aboutFilter, setAboutFilter] = useState('ABOUT');
  return <section id='about'>
    <Container>
        <Row>
          <Col lg='12' className='mb-5'><h2>About Me</h2></Col>
            <Col lg='4' md='3'>
                <div className="about_btns d-flex flex-column align-items-center">
                  <button className={`about_btn ${aboutFilter==='ABOUT'?'about_btn-active':''}`}
                  onClick={()=>setAboutFilter('ABOUT')}
                  >
                  About Me
                    </button>
                  <button className={`about_btn ${aboutFilter==='EDUCATION'?'about_btn-active':''}`}
                  onClick={()=>setAboutFilter('EDUCATION')}
                  >
                    Education
                    </button>
                  <button className={`about_btn ${aboutFilter==='SKILLS'?'about_btn-active':''}`}
                  onClick={()=>setAboutFilter('SKILLS')}
                  >
                    Skills
                    </button>

                  <button className={`about_btn ${aboutFilter==='AWARDS'?'about_btn-active':''}`}
                  onClick={()=>setAboutFilter('AWARDS')}
                  >
                    Awards
                    </button>
                  </div>
            </Col>

            <Col lg='8' md='9'>
              
              {
                aboutFilter === 'ABOUT' && <div className="about_content_wrapper d-flex gap-5">
                <div className="about_img w-25">
                  <img src={aboutImg} alt="" className='w-100' />
                </div>
                <div className="about_content w-75">
                  <h2>Hi, I'm Vaishnavi Kulkarni</h2>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat velit veniam dolore at nisi ratione temporibus laudantium rerum dolorum necessitatibus.Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                  <div className="social_links">
                    <h6 className='mb-4'>Connect with me:</h6>
                    <span><a href='#'><i class="ri-facebook-line"></i></a></span>
                    <span><a href='#'><i class="ri-youtube-line"></i></a></span>
                    <span><a href='#'><i class="ri-github-line"></i></a></span>
                    <span><a href='#'><i class="ri-instagram-line"></i></a></span>
                    <span><a href='#'><i class="ri-linkedin-line"></i></a></span>
                  </div>
                </div>
            </div>
              }

              {
                aboutFilter === 'EDUCATION' && <Education />
              }

              {
                aboutFilter === 'SKILLS' && <Skills />
              }

              {
                aboutFilter === 'AWARDS' && <Awards/>
              }
            </Col>

        </Row>

      </Container>
    </section>
}

export default About