import React from 'react'
import { useRouter } from 'next/router'
import NavigationButton from '../NavigationButton'
import { MENU } from '../../constants'
import TextTitle from '../TextTitle'
import style from './styles.module.css'

function Navigation({ flat = false }) {
  const router = useRouter()
  return (
    <nav className={style.nav}>
      {MENU.map((menu) => {
        const showTitle = !flat && menu.title.length > 0
        const selected = router.pathname === menu.path
        return (
          <NavigationButton
            key={menu.key}
            notify={menu.notify}
            selected={selected}
            href={menu.path}
            className={style.navButton}
          >
            {selected ? menu.iconSelected : menu.icon}
            {showTitle && <TextTitle>{menu.title}</TextTitle>}
          </NavigationButton>
        )
      })}
    </nav>
  )
}

export default Navigation
