import React, { Component } from 'react'
import homePage from '../assets/homepage.png'
class Home extends Component {
  render() {
    return (
      <>
      <div id = "mixer">
        <h3>Welcome to Whiskey Mixer!</h3>
      <img src ={homePage} alt = "Welcome to Whiskey Mixer"  />
      </div>
      </>
    )
  }
}
export default Home