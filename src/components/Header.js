import React, { Component } from 'react'

import { NavLink } from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
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
       <Navbar id ="navbar" color="light" light expand="md">
        <NavbarBrand >
          <NavItem>
            < NavLink to="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="../whiskeyindex">Whiskey List</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="../whiskeynew">Create New Whiskey</NavLink>
          </NavItem>
        </NavbarBrand> 
             {/* <UncontrolledDropdown nav inNavbar>
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
            </UncontrolledDropdown> */}
          
        </Navbar>
      </>
    )
  }
}

export default Header