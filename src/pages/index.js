import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import IndexCarousel from '../components/carousel'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`fragment-based drug discovery`]} />
    <h1>Welcome to the Fragment Benchmark</h1>
    <IndexCarousel />
    <p>This is the Fragment Benchmark, a resource for fragment-based drug discovery. The benchmark set contains <strong>62</strong> cases of proteins with conserved fragment and drug-like ligand binding.</p>
    <p>To learn more about the benchmark, go to the <a href="/about/">about</a> page.</p>
  </Layout>
)

export default IndexPage
