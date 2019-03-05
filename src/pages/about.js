import { Link } from 'gatsby'
import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Layout from '../components/layout'
import SEO from '../components/seo'
import IndexCarousel from '../components/carousel'

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <h1>About the Fragment Benchmark</h1>
    <Row>
      <Col xs={12}>
	<p>As an example, the slideshow below demonstrates how the fragment/ligands for one entry (<Link to='/entry/1LQ_P11142/'><strong>1LQ_P11142</strong></Link>) bind in a consistent orientation to the protein. Use the left and right arrows to navigate between each image, or click on the slideshow to pause it.</p>
      </Col>
    </Row>
    <IndexCarousel />
  </Layout>
)

export default AboutPage
