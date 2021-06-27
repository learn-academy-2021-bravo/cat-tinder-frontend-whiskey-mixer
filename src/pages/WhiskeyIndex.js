import React, { Component } from 'react'
import { Card, CardTitle, Col, Button } from 'reactstrap'

import { NavLink } from 'react-router-dom'



class WhiskeyIndex extends Component {
  render() {
    let { whiskey } = this.props
    return (
      <>
        <h2 id ="h2" >Whiskeys</h2>
        <br />
        <Col id = "form" sm="6">
          { whiskey && whiskey.map(whiskey => {
            return (
              <Card key = {whiskey.id}>
                <CardTitle>
                  <NavLink to={`/whiskeyshow/${whiskey.id}`}>
                  <h4>{whiskey.name}</h4>
                  </NavLink>
                </CardTitle>
              </Card>
            )
          })}
        </Col>
        <br />
        <div id = "button">
        <NavLink to={`/whiskeynew`}>
        <Button id ="button-index" color = "primary">
          Create a Whiskey
        </Button>
        </NavLink>
        </div>
      </>
    )
  }
}
export default WhiskeyIndex