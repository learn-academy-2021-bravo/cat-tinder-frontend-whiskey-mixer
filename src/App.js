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

import mockWhiskey from './mockWhiskey'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      whiskey: mockWhiskey,
      
    }
    }
    createNewWhiskey = (newwhiskey) => {
      console.log(newwhiskey)
    }

    updateWhiskey = (whiskey, id) => {
      console.log("whiskey:", whiskey)
      console.log("id:", id)
    }

    render() {
      return(
        <Router>
          <Header />

          <Switch>
            <Route exact path= '/' component={ Home }  />
            <Route path='/whiskeyindex' render={ (props) => <WhiskeyIndex whiskey = {this.state.whiskey} /> } />
            <Route 
            exact path= {"/whiskeyshow/:id"} 
            render = {(props) => {
              let id = props.match.params.id
              let whiskey = this.state.whiskey.find(whiskey => whiskey.id === parseInt(id))
              return <WhiskeyShow whiskey={ whiskey } />
            }} />
            <Route path='/whiskeynew' render = { (props) => <WhiskeyNew createNewWhiskey = {this.createNewWhiskey } />} />
            <Route exact path={"/whiskeyedit/:id"}
             render={ (props)  => {
               let id = props.match.params.id
               let whiskey = this.state.whiskey.find(whiskey => whiskey.id === parseInt(id))
               return(
                 <WhiskeyEdit
                 updateWhiskey={this.updateWhiskey}
                 whiskey = { whiskey} 
               />
               )
             }}
             
            
               />
            <Route component= { NotFound } />
          </Switch>
          <Footer />
        </Router>
      )
    }
  }
export default App;
