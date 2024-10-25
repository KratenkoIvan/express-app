import {Request, Response, NextFunction} from 'express';
export function authMiddleware(req: Request, res: Response, next: NextFunction){
    const cookies = req.cookies
    
    if (cookies.user) {
        const user = JSON.parse(cookies.user)

        if (user && user.email && user.username && user.role){
        next()
        }else {
            res.sendStatus(401)
            
        }
    }else {
        res.sendStatus(401)
    }
}