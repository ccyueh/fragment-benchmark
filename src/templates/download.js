import { graphql, StaticQuery } from 'gatsby'
import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import DLTable from '../components/dl-table'

export default () => (
  <StaticQuery
    query={graphql`
      query {
	allEntries: allEntriesJson {
          edges {
            node {
              entry_name
            }
          }
        }
      }
    `}
    componentDidUpdate={
      document.getElementById(window.location.hash.slice(1)) ? document.getElementById(window.location.hash.slice(1)).scrollIntoView(true) : true
    }

    render={data => (
      <Layout>
        <SEO title='Download' />
        <h1>Download Entries</h1>
	  <p>Download benchmark files by using the links below.</p>
	  <DLTable entry_name='all' /> 
	  <p />
	  <p>To download files from a specific entry, visit its individual page (browse all entries <a href='/browse/'>here</a>).</p>
      </Layout>
    )}
  />
)

