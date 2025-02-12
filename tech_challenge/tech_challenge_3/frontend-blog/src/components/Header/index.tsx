import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    background-color: #2699FB;
    color: white;
    text-align: center;
    padding: 10px 0;
    /* position: fixed; */
    top: 0;
    width: 100%;
    z-index: 1;
    `;

const Header: React.FC = () => {
    return(
        <HeaderContainer>
            <h1>HEADER</h1>
        </HeaderContainer>
    );
};

export default Header;