import express = require('express');
import *  as appUser from '../controllers/appUser';
export const init= (router: express.Router): express.Router => {
    console.log('appUser--------- login   loaded')
router.post('/', async(req, res) => { appUser.doLogin(req, res)})
return router
}
