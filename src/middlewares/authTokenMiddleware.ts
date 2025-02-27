import {Request, Response, NextFunction} from 'express';
import { verify } from 'jsonwebtoken';
import { SECRET_KEY } from '../config/token';

export async function authTokenMiddleware(req: Request, res: Response, next: NextFunction){
    const authHeader = req.headers.authorization
    if (!authHeader) {
        res.status(401).json({status: 'error', error: "Authorization header is missing" });
        return
    }

    const splitedToken = authHeader.split(" ");
    if (splitedToken.length !== 2 || splitedToken[0] !== "Bearer") {
        res.status(401).json({status: 'error', error: "Invalid authorization format" });
        return
    }

    const token = splitedToken[1];
    
    try{
        const decodedToken = verify(token, SECRET_KEY);
        res.locals.userId = decodedToken;
        next();

    }catch (err) {
        res.status(401).json({status: 'error', error: "Invalid or expired token" });
        return
    }
    
} 