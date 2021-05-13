const express = require('express');
const cors = require('cors')

class Server {

    constructor() {
        console.log(process.env.PORT);
        this.app = express();
        this.port = process.env.PORT;

        // paths

        //dbConexion

        //middlewares

        this.middlewares();

        //routes

        this.routes();
    }

    async conectarDB() {

    }

    middlewares() {
        //CORS

        this.app.use( cors() );

        // body parse

        this.app.use( express.json() )

        // contenido estático

        this.app.use(express.static('Public'));
    }

    routes() {
        this.app.use('/', express.static('Public'));
        this.app.use('*', express.static('Public'));
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log(`Servidor corriendo en puerto ${this.port}`);
        })
    }
}

module.exports = Server;