import React, { Component } from 'react';
import * as PropTypes from 'prop-types';
import styled from 'react-emotion';

import Greeting from './components/Greeting';

const Column = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

class Select extends Component {
    constructor(props) {
        super(props);
        this.changeLanguage = this.changeLanguage.bind(this);
    }

    changeLanguage(language) {
        this.props.changeLanguage(language);
    }

    render() {
        return (
            <React.Fragment>
                <Column>
                    <Greeting changeLanguage={this.changeLanguage} />

                </Column>
            </React.Fragment>
        );
    }
}

Select.propTypes = {
    changeLanguage: PropTypes.func.isRequired,
};

export default Select;
