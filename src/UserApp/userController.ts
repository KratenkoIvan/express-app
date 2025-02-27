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
    const result = await userService.authLogin(data.email, data.password)
    if (result.status == 'error') {
        res.send(result.message)
        return
    }
    
    res.cookie('token', result.data)
    res.sendStatus(200) 
}

async function authRegister(req: Request, res: Response){
    const data = await req.body
    const result = await userService.authRegister(data)
    if (result.status == 'error') {
        res.send(result.message)
        return
    }

    res.cookie('token', result.data)
    res.sendStatus(200) 
}

const userController = {
    login: login,
    register: register,
    authLogin: authLogin,
    authRegister: authRegister
}


export default userController