import userRepository from "./userRepository"
import {Prisma} from '@prisma/client'

async function authLogin(data: {email: string, password: string}) {
    const user = await userRepository.findUserByEmail(data.email)
    if (user && data.password == user.password) {
       const userWithoutPassword = {
        id: await user.id,
        username: await user.username,
        email: await user.email,
        role: await user.role,
       }
       console.log(userWithoutPassword)
       return userWithoutPassword
    }else {
        return "Passwords do not match."
    }
}

async function authRegister(data: {username: string, email: string, password: string}) {
    const user = await userRepository.findUserByEmail(data.email)

    if (user) {
        return undefined;
    }else {
        const user = userRepository.createUser(data)
        return user
    }
}


const userService = {
    authLogin: authLogin,
    authRegister: authRegister,
 
}

export default userService