import PropTypes from 'prop-types'
import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { withPrefix } from 'gatsby'

const Header = ({ siteTitle }) => (
  <Navbar inverse staticTop style={{height: `30px`}}>
  <Navbar.Header>
    <Navbar.Brand>
      <a href={withPrefix("/")}>{siteTitle}</a>
    </Navbar.Brand>
  </Navbar.Header>
  <Nav pullRight>
    <NavItem eventKey={1} href={withPrefix("/browse/")}>
      Browse
    </NavItem>
    <NavItem eventKey={2} href={withPrefix("/about/")}>
      About
    </NavItem>
    <NavItem eventKey={3} href={withPrefix("/download/")}>
      Download
    </NavItem>
    <NavItem eventKey={4} href={withPrefix("/contact/")}>
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
