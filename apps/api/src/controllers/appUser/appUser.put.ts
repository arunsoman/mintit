import { IAppUser } from '@mintit/model-spec'
import { Request, Response } from 'express'


import sequelize from '../../sqlz'
const AppUser = sequelize.models.AppUser

export const updateUser = async (req: Request, res: Response) => {
    console.log(req.body)
    const upsert = AppUser.upsert(req.body)
    res.send(upsert)
}
