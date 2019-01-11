import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to} style={{ color: `white`, textDecoration: `none` }}>{props.children}</Link>
  </li>
)

const Header = ({ siteTitle }) => (
  <div style={{ background: `black`, marginBottom: `1rem` }}>
    <div style={{ margin: `0 auto`, padding: `0.5rem 1.0875rem` }}>
      <h3 style={{ margin: 0, display: `inline`}}>
        <Link to="/" style={{ color: `white`, textDecoration: `none` }}>
          {siteTitle}
        </Link>
	<small>
	<ul style={{ listStyle: `none`, float: `right`}}>
	  <ListLink to="/browse/">Browse</ListLink>
	  <ListLink to="/about/">About</ListLink>
	  <ListLink to="/contact/">Contact</ListLink>
	</ul>
	</small>
      </h3>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
