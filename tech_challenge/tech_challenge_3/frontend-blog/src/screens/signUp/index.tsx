import React from 'react'
import TopBar from '../../components/TopBar'
import './signUp.css'

import '@fortawesome/fontawesome-free/css/all.min.css'
import '@fortawesome/fontawesome-free/js/all.min.js'

const SignUp: React.FC = () => {
    return(
        <div className="container-signUp">
            <TopBar pageTitle='CADASTRO' />
            <h2 className="subtitulo-signUp">Crie sua conta</h2>

            <form className="form-signUp" action="#" method="POST">
                <input type="text" placeholder="Nome completo" required />
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Senha" required />
                <input type="password" placeholder="Confirmar senha" required />

                <p className="terms">
                    Ao criar sua conta, você concorda com nossos <br/><a href="#">Termos de Serviço </a> e <a href="#"> Política de Privacidade</a>
                </p>
                
                <button type="submit" className="btn-signUp">CADASTRAR</button>
            </form>
        </div>
    )
}

export default SignUp