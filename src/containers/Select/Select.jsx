import React, { Component } from 'react';
import * as PropTypes from 'prop-types';
import styled from 'react-emotion';

import Greeting from './components/Greeting';
import Location from './components/Location';

const Column = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

class Select extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <Column>
                    <Greeting changeLanguage={this.props.changeLanguage} />
                    <Location changeLocation={this.props.changeLocation} />
                </Column>
            </React.Fragment>
        );
    }
}

Select.propTypes = {
    changeLanguage: PropTypes.func.isRequired,
    changeLocation: PropTypes.func.isRequired,
};

export default Select;
