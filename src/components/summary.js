import PropTypes from 'prop-types'
import React from 'react'
import { Row, Col } from 'react-bootstrap'

const Summary = ({ image, data }) => (
  <Row style={{ display: `flex`, alignItems: `center` }}>
      <Col xs={3}>
	<img src={image} alt=''/>
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
  image: PropTypes.string,
  data: PropTypes.object,
}

Summary.defaultProps = {
  image: ``,
  data: {},
}

export default Summary
