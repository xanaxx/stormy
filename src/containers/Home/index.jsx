import React, { Component } from 'react';
import * as PropTypes from 'prop-types';
import styled from 'react-emotion';

import * as run from '../../services/firstrun';
import Header from '../Header';
import Options from '../Options';
import Weather from '../Weather';
import Select from '../Select';

const Content = styled('div')`
  width: 100%;
  height: 100%;
  position: fixed;
`;

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            optionsVisible: false,
            selected: false,
        };
        this.toggleOptions = this.toggleOptions.bind(this);
    }

    toggleOptions() {
        run.checkFirstRun();
        this.setState({ optionsVisible: !this.state.optionsVisible });
    }

    render() {
        const weather = <Weather />;

        const select = <Select changeLanguage={this.props.changeLanguage} />;

        return (
            <React.Fragment>
                <Header
                    toggleOptions={this.toggleOptions}
                    optionsVisible={this.state.optionsVisible}
                />
                <Content>
                    {this.state.optionsVisible
                        ? <Options />
                        : this.state.selected ? weather : select}
                </Content>
            </React.Fragment>
        );
    }
}

Home.propTypes = {
    changeLanguage: PropTypes.func.isRequired,
};

export default Home;
