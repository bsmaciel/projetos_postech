import React from "react"
// import styled from 'styled-components';
import './style.css'
// import axios from "axios";

/* const LoginContainer = styled.div`
    background-color: #e59797;
    color: #000000;
    text-align: center;
    padding: 10px 0;
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    `; */

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
        <>
            <form>
                <input type="text" placeholder="Nome completo" required />
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Senha" required />
                <div>
                    <a href="#">Não tem uma conta?</a>
                    <a href="#">Esqueceu sua senha?</a>
                </div>
                <button type="submit">ENTRAR</button>
            </form>
{/*         {teacher.map((professor: any) => {
                return (<><h1>{professor.name}</h1><p>{professor.email}</p></>)
                })} */}
        </>
    )
}

export default Login;