import React from 'react'
import './menu.css'

import '@fortawesome/fontawesome-free/css/all.min.css'
import '@fortawesome/fontawesome-free/js/all.min.js'

const Menu: React.FC = () => {
    return(
        <div className="container-menu">
            <h2 className="subtitulo-menu">FIAP</h2>
            <h3>Faculdade de Informática <br/>e Administração Paulista</h3>
            <ul>
                <li><a href="/ListPost">Ver Lista Posts</a></li>
                <li><a href="/CreatePost">Criar Post</a></li>
                <li><a href="/EditPost">Editar Post</a></li>
                <li><a href="/AdminPost">Admin Post</a></li>
            </ul>
            <button type="submit" className="btn-logout">SAIR</button>
        </div>
    )
}

export default Menu
