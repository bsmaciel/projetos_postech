import React from "react"
import styled from 'styled-components';

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
    )
}

export default MainContent;
