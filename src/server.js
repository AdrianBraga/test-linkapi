const express = require('express');
require('./database/connection.db');

require('dotenv/config');

const port = process.env.PORT || 3333;

const server = express();

server.use(express.json());

server.listen(port, () => {
  console.log(`Servidor rodando em: http://localhost:${port}`)
})