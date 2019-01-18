import PropTypes from 'prop-types'
import React from 'react'
import { Row, Glyphicon } from 'react-bootstrap'

const Arrow = (<Glyphicon glyph='arrow-right' />);
const LigLink = ({ lig }) => (
  <a href={'https://www.rcsb.org/ligand/' + lig}>{lig}</a>
)

const Substruct = ({ frag, data }) => (
  <Row>
    {data.map((a) => 
      <p>
	<LigLink lig={frag} /> {a.map((b) => 
	  <span> {Arrow} <LigLink lig={b} /></span>
        )}
      </p>
    )}
  </Row>
)

Substruct.propTypes = {
  frag: PropTypes.string,
  data: PropTypes.object,
}

Substruct.defaultProps = {
  frag: ``,
  data: {},
}

export default Substruct
