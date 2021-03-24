import React from 'react'
import cn from 'classnames'
import style from './styles.module.css'
import Navigation from '../Navigation'
import TweetButton from '../TweetButton'
import ProfileBox from '../ProfileBox'

function Sidebar({ flat }) {
  return (
    <div className={cn(style.sidebar)}>
      <Navigation flat={flat} />
      <div className={style.tweetButton}>
        <TweetButton bigButton full={!flat}>
          {flat ? 'a' : 'Tweet'}
        </TweetButton>
      </div>
      <div className={style.profile}>
        <ProfileBox flat={flat} />
      </div>
    </div>
  )
}

export default Sidebar
