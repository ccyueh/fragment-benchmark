import { withPrefix } from 'gatsby'
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
const images = ['index_1','index_2','index_3','index_4']
const captions = {
  'index_1': '1LQ (fragment)',
  'index_2': '1LQ (fragment) + 5P7 (ligand 1)',
  'index_3': '1LQ (fragment) + 5P7 + UX0 (ligands 1-2)',
  'index_4': '1LQ (fragment) + 5P7 + UX0 + KC7 (ligands 1-3)'
}
const IndexCarousel = () => (
  <Row>
    <Col xs={12}>
      <center>
	<CarouselWrapper>
          <Carousel interval={2500}>
	    {images.map(image => {
	      return (
	        <Carousel.Item style={{ minHeight: `100%` }}>
                  <img alt='' src={withPrefix('/images/' + image + '.png')} />
                  <Carousel.Caption style={{ background: `rgba(0,0,0,0.35)` }}>
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
