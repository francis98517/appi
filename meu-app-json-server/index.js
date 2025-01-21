const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json'); // Aqui você irá usar o arquivo db.json
const middlewares = jsonServer.defaults();

// Porta fornecida pelo ambiente ou 3000 como fallback
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);

// Inicia o servidor na porta definida
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
