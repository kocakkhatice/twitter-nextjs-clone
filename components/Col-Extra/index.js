import React from 'react'
import cn from 'classnames'
import style from './styles.module.css'
function Extra({children}) {
    return (
        <div className={cn(style.extra)}>
            {children}
            
        </div>
    )
}

export default Extra
