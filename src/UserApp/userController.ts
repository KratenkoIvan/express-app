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
    const user = await userService.authLogin(data)
    if (user == 'User does not exist.' || user == 'Passwords do not match.') {
        res.sendStatus(401)
        return
    }
    
    const token = sign(user, SECRET_KEY, {expiresIn: '1h'})
    res.cookie('token', token)
    res.sendStatus(200) 
}

async function authRegister(req: Request, res: Response){
    const data = await req.body
    const user = await userService.authRegister(data)
    if (user == 'User already registered' || user == undefined) {
        res.send('User exists')
        return
    }

    const token = sign(user, SECRET_KEY, {expiresIn: '1h'})
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