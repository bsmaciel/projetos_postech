import React from "react"
import './listPost.css'

// import '@fortawesome/fontawesome-free/css/all.min.css'
// import '@fortawesome/fontawesome-free/js/all.min.js'

import Header from "../../components/Header"
import Footer from "../../components/Footer"

const ListPost: React.FC = () => {
    return(
        <>
        <Header />
        <div className="container-listPost">
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
            </div>
        </div>
        <div className="container-listPost">
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
            </div>

            <div className="paginacao">
                <a href="#" className="desabilitado">1</a>
                <a href="#" className="ativo">2</a>
                <a href="#">3</a>
                <span>...</span>
                <a href="#">#</a>
            </div>
        </div>
        <Footer />
        </>
    )
}

export default ListPost
