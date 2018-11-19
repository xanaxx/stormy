import React from 'react';
import styled from 'react-emotion';
import { FormattedMessage } from 'react-intl';
import * as PropTypes from 'prop-types';

import { flags } from '../../../assets/flags';

const Content = styled('div')`
  padding: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
const Flags = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Greet = styled('div')`
  font-size: 27px;
  font-family: 'Patrick Hand';
  color: white;
`;
const P = styled('p')`
font-size: 18px;
  font-family: 'Patrick Hand';
  color: white;
  margin: 0;
`;

const Greeting = props => {
    return (
        <Content>
            <Greet>
                <FormattedMessage id={'Select.greeting'} defaultMessage={'Welcome!'} />
            </Greet>
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
    );
};

Greeting.propTypes = {
    changeLanguage: PropTypes.func.isRequired,
};

export default Greeting;
