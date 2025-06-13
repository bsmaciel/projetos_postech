import React from "react";
import './passwordResetMessage.css'

import '@fortawesome/fontawesome-free/css/all.min.css'
import '@fortawesome/fontawesome-free/js/all.min.js'

const PasswordResetMessage: React.FC = () => {
    return(
        <div className="container-passwordResetMessage">
            <div className="box">
                <h2 className="titulo-passwordResetMessage">MENSAGEM</h2>
                <p className="feedback-text">Sua senha foi enviada<br/>Confira seu e-mail</p>
                <button type="submit" className="btn-ok">OK</button>
            </div>
        </div>
    )
}

export default PasswordResetMessage