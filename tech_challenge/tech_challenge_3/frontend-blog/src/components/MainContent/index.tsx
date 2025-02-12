import React from "react"

import '@fortawesome/fontawesome-free/css/all.min.css'
import '@fortawesome/fontawesome-free/js/all.min.js'

import './mainContent.css'

const MainContent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return(
        <>
            {children}
        </>
    )
}

export default MainContent;
