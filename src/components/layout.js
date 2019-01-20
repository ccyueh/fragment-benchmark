import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { Grid, Row } from 'react-bootstrap'

import Header from './header'
import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
	  <Grid>
          {children}
	  <Row>
	    <hr />
	  </Row>
          <footer>
	    <center>
	      <a href="http://structure.bu.edu/">Structural Bioinformatics Lab</a>
	    </center>
          </footer>
	  </Grid>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
