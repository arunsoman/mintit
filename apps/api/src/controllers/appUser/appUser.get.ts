import { IAppUser } from '@mintit/model-spec'
import { Request, Response } from 'express'


import sequelize from '../../sqlz'
const AppUser = sequelize.models.AppUser



export const getUsers = async function (req, res) {
    // Validate request parameters, queries using express-validator
    
    const page = req.params.page ? req.params.page : 1;
    const limit = req.params.limit ? req.params.limit : 10;
   const appUsers = await AppUser.findAll({
       attributes: { exclude: ['pwd']},
        limit: limit,
        offset: (page - 1) * limit,
        order: [['id', 'DESC']],
    });
    if (!appUsers) {
        res.status(404).send({
            message: "No data found"
        });
        return; 
    }
    res.send(appUsers);

}

export const getAppUser = async function (req, res) {
    // Validate request parameters, queries using express-validator
    
    const id = req.params.email;
    console.log(" get by email ",id)
    const appUser = await AppUser.findOne({
        attributes: { exclude: ['pwd']},
        where: {
            email: id
        }   
    });
    res.send(appUser)


}