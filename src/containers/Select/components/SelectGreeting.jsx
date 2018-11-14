import React from 'react'
import styled from 'react-emotion'
import { FormattedMessage } from 'react-intl'

import { flags } from '../../../assets/flags'

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

const SelectGreeting = props => {
  return (
    <Content>
      <Greeting>
        <FormattedMessage id={'Select.greeting'} defaultMessage={'Welcome!'} />
      </Greeting>
      <P>
        <FormattedMessage
          id={'Select.select'}
          defaultMessage={'Please select language'}
        />
      </P>
      <Flags>
        {flags.pl(props.changeLanguage)}
        {flags.us(props.changeLanguage)}
        {flags.de(props.changeLanguage)}
      </Flags>
    </Content>
  )
}

export default SelectGreeting
