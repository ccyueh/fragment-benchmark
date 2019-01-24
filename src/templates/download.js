import { graphql, StaticQuery } from 'gatsby'
import React from 'react'
import { Row, Col, Button, ButtonToolbar } from 'react-bootstrap'
import Layout from '../components/layout'
import SEO from '../components/seo'

const fileTypes = ['text','pdb','combined']

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
	<Row>
	  <Col xs={12}>
	    {data.allEntries.edges.map(a => {
	      var entry = a.node.entry_name;
	      return (
	        <Row id={entry}>
		  <ButtonToolbar>
		    <div style={{ maxWidth: 150}}>
		    <Button href={'/entry/' + entry} 
		      bsStyle='link' block>{entry}</Button>
		    </div>
		    {fileTypes.map(filetype => {
			return (
       			  <Button href={'static/' + filetype + '/' + entry} 
			    bsStyle='link'>{filetype}</Button>)
		      }
		    )}
		  </ButtonToolbar>	
		</Row> )
	    }) } 
          <p />
          </Col>
	</Row>
      </Layout>
    )}
  />
)

