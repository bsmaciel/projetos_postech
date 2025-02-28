import React from "react"
import './viewPost.css'

// import '@fortawesome/fontawesome-free/css/all.min.css'
// import '@fortawesome/fontawesome-free/js/all.min.js'

import Header from "../../components/Header"
import Footer from "../../components/Footer"

const ViewPost: React.FC = () => {
    return(
        <>
        <Header pageTitle='POST' />
        <div className="container-viewPost">
            <div>
                <div className="post-container">
                    <p className="autor">AUTOR</p>
                    <h2 className="titulo">Título do Post</h2>
                    <p className="conteudo">
                    Vestibulum ultricies condimentum nunc, in euismod est suscipit ac. Curabitur ac volutpat augue. 
                    Aenean vel maximus nisl. Suspendisse potenti. Nulla interdum neque et nulla vehicula blandit. 
                    Donec mollis quam nulla, in placerat nisl faucibus tincidunt. Proin mollis vehicula nibh eu mattis. 
                    Proin vel erat vel urna gravida convallis vitae vel enim. Nulla varius ultricies nunc, sed vulputate enim. 
                    Nulla viverra felis eros. Aliquam erat volutpat.
                    </p>
                    <p className="conteudo">
                    Ut metus ante, auctor eget diam at, posuere hendrerit magna. Suspendisse fermentum maximus nibh, vitae feugiat massa tristique in. 
                    In hac habitasse platea dictumst. Nullam ultrices dictum erat. Fusce arcu neque, finibus quis dictum vitae, rutrum sit amet felis. 
                    Mauris viverra vel lacus vitae pellentesque. Pellentesque sagittis diam in dictum interdum. Vivamus a metus eget leo ornare maximus 
                    quis vitae felis. Sed et tellus massa. Pellentesque at nunc ut mi fermentum ullamcorper ut quis dolor. Etiam fringilla enim sed 
                    dignissim sollicitudin. Aliquam erat volutpat. Sed pharetra commodo velit sed aliquam. Pellentesque tristique lectus vitae nisl 
                    accumsan blandit. Maecenas consectetur, lectus euismod accumsan fringilla, mi lacus condimentum massa, a venenatis justo turpis in neque. 
                    Phasellus vitae nisi magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>

                    <div className="post-actions">
                    <span><i className="fas fa-heart"></i> 609</span>
                    <span><i className="fas fa-comment"></i> 120</span>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        </>
    )
}

export default ViewPost
