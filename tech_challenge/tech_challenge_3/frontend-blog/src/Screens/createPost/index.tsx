import React from "react"

import '@fortawesome/fontawesome-free/css/all.min.css'
import '@fortawesome/fontawesome-free/js/all.min.js'

import './creatPost.css'

import Header from "../../components/Header"
import Footer from "../../components/Footer"

const CreatePost: React.FC = () => {
    return(
        <>
            <Header />
            <div>
                Create Post  
            </div>
            <Footer />

        </>
    )
}

export default CreatePost

/* <!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Criar Post</title>
    <link rel="stylesheet" href="styles.css">
    <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>
</head>
<body>

    <!-- Cabeçalho -->
    <header>
        <i class="fas fa-bars"></i>
        <h1>Criar Post</h1>
    </header>

    <!-- Formulário de Criação de Post -->
    <div class="container">
        <form class="form-post">
            <input type="text" placeholder="Digite seu nome" required>
            <input type="text" placeholder="Digite o título do post" required>
            <textarea placeholder="Insira o texto" required></textarea>

            <div class="buttons">
                <button type="reset" class="btn limpar">LIMPAR</button>
                <button type="submit" class="btn criar">CRIAR</button>
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