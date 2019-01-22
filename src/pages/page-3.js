import React from 'react'
import { Link } from 'gatsby'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import Layout from '../components/layout'
import SEO from '../components/seo'

const columns = [{
	Header: 'PDB ID',
	accessor: 'pdb',
	Cell: props => <a href={'https://www.rcsb.org/structure/' + props.value}>{props.value}</a>
}, {
	Header: 'Chain ID',
	accessor: 'chain',
}, {
	Header: 'Ligand ID',
	accessor: 'lig',
	Cell: props => <a href={'https://www.rcsb.org/ligand/' + props.value}>{props.value}</a> 
}, {
	Header: 'Residue ID',
	accessor: 'resi',
}, {
	Header: 'Molecular Weight',
	accessor: 'mw',
	minWidth: 200
}, {
	Header: 'RMSD',
	accessor: 'rmsd',
}, {
	Header: 'Scaled RMSD',
	accessor: 'scaled'
}]

const data2 = require('../data/test.json');

const ThirdPage = () => (
  <Layout>
    <SEO title="Page three" />
    <h1>Hi from the third page</h1>
    <p>Welcome to page 3</p>
    <Link to="/">Go back to the homepage</Link>

  <ReactTable
    //data={data.allTestJson.edges.map(a => a.node)}
    data={data2}
    columns={columns}
    showPagination={false}
    minRows={0}
    resizable={false}
  />
  <center><div style={{height: `400px`, width: `400px`}} class='viewer_3Dmoljs' data-href='https://files.rcsb.org/view/4hhb.pdb' data-backgroundcolor='0xffffff' data-style='cartoon' data-select2='hetflag:true' data-style2='stick'></div></center>
  </Layout>
)

export default ThirdPage
