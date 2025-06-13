import React from "react"

import '@fortawesome/fontawesome-free/css/all.min.css'
import '@fortawesome/fontawesome-free/js/all.min.js'

import './adminPost.css'

import Header from "../../components/Header"
import Footer from "../../components/Footer"

const AdminPost: React.FC = () => {
    return(
        <>
            <div className="container-adminPost">
                <Header pageTitle='ADMIN POST'/>
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
                                <td>
                                    <a href="#" className="edit">Editar</a>
                                    <a href="#" className="delete">Apagar</a>
                                </td>
                            </tr>
                            <tr>
                                <td>00</td>
                                <td>Nome Sobrenome</td>
                                <td>Título aqui</td>
                                <td>
                                    <a href="#" className="edit">Editar</a>
                                    <a href="#" className="delete">Apagar</a>
                                </td>
                            </tr>
                            <tr>
                                <td>00</td>
                                <td>Nome Sobrenome</td>
                                <td>Título aqui</td>
                                <td>
                                    <a href="#" className="edit">Editar</a>
                                    <a href="#" className="delete">Apagar</a>
                                </td>
                            </tr>
                            <tr>
                                <td>00</td>
                                <td>Marcos Oliveira</td>
                                <td>JavaScript</td>
                                <td>
                                    <a href="#" className="edit">Editar</a>
                                    <a href="#" className="delete">Apagar</a>
                                </td>
                            </tr>
                            <tr>
                                <td>00</td>
                                <td>Nome Sobrenome</td>
                                <td>Título aqui</td>
                                <td>
                                    <a href="#" className="edit">Editar</a>
                                    <a href="#" className="delete">Apagar</a>
                                </td>
                            </tr>
                            <tr>
                                <td>00</td>
                                <td>Nome Sobrenome</td>
                                <td>Título aqui</td>
                                <td>
                                    <a href="#" className="edit">Editar</a>
                                    <a href="#" className="delete">Apagar</a>
                                </td>
                            </tr>
                            <tr>
                                <td>00</td>
                                <td>Nome Sobrenome</td>
                                <td>Título aqui</td>
                                <td>
                                    <a href="#" className="edit">Editar</a>
                                    <a href="#" className="delete">Apagar</a>
                                </td>
                            </tr>
                            <tr>
                                <td>00</td>
                                <td>Nome Sobrenome</td>
                                <td>Título aqui</td>
                                <td>
                                    <a href="#" className="edit">Editar</a>
                                    <a href="#" className="delete">Apagar</a>
                                </td>
                            </tr>
                            <tr>
                                <td>00</td>
                                <td>Nome Sobrenome</td>
                                <td>Título aqui</td>
                                <td>
                                    <a href="#" className="edit">Editar</a>
                                    <a href="#" className="delete">Apagar</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <form className="form-adminPost">
                    <input type="text" placeholder="Digite seu nome" required value="" />
                    <input type="text" placeholder="Digite o título do post" required value="" className="input-box" />
                    <textarea placeholder="Insira o texto" required></textarea>

                    <div className="buttons">
                        <button className="cancel-btn">Cancelar</button>
                        <button className="save-btn">Salvar</button>
                    </div>
                </form>
                <Footer />
            </div>
        </>

    )
}

export default AdminPost
