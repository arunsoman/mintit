import * as express from 'express'
import * as winston from 'winston'

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
import routes = require('./routes');
console.log(routes)
routes.initRoutes(app);

import  seq = require('./sqlz')
const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
