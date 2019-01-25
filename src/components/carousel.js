import React from 'react'
import { Row, Col, Carousel } from 'react-bootstrap'

const images = ['index_1','index_2','index_3','index_4']
const IndexCarousel = () => (
  <Row>
    <Col xs={12}>
      <center>
	<div style={{ display: `flex`, width: `96vmax`, height: `50vmin` }}>
          <Carousel>
	    {images.map(image => {
	      return (
	        <Carousel.Item>
                  <img alt='' src={require('../images/' + image + '.png')} />
                  <Carousel.Caption>
                    <h4>{image}</h4>
                  </Carousel.Caption>
                </Carousel.Item>)}
	    )}
          </Carousel>
	</div>
      </center>
    </Col>
  </Row>
)

export default IndexCarousel
