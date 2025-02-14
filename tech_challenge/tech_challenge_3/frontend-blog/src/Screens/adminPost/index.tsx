import React from "react"
import './adminPost.css'

// import '@fortawesome/fontawesome-free/css/all.min.css'
// import '@fortawesome/fontawesome-free/js/all.min.js'

import Header from "../../components/Header"
import Footer from "../../components/Footer"

const AdminPost: React.FC = () => {
    return(
        <>
            <Header />
            <div>
                Admin Post  
            </div>
            <Footer />

        </>
    )
}

export default AdminPost

/* <!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Administrar Posts</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
</head>
<body>

    <header class="top-bar">
        <i class="fas fa-bars menu-icon"></i>
        <h1>Administrar Posts</h1>
        <i class="fas fa-search search-icon"></i>
    </header>

    <main>
        <section class="table-container">
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
                            <a href="#" class="edit">Editar</a>
                            <a href="#" class="delete">Apagar</a>
                        </td>
                    </tr>
                    <tr>
                        <td>00</td>
                        <td>Marcos Oliveira</td>
                        <td>JavaScript</td>
                        <td>
                            <a href="#" class="edit">Editar</a>
                            <a href="#" class="delete">Apagar</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>

        <section class="form-container">
            <input type="text" value="Marcos Oliveira" class="input-box">
            <input type="text" value="JavaScript" class="input-box">
            <textarea class="text-area">Quisque eu nisi mi. Curabitur iaculis dolor lacus, et viverra mi iaculis sagittis...</textarea>

            <div class="buttons">
                <button class="cancel-btn">Cancelar</button>
                <button class="save-btn">Salvar</button>
            </div>
        </section>
    </main>

    <footer class="bottom-bar">
        <i class="fas fa-arrow-left"></i>
        <span>FIAP</span>
    </footer>

</body>
</html>
 */