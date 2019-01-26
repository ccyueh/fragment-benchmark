import React from 'react'
import { Row, Col, Carousel } from 'react-bootstrap'
import styled from 'styled-components'

const CarouselWrapper = styled.div`
  .carousel-control.left,
  .carousel-control.right {
     background: none;
  }
  .carousel-control .glyphicon-chevron-left, 
  .carousel-control .icon-prev {
    margin-left: 20%;
  }
  .carousel-control .glyphicon-chevron-right, 
  .carousel-control .icon-next {
    margin-right: 20%;
  }
`
const images = ['index_4','index_3','index_2','index_1']
const captions = {
  'index_1': 'fragment',
  'index_2': 'fragment + ligand 1',
  'index_3': 'fragment + ligands 1-2',
  'index_4': 'fragment + ligands 1-3'
}
const IndexCarousel = () => (
  <Row>
    <Col xs={12}>
      <center>
	<CarouselWrapper>
          <Carousel slide={false}>
	    {images.map(image => {
	      return (
	        <Carousel.Item style={{ minHeight: `100%` }}>
                  <img alt='' src={require('../images/' + image + '.png')} />
                  <Carousel.Caption>
                    <h4>{captions[image]}</h4>
                  </Carousel.Caption>
                </Carousel.Item>)}
	    )}
	
          </Carousel>
	</CarouselWrapper>
      </center>
    </Col>
  </Row>
)

export default IndexCarousel
