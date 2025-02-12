import React from "react"
import './mainContent.css'

import '@fortawesome/fontawesome-free/css/all.min.css'
import '@fortawesome/fontawesome-free/js/all.min.js'

<<<<<<< HEAD

const MainContent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return(
        <>
            {children}
        </>
=======
const MainContentContainer = styled.main`
    background: #FFFF00;
    width: 600px;
    margin: auto;
    height: 100vh;
    text-align: center;
`;

const MainContent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return(
        <MainContentContainer>
            <div>
                {children}
            </div>
        </MainContentContainer>
>>>>>>> 82e33fd (Desenvolvimento do layout do Tech Challeng, styled-components e display flex)
    )
}

export default MainContent;
