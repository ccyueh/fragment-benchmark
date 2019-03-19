import { Link, withPrefix } from 'gatsby'
import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import Layout from '../components/layout'
import SEO from '../components/seo'
import IndexCarousel from '../components/carousel'

const ExampleButton = () => (
	<span>
	  <Button href='https://www.bindingdb.org/' bsStyle='primary' bsSize='xsmall'>
	    BINDINGDB
	  </Button>{', '}  
	  <Button href='http://www.pdbbind.org.cn/' bsStyle='success' bsSize='xsmall'>
	    PDBBIND
	  </Button>{', or '}    
	  <Button href='http://www.bindingmoad.org/' bsStyle='info' bsSize='xsmall'>
	    BINDINGMOAD
	  </Button>
	</span>
)
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
    <h2>How to use the Fragment Benchmark</h2>
    <Row>
      <Col xs={12}>
	<p>Each entry in the Fragment Benchmark contains structures of the same protein bound to a small, fragment-like molecule and larger ligands that are substructures of the fragment. Below is a guide to the sections in each entry page (using entry <Link to='/entry/2AE_P07900/'><strong>2AE_P07900</strong></Link> as an example).</p>
	<p>The <strong>Summary</strong> section contains details about the entry fragment and protein.</p>
	<p><img src={withPrefix('/images/about_summary.png')} alt=''/></p>
	<p>The <strong>Structural Details</strong> section lists the structures that contain the fragment/ligands, with details about each. When available, binding affinity for each fragment/ligand is also included, and is color-coded by source: <ExampleButton />.</p>
	<p><img src={withPrefix('/images/about_structures.png')} alt=''/></p>
	<p><strong>Substructure Relationships</strong> shows which molecules are substructures of each other. All ligands are substructures of the fragment, but some ligands may be substructures of other ligands as well. Here, SNX, 2LC, 06J, SD1, 06T, 99B, and 05S are all substructures of the fragment, 2AE, but 06H is also a substructure of 05S.</p>
	<p><img src={withPrefix('/images/about_substructures.png')} alt=''/></p>
	<p><strong>Unliganded Structures</strong> lists structures with at least 95% sequence similarity to the entry protein that do not contain any ligands in the fragment pocket. Some entries may not have any unliganded structures available.</p>
	<p><img src={withPrefix('/images/about_apo.png')} alt=''/></p>
      </Col>
    </Row>
  </Layout>
)

export default AboutPage
