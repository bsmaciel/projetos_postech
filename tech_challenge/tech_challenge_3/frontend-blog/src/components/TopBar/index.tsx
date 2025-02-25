import React from 'react'
import './topBar.css'

import '@fortawesome/fontawesome-free/css/all.min.css'
import '@fortawesome/fontawesome-free/js/all.min.js'

interface TopBarProps{
    pageTitle?: string
}
const TopBar: React.FC<TopBarProps> = ({pageTitle}) => {
    return(
        <div className="top-bar">
            <i className="fas fa-arrow-left"></i>
            <h2 className="pageTitle">{pageTitle}</h2>
        </div>
    )
}

export default TopBar