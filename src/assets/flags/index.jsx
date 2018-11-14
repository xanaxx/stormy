import React from 'react'

import { css } from 'emotion'

import pol from './pl.png'
import eng from './en.png'
import ger from './de.png'

const flag = css`
  &:hover {
    -webkit-filter: drop-shadow(5px 5px 5px #222);
    filter: drop-shadow(5px 5px 5px #222);
  }
  &:active {
    opacity: 0.8;
  }
`

function createImage (action, image) {
  return (
    <img
      src={image}
      className={flag}
      height={80}
      onClick={() => {
        action(image.split('/')[1].slice(0, 2))
      }}
    />
  )
}

export const flags = {
  pl: action => {
    return createImage(action, pol)
  },
  us: action => {
    return createImage(action, eng)
  },
  de: action => {
    return createImage(action, ger)
  }
}
