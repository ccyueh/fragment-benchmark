import React from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import Layout from '../components/layout'
import SEO from '../components/seo'

const data = require('../data/browse.json')

const getColumnWidth = (rows, accessor, headerText) => {
  const maxWidth = 250
  const magicSpacing = 10
  const cellLength = Math.max(
    ...rows.map(row => (`${row[accessor]}` || '').length),
    headerText.length,
  )
  return Math.min(maxWidth, cellLength * magicSpacing)
}

const columns = [{
  Header: 'Entry Name',
  accessor: 'Entry Name',
  Cell: props => <a href={'/entry/' + props.value}>{props.value}</a>,
  width: getColumnWidth(data, 'Entry Name', 'Entry Name'),
}, {
  Header: 'Fragment',
  accessor: 'Fragment ID',
  Cell: props => <a href={'https://www.rcsb.org/ligand/' + props.value}>{props.value}</a>,
  width: getColumnWidth(data, 'Fragment ID', 'Fragment'),
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
  width: getColumnWidth(data, 'UniProt Accession', 'UniProt'),
}, {
  Header: 'UniProt Name',
  accessor: 'UniProt Name',
}, {
  Header: 'Ligands',
  accessor: 'Number of Ligands',
  width: getColumnWidth(data, 'Number of Ligands', '# Ligands'),
}]

const Browse = () => (
  <Layout>
    <SEO title='Browse' />
    <h1>Browse Entries</h1>
    <p>
      All entries in the benchmark are listed in the table below. Click on a column header to sort the table by that column or resize it. Use the dropdown menu at the bottom of the table to adjust the number of entries displayed.
    </p>
    <ReactTable
      data={data}
      columns={columns}
      minRows={0}
      getTdProps={() => ({style: {textAlign: 'center'}})}
      className='-striped -highlight'
    />
    <p />
  </Layout>
)

export default Browse
