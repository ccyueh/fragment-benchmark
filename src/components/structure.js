import PropTypes from 'prop-types'
import React from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'

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

const StructTable = ({ data }) => (
  <ReactTable
    data={data}
    columns={columns}
    showPagination={false}
    minRows={0}
    resizable={false}
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
