import React, { Component } from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap';


class Footer extends Component{
  render(){
    return(
      <>
      <footer id = "footer">
        <Nav>
          <NavItem>
            <NavLink href="#">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Whiskey</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Regions</NavLink>
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