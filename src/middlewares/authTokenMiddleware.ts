import {Request, Response, NextFunction} from 'express';
import { verify } from 'jsonwebtoken';
import { SECRET_KEY } from '../config/token';

// iat - issuedAt -> когда был создан токен 1234235142312
// exp - expiredAt -> когда токен закончится 2341253647573

interface IToken {
    id: number,
    iat: number,
    exp: number
}

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
        const decodedToken = verify(token, SECRET_KEY) as IToken;
        console.log(decodedToken)
        res.locals.userId = Number(decodedToken.id);
        next();

    }catch (err) {
        res.status(401).json({status: 'error', error: "Invalid or expired token" });
        return
    }
    
} 