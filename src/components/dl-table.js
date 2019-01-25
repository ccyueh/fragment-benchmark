import PropTypes from 'prop-types'
import React from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'

const fileTypes = ['text','pdb','combined']
const fileText = {
  'text': 'Tables only',
  'pdb': 'PyMOL session only',
  'combined': 'Tables + PyMOL session'
}

const DLTable = ({ entry_name }) => (
  <ButtonGroup justified>
    {fileTypes.map(filetype => {
      return (
        <Button bsStyle='link' href={'static/' + filetype + '/' + entry_name}>
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
