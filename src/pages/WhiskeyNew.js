import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input  } from 'reactstrap';
import { Redirect } from 'react-router-dom'



class WhiskeyNew extends Component {
  constructor(props) {
  super(props)
  this.state = {
    form:{
      name: "",
      age: "",
      country:"",
      notes:""
    },
    success: false
  }
  }
  
  handleChange = (e) => {
    // destructuring form out of state
    let { form } = this.state
    form[e.target.name] = e.target.value
    // setting state to the updated form
    this.setState({ form: form })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.createNewWhiskey(this.state.form)
    this.setState({ success: true})
  }
  render() {
    return (
      <>
        <h2>This is the New Page</h2>
        <Form>
          <FormGroup>
            <Label for = "name">Name</Label>
            <Input type="string" name="name" onChange = {this.handleChange} value = {this.state.form.name}/>          
            </FormGroup>
            <FormGroup>
            <Label for = "age">Age</Label>
            <Input type="string" name="age"onChange = {this.handleChange} value = {this.state.form.age}/>          
            </FormGroup>
            <FormGroup>
            <Label for = "country">Country</Label>
            <Input type="string" name="country" onChange = {this.handleChange} value = {this.state.form.country}/>          
            </FormGroup>
            <FormGroup>
            <Label for = "notes">Notes</Label>
            <Input type="string" name="notes" onChange = {this.handleChange} value = {this.state.form.notes}/>          
            </FormGroup>
            <br />
            <Button 
            name="submit"
            color="success"
            onClick={this.handleSubmit}
            >
              Create a new Whiskey
            </Button>
        </Form>
        {this.state.success && <Redirect to = "/whiskeyindex" />}



      </>
    )
  }
}
export default WhiskeyNew