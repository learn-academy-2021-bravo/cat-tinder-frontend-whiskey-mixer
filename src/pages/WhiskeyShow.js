import React, { Component } from 'react'
import { Card, CardTitle, Col, CardText } from 'reactstrap'

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

      </>
    )
  }
}
export default WhiskeyShow