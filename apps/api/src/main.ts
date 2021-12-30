import * as express from 'express'
import * as winston from 'winston'
import cors = require('cors');
import {doLogin} from './controllers/appUser/login.get'
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:*", // restrict calls to those this address
    methods: "POST" // only allow GET requests
  })
);
app.get('/login', doLogin)
import routes = require('./routes');
console.log("-------->whatr ",routes)
routes.initRoutes(app); // <-- this is the important line
app.all(
    '*',
    (req, res) => {
     console.log("-------->whatr ",req.url)
      res.status(409).send({
            message: 'Not Found : ' + req.url
        });
    }
)

import  seq = require('./sqlz')
const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
