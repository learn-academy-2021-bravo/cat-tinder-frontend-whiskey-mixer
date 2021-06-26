import React, { Component } from 'react'
import './App.css'

import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'
import WhiskeyShow from './pages/WhiskeyShow'
import WhiskeyIndex from './pages/WhiskeyIndex'
import WhiskeyNew from './pages/WhiskeyNew'
import WhiskeyEdit from './pages/WhiskeyEdit'
import NotFound from './pages/NotFound'

import {
  BrowserRouter as Router, 
  Route,
  Switch
} from 'react-router-dom'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      whiskey: [],
      
    }
    }

componentDidMount(){
  this.whiskeyIndex()
}

whiskeyIndex = () => {
  fetch("http://localhost:3000/whiskeys")
  .then(response => response.json())
  .then(whiskeyArray => this.setState({ whiskey: whiskeyArray}))
  .catch(errors => console.log("index errors:", errors))
}

createNewWhiskey = (newwhiskey) => {
  return fetch("http://localhost:3000/whiskeys", {
    body: JSON.stringify(newwhiskey),
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST"
  })
    .then(response => response.json())
    .then(payload => this.whiskeyIndex())
    .catch(errors => {
      console.log("create errors:", errors)
    })
  }

    updateWhiskey = (whiskey, id) => {
      fetch(`http://localhost:3000/whiskeys/${id}`, {
        body: JSON.stringify(whiskey),
        headers: {
          "Content-Type": "application/json"
        },
        method: "PATCH"
      })
      .then(response => response.json())
      .then(payload => this.whiskeyIndex())
      .catch(errors => console.log("update errors:", errors))
    }

    deleteWhiskey = (id) => {
      fetch(`http://localhost:3000/whiskeys/${id}`, {
        headers: {
          "Content-type": "application/json"
        },
        method: "DELETE"
      })
      .then(response => response.json())
      .then(payload => this.whiskeyIndex())
      .catch(errors => console.log("delete errors:", errors))
    }
    

    render() {
      console.log(this.state.whiskey)
      return(
        <Router>
          <Header />

          <Switch>
            <Route exact path= '/' component={ Home }  />
            <Route path='/whiskeyindex' render={ (props) => <WhiskeyIndex whiskey={this.state.whiskey} /> } />
            <Route path= "/whiskeyshow/:id" render = { (props) => {
              let id = props.match.params.id
              let whiskey = this.state.whiskey.find(whiskey => whiskey.id === +id)
              // {console.log("whiskey:", whiskey)}
              return <WhiskeyShow whiskey={ whiskey } deleteWhiskey={this.deleteWhiskey}/>
            }} />
            <Route path='/whiskeynew' render = { (props) => <WhiskeyNew createNewWhiskey = {this.createNewWhiskey } />} />
            <Route exact path={"/whiskeyedit/:id"} render={ (props)  => {
               let id = props.match.params.id
               let whiskey = this.state.whiskeys.find(whiskey => whiskey.id === parseInt(id))
               return(
                 <WhiskeyEdit
                 updateWhiskey={this.updateWhiskey}
                 whiskey = { whiskey} 
               />
               )}
             }
             />
             
               
            <Route component= { NotFound } />
          </Switch>
          <Footer />
        </Router>
      )
    }
  }
export default App;
