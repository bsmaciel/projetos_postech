import React from "react"

import '@fortawesome/fontawesome-free/css/all.min.css'
import '@fortawesome/fontawesome-free/js/all.min.js'

import './adminPost.css'

import Header from "../../components/Header"
import Footer from "../../components/Footer"

const AdminPost: React.FC = () => {
    return(
        <>
            <Header />
            <div className="container-adminPost">
                    <section className="table-container">
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
                                    <td>Marcos Oliveira</td>
                                    <td>JavaScript</td>
                                    <td>
                                        <a href="#" className="edit">Editar</a>
                                        <a href="#" className="delete">Apagar</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </section>
                    <section className="form-container">
                        <input type="text" value="Marcos Oliveira" className="input-box" />
                        <input type="text" value="JavaScript" className="input-box" />
                        <textarea className="text-area">Quisque eu nisi mi. Curabitur iaculis dolor lacus, et viverra mi iaculis sagittis...</textarea>

                        <div className="buttons">
                            <button className="cancel-btn">Cancelar</button>
                            <button className="save-btn">Salvar</button>
                        </div>
                    </section>
            </div>
            <Footer />
        </>

    )
}

export default AdminPost
