'use client'
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from 'react';
import {Bounce, ToastContainer, toast} from "react-toastify";

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const handleLogin = async (e:any) => {
    e.preventDefault()
    try{
      const res = await fetch('/api/login',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/jseon',
        },
        body: JSON.stringify({ name, password }),
      })
      const data = await res.json();
      if(!res.ok){
        toast.error('Erro ao efetuar o login com este usuário', {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
          transition: Bounce,
        });
        throw new Error(data.message || 'Algo deu errado na autenticação')
      }
      router.push('/persons')
    } catch(error){}
  }
  return (
    <main className="flex flex-1 flex-col h-screen w-screen justify-center items-center bg-background-900">
      <p className="font-sans text-4xl text-fontColor-900 mb-6">FIAP CHAT</p>
      <div className="flex flex-1 flex-col max-h-[45vh] w-[80vw] justify-center items-center bg-background-800 rounded-[10px]">
        <p className="font-sans text-lg text-fontColor-900 bg-background-800">Digite um nome de usuário</p>
        <input className="font-sans text-lg text-fontColor-900 bg-background-900 border border-fontColor-900 rounded-3xl p-2 w-5/6 mt-3" 
          type="text" 
          placeholder="Seu nome aqui!" 
          onChange={(e) => setName(e.target.value)}
        />
        <p className="font-sans text-lg text-fontColor-900 bg-background-800">Digite sua senha</p>
        <input className="font-sans text-lg text-fontColor-900 bg-background-900 border border-fontColor-900 rounded-3xl p-2 w-5/6 mt-3" 
          type="password" 
          placeholder="Sua senha aqui!" 
          onChange={(e) => setPassword(e.target.value)}
        />
        
        
        <div className="flex flex1 flex-row mt-2 w-[40%] max-h-12 ml-auto mr-auto justify-between items-center">
          <Link 
            className="w-32 mt-6 p-1 text-center font-sans bg-fontColor-900 rounded-xl hover:opacity-80 text-[#fff]" 
            href="/register">
            Cadastrar</Link>
          <button disabled={(password == '' || name == '')} className="w-32 mt-6 p-1 font-sans bg-fontColor-900 rounded-xl hover:opacity-80 text-[#fff]"
          onClick={handleLogin}>
          Entrar</button>
        </div>
      </div>
      <ToastContainer 
        position="bottom-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />      
    </main>
  );
}
