// next.config.js
module.exports = {
    async headers() {
      return [
        {
          source: '/:path*', // Aplica o cabeçalho para todas as rotas
          headers: [
            {
              key: 'Content-Security-Policy',
              value: "default-src 'none'; font-src 'self' http://localhost:3333/; script-src 'self'; style-src 'self'; img-src 'self' data:;",
            },
          ],
        },
      ];
    },
  };