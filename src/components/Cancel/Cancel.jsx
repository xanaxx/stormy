import React from 'react';
import styled from 'react-emotion';
import * as PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { colors } from '../../styles';

const Cancel = ({ onClick }) => {
    const Button = styled('button')`
    background-color: rgb(0, 0, 0, 0);
    border: none;
    padding: 5px;
    text-align: center;
    text-decoration: none;
    display: block;
    font-size: 16px;
    margin: 4px;
    color: ${colors.default};
    -webkit-app-region: no-drag;

    &:hover {
      color: ${colors.hover};
    }
  `;

    return (
        <Button onClick={onClick}>
            <FontAwesomeIcon icon={faTimes} size='lg' />
        </Button>
    );
};

Cancel.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default Cancel;
