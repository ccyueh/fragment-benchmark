import React from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'
import Layout from '../components/layout'
import SEO from '../components/seo'

const fileText = {
  'tables': 'Tables',
  'structures': 'Structures',
}

const Download = () => (
  <Layout>
    <SEO title='Download' />
    <h1>Download Entries</h1>
      <p>Download benchmark files by using the links below.</p>
	<ButtonGroup justified>
	  {Object.keys(fileText).map(dltype => {
          return (
            <Button bsStyle='link' download
            href={'../downloads/' + dltype + '.zip'}>
            {fileText[dltype]}</Button>)
	  })}
 	</ButtonGroup>
      <p />
      <p>"Tables" contains JSON files with the structural information displayed on each entry page, and "Structures" contains the PDB structures associated with the fragment/ligand(s) for each entry. When available, <a href='https://ftmap.bu.edu'>FTMap</a> results for two of the unliganded structures--one with the best resolution and one with the best mapping results--are also included in the structures file.</p>
      <p>Structures are also available for the <a href='https://dx.doi.org/10.1021/acs.jmedchem.7b00366'>Astex set</a>.</p>
      <Button bsStyle='link' block download href='../downloads/astex.zip'>
	Structures (Astex set)
      </Button>
  </Layout>
)

export default Download
