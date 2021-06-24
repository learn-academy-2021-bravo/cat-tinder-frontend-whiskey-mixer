import React, { Component } from 'react'
import { Card, CardTitle, Col, CardText, Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'

class WhiskeyShow extends Component {
  render() {
    console.log(this.props.whiskey);
    return (
      <>
        <Col sm = "6" className = "show-body">
          <Card body>
            <CardTitle>Hi, my name is { this.props.whiskey.name }!</CardTitle>
            <CardText>I am { this.props.whiskey.age } old. I am from { this.props.whiskey.country }. I taste like: { this.props.whiskey.notes }</CardText>

          </Card>
        </Col>
        <NavLink
          to={`/whiskeyedit/${this.props.whiskey.id}`}
          >
            <Button color="secondary">
              Edit Whiskey
            </Button>
        </NavLink>
      </>
    )
  }
}
export default WhiskeyShow