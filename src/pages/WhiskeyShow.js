import React, { Component } from 'react'
import { Card, CardTitle, Col, CardText, Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'

class WhiskeyShow extends Component {
  render() {
    let { whiskey } = this.props;
    return (
      <>
      <div class = "whiskeycard">
      <Col sm = "6" className = "show-body">
        <Card body>
        <CardTitle>Hi, my name is { whiskey.name }!</CardTitle>
        <CardText>I am { whiskey.age } old. I am from { whiskey.country }. I taste like: { whiskey.notes} </CardText>

        </Card>

        </Col>
        <NavLink to={`/whiskeyedit/${whiskey.id}`}>
            <Button color="success" id= "edit">
              Edit Whiskey
            </Button>
        </NavLink>
        <br/>
        <NavLink to="/whiskeyindex">
            <Button onClick={ () => this.props.deleteWhiskey(whiskey.id) } color="danger" id="delete" >
              Delete a Whiskey
            </Button>
        </NavLink>
        </div>
      </>
    )
  }
}
export default WhiskeyShow