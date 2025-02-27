import { Request, Response } from 'express';
import userService from './userService';


async function authLogin(req: Request, res:Response){
    const data = await req.body
    const result = await userService.authLogin(data.email, data.password)
    if (result.status == 'error') {
        res.json(result)
        return
    }
    
    res.json(result)
    
}

async function authRegister(req: Request, res: Response){
    const data = await req.body
    const result = await userService.authRegister(data)
    if (result.status == 'error') {
        res.json(result)
        return
    }

    res.json(result)
    
}

async function getUserById(req: Request, res: Response){
    const userId = res.locals.userId
    const result = await userService.getUserById(+userId)
    res.json(result)
    
}

const userController = {
    authLogin: authLogin,
    authRegister: authRegister,
    getUserById: getUserById,
 }


export default userController