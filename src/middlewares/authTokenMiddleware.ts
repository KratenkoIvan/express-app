import {Request, Response, NextFunction} from 'express';
import { verify } from 'jsonwebtoken';
import { SECRET_KEY } from '../config/token';

interface IToken {
    id: number
    iat: number
    exp: number
}

export async function authTokenMiddleware(req: Request, res: Response, next: NextFunction){
    const authHeader = req.headers.authorization
    if (!authHeader) {
        res.status(401).json({status: 'error', message: "Authorization header is missing" });
        return
    }

    const splitedToken = authHeader.split(" ");
    if (splitedToken.length !== 2 || splitedToken[0] !== "Bearer") {
        res.status(401).json({status: 'error', message: "Invalid authorization format" });
        return
    }

    const token = splitedToken[1];
    
    try{
        const decodedToken = verify(token, SECRET_KEY) as IToken;
        res.locals.userId = Number(decodedToken.id);
        next();

    }catch (err) {
        res.status(401).json({status: 'error', message: "Invalid or expired token" });
        return
    }
} 