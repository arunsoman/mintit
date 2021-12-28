import express = require('express');
// import { init } from './appUser';
export const initRoutes = (app: express.Application) => {
    app.use('/appUser', require('./appUser').init(express.Router()));
    // app.use('/appUser', init(express.Router()));
console.log('index routes loaded');
}
