import React, { Component } from 'react'

import { FormattedMessage } from 'react-intl'

import { flags } from '../../assets/flags'
import styled from 'react-emotion'

const Content = styled('div')`
  padding: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`
const Flags = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Greeting = styled('div')`
  font-size: 27px;
  font-family: 'Patrick Hand';
  color: white;
`
const P = styled('p')`
font-size: 18px;
  font-family: 'Patrick Hand';
  color: white;
  margin: 0;
`

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
        <Content>
          <Greeting>
            <FormattedMessage
              id={'Select.greeting'}
              defaultMessage={'Welcome!'}
            />
          </Greeting>
          <P>
            <FormattedMessage
              id={'Select.select'}
              defaultMessage={'Please select language'}
            />

          </P>
          <Flags>
            {flags.pl(this.changeLanguage)}
            {flags.us(this.changeLanguage)}
            {flags.de(this.changeLanguage)}
          </Flags>
        </Content>
      </React.Fragment>
    )
  }
}

export default Select
