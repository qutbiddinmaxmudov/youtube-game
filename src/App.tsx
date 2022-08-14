import React, { createContext, useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import AllRoutes from './routes'
import { getFromStorage, setToStorage } from './services/storage'
import { darkTheme, lightTheme } from './theme'
import GlobalStyles from './theme/globalStyles'

type AppContextType = {
  darkThemeOn: boolean
  setDarkThemeOn: React.Dispatch<React.SetStateAction<boolean>>
}
const themeText = getFromStorage('darkThemeOn')
const theme = themeText ? JSON.parse(themeText) : true

export const AppContext = createContext<AppContextType | null>(null)

function App() {
  const [darkThemeOn, setDarkThemeOn] = useState(theme || true)

  useEffect(() => {
    setToStorage('darkThemeOn', darkThemeOn)
  }, [darkThemeOn])
  return (
    <BrowserRouter>
      <ThemeProvider theme={darkThemeOn ? darkTheme : lightTheme}>
        <AppContext.Provider
          value={{
            darkThemeOn,
            setDarkThemeOn,
          }}
        >
          <GlobalStyles />
          <AllRoutes />
        </AppContext.Provider>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
