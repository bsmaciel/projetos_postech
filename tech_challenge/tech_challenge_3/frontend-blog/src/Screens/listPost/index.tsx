import React from "react"
import './listPost.css'

// import '@fortawesome/fontawesome-free/css/all.min.css'
// import '@fortawesome/fontawesome-free/js/all.min.js'

import Header from "../../components/Header"
import Footer from "../../components/Footer"

const ListPost: React.FC = () => {
    return(
        <>
        <div className="container-listPost">
            <Header pageTitle='LISTA' />
            <div className="list">
                <div className="post">
                    <p className="autor">AUTOR</p>
                    <h2 className="titulo">Título do Post</h2>
                    <p className="corpoTexto">
                    Mauris ultrices arcu mattis pharetra sagittis. Cras tristique nibh pharetra, tincidunt ex vel, mattis tellus. Vestibulum porta sem non luctus viverra. Phasellus sagittis, eros sed consectetur laoreet, massa ipsum sollicitudin lectus, in maximus leo velit eget tellus. Donec varius luctus tincidunt. Proin pulvinar, velit in pretium posuere, eros mauris cursus sem, id congue nisl ex sed leo. Nulla facilisi. Ut eget tortor condimentum, eleifend nibh a, euismod elit. Quisque vestibulum accumsan ex quis accumsan. Etiam a enim...
                    </p>
                    <div className="interacao-listPost">
                        <span><i className="fas fa-heart"></i> 609</span>
                        <span><i className="fas fa-comment"></i> 120</span>
                        <a href="#" className="mais"><i className="fas fa-plus"></i></a>
                    </div>
                </div>
                <div className="post">
                    <p className="autor">AUTOR</p>
                    <h2 className="titulo">Título do Post</h2>
                    <p className="corpoTexto">
                    Morbi in mattis ipsum. Proin semper, nibh eget lacinia feugiat, quam odio interdum diam, vitae placerat neque lectus quis lorem. Curabitur imperdiet urna dolor, viverra semper ex ultrices sed. Vestibulum ultricies condimentum nunc, in euismod est suscipit ac. Curabitur ac volutpat augue. Aenean vel maximus nisl. Suspendisse potenti...
                    </p>
                    <div className="interacao-listPost">
                        <span><i className="fas fa-heart"></i> 609</span>
                        <span><i className="fas fa-comment"></i> 120</span>
                        <a href="#" className="mais"><i className="fas fa-plus"></i></a>
                    </div>
                </div>
                <div className="paginacao">
                    <a href="#">**</a>
                    <a href="#" className="desabilitado">1</a>
                    <a href="#" className="ativo">2</a>
                    <a href="#" className="desabilitado">3</a>
                    <span>...</span>
                    <a href="#">**</a>
                </div>
            </div>
            <Footer />
        </div>
        </>
    )
}

export default ListPost
