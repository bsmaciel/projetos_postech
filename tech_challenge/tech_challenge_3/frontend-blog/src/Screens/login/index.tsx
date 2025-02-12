import React from "react"
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

const Login: React.FC = () => {
    
/*     const [teacher, setTeacher] = useState([])

    useEffect(() => {
        async function getTeacher() {
          const response = await client.get("/teacher");
          setTeacher(response.data);
        }
        getTeacher();
      }, []); 

if (!teacher) return 'Erro'; */

    return(
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
    )
}

export default Login;