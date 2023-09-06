import React from 'react'
import './testimonial.css'
import Slider from "react-slick";
import { Container, Row, Col } from 'reactstrap'

const Testimonial = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed: 3000,
        swipeToSlide: true
        };
  return <section>
    <Container>
        <Row>
            <Col lg="12" className='mb-5 text-center'>
                <h2>What my client says?</h2>
                </Col>

                <Col lg="6" className='m-auto'>
                    <Slider {...settings}>
                        <div>
                            <div className="single_testimonial">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam sequi molestiae maxime optio quasi id temporibus totam? Veniam, dicta asperiores! Tempore aliquam repellendus itaque dicta nemo dolorem quod sint tenetur?
                                </p>
                                <h6>Matin Cooper</h6>
                                <p className='title'>Web developer</p>
                            </div>
                        </div>

                        <div>
                            <div className="single_testimonial">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam sequi molestiae maxime optio quasi id temporibus totam? Veniam, dicta asperiores! Tempore aliquam repellendus itaque dicta nemo dolorem quod sint tenetur?
                                </p>
                                <h6>Matin Cooper</h6>
                                <p className='title'>Web developer</p>
                            </div>
                        </div>

                        <div>
                            <div className="single_testimonial">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam sequi molestiae maxime optio quasi id temporibus totam? Veniam, dicta asperiores! Tempore aliquam repellendus itaque dicta nemo dolorem quod sint tenetur?
                                </p>
                                <h6>Matin Cooper</h6>
                                <p className='title'>Web developer</p>
                            </div>
                        </div>
                    </Slider>
                    </Col>
            </Row>
        </Container>
  </section>
}

export default Testimonial