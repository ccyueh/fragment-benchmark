import PropTypes from 'prop-types'
import React from 'react'
import { Row, Col } from 'react-bootstrap'

const Summary = ({ image, data }) => (
  <Row>
    <center>
      <img src={image} style={{ maxWidth: `300px` }} alt=''/>
    </center>
    <Col xs={12}>
      {Object.keys(data).map((a) => <Row>
        <span style={{ display: `inline-block`, width: 150 }}>
          <strong>{a.replace(/_/g,' ')}</strong>
        </span> 
        {data[a]}
      </Row>)}
      <p />
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
