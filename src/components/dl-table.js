import PropTypes from 'prop-types'
import React from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'

const fileTypes = ['json','pdb','tar']
const fileText = {
  'json': 'Tables only',
  'pdb': 'Visualization only',
  'tar': 'Tables + Visualization'
}

const DLTable = ({ entry_name }) => (
  <ButtonGroup justified>
    {fileTypes.map(filetype => {
      return (
        <Button bsStyle='link' download={fileText[filetype] + ' for ' + entry_name} 
	  href={'../../' + filetype + '/' + entry_name + '.' + filetype}>
          {fileText[filetype]}</Button>)
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
