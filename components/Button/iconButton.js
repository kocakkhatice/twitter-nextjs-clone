import React from 'react'
import style from './styles.module.css'
import cn from 'classnames'
import Button from './index'

function IconButton({ children, className, ...props }) {
  return (
    <Button className={cn(style.iconButton, className)} {...props}>
      {children}
    </Button>
  )
}

export default IconButton
