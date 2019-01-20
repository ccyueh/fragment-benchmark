import React from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import Layout from '../components/layout'
import SEO from '../components/seo'

const columns = [{
  Header: 'Entry Name',
  accessor: 'Entry Name',
  Cell: props => <a href={'/entry/' + props.value}>{props.value}</a>,
}, {
  Header: 'Fragment',
  accessor: 'Fragment ID',
  Cell: props => <a href={'https://www.rcsb.org/ligand/' + props.value}>{props.value}</a>,
}, {
  Header: 'Fragment Name',
  accessor: 'Fragment Name',
}, {
  Header: 'Fragment SMILES',
  accessor: 'Fragment SMILES',
}, {
  Header: 'UniProt',
  accessor: 'UniProt Accession',
  Cell: props => <a href={'https://www.uniprot.org/uniprot/' + props.value}>{props.value}</a>,
}, {
  Header: 'UniProt Name',
  accessor: 'UniProt Name',
}, {
  Header: '# Ligands',
  accessor: 'Number of Ligands',
}]

const data = require('../data/browse.json')

const Browse = () => (
  <Layout>
    <SEO title='Browse' />
    <h1>Browse Entries</h1>
    <ReactTable
      data={data}
      columns={columns}
      minRows={0}
      resizable={false}
      getTdProps={() => ({style: {textAlign: 'center'}})}
      className='-striped -highlight'
    />
    <p />
  </Layout>
)

export default Browse
