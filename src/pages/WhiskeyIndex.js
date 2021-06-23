import React, { Component } from 'react'
import { Card, CardTitle, Col } from 'reactstrap'

import { NavLink } from 'react-router-dom'


class WhiskeyIndex extends Component {
  render() {
    return (
      <>
        <h2>This is the Index Page</h2>
        <br />
        <Col sm="6">
          {this.props.whiskey.map((whiskey, index) => {
            return (
              <Card body key={ index }>
                <CardTitle>
                  <NavLink to={`/whiskeyshow/${whiskey.id}`} key = {whiskey.id}>
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