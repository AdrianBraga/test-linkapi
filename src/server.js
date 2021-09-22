const express = require('express');
require('dotenv/config');

const server = express();

server.use(express.json());

const port = process.env.PORT || 3333;

server.get('/v1', (request, response) => {
  return response.status(200).json({ message: 'Servidor configurado com sucesso!' })
})

server.listen(port, () => {
  console.log(`Servidor rodando em: http://localhost:${port}`)
})