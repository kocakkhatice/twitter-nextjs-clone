import React, { useState } from 'react'
import ProfilePhoto from '../ProfilePhoto'
import style from './styles.module.css'
import IconButton from '../Button/iconButton'
import { Close } from '../icons'
import Stack from '../Stack'
import TweetButton from '../TweetButton'
function TweetModal({ onClick = () => {} }) {
  const [tweet, setTweet] = useState('')

  //  const [tweet, setTweet] = useState({})
  const onSubmit = () => {
    // // setTweet({
    // //   name: 'hatice',
    // //   screen_name: 'haticekocak',
    // //   profile_image_url_https:
    // //     'https://pbs.twimg.com/profile_images/1327521348541960194/Zn1hP8nk_400x400.jpg',
    // //   tweet: {
    // //     created_at: new Date(),
    // //     retweet_count: 0,
    // //     favorite_count: 0,
    // //     retweeted: false,
    // //     favorited: false,
    // //     text: tweetText
    // //   }
    // // })
    // const response = await fetch(
    //   'https://twitter-nextjs-f18f5-default-rtdb.firebaseio.com/user.json',
    //   {
    //     method: 'POST',
    //     body: JSON.stringify({
    //       id: new Date(),
    //       name: 'hatice',
    //       screen_name: 'haticekocak',
    //       profile_image_url_https:
    //         'https://pbs.twimg.com/profile_images/1327521348541960194/Zn1hP8nk_400x400.jpg',
    //       tweet: {
    //         created_at: new Date(),
    //         retweet_count: 0,
    //         favorite_count: 0,
    //         retweeted: false,
    //         favorited: false,
    //         text: tweet
    //       }
    //     })
    //   }
    // )
    // const data = await response.json()
    // console.log(data)
  }
  return (
    <div className={style.overlay}>
      <div className={style.modal}>
        <div className={style.avatar}>
          <ProfilePhoto />
        </div>
        <div className={style.body}>
          <div>
            <textarea
              className={style.textarea}
              name=""
              rows="4"
              placeholder="What do you think?"
              value={tweet}
              onChange={(e) => setTweet(e.target.value)}
            />
          </div>
          <Stack gap={20} className={style.footer}>
            <IconButton className={style.close} onClick={onClick}>
              <Close />
            </IconButton>
            <TweetButton onClick={onSubmit}>Tweet</TweetButton>
          </Stack>
        </div>
      </div>
    </div>
  )
}

export default TweetModal
