import React, { useState } from 'react'
import cn from 'classnames'
import style from './styles.module.css'
import Navigation from '../Navigation'
import TweetButton from '../TweetButton'
import ProfileBox from '../ProfileBox'
import { Twitter } from '../icons'
import TweetModal from '../TweetModal'
function Sidebar({ flat }) {
  const [isShowModal, setIsShowModal] = useState(false)
  return (
    <div className={cn(style.sidebar)}>
      <Navigation flat={flat} />
      <div className={style.tweetButton}>
        <TweetButton big full={!flat} onClick={() => setIsShowModal(true)}>
          {flat ? <Twitter /> : 'Tweet'}
        </TweetButton>
      </div>
      {isShowModal && <TweetModal onClick={() => setIsShowModal(false)} />}
      <div className={style.profile}>
        <ProfileBox flat={flat} />
      </div>
    </div>
  )
}

export default Sidebar
