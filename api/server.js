const express = require('express');

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
    res.send("Server is live");
})

module.exports = server;