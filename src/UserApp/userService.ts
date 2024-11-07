import userRepository from "./userRepository"
import {Prisma} from '@prisma/client'

async function authLogin(data: {email: string, password: string}) {
    const user = await userRepository.findUserByEmail(data.email)
    if (!user) {
        return "User does not exist."
    }
    
    if (user.password != data.password) {
        return "Passwords do not match."
    }

    return user
}

async function authRegister(data: {username: string, email: string, password: string}) {
    const user = await userRepository.findUserByEmail(data.email)

    if (user) {
        return 'User already registered';
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