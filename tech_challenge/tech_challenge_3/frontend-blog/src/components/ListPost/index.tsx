import React from "react"
import styled from 'styled-components';

const ListPostContainer = styled.main`
    background-color: #ffa600;
    color: #000000;
    text-align: center;
    padding: 10px 0;
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    `;

const ListPost: React.FC = () => {
    return(
        <ListPostContainer>
            <main>
                <h1>ListPost</h1>
            </main>
        </ListPostContainer>
    )
}

export default ListPost;
