import PropTypes from 'prop-types'
import React from 'react'
import { Row, Col } from 'react-bootstrap'

const Summary = ({ data }) => (
  <Row style={{ display: `flex`, alignItems: `center` }}>
      <Col xs={3}>
	<img src='https://cdn.rcsb.org/etl/ligand/img/Z/ZWZ/ZWZ-270.png' alt=''/>
      </Col>
      <Col xs={9}> 
          {Object.keys(data).map((a) => <Row>
	    <span style={{ display: `inline-block`, width: 150 }}>
	      <strong>{a}</strong>
	    </span> 
	    {data[a]}
	  </Row>)}
      </Col>
</Row>
)

Summary.propTypes = {
  data: PropTypes.object,
}

Summary.defaultProps = {
  data: {},
}

export default Summary
