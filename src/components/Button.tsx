import React from 'react'
import styled, { DefaultTheme } from 'styled-components'

type width = `${number}${'px' | '%'}`
type buttonType = 'primary' | 'secondary' | 'alternative'

type Props = {
  theme: DefaultTheme
  width?: width
  format?: buttonType
}

export const Button = styled.button<Props>`
  ${({ theme, width = '100%', format = 'primary' }) => {
    const { background, color } = theme.button[format]
    return `
      font-weight: 600;
      cursor: pointer;
      font-size: 25px;
      line-height: 38px;
      background-color: ${background};
      color: ${color};
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 10px;
      border: none;
      outline: none;
      width: ${width};
      text-decoration: none;
      transition: all 0.2s ease-in-out;
      &:hover {
        color: ${background};
        background: ${color};
      }
      `
  }}
`
