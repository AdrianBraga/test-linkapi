const express = require('express');
require('./database/connection.db');

const routes = require('./routes/routes');

require('dotenv/config');

const port = process.env.PORT || 3333;

const server = express();

server.use(express.json());
server.use(routes)

server.listen(port, () => {
  console.log(`Servidor rodando em: http://localhost:${port}`)
})