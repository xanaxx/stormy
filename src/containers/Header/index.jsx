import React, { Component } from 'react'
import styled from 'react-emotion'

import Minus from '../../components/Minus'
import Cancel from '../../components/Cancel'
import Options from './components/Options'

const window = require('electron').remote.getCurrentWindow()

const Buttons = styled('div')`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: flex-end;
  flex-direction: row-reverse;
  align-items: baseline;
  -webkit-app-region: drag;
`

const Title = styled('p')`
  font-family: Pacifico;
  color: white;
  font-align: center;
  font-size: 25pt;
`

class Header extends Component {
  constructor(props) {
    super(props)
    this.handleClose = this.handleClose.bind(this)
    this.handleMinimize = this.handleMinimize.bind(this)
  }

  handleClose() {
    window.close()
  }

  handleMinimize() {
    window.minimize()
  }

  render() {
    return (
      <React.Fragment>
        <Title>
          Stormy
        </Title>
        <Buttons>
          <Cancel onClick={this.handleClose} />
          <Minus onClick={this.handleMinimize} />
          <Options onClick={this.props.toggleOptions} dimmed={this.props.optionsVisible} />
        </Buttons>
      </React.Fragment>
    )
  }
}

export default Header
