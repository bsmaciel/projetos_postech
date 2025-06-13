import React from "react";
import './signUpMessage.css'

import '@fortawesome/fontawesome-free/css/all.min.css'
import '@fortawesome/fontawesome-free/js/all.min.js'

const SignUpMessage: React.FC = () => {
    return(
        <div className="container-signUpMessage">
            <div className="box">
                <h2 className="titulo-signUpMessage">MENSAGEM</h2>
                <p className="feedback-text">Seu castro foi realizado com sucesso<br/>Faça o seu login</p>
                <button type="submit" className="btn-ok">OK</button>
            </div>
        </div>
    )
}

export default SignUpMessage