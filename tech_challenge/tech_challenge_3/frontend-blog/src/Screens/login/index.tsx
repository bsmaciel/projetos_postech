import React from "react"
import './login.css'

import '@fortawesome/fontawesome-free/css/all.min.css'
import '@fortawesome/fontawesome-free/js/all.min.js'

const Login: React.FC = () => {
    return(
        <>
            Login
        </>
    )
}

export default Login

/* <!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h2 class="titulo">LOGIN</h2>
        <h1 class="subtitulo">Acesse sua conta</h1>

        <form>
            <input type="text" placeholder="Nome completo" required>
            <input type="email" placeholder="Email" required>
            <input type="password" placeholder="Senha" required>

            <div class="links">
                <a href="#">Não tem uma conta?</a>
                <a href="#">Esqueceu sua senha?</a>
            </div>

            <button type="submit" class="btn-entrar">ENTRAR</button>
        </form>
    </div>
</body>
</html>
 */