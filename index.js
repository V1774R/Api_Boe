const jsonServer = require("json-server");
const cors = require('cors');
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8080;

// Adiciona middlewares padrão do JSON Server
server.use(middlewares);

// Habilita CORS para todas as origens
server.use(cors());

// Adiciona o roteador JSON Server
server.use(router);

// Inicia o servidor
server.listen(port, () => {
  console.log(`JSON Server está rodando na porta ${port}`);
});
