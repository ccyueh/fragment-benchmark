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
	<p>The Fragment Benchmark was created to be a resource for studying fragment-based drug discovery (FBDD), which is the concept that drug-like ligands that bind to a target protein can be discovered by screening a variety of smaller fragment molecules first, then combining or growing these fragments into larger, more potent ligands.</p>
	<p>To create the benchmark, we identified proteins with structures that were bound to both a small, fragment-like molecule and a variety of larger ligands that were substructures of the fragment. As an example, the slideshow below demonstrates how the fragment/ligands for one entry (<Link to='/entry/1LQ_P11142/'><strong>1LQ_P11142</strong></Link>) bind in a consistent orientation to the protein, despite their different sizes. The entries in this benchmark thus provide examples of how small fragments can be grown into larger, drug-like ligands in a variety of proteins.</p>
      </Col>
    </Row>
    <IndexCarousel />
    <h3>How to use the Fragment Benchmark</h3>
    <Row>
      <Col xs={12}>
	<p>(Coming soon)</p>
      </Col>
    </Row>
  </Layout>
)

export default AboutPage
