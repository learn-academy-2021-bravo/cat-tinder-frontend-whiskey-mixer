import React, { Component } from 'react'
import notfound from '../assets/notfound.png'
class NotFound extends Component {
  render() {
      return(
          <>
          <img src = { notfound } alt = "not found whiskey image"></img>
          </>
      )
  }
}
export default NotFound