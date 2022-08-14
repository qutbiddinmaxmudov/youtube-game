import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import AllRoutes from './routes'
import { darkTheme } from './theme'
import GlobalStyles from './theme/globalStyles'

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyles />
        <AllRoutes />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
