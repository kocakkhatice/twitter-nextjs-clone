import React from 'react'
import cn from 'classnames'
import CONST from '../../constants'
import styles from './styles.module.css'
import Main from '../Col-Main'
import Sidebar from '../Col-Sidebar'
import Extra from '../Col-Extra'
import useWindowSize from '../../hooks/useWindowSize'

function Layout({ children }) {
  const size = useWindowSize()
  return (
    <div className={cn(styles.layout)}>
      <Sidebar flat={size.width < CONST.DESKTOP_SIZE}>sidebar</Sidebar>

      <Main>{children}</Main>

      {size.width > CONST.TABLET_SIZE && <Extra>extra</Extra>}
    </div>
  )
}

export default Layout
