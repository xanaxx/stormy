import React, { Component } from 'react'
import SelectGreeting from './components/SelectGreeting'

class Select extends Component {
  constructor (props) {
    super(props)
    this.changeLanguage = this.changeLanguage.bind(this)
  }

  changeLanguage (language) {
    this.props.changeLanguage(language)
  }

  render () {
    return (
      <React.Fragment>
        <SelectGreeting changeLanguage={this.changeLanguage} />
      </React.Fragment>
    )
  }
}

export default Select
