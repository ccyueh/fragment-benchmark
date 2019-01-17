import PropTypes from 'prop-types'
import React from 'react'
import { Row, Col } from 'react-bootstrap'

const Summary = ({ data }) => (
  <Row>
    <Col xs={3}>
      <img src='https://cdn.rcsb.org/etl/ligand/img/Z/ZWZ/ZWZ-270.png' alt=''/>
    </Col>
    <Col xs={2}>
      <div style={{textAlign: `right` }}>
        {Object.keys(data).map((a) =>
          <span><strong>{a}</strong><br /></span>)
        }</div>
    </Col>
    <Col xs={7}>
      {Object.values(data).map((a) =>
        <span>{a}<br /></span>)
      }
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
