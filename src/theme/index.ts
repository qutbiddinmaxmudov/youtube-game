import { DefaultTheme } from 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      violet: string
      white: string
      black: string
      pink: string
      gray: string
    }
    text: {
      primary: string
      secondary: string
      alternative: string
    }
    title: {
      primary: string
    }
    background: {
      primary: string
      secondary: string
      alternative: string
    }
    button: {
      primary: {
        color: string
        background: string
      }
      secondary: {
        color: string
        background: string
      }
      alternative: {
        color: string
        background: string
      }
    }
  }
}

const palette: DefaultTheme['palette'] = {
  violet: '#37399A',
  white: '#fff',
  black: '#000',
  pink: '#ED52B0',
  gray: '#b0b0b0',
}

export const darkTheme: DefaultTheme = {
  palette,
  text: {
    primary: palette.white,
    secondary: palette.black,
    alternative: palette.pink,
  },
  title: {
    primary: palette.black,
  },
  background: {
    primary: palette.white,
    secondary: palette.violet,
    alternative: palette.pink,
  },
  button: {
    primary: {
      color: palette.white,
      background: palette.violet,
    },
    secondary: {
      color: palette.violet,
      background: palette.white,
    },
    alternative: {
      color: palette.white,
      background: palette.pink,
    },
  },
}
