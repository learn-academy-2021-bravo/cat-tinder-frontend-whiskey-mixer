import React, { Component } from 'react'
import { Card, CardTitle, Col } from 'reactstrap'

import { NavLink } from 'react-router-dom'


class WhiskeyIndex extends Component {
  render() {
    let { whiskey } = this.props
    return (
      <>
        <h2>This is the Index Page</h2>
        <br />
        <Col sm="6">
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
      </>
    )
  }
}
export default WhiskeyIndex