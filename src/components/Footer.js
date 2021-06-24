import React, { Component } from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap';


class Footer extends Component{
  render(){
    return(
      <>
      <footer id = "footer">
        <Nav>
          <NavItem>
            <NavLink to="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="whiskeyindex">Whiskey</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="whiskeynew">Create New Whiskey</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to = "/">&copy; 2021 Chris and Erik Whiskey Mixer</NavLink>
          </NavItem>
        </Nav>
      </footer>
      </>
    )
  }
}
export default Footer