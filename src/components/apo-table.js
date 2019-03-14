import PropTypes from 'prop-types'
import React from 'react'
import { Row, Button } from 'react-bootstrap'

const PDBLink = ({ apo }) => (
  <Button href={'https://www.rcsb.org/structure/' + apo.substring(0,4)} 
    bsStyle='link'
    style={{ width: `70px` }}>{apo}</Button>
)

const Apo = ({ data }) => (
  <Row>
    {data.map((a) =>
      <PDBLink apo={a} />
    )}
  </Row>
)

Apo.propTypes = {
  data: PropTypes.array,
}

Apo.defaultProps = {
  data: [],
}

export default Apo
