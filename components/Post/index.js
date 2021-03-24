import React from 'react'
import ProfilePhoto from '../ProfilePhoto'
import style from './styles.module.css'
import TextTitle from '../TextTitle'
import TextBody from '../TextBody'
import {Reply, Retweet, Like} from '../../components/icons'
function Post() {
    return (
        <div className={style.post}>
        <div className={style.profilePhoto}>
            <ProfilePhoto/>
        </div>
        <div className={style.post__body}>
          <div className={style.post__header}>
          <TextTitle>Hatice Koçak @haticekocak</TextTitle>
            <TextBody>this is a tweet </TextBody>
          </div>
          <img src="" alt="" />
          <div className={style.post__footer}>
            <Reply/>
            <Retweet/>
            <Like/>
          </div>
        </div>
      </div>
    )
}

export default Post
