import express = require('express');
import *  as appUser from '../controllers/appUser';
export const init= (router: express.Router): express.Router => {
router.get('/', async(req, res) => {appUser.getUsers(req, res)});
router.post('/', async(req, res) => {appUser.addAppUser(req, res)});
router.put('/:email', async(req, res) => { res.send({ message: 'Welcome to put appUser'+ req.params.email }) })
router.delete('/:email', async(req, res) => { res.send({ message: 'Welcome to delete appUser'+ req.params.email }) })
router.get('/:email', async(req, res) => { res.send({ message: 'Welcome to get appUser'+ req.params.email }) })
router.patch('/:email', async(req, res) => { res.send({ message: 'Welcome to patch appUser'+ req.params.email }) })
console.log('appUser routes loaded')
return router
}