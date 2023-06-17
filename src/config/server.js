require('dotenv').config();
const express = require('express');
const cors = require("cors");

class Server {

   constructor() {
       this.app = express();
       this.port = process.env.PORT;
       this.mainPath = "/api/" + process.env.API_VERSION;
       this.usersPath = this.mainPath + '/users';

       // Middlewares
       this.middlewares();

       // Rutas de mi aplicación
       this.routes();
   }

   middlewares() {

       // CORS
       this.app.use( cors() );

       // Lectura y parseo del body
       this.app.use( express.json() );

       // Directorio Público
       this.app.use( express.static('public') );

       this.app.use( express.urlencoded( { extended: true } ));

   }

   routes() {
       this.app.use( this.usersPath, require('../routers/users_router'));
       this.app.use( this.mainPath, require('../routers/main_router'));
       this.app.get("*", (_, res) => res.status(404)
               .json({ success: false, data: "Endpoint not found" }));
   }

   listen() {
       this.app.listen( this.port, () => {
           console.log('Server running at port', this.port );
       });
   }
}

//export
module.exports = Server;
