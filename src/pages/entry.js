import React from 'react'
import { Grid, Row } from 'react-bootstrap'
import Layout from '../components/layout'
import SEO from '../components/seo'
import StructTable from '../components/structure'
import Summary from '../components/summary'

const sum = require('../data/summary.json');
const data = require('../data/test.json');

const Entry = () => (
  <Layout>
    <SEO title='Entry' />
    <Grid>
      <Row>
        <h1>{sum[0].fname}_{sum[0].uid}</h1>
        <hr />
        <h3>Summary</h3>
      </Row>
      <Summary data={sum[0]} />
      <Row>
        <hr />
        <h3>Structural Details</h3>
	<StructTable data={data} />
        <p />
        <hr />
	<h3>Substructure Relationships</h3>
      </Row>
      <Row>
      </Row>
      <Row>
	<hr />
      </Row>
    </Grid>
  </Layout>
)

export default Entry
