const express = require("express");
const cors = require("cors");
// const { use } = require("../routes/gateway.routes");
const logger = require("../middlewares/logger");
const gatewayRoutes = require("../routes/gateway.routes");

class Server {
    constructor() {
        this.app = express();
        this.port = 4000;  
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(cors());
        // this.app.use(express.json());
        this.app.use(logger); 
    }

    routes() {
        this.app.use(gatewayRoutes);  
    }

    start() {
        this.app.listen(this.port, () => console.log("Gateway corriendo en http://localhost:" + this.port));
    }
}

module.exports = Server;
