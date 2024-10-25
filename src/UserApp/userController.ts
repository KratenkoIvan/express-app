import { Request, Response } from 'express';
import userService from './userService';

function login(req: Request, res:Response){
    res.render('login')
}

function register(req: Request, res:Response){
    res.render('register')
}

async function authLogin(req: Request, res:Response){
    const data = await req.body
    const user = await userService.authLogin(data)
    if (user) {
        res.cookie('user', JSON.stringify(user))
        res.sendStatus(200)
    }else {
        res.sendStatus(401)
    }
        
}

async function authRegister(req: Request, res: Response){
    const data = await req.body
    const user = await userService.authRegister(data)
    if (user) {
        res.cookie('user', JSON.stringify(user))
        res.sendStatus(200)
    }else {
        res.send('User exists')
    }
}

const userController = {
    login: login,
    register: register,
    authLogin: authLogin,
    authRegister: authRegister
}


export default userController