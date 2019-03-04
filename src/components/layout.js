import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { Grid } from 'react-bootstrap'

import Header from './header'

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
	  <Grid style={{ minHeight: `85vh` }}>
          {children}
	  </Grid>
	  <footer>
	    <Grid>
	      <center>
	        <hr />
	    	<a href='http://structure.bu.edu/'>Structural Bioinformatics Lab</a>
	      </center>
	    </Grid>
	  </footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
