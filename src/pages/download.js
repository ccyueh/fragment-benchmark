import { Link } from 'gatsby'
import React from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'
import Layout from '../components/layout'
import SEO from '../components/seo'

const fileText = {
  'tables': 'Tables only',
  'visual': 'Visualizations only',
  'combined': 'Tables + Visualizations'
}

const Download = () => (
  <Layout>
    <SEO title='Download' />
    <h1>Download Entries</h1>
      <p>Download benchmark files by using the links below.</p>
	<ButtonGroup justified>
	  {Object.keys(fileText).map(dltype => {
          return (
            <Button bsStyle='link' download
            href={'../all/' + dltype + '.zip'}>
            {fileText[dltype] + ' (.zip)'}</Button>)
	  })}
 	</ButtonGroup>
      <p />
      <p>To download files from a specific entry, visit its individual page (browse all entries <Link to='/browse/'>here</Link>).</p>
  </Layout>
)

export default Download