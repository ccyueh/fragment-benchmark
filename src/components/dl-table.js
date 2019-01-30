import PropTypes from 'prop-types'
import React from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'

const fileText = {
  'json': 'Tables only',
  'pdb': 'Visualization only',
  'zip': 'Tables + Visualization'
}

const DLTable = ({ entry_name }) => (
  <ButtonGroup justified>
    {Object.keys(fileText).map(filetype => {
      return (
        <Button bsStyle='link' download 
	  href={'../../' + filetype + '/' + entry_name + '.' + filetype}>
          {fileText[filetype] + ' (.' + filetype + ')'}</Button>)
     })}
  </ButtonGroup>
)

DLTable.propTypes = {
  entry_name: PropTypes.string,
}

DLTable.defaultProps = {
  entry_name: ``,
}

export default DLTable
