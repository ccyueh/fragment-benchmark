import { graphql, StaticQuery } from 'gatsby'
import React from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import Layout from '../components/layout'
import SEO from '../components/seo'

const columns = [{
  Header: 'Entry Name',
  accessor: 'Entry_Name',
  Cell: props => <a href={'/entry/' + props.value}>{props.value}</a>,
  width: 130
}, {
  Header: 'Fragment',
  accessor: 'Fragment_ID',
  Cell: props => <a href={'https://www.rcsb.org/ligand/' + props.value}>{props.value}</a>,
  width: 80
}, {
  Header: 'Fragment Name',
  accessor: 'Fragment_Name',
}, {
  Header: 'Fragment SMILES',
  accessor: 'Fragment_SMILES',
}, {
  Header: 'UniProt',
  accessor: 'UniProt_Accession',
  Cell: props => <a href={'https://www.uniprot.org/uniprot/' + props.value}>{props.value}</a>,
  width: 100
}, {
  Header: 'UniProt Name',
  accessor: 'UniProt_Name',
}, {
  Header: 'Ligands',
  accessor: 'Number_of_Ligands',
  width: 70
}]

export default () => (
  <StaticQuery
    query={graphql`
      query {
	allSummary: allEntriesJson {
          edges {
            node {
	      entry_name
              summary {
                Fragment_Name
                Fragment_ID
                Fragment_SMILES
                UniProt_Name
                UniProt_Accession
                Number_of_Ligands
              }
            }
          }
        }
      }
    `}

    render={data => (
      <Layout>
        <SEO title='Browse' />
        <h1>Browse Entries</h1>
        <p>
          All entries in the benchmark are listed in the table below. Click on a column header to sort the table by that column or to resize the column. To adjust the number of entries displayed in the table, use the dropdown menu at the bottom.
        </p>
        <ReactTable
          data={data.allSummary.edges.map(a => Object.assign(a.node.summary, {Entry_Name: a.node.entry_name}))}
          columns={columns}
          minRows={0}
          getTdProps={() => ({style: {textAlign: 'center'}})}
          className='-striped -highlight'
        />
        <p />
      </Layout>
    )}
  />
)

