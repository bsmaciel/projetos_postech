import React from "react"
import './editPost.css'

import '@fortawesome/fontawesome-free/css/all.min.css'
import '@fortawesome/fontawesome-free/js/all.min.js'

import Header from "../../components/Header"
import Footer from "../../components/Footer"

const EditPost: React.FC = () => {
    return(
        <>
        <Header pageTitle='EDITAR POST' />
        <div className="container-editPost">
        <div className="table-container">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Autor</th>
                        <th>Título Post</th>
                        <th>Selecionar</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>00</td>
                        <td>Nome Sobrenome</td>
                        <td>Título aqui</td>
                        <td><a href="#">Editar</a></td>
                    </tr>
                    <tr>
                        <td>15</td>
                        <td>Joaquim da Silva</td>
                        <td>Front-end com React</td>
                        <td><a href="#">Editar</a></td>
                    </tr>
                    <tr>
                        <td>00</td>
                        <td>Nome Sobrenome</td>
                        <td>Título aqui</td>
                        <td><a href="#">Editar</a></td>
                    </tr>
                    <tr>
                        <td>00</td>
                        <td>Nome Sobrenome</td>
                        <td>Título aqui</td>
                        <td><a href="#">Editar</a></td>
                    </tr>
                    <tr>
                        <td>00</td>
                        <td>Nome Sobrenome</td>
                        <td>Título aqui</td>
                        <td><a href="#">Editar</a></td>
                    </tr>
                    <tr>
                        <td>00</td>
                        <td>Nome Sobrenome</td>
                        <td>Título aqui</td>
                        <td><a href="#">Editar</a></td>
                    </tr>
                    <tr>
                        <td>00</td>
                        <td>Nome Sobrenome</td>
                        <td>Título aqui</td>
                        <td><a href="#">Editar</a></td>
                    </tr>
                    <tr>
                        <td>00</td>
                        <td>Nome Sobrenome</td>
                        <td>Título aqui</td>
                        <td><a href="#">Editar</a></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <form className="form-editPost">
            <input className="form-editar" type="text" placeholder="Nome do autor" required />
            <input className="form-editar" type="text" placeholder="Título do post" required />
            <textarea placeholder="Texto do post" required></textarea>
            
            <div className="buttons">
                <button type="reset" className="btn limpar">LIMPAR</button>
                <button type="submit" className="btn editar">EDITAR</button>
            </div>
        </form>
        </div>
        <Footer />
        </>
    )
}

export default EditPost
