import React, { Component } from 'react'
import styled from 'react-emotion'

import * as WeatherType from '../../assets/weather'

const Content = styled('div')`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

class Weather extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <React.Fragment>
        <Content>a</Content>
      </React.Fragment>
    )
  }
}

export default Weather
