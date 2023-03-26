const express = require("express");
const server = express();
const morgan = require("morgan");
const router = require("../src/routes/index");
const cors = require("cors");
const { character } = require("./DB_connection");

server.use(express.json());
server.use(cors());
server.use(morgan("dev"));

server.use("/rickandmorty", router);

module.exports = server;
