import PropTypes from 'prop-types'
import React from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'

const fileTypes = ['json','pdb','tar']
const fileText = {
  'json': 'Tables only',
  'pdb': 'PyMOL session only',
  'tar': 'Tables + PyMOL session'
}

const DLTable = ({ entry_name }) => (
  <ButtonGroup justified>
    {fileTypes.map(filetype => {
      return (
        <Button bsStyle='link' 
	  href={'../../static/' + filetype + '/' + entry_name + '.' + filetype}>
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
