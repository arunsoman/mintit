import { ILogin } from '@mintit/model-spec'
import { Request, Response } from 'express'


import sequelize from '../../sqlz'
const AppUser = sequelize.models.AppUser

export const doLogin = async (req: Request, res: Response) => {
    console.log(req.params)
    const resp : ILogin ={
        isLoggedIn: true,
        userName: "admin",
        password: "admin",
        token: "admin",
        tokenExpiration: Date(),
        status: "",
        err: "",  

    }
    res.send(resp)
}
