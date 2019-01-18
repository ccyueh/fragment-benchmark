import PropTypes from 'prop-types'
import React from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import BindData from './bind-data'

const columns = [{
        Header: 'PDB ID',
        accessor: 'pdb',
        Cell: props => <a href={'https://www.rcsb.org/structure/' + props.value}>{props.value}</a>,
	width: 60
}, {
        Header: 'Chain',
        accessor: 'chain',
	width: 50
}, {
        Header: 'Ligand',
        accessor: 'lig',
        Cell: props => <a href={'https://www.rcsb.org/ligand/' + props.value}>{props.value}</a>,
	width: 60
}, {
        Header: 'Residue ID',
        accessor: 'resi',
	width: 90
}, {
        Header: 'Molecular Weight',
        accessor: 'mw',
	width: 140
}, {
        Header: 'Binding Affinity',
        accessor: 'bind',
	Cell: ({ row }) => {
	  return(<BindData pdb={
	    row.pdb} bind={
	    row.bind} />)
	},
}]

const StructTable = ({ data }) => (
  <ReactTable
    data={data}
    columns={columns}
    showPagination={false}
    minRows={0}
    resizable={false}
    getTdProps={() => ({style: {textAlign: 'center'}})}
    className='-striped -highlight'
  />
)

StructTable.propTypes = {
  data: PropTypes.object,
}

StructTable.defaultProps = {
  data: {},
}

export default StructTable
