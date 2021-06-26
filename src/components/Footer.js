import React, { Component } from 'react'
import { Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom'


class Footer extends Component{
  render(){
    return(
      <>
      <footer id = "footer">
      <Nav id = "nav">
          <NavItem>
            <NavLink class="navbar-link" to="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink class="navbar-link" to="whiskeyindex">Whiskey</NavLink>
          </NavItem>
          <NavItem>
            <NavLink class="navbar-link" to="whiskeynew">Create New Whiskey</NavLink>
          </NavItem>
          <NavItem>
            <NavLink class="navbar-link" to = "/">&copy; 2021 Chris and Erik Whiskey Mixer</NavLink>
          </NavItem>
        </Nav>
      </footer>
      </>
    )
  }
}
export default Footer