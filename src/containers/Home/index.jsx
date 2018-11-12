import React, { Component } from 'react'

import * as run from '../../services/firstrun'

import Header from '../Header'
import Options from '../Options'
import Weather from '../Weather'

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      optionsVisible: false
    }
    this.toggleOptions = this.toggleOptions.bind(this)
  }

  toggleOptions () {
    run.checkFirstRun()
    this.setState({ optionsVisible: !this.state.optionsVisible })
  }

  render () {
    return (
      <React.Fragment>
        <Header toggleOptions={this.toggleOptions} optionsVisible={this.state.optionsVisible} />
        {this.state.optionsVisible ? <Options /> : <Weather />}
      </React.Fragment>
    )
  }
}

export default Home
