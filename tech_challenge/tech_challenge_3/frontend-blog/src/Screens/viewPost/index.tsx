import React from "react"
import './viewPost.css'

// import '@fortawesome/fontawesome-free/css/all.min.css'
// import '@fortawesome/fontawesome-free/js/all.min.js'

import Header from "../../components/Header"
import Footer from "../../components/Footer"

const ViewPost: React.FC = () => {
    return(
        <>
            <Header />
            <div>
                View Post  
            </div>
            <Footer />

        </>
    )
}

export default ViewPost

/* <!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Visualizar Post</title>
    <link rel="stylesheet" href="styles.css">
    <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>
</head>
<body>

    <!-- Cabeçalho -->
    <header>
        <i class="fas fa-bars"></i>
        <h1>Visualizar Post</h1>
        <i class="fas fa-search"></i>
    </header>

    <!-- Conteúdo do Post -->
    <div class="container">
        <div class="post-completo">
            <p class="autor">AUTOR</p>
            <h2 class="titulo">Título do Post</h2>
            <p class="conteudo">
                Vestibulum ultricies condimentum nunc, in euismod est suscipit ac. Curabitur ac volutpat augue. Aenean vel maximus nisl. Suspendisse potenti. Nulla interdum neque et nulla vehicula blandit. Donec mollis quam nulla, in placerat nisl faucibus tincidunt. Proin mollis vehicula nibh eu mattis. Proin vel erat vel urna gravida convallis vitae vel enim. Nulla varius ultricies nunc, sed vulputate enim. Nulla viverra felis eros. Aliquam erat volutpat.
            </p>
            <p class="conteudo">
                Ut metus ante, auctor eget diam at, posuere hendrerit magna. Suspendisse fermentum maximus nibh, vitae feugiat massa tristique in. In hac habitasse platea dictumst. Nullam ullamcorper, felis ac venenatis tempus, nisl metus pulvinar lectus, dignissim porttitor odio ex. Sed nisi sapien, gravida at diam eu, ultrices dictum erat. Fusce arcu neque, finibus quis dictum vitae, rutrum sit amet felis.
            </p>
            <p class="conteudo">
                Pellentesque at nunc ut mi fermentum ullamcorper ut quis dolor. Etiam fringilla enim sed dignissim sollicitudin. Aliquam erat volutpat. Sed pharetra commodo velit sed aliquam. Pellentesque tristique lectus vitae nisl accumsan blandit. Maecenas consectetur, lectus euismod accumsan fringilla, mi lacus condimentum massa, a venenatis justo turpis in neque. Phasellus vitae nisi magna.
            </p>
            
            <!-- Interação -->
            <div class="interacao">
                <span><i class="fas fa-heart"></i> 609</span>
                <span><i class="fas fa-comment"></i> 120</span>
            </div>
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