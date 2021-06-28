import React, { Component } from 'react'

import { NavLink } from 'react-router-dom'
import {
  Navbar,
  NavItem,
  
} from 'reactstrap';


class Header extends Component {
  render() {
    return (
      <>
       <Navbar id ="navbar" color="light" light expand="md">
        <NavItem>
          < NavLink to="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/whiskeyindex">Whiskey List</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/whiskeynew">Create New Whiskey</NavLink>
        </NavItem>
        </Navbar>
      </>
    )
  }
}

export default Header