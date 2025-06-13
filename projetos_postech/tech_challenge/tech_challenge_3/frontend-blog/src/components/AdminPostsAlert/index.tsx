import React from "react"
import './AdminPostsAlert.css'

import '@fortawesome/fontawesome-free/css/all.min.css'
import '@fortawesome/fontawesome-free/js/all.min.js'

const AdminPostsAlert: React.FC = () => {
    return(
        <div className="container-adminPostsAlert">
            <div className="box">
                <h2 className="titulo-adminPostsAlert">ALERTA!</h2>
                <p className="feedback-text">Você realmente deseja apagar<br/>esse post? Essa ação não<br/>poderá ser desfeita!</p>
                <button type="submit" className="btn-ok">OK</button>
            </div>
        </div>
    )
}

export default AdminPostsAlert