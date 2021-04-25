// Servidor de Express
const express = require('express');
const http = require('http');
const cors = require('cors');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    // Http server
    this.server = http.createServer(this.app);
  }

  middlewares() {
    // cors
    this.app.use(cors());

    // parseo del body
    this.app.use(express.json());

    // api end points
    this.app.use('/api', require('../router/auth'));
    
  }

  // Esta configuración se puede tener aquí o como propieda de clase

  execute() {
    // Inicializar Middlewares
    this.middlewares();

    // Inicializar Server
    this.server.listen(this.port, () => {
      console.log('Server corriendo en puerto:', this.port);
    });
  }
}

module.exports = Server;
