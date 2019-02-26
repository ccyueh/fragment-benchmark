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
      </Col>
    </Row>
    <IndexCarousel />
    <Row>
      <Col xs={12}>
	<p>To learn more about this benchmark, visit the <a href="/about/">about</a> page.</p>
      </Col>
    </Row>
  </Layout>
)

export default IndexPage
