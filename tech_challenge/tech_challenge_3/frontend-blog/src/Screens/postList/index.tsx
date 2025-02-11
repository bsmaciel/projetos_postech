import React from "react"
// import styled from 'styled-components';
import './style.css'



/* const PostListContainer = styled.main`
    background-color: #ff0004;
    color: #000000;
    text-align: center;
    padding: 10px 0;
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    `; 
*/

const PostList: React.FC = () => {
    return(
        <>
            <main>
                <div className="post">
                    <p className="autor">AUTOR</p>
                    <h2 className="titulo">Título do Post</h2>
                    <p className="descricao">
                    Vestibulum ultricies condimentum nunc, in euismod est suscipit ac. Curabitur ac volutpat augue. Aenean vel maximus nisl. Suspendisse potenti...
                    </p>
                    <div className="interacao">
                        <span><i className="fas fa-heart"></i> 609</span>
                        <span><i className="fas fa-comment"></i> 120</span>
                        <a href="#" className="mais"><i className="fas fa-plus"></i></a>
                    </div>
                    <div className="paginacao">
                        <a href="#" className="desabilitado">1</a>
                        <a href="#" className="ativo">2</a>
                        <a href="#">3</a>
                        <span>...</span>
                        <a href="#">?</a>
                    </div>
                </div>
            </main>  
        </>
    )
}

export default PostList;