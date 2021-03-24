import React from 'react'
import cn from 'classnames'
import style from './styles.module.css'

function TextBody({bold = false, children, className, ...props}) {
    return (
        /*Öncelik, ezme sıraları önemli. */
        <span className={cn([style.body, bold && style.bold, className])} {...props}>
            {children}
        </span>
    )
}

export default TextBody
