import React from 'react'
import ProfilePhoto from '../ProfilePhoto'
import style from './styles.module.css'
import IconButton from '../Button/iconButton'
import * as Icon from '../icons'
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict'
function Tweet({
  created_at,
  retweet_count,
  favorite_count,
  retweeted,
  favorited,
  text,
  name,
  screen_name,
  profile_image_url_https
}) {
  return (
    <article className={style.tweet}>
      <div className={style.avatar}>
        <ProfilePhoto src={profile_image_url_https} />
      </div>
      <div className={style.body}>
        <header className={style.header}>
          <span className={style.name}>{name} </span>{' '}
          <span className={style.slug}>@{screen_name}</span>{' '}
          {/* <span>· {formatDistanceToNowStrict(new Date(created_at))}</span> */}
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
            {retweet_count && <span>{retweet_count}</span>}
          </div>
          <div className={style.footerButton}>
            <IconButton className={style.actionButton}>
              <Icon.Like />
            </IconButton>
            {favorite_count && <span>{favorite_count}</span>}
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
