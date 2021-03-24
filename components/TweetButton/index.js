import React from 'react'
import Button from '../Button'
import cn from 'classnames'
import style from './styles.module.css'

function TweetButton({ big = false, children, className, ...props }) {
  return (
    <Button
      className={cn(style.tweetButton, big && style.biggerButton, className)}
      {...props}
    >
      {children}
    </Button>
  )
}

export default TweetButton
