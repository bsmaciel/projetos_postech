import React from "react"
import TopBar from '../../components/TopBar'
import './passwordReset.css'

import '@fortawesome/fontawesome-free/css/all.min.css'
import '@fortawesome/fontawesome-free/js/all.min.js'


const PasswordReset: React.FC = () => {
    return(
        <div className="container-passwordReset">
            <TopBar pageTitle='SUPORTE' />
            <h2 className="subtitulo">Recuperar senha</h2>

            <form className="form-passwordReset" action="#" method="POST">
                <input type="email" placeholder="Email" required />

                <p className="info-text">
                Você receberá um e-mail contendo <br/>
                sua nova senha de acesso
                </p>

                <button type="submit" className="btn-enviar">ENVIAR</button>
            </form>
        </div>
    )
}

export default PasswordReset