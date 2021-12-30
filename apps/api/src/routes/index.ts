import express = require('express');
// import { init } from './appUser';
export const initRoutes = (app: express.Application) => {
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
        res.header(
            "Access-Control-Allow-Headers",
            "Origin, X-Requested-With, Content-Type, Accept"
          );
        // res. header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
      });
      
    app.get('/api', (req, res) => {res.send({ message: 'Welcome to get api' })})
    app.use('/appUser', require('./appUser').init(express.Router()));
    app.use('/login', require('./login').init(express.Router()));
    // app.use('/appUser', init(express.Router()));
    console.log('***********************index routes loaded');
}
