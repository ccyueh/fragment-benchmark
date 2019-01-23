import { graphql } from 'gatsby'
import React from 'react'
import { Row } from 'react-bootstrap'

import Layout from '../components/layout'
import SEO from '../components/seo'
import StructTable from '../components/structure'
import Summary from '../components/summary'
import Substruct from '../components/substructure'

export default ({ data: { entry } }) => (
  <Layout>
    <SEO title={entry.summary.Fragment_ID + '_' + entry.summary.UniProt_Accession} />
      <Row>
        <h1>{entry.summary.Fragment_ID + '_' + entry.summary.UniProt_Accession}</h1>
        <hr />
        <h3>Summary</h3>
      </Row>
      <Summary image={require('../images/' + entry.summary.Fragment_ID + '.png')} data={entry.summary} />
      <Row>
        <hr />
        <h3>Structural Details</h3>
	<StructTable data={entry.structures} />
        <p />
        <hr />
	<h3>Substructure Relationships</h3>
      </Row>
      <Substruct frag={entry.summary.Fragment_ID} data={entry.substructures} />
  </Layout>
)

export const query = graphql`
  query($id: String!) {
    entry: entriesJson(id: { eq: $id }) {
      summary {
        Fragment_Name
        Fragment_ID
        Fragment_SMILES
        UniProt_Name
        UniProt_Accession
        Number_of_Ligands
      }
      structures {
        pdb
        chain
        lig
        resi
        mw
        bind {
	  source
	  affinity
	}
      }
      substructures
    }    
  }
`
