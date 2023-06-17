require('dotenv').config();
const Server = require('./src/config/server');

const api = new Server();

api.listen();
