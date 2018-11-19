import React, { Component } from 'react';
import * as PropTypes from 'prop-types';

import styled from 'react-emotion';
import { colors } from '../../styles';

import Minus from '../../components/Minus';
import Cancel from '../../components/Cancel/Cancel';
import Gear from './components/Gear';

const window = require('electron').remote.getCurrentWindow();

const Buttons = styled('div')`
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row-reverse;
  align-items: flex-start;
  -webkit-app-region: drag;
`;

const Title = styled('p')`
  font-family: Pacifico;
  color: white;
  font-align: center;
  font-size: 20pt;
  color: ${colors.primary};
  margin: 0 0 0 10px;
`;

const Drag = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  -webkit-app-region: drag;
  padding: 0 0 5px 0;
`;

class Header extends Component {
    constructor(props) {
        super(props);
        this.handleClose = this.handleClose.bind(this);
        this.handleMinimize = this.handleMinimize.bind(this);
    }

    handleClose() {
        window.close();
    }

    handleMinimize() {
        window.minimize();
    }

    render() {
        return (
            <React.Fragment>
                <Drag>
                    <Title>
                        Stormy
                    </Title>
                    <Buttons>
                        <Cancel onClick={this.handleClose} />
                        <Minus onClick={this.handleMinimize} />
                        <Gear
                            onClick={this.props.toggleOptions}
                            dimmed={this.props.optionsVisible}
                        />
                    </Buttons>
                </Drag>
            </React.Fragment>
        );
    }
}

Header.propTypes = {
    toggleOptions: PropTypes.func.isRequired,
    optionsVisible: PropTypes.bool,
};

export default Header;
