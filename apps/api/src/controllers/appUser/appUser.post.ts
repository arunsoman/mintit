import { IAppUser } from '@mintit/model-spec'
import { Request, Response } from 'express'


import sequelize from '../../sqlz'
const AppUser = sequelize.models.AppUser

export const addAppUser = async (req: Request, res: Response) => {
    console.log(req.body)
    const appUserExists = await AppUser.findOne({   where: { email: req.body.email } })
    if (appUserExists) {
        res.status(400).send({ message: 'User already exists' })
    } else {
        const appUser = await AppUser.create(req.body)
        res.send(appUser)
    }
}
