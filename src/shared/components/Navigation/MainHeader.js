import React from 'react'

import './MainHeader.scss'

export const MainHeader = ({children}) => {
    return (
        <header className="main-header">
            {children}
        </header>
    )
}
