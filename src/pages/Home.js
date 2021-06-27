import React, { Component } from 'react'
import homePage from '../assets/homepage.png'
import { NavLink } from 'react-router-dom'
import { Button } from 'reactstrap';

class Home extends Component {
  render() {
    return (
      <>
      <div id = "mixer">
      <h2 id = "h2">Welcome to Whiskey Mixer!</h2>
      <img id = "home-img" src ={homePage} alt = "Welcome to Whiskey Mixer"  />
      <NavLink to ="/whiskeyindex">
      <Button id = "home-button" color="success">Explore the Whiskey's </Button>      
      </NavLink>
      </div>
      </>
    )
  }
}
export default Home