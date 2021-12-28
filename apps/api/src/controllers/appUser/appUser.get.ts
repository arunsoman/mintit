import { IAppUser } from '@mintit/model-spec'
import { Request, Response } from 'express'


import sequelize from '../../sqlz'
const AppUser = sequelize.models.AppUser



export const getUsers = async function (req, res) {
    // Validate request parameters, queries using express-validator
    
    const page = req.params.page ? req.params.page : 1;
    const limit = req.params.limit ? req.params.limit : 10;
   const appUsers = await AppUser.findAll({
        limit: limit,
        offset: (page - 1) * limit,
        order: [['id', 'DESC']],
    });
    appUsers?.forEach((appUser) => {
        console.log(appUser)
        appUser.pwd = '******'
    })

}

export const getAppUser = async function (req, res) {
    // Validate request parameters, queries using express-validator
    
    const id = req.params.id;
    const appUser = AppUser.findByPk(id)
    res.send(appUser)


}

//find largest number in array
const max = (arr) => {
    return Math.max.apply(null, arr);
}