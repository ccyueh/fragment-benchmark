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
	<p>This is the Fragment Benchmark, a resource for fragment-based drug discovery. The benchmark set contains <strong>62</strong> cases of proteins with conserved binding of structurally similar fragments and drug-like ligands.</p>
      </Col>
    </Row>
    <IndexCarousel />
    <Row>
      <Col xs={12}>
	<p>To learn more about the benchmark, visit the <a href="/about/">about</a> page.</p>
      </Col>
    </Row>
  </Layout>
)

export default IndexPage
