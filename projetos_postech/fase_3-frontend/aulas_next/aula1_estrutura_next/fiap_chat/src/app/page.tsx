export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>FIAP CHAT</p>
      <div>
        <p>Digite um nome de usuário</p>
        <input type="text" placeholder="Seu nome aqui!" />
        <button>Entrar</button>
      </div>
    </main>
  );
}
