import React from 'react'
import './portfolio.css'
import { Container, Row, Col } from 'reactstrap'
import img01 from '../../assets/images/portfolio-01.jpg'
// import img02 from '../../assets/images/portfolio-02.jpg'
// import img03 from '../../assets/images/portfolio-03.jpg'
// import img04 from '../../assets/images/portfolio-04.jpg'


const Portfolio = () => {
  return <section>
    <Container>
      <Row>
        <Col lg="12" className='portfolio_top mb-5'>
          <h6>Explore my work and give a feedback</h6>
            <h2>Portfolio</h2>
          </Col>

          <Col lg="4" md="6" sm="6">
            <div className="porfolio_card">
              <div className="porfolio_img">
                <img src={img01} alt="" className="w-100" />
              </div>

              <div className="portfolio_content">
                <h5>React Landing page</h5>
                <a href='#'>View live demo</a>
              </div>
            </div>
            </Col>
      </Row>
    </Container>
  </section>
}

export default Portfolio