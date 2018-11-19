import React, { Component } from 'react';
import * as PropTypes from 'prop-types';

import styled from 'react-emotion';
import { colors } from '../../../../styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';

class Options extends Component {
    render() {
        const Button = styled('button')`
      background-color: rgb(0, 0, 0, 0);
      border: none;
      padding: 5px;
      text-align: center;
      text-decoration: none;
      display: block;
      font-size: 16px;
      margin: 4px;
      color: ${this.props.dimmed ? colors.selected : colors.default};
      -webkit-app-region: no-drag;

      &:hover {
        color: ${colors.hover};
      }
    `;

        return (
            <Button onClick={this.props.onClick}>
                <FontAwesomeIcon icon={faCog} />
            </Button>
        );
    }
}

Options.propTypes = {
    onClick: PropTypes.func.isRequired,
    dimmed: PropTypes.bool,
};

export default Options;
