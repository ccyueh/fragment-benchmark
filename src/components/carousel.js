import React from 'react'
import { Row, Col, Carousel } from 'react-bootstrap'

const images = ['ZWZ','ZXZ','1SA']
const IndexCarousel = () => (
  <Row>
    <Col xs={12}>
      <Carousel>
	{images.map(image => {
	  return (
	    <Carousel.Item>
              <img width={300} height={300} alt=''
                src={require('../images/' + image + '.png')} />
              <Carousel.Caption>
                <h4>{image}</h4>
              </Carousel.Caption>
           </Carousel.Item>)}
	)}
      </Carousel>
    </Col>
  </Row>
)

export default IndexCarousel
