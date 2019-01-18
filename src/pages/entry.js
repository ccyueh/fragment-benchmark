import React from 'react'
import { Grid, Row } from 'react-bootstrap'
import Layout from '../components/layout'
import SEO from '../components/seo'
import StructTable from '../components/structure'
import Summary from '../components/summary'

const entry = 'ZWZ_Q9WYE2';
const entryData = require('../data/' + entry + '.json')
const sum = entryData['summary'];
const data = entryData['structures'];

const Entry = () => (
  <Layout>
    <SEO title={entry} />
    <Grid>
      <Row>
        <h1>{entry}</h1>
        <hr />
        <h3>Summary</h3>
      </Row>
      <Summary data={sum} />
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
