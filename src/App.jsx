import React, { Component } from 'react'
import axios from 'axios'

import './App.css'

import User from './User'
import Test from './Test'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      user: {},
      error: null,
      username: ''
    }
  }

  findUser = (evt) => {
    const name = this.state.username
    evt.preventDefault()

    fetch(`https://api.github.com/users/${name}`)
      .then(response => {
        if (!response.ok) throw response
        return response.json()
      })
      .catch(err => {
        err.json().then(errorMessage => {
          this.setState({
            error: errorMessage
          })
        })
      })
      .then(json => {
        this.setState({
          user: json
        })
      })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="column">
            <form onSubmit={event => this.findUser(event)}>
              <label for="nameField">User Name</label>
              <input 
                type="text" 
                placeholder="Type the github user" 
                id="nameField" 
                onChange={event => this.setState({ username: event.target.value })} />
              <input type="submit" value="Search" />
            </form>
            <User request={this.state} />
          </div>
        </div>
    
      </div>

      // <div>
      //   <form>
      //     <label for="nameField">User Name</label>
      //     <input 
      //       type="text" 
      //       placeholder="Type the github user" 
      //       id="nameField" 
      //       onChange={ event => this.setState({ username: event.target.value }) } />

      //     <button class="button" onClick={ () => this.findUser() }>Search</button>
      //   </form>
      //   <User request = { this.state } />
      // </div>
    )
  }
}

export default App;
