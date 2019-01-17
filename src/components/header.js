import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'

const Header = ({ siteTitle }) => (
  <Navbar inverse staticTop fluid style={{height: `30px`}}>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="/">{siteTitle}</a>
    </Navbar.Brand>
  </Navbar.Header>
  <Nav pullRight>
    <NavItem eventKey={1} href="/browse/">
      Browse
    </NavItem>
    <NavItem eventKey={2} href="/about/">
      About
    </NavItem>
    <NavItem eventKey={3} href="/download/">
      Download
    </NavItem>
    <NavItem eventKey={4} href="/contact/">
      Contact
    </NavItem>
  </Nav>
</Navbar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
