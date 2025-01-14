import App from './app'

const app = new App();

const PORT = 3333
app.server.listen(PORT,() => {
  console.log(`Aplicação rodando na porta ${PORT}`)
})