import React from 'react'
import ProfilePhoto from '../ProfilePhoto'
import style from './styles.module.css'
import IconButton from '../Button/iconButton'
import * as Icon from '../icons'
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict'
function Tweet({ name, slug, datetime, text, children }) {
  return (
    <article className={style.tweet}>
      <div className={style.avatar}>
        <ProfilePhoto />
      </div>
      <div className={style.body}>
        <header className={style.header}>
          <span className={style.name}>{name}</span>
          <span className={style.slug}>@{slug}</span>{' '}
          <span>· {formatDistanceToNowStrict(datetime)}</span>
        </header>
        <div className={style.content}>{text}</div>
        <footer className={style.footer}>
          <div className={style.footerButton}>
            <IconButton className={style.actionButton}>
              <Icon.Reply />
            </IconButton>
            <span>4</span>
          </div>
          <div className={style.footerButton}>
            <IconButton className={style.actionButton}>
              <Icon.Retweet />
            </IconButton>
            <span>78</span>
          </div>
          <div className={style.footerButton}>
            <IconButton className={style.actionButton}>
              <Icon.Like />
            </IconButton>
            <span>12</span>
          </div>
          <div className={style.footerButton}>
            <IconButton className={style.actionButton}>
              <Icon.Share />
            </IconButton>
          </div>
        </footer>
      </div>
    </article>
  )
}

export default Tweet
