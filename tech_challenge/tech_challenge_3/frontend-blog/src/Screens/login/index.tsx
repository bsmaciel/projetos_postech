import React from 'react'
import './login.css'

import '@fortawesome/fontawesome-free/css/all.min.css'
import '@fortawesome/fontawesome-free/js/all.min.js'

const Login: React.FC = () => {
    return(
        <div className="container-login">
            <div className="login-top-bar">
                <i className="fas fa-arrow-left"></i>
                <h2 className="pageTitle">LOGIN</h2>
            </div>
            <h1 className="subtitulo">Acesse sua conta</h1>

            <form className="login-form">
                <input type="text" placeholder="Nome completo" required />
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Senha" required />
                
                <div className="login-links">
                    <a href="#">Não tem uma conta?</a>
                    <a href="#">Esqueceu sua senha?</a>
                </div>

                <button type="submit" className="btn-entrar">ENTRAR</button>
            </form>
        </div>
    )
}

export default Login
