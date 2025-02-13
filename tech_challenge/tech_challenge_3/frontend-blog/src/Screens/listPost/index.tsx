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
            <div>
                List Post  
            </div>
            <Footer />

        </>
    )
}

export default ListPost

/* <!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lista de Posts</title>
    <link rel="stylesheet" href="styles.css">
    <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>
</head>
<body>

    <!-- Cabeçalho -->
    <header>
        <i class="fas fa-bars"></i>
        <h1>Visualizar Lista Posts</h1>
        <i class="fas fa-search"></i>
    </header>

    <!-- Lista de Posts -->
    <div class="container">
        <div class="post">
            <p class="autor">AUTOR</p>
            <h2 class="titulo">Título do Post</h2>
            <p class="descricao">
                Vestibulum ultricies condimentum nunc, in euismod est suscipit ac. Curabitur ac volutpat augue. Aenean vel maximus nisl. Suspendisse potenti...
            </p>
            <div class="interacao">
                <span><i class="fas fa-heart"></i> 609</span>
                <span><i class="fas fa-comment"></i> 120</span>
                <a href="#" class="mais"><i class="fas fa-plus"></i></a>
            </div>
        </div>

        <div class="post">
            <p class="autor">AUTOR</p>
            <h2 class="titulo">Título do Post</h2>
            <p class="descricao">
                Vestibulum ultricies condimentum nunc, in euismod est suscipit ac. Curabitur ac volutpat augue. Aenean vel maximus nisl. Suspendisse potenti...
            </p>
            <div class="interacao">
                <span><i class="fas fa-heart"></i> 609</span>
                <span><i class="fas fa-comment"></i> 120</span>
                <a href="#" class="mais"><i class="fas fa-plus"></i></a>
            </div>
        </div>

        <div class="paginacao">
            <a href="#" class="desabilitado">1</a>
            <a href="#" class="ativo">2</a>
            <a href="#">3</a>
            <span>...</span>
            <a href="#">></a>
        </div>
    </div>

    <!-- Rodapé -->
    <footer>
        <i class="fas fa-arrow-left"></i>
        <span>FIAP</span>
    </footer>

</body>
</html>
 */
