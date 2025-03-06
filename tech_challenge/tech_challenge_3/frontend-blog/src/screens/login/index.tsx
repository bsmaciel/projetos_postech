import React from 'react'
import TopBar from '../../components/TopBar'
import './login.css'

import '@fortawesome/fontawesome-free/css/all.min.css'
import '@fortawesome/fontawesome-free/js/all.min.js'

const Login: React.FC = () => {
    return(
        <div className="container-login">
            <TopBar pageTitle='LOGIN'/>
            <h2 className="subtitulo-login">Acesse sua conta</h2>

            <form className="form-login">
                <input type="text" placeholder="Nome completo" required />
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Senha" required />
                
                <div className="links-login">
                    <a href="#">Não tem uma conta?</a>
                    <a href="#">Esqueceu sua senha?</a>
                </div>

                <button type="submit" className="btn-login">ENTRAR</button>
            </form>
        </div>
    )
}

export default Login
