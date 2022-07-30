import { DefaultTheme } from 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
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

export const darkTheme: DefaultTheme = {
  text: {
    primary: '#fff',
    secondary: '#000',
    alternative: '#ED52B0',
  },
  title: {
    primary: '#000',
  },
  background: {
    primary: '#fff',
    secondary: '#37399A',
    alternative: '#ED52B0',
  },
  button: {
    primary: {
      color: '#fff',
      background: '#37399A',
    },
    secondary: {
      color: '#37399A',
      background: '#fff',
    },
    alternative: {
      color: '#fff',
      background: '#ED52B0',
    },
  },
}
