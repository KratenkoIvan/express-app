import {Request, Response, NextFunction} from 'express';
export function userRoleMiddleware(req: Request, res: Response, next: NextFunction){
    const cookies = req.cookies
    const user = JSON.parse(cookies.user)
    console.log(user)

    if(user.role == 'admin'){
        console.log(user.role)
        next()
    } else {
        res.sendStatus(403)
    }
}