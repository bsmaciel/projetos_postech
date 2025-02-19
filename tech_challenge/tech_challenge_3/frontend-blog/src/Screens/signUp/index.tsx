import React from 'react'
import './signUp.css'

// import '@fortawesome/fontawesome-free/css/all.min.css'
// import '@fortawesome/fontawesome-free/js/all.min.js'

const SignUp: React.FC = () => {
    return(
        <div className="container-signUp">
            <i className="fas fa-arrow-left back-icon"></i>
            <h2 className="titulo">CADASTRO</h2>
            <h1 className="subtitulo">Crie sua conta</h1>

            <form action="#" method="POST">
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