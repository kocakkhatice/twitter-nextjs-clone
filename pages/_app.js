import React, { useEffect, useState } from 'react'

import '../styles/app.css'
import ThemeContext from '../context'

export default function MyApp({ Component, pageProps }) {
  const [theme, themeSet] = useState(() => {
    try {
      return localStorage.getItem('THEME')
    } catch (error) {
      return 'light'
    }
  })

  useEffect(() => {
    const theme = localStorage.getItem('THEME') || 'light'
    themeSet(theme)
  }, [])

  const changeTheme = (theme) => {
    themeSet(theme)
    localStorage.setItem('THEME', theme)
  }

  useEffect(() => {
    if (!theme) return
    const $html = document.querySelector('html')
    $html.classList.remove('light')
    $html.classList.remove('dark')
    $html.classList.remove('dim')
    $html.classList.add(theme.toString())
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <Component {...pageProps} />
    </ThemeContext.Provider>
  )
}
