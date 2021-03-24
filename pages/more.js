import React, { useState, useContext } from 'react'
import style from './styles.module.css'
import ThemeContext from '../context'
import Layout from '../components/Layout'

const THEME = {
  light: 'light',
  dim: 'dim',
  dark: 'dark'
}
function More() {
  const contextTheme = useContext(ThemeContext)
  return (
    <Layout>
      <div className={style.container}>
        {['light', 'dim', 'dark'].map((theme) => (
          <label key={theme} className={style.label}>
            <input
              type="radio"
              value={theme}
              name="theme"
              onChange={(event) => contextTheme.changeTheme(event.target.value)}
              checked={theme === contextTheme.theme}
            />
            {THEME[theme]}
          </label>
        ))}
      </div>
    </Layout>
  )
}

export default More
