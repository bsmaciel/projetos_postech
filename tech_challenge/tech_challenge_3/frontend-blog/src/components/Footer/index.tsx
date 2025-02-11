import React from "react";
import styled from 'styled-components';

import '@fortawesome/fontawesome-free/css/all.min.css';
import '@fortawesome/fontawesome-free/js/all.min.js';

const FooterContainer = styled.footer`
    background: #2D9CFA;
    color: white;
    display: flex;
    justify-content: space-between;
    /* text-align: center; */
    /* align-items: space-between; */
    padding: 15px;
    /* position: fixed; */
    /* bottom: 0; */
    width: 100%;
    `;

const FooterLogo = styled.h1`
    color: #FFFF00;
    `;

const FooterArrow = styled.i`
    color: #FFFF00;
    align-items: rigth;
    margin-right: 10px;
    cursor: pointer;
`;

const Footer: React.FC = () => {
    return(
        <FooterContainer>
            <FooterArrow><i className="fas fa-arrow-left"></i></FooterArrow>
            <FooterLogo>FIAP</FooterLogo>
        </FooterContainer>
    );
};

export default Footer;