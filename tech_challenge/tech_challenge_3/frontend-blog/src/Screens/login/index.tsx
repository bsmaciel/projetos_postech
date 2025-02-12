import React from "react"
<<<<<<< HEAD
import './login.css'

import '@fortawesome/fontawesome-free/css/all.min.css'
import '@fortawesome/fontawesome-free/js/all.min.js'
=======
import styled from 'styled-components';
// import './style.css'
// import axios from "axios";

const LoginContainer = styled.div`
/* Estrutura centralizada */
    border: solid 2px red;
/*     display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    text-align: center; */

`;

const LoginTitle = styled.p`
/* Estilização do título */
    background: #ccc;
`;

const LoginSubtitle = styled.p`
    background: #ccc;

`;

const LoginForm = styled.form`
    background: #ccc;
    display: flex;
    flex-direction: column;
`;

const LoginLink = styled.div`
    background: #f00;
    display:flex;
    justify-content: space-around;
    margin: 20px 0;
`;

const LoginSubmit = styled.button`
    width: 100%;
    padding: 12px;
    font-size: 16px;
    font-weight: bold;
    color: white;
    background-color: #2D9CFA;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;

/* const client = axios.create({
  baseURL: "http://localhost:3000/" 
}); */
>>>>>>> 82e33fd (Desenvolvimento do layout do Tech Challeng, styled-components e display flex)

const Login: React.FC = () => {
    return(
<<<<<<< HEAD
        <>
            Login
        </>
=======
        <LoginContainer>
                <LoginTitle>
                    <p>Login</p>
                </LoginTitle>
                <LoginSubtitle>
                    <p>Acesse sua conta</p>
                </LoginSubtitle>
                <LoginForm>
                    <input type="text" placeholder="Nome completo" required />
                    <input type="email" placeholder="Email" required />
                    <input type="password" placeholder="Senha" required />
                    <LoginLink>
                        <a href="#">Não tem uma conta?</a>
                        <a href="#">Esqueceu sua senha?</a>
                    </LoginLink>
                    <LoginSubmit>
                        <button type="submit">ENTRAR</button>
                    </LoginSubmit>
                </LoginForm>
{/*         {teacher.map((professor: any) => {
                return (<><h1>{professor.name}</h1><p>{professor.email}</p></>)
                })} */}
        </LoginContainer>
>>>>>>> 82e33fd (Desenvolvimento do layout do Tech Challeng, styled-components e display flex)
    )
}

export default Login

/* <!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h2 class="titulo">LOGIN</h2>
        <h1 class="subtitulo">Acesse sua conta</h1>

        <form>
            <input type="text" placeholder="Nome completo" required>
            <input type="email" placeholder="Email" required>
            <input type="password" placeholder="Senha" required>

            <div class="links">
                <a href="#">Não tem uma conta?</a>
                <a href="#">Esqueceu sua senha?</a>
            </div>

            <button type="submit" class="btn-entrar">ENTRAR</button>
        </form>
    </div>
</body>
</html>
 */