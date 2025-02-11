import React from "react"
import styled from 'styled-components';

const AddPostContainer = styled.main`
    background-color: #d9ff00;
    color: #000000;
    text-align: center;
    padding: 10px 0;
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    `;

const AddPost: React.FC = () => {
    return(
        <AddPostContainer>
            <main>
                <h1>AddPost</h1>
            </main>
        </AddPostContainer>
    )
}

export default AddPost;
