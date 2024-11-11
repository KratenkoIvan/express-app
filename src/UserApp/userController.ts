import { Request, Response } from 'express';
import userService from './userService';
import { SECRET_KEY } from '../config/token';
import { sign } from 'jsonwebtoken';

function login(req: Request, res:Response){
    res.render('login')
}

function register(req: Request, res:Response){
    res.render('register')
}

async function authLogin(req: Request, res:Response){
    const data = await req.body
    const user = await userService.authLogin(data.email, data.password)
    if (user.status == 'error') {
        res.send(user.message)
        return
    }
    
    const token = sign(user.data, SECRET_KEY, {expiresIn: '1h'})
    res.cookie('token', token)
    res.sendStatus(200) 
}

async function authRegister(req: Request, res: Response){
    const data = await req.body
    const result = await userService.authRegister(data)
    if (result.status == 'error') {
        res.send(result.message)
        return
    }

    const token = sign(result.data, SECRET_KEY, {expiresIn: '1h'})
    res.cookie('token', token)
    res.sendStatus(200) 
}

const userController = {
    login: login,
    register: register,
    authLogin: authLogin,
    authRegister: authRegister
}


export default userController