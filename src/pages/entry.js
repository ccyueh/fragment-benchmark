import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
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

const sum = require('../data/summary.json')[0];
const data = require('../data/test.json');

const Entry = () => (
  <Layout>
    <SEO title="Page three" />
    <h1>{sum.fname}_{sum.uid}</h1>
    <hr />
    <h3>Summary</h3>
    <Grid>
	<Row className='show-grid'>
	<Col xs={4}><img src='https://cdn.rcsb.org/etl/ligand/img/Z/ZWZ/ZWZ-270.png' alt=''/></Col>
	<Col xs={2}><div css={{textAlign: `right`}}>{Object.keys(sum).map((a) => <span><strong>{a}</strong><br /></span>)}</div></Col>
	<Col xs={6}>{Object.values(sum).map((a) => <span>{a}<br /></span>)}</Col>
	</Row>
    </Grid>
  <hr />
  <h3>Structural Details</h3>
  <ReactTable
    data={data}
    columns={columns}
    showPagination={false}
    minRows={0}
    resizable={false}
    className='-striped -highlight'
  />
  <hr />
  </Layout>
)

export default Entry
