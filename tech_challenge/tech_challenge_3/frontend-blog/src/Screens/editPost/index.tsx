import React from "react"

import '@fortawesome/fontawesome-free/css/all.min.css'
import '@fortawesome/fontawesome-free/js/all.min.js'

import './editPost.css'

import Header from "../../components/Header"
import Footer from "../../components/Footer"

const EditPost: React.FC = () => {
    return(
        <>
            <Header />
            <div>
                Edit Post  
            </div>
            <Footer />

        </>
    )
}

export default EditPost

/* <!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Editar Post</title>
    <link rel="stylesheet" href="styles.css">
    <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>
</head>
<body>

    <!-- Cabeçalho -->
    <header>
        <i class="fas fa-bars"></i>
        <h1>Editar Post</h1>
        <i class="fas fa-search"></i>
    </header>

    <!-- Container -->
    <div class="container">

        <!-- Tabela de Posts -->
        <div class="table-container">
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
                </tbody>
            </table>
        </div>

        <!-- Formulário de Edição -->
        <form class="form-editar">
            <input type="text" placeholder="Nome do autor" required>
            <input type="text" placeholder="Título do post" required>
            <textarea placeholder="Texto do post" required></textarea>
            
            <!-- Botões -->
            <div class="buttons">
                <button type="reset" class="btn limpar">LIMPAR</button>
                <button type="submit" class="btn editar">EDITAR</button>
            </div>
        </form>

    </div>

    <!-- Rodapé -->
    <footer>
        <i class="fas fa-arrow-left"></i>
        <span>FIAP</span>
    </footer>

</body>
</html>
 */