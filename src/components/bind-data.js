import PropTypes from 'prop-types'
import React from 'react'
import { Button, ButtonToolbar } from 'react-bootstrap'

const BindUrl = {
  'BINDINGMOAD': 'http://www.bindingmoad.org/pdbrecords/index/',
  'PDBBIND': 'http://www.pdbbind-cn.org/quickpdb.asp?quickpdb=',
  'BINDINGDB': 'http://www.bindingdb.org/jsp/dbsearch/PrimarySearch_pdbids.jsp?pdbids_submit=Search&pdbids='
}

const ButtonColor = {
  'BINDINGMOAD': 'primary',
  'PDBBIND': 'success',
  'BINDINGDB': 'info'
}

const BindData = ({ pdb, bind }) => (
  <ButtonToolbar>
  {bind.map((a) => {
    if (a[0] === '-') {
      return <span>-</span>
    }
    else {
      var url = BindUrl[a[0]];
      var color = ButtonColor[a[0]];
      return (
	<Button href={url+pdb} bsStyle={color} bsSize='xsmall'>{a[1]}</Button>)
    }
  })}
  </ButtonToolbar>
)

BindData.propTypes = {
  pdb: PropTypes.string,
  bind: PropTypes.array,
}

BindData.defaultProps = {
  pdb: ``,
  bind: [],
}

export default BindData
