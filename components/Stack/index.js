import React from 'react'
import style from './styles.module.css'
import cn from 'classnames'
function Stack({ gap = 10, column = false, children }) {
  return (
    <div
      className={cn([style.stack, column && style.column])}
      style={{ '--gap': `${gap}px` }}
    >
      {children}
    </div>
  )
}

export default Stack
