import React from "react"
import './creatPost.css'

// import '@fortawesome/fontawesome-free/css/all.min.css'
// import '@fortawesome/fontawesome-free/js/all.min.js'

import Header from "../../components/Header"
import Footer from "../../components/Footer"

const CreatePost: React.FC = () => {
    return(
        <>
        <Header />
        <div className="container-createPost">
            <form className="form-post">
                <input type="text" placeholder="Digite seu nome" required />
                <input type="text" placeholder="Digite o título do post" required />
                <textarea placeholder="Insira o texto" required></textarea>
                <div className="buttons">
                    <button type="reset" className="btn limpar">LIMPAR</button>
                    <button type="submit" className="btn criar">CRIAR</button>
                </div>
            </form>
        </div>
        <Footer />
        </>
    )
}

export default CreatePost
