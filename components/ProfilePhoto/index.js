import React from 'react'
import cn from 'classnames'
import style from './styles.module.css'
function ProfilePhoto({size=47, src="https://pbs.twimg.com/profile_images/1327521348541960194/Zn1hP8nk_400x400.jpg", alt, children}) {
    return (
        <div className={cn([style.photo])} style = {{width:size, height:size}}>
            <img src={src} alt={alt} />
        </div>
    )
}

export default ProfilePhoto
