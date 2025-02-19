import React from 'react'
import './login.css'

// import '@fortawesome/fontawesome-free/css/all.min.css'
// import '@fortawesome/fontawesome-free/js/all.min.js'

const Login: React.FC = () => {
    return(
        <div className="container-login">
            <i className="fas fa-arrow-left"></i>
            <h2 className="titulo">LOGIN</h2>
            <h1 className="subtitulo">Acesse sua conta</h1>

            <form>
                <input type="text" placeholder="Nome completo" required />
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Senha" required />
                
                <div className="links">
                    <a href="#">Não tem uma conta?</a>
                    <a href="#">Esqueceu sua senha?</a>
                </div>

                <button type="submit" className="btn-entrar">ENTRAR</button>
            </form>
        </div>
    )
}

export default Login
