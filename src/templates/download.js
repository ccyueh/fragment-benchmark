import { graphql, StaticQuery } from 'gatsby'
import React from 'react'
import { Table } from 'react-bootstrap'
import Layout from '../components/layout'
import SEO from '../components/seo'

const fileTypes = ['text','pdb','combined']
const fileText = {
  'text': 'Tables only',
  'pdb': 'PyMOL session only',
  'combined': 'Tables + PyMOL session'
}
const tableStyle = {
  fontWeight: `normal`, 
  fontSize: 14, 
  textAlign: `center`
}

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

    render={data => (
      <Layout>
        <SEO title='Download' />
        <h1>Download Entries</h1>
	  <Table striped bordered hover condensed>
	    <thead>
	      <tr>
	      <th style={tableStyle}>Entry Name</th>
	      <th style={tableStyle} colspan='3'>Files</th>
	      </tr>
	    </thead>
	    <tbody>
	      {data.allEntries.edges.map(a => {
	      var entry = a.node.entry_name;
	      return (
	        <tr><td style={tableStyle}>
		    <a id={entry} href={'/entry/' + entry}>{entry}</a>
		    </td>
		    {fileTypes.map(filetype => {
			return (
       			  <td style={tableStyle}>
			    <a href={'static/' + filetype + '/' + entry}>
			      {fileText[filetype]}</a></td>)
		      }
		    )}
		</tr> )
	    }) } 
          </tbody>
	</Table>
      </Layout>
    )}
  />
)

