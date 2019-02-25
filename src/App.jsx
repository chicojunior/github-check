import React, { Component } from 'react'

import './App.css'

import User from './User'

const axios = require('axios')

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

    axios.get(`https://api.github.com/users/${name}`)
      .then((response) => {
        this.setState({
          user: response.data
        })
      })
      .catch((error) => {
        this.setState({
          error: error
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
    )
  }
}

export default App
