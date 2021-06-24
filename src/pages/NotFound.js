import React, { Component } from 'react'
import notfound from '../assets/notfound.png'
class NotFound extends Component {
  render() {
      return(
          <div id ="img">
          <img id ="img" src = { notfound } alt = "not found whiskey"></img>
          </div>
      )
  }
}
export default NotFound