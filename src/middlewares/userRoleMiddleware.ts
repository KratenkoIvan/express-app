import {Request, Response, NextFunction} from 'express';
import { verify } from 'jsonwebtoken';
import { SECRET_KEY } from '../config/token';
export function userRoleMiddleware(req: Request, res: Response, next: NextFunction){
    const cookies = req.cookies
    const user = verify(cookies.token, SECRET_KEY)
    console.log(user)

    if(typeof user == 'object' && user.role == 'admin'){
        console.log(user.role)
        next()
    } else {
        res.sendStatus(403)
    }
}