import React from "react"
import styled from 'styled-components';

const MainContentContainer = styled.main`
    background-color: #ffe100;
    color: #000000;
    text-align: center;
    /* padding: 10px 0; */
    /* position: fixed; */
    /* top: 0; */
    width: 100%;
    height: 100%;
    `;

const MainContent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return(
        <MainContentContainer>
                {children}
        </MainContentContainer>
    )
}

export default MainContent;
