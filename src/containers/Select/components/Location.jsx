import React, { Component } from 'react';
import styled from 'react-emotion';
import { FormattedMessage } from 'react-intl';

import { colors } from '../../../styles';

const Content = styled('div')`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`;

const Input = styled('input')`
    filter: drop-shadow(0px 2px 5px #222);
    border-radius: 50px;
    border-width: 2px;
    border-style: solid;
    border-color: ${colors.default};
    background-color: ${colors.dimmed};
    font-family: 'Patrick Hand';
    font-size: 23px;
    text-align: center;
    padding: 5px 10px;
    width: 60%;
    height: 30px;
    color: ${colors.hover};
`;

const Button = styled('button')`
    filter: drop-shadow(0px 2px 5px #222);
    margin: 15px;
    border-radius: 50px;
    border-width: 2px;
    border-style: solid;
    border-color: ${colors.default};
    background-color: ${colors.selected};
    font-family: 'Patrick Hand';
    font-size: 23px;
    text-align: center;
    padding: 5px 10px;
    color: ${colors.background};

    &:active {
        opacity: 0.7;
    }
`;

const P = styled('p')`
    font-size: 18px;
    font-family: 'Patrick Hand';
    color: white;
    margin: 0;
    padding: 5px;
`;

const Dimmed = styled('p')`
    font-size: 12px;
    font-family: 'Patrick Hand';
    color: ${colors.shadow};
    margin: 0;
    padding: 5px;
`;

class Location extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <Content>
                    <P>
                        <FormattedMessage
                            id={'Location.provide'}
                            defaultMessage={'Please input location'}
                        />
                    </P>
                    <FormattedMessage
                        id={'Location.placeholder'}
                        defaultMessage={'City'}
                    >
                        {(txt) => (
                            <Input maxLength="30" placeholder={txt} />
                        )}
                    </FormattedMessage>
                    <FormattedMessage
                        id={'Location.confirm'}
                        defaultMessage={'Select'}
                    >
                        {(txt) => (
                            <Button >
                                {txt}
                            </Button>
                        )}
                    </FormattedMessage>
                    <Dimmed>
                        <FormattedMessage
                            id={'Location.advice'}
                            defaultMessage={'Supported City names or coordinates.'}
                        />
                    </Dimmed>
                </Content>
            </React.Fragment >
        );
    }
}

export default Location;
