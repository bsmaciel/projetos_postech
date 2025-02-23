import React from 'react'
import './signUp.css'

import '@fortawesome/fontawesome-free/css/all.min.css'
import '@fortawesome/fontawesome-free/js/all.min.js'

const SignUp: React.FC = () => {
    return(
        <div className="container-signUp">
            <div className="signUp-top-bar">
                <i className="fas fa-arrow-left"></i>
                <h2 className="pageTitle">CADASTRO</h2>
            </div>
            <h1 className="subtitulo">Crie sua conta</h1>

            <form className="signUp-form" action="#" method="POST">
                <input type="text" placeholder="Nome completo" required />
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Senha" required />
                <input type="password" placeholder="Confirmar senha" required />

                <p className="terms">
                    Ao criar sua conta, você concorda com nossos <br/>
                    <a href="#">Termos de Serviço</a> e <a href="#">Política de Privacidade</a>
                </p>
                
                <button type="submit" className="btn-cadastrar">CADASTRAR</button>
            </form>
        </div>
    )
}

export default SignUp