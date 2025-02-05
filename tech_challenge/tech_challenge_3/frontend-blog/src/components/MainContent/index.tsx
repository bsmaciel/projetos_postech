import React from 'react';
// import styled from 'styled-components';

const MainContent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return(
        <main>
            {children}
        </main>
    )
}

export default MainContent;