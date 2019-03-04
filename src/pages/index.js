import { Link } from 'gatsby'
import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Layout from '../components/layout'
import SEO from '../components/seo'
import IndexCarousel from '../components/carousel'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`fragment-based drug discovery`]} />
    <h1>Welcome to the Fragment Benchmark</h1>
    <Row>
      <Col xs={12}>
	<p>The Fragment Benchmark is a resource for fragment-based drug discovery. This benchmark dataset contains <strong>62</strong> cases of proteins with conserved binding of structurally similar fragments and drug-like ligands. Users can browse entries by protein or fragment data, or download data and visualizations of each set of structures for individual or all entries.</p>
	<p>As an example, the slideshow below demonstrates how the fragment/ligands for one entry (<Link to='/entry/1LQ_P11142/'><strong>1LQ_P11142</strong></Link>) bind in a consistent orientation to the protein. Use the left and right arrows to navigate between each image, or click on the slideshow to pause it.</p>
      </Col>
    </Row>
    <IndexCarousel />
    <Row>
      <Col xs={12}>
	<p>To learn more about the benchmark, visit the <Link to='/about/'>about</Link> page.</p>
      </Col>
    </Row>
  </Layout>
)

export default IndexPage
