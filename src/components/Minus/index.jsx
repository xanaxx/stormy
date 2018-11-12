import React from 'react'
import styled from 'react-emotion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus } from '@fortawesome/free-solid-svg-icons'
import { colors } from '../../styles'

export default ({ onClick }) => {
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
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    &:hover {
      color: ${colors.hover};
    }
  `

  return (
    <Button onClick={onClick}>
      <FontAwesomeIcon icon={faMinus} size='lg' />
    </Button>
  )
}
