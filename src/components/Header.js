import React, { Component } from 'react'
// import React, { useState } from 'react';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';


class Header extends Component {
  render() {
    return (
      <>
       <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Whiskey Mixer</NavbarBrand>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Whiskey</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Regions</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Navbar>
      </>
    )
  }
}

export default Header