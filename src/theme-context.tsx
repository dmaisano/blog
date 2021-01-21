import React, { createContext, useContext, useState } from "react"

const IS_DARK_THEME = window.matchMedia("(prefers-color-scheme: dark)").matches

export const ThemeContext = createContext<boolean>(IS_DARK_THEME)
export const ThemeUpdateContext = createContext(() => {})

export const useTheme = () => {
  return useContext(ThemeContext)
}

export const useThemeUpdate = () => {
  return useContext(ThemeUpdateContext)
}

export const ThemeProvider: React.FC = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState<boolean>(() => {
    const storageValue = localStorage.getItem("theme")

    if (storageValue) {
      return JSON.parse(storageValue)
    } else {
      IS_DARK_THEME
    }
  })

  const toggleTheme = () => {
    return setDarkTheme((theme) => !theme)
  }

  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  )
}
