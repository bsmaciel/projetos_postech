import React from "react"
import './mainContent.css'

import '@fortawesome/fontawesome-free/css/all.min.css'
import '@fortawesome/fontawesome-free/js/all.min.js'


const MainContent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return(
        <>
            {children}
        </>
    )
}

export default MainContent;
