const express = require('express');

const server = express();
server.use(express.json())
const getJson = node => (req, res) => res.json(node);

server.listen(3900);