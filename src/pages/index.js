import { withPrefix, Link } from 'gatsby'
import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`fragment-based drug discovery`]} />
    <h1>Welcome to the Fragment Benchmark</h1>
    <Row>
      <Col xs={12}>
	<p>The Fragment Benchmark is a benchmark dataset that contains <strong>62</strong> cases of proteins with structures that demonstrate conserved binding of small fragment molecules and larger, structurally similar drug-like ligands. Users can browse entries by protein or fragment data, or download data and visualizations of each set of structures for individual or all entries.</p>
      </Col>
    </Row>
    <center>
      <img src={withPrefix('/images/index_flow.png')} alt=''/>
    </center>
    <Row>
      <Col xs={12}>
	<p>To learn more about the benchmark, visit the <Link to='/about/'>about</Link> page.</p>
      </Col>
    </Row>
  </Layout>
)

export default IndexPage
