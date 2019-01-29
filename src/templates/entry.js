import { graphql } from 'gatsby'
import React from 'react'
import { Row } from 'react-bootstrap'

import Layout from '../components/layout'
import SEO from '../components/seo'
import StructTable from '../components/structure'
import Summary from '../components/summary'
import Substruct from '../components/substructure'
import DLTable from '../components/dl-table'

export default ({ data: { entry } }) => (
  <Layout>
    <SEO title={entry.entry_name} />
      <Row>
        <h1>{entry.entry_name}</h1>
        <hr />
        <h3>Summary</h3>
      </Row>
      <Summary image={entry.summary.Fragment_ID} 
	data={Object.assign(entry.summary, {'Fragment_ID': 
	  <a href={'https://www.rcsb.org/ligand/'+ entry.summary.Fragment_ID}>
	    {entry.summary.Fragment_ID}
	  </a>, 'UniProt_Accession': 
	  <a href={'https://www.uniprot.org/uniprot/' + 
	    entry.summary.UniProt_Accession}>
	      {entry.summary.UniProt_Accession}</a>})} 
      />
      <Row>
        <hr />
        <h3>Structural Details</h3>
	<StructTable data={entry.structures} />
        <p />
        <hr />
	<h3>Substructure Relationships</h3>
      </Row>
      <Substruct frag={entry.summary.Fragment_ID} data={entry.substructures} />
      <Row>
	<hr />
	<h3 id='dl'>Download</h3>
	<DLTable entry_name={entry.entry_name} />
	<p />
      </Row>
  </Layout>
)

export const query = graphql`
  query($id: String!) {
    entry: entriesJson(id: { eq: $id }) {
      entry_name
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
