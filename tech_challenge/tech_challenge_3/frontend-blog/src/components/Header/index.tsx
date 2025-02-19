import React from 'react'
import './header.css'

// import '@fortawesome/fontawesome-free/css/all.min.css'
// import '@fortawesome/fontawesome-free/js/all.min.js'

interface HeaderProps{
    pageTitle?: string
}
const Header: React.FC<HeaderProps> = ({pageTitle}) => {
    return(
        <>
            <header>
                <i className="fas fa-bars"></i>
                <h1>{pageTitle ? pageTitle : 'Título provisório'}</h1>
                <i className="fas fa-search"></i>

            </header>
        </>
    )
}

export default Header