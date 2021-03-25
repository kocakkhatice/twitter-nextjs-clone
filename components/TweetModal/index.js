import React from 'react'
import ProfilePhoto from '../ProfilePhoto'
import style from './styles.module.css'
import IconButton from '../Button/iconButton'
import { Close } from '../icons'
import Stack from '../Stack'
import TweetButton from '../TweetButton'
function TweetModal({ onClick = () => {} }) {
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
              placeholder="Ne düşünüyorsun"
            />
          </div>
          <Stack gap={20} className={style.footer}>
            <IconButton className={style.close} onClick={onClick}>
              <Close />
            </IconButton>
            <TweetButton>Tweet</TweetButton>
          </Stack>
        </div>
      </div>
    </div>
  )
}

export default TweetModal
