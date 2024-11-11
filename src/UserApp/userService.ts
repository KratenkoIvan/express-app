import userRepository from "./userRepository"
import {Prisma} from '@prisma/client'


interface IUserSuccess{
    status: 'success',
    data: Prisma.UserCreateInput
}

interface IUserError{
    status: 'error',
    message: string
}


async function authLogin(email: string, password: string): Promise< IUserError | IUserSuccess> {
    const user = await userRepository.findUserByEmail(email)
    if (!user) {
        return {status: 'error', message: "User does not exist."}
    }
    
    if (user.password != password) {
        return {status: 'error', message: "Passwords do not match."}
    }

    return {status: 'success', data: user}
}



async function authRegister(data: Prisma.UserCreateInput): Promise< IUserError | IUserSuccess > {
    const user = await userRepository.findUserByEmail(data.email)

    if (user) {
        return {status: 'error', message: 'User already exists.'}
    }

    const newUser = await userRepository.createUser(data)

    if (!newUser) {
        console.log(newUser)
        return {status: 'error', message: 'Failed to create user.'}
    }

    return {status:'success', data: newUser}
}


const userService = {
    authLogin: authLogin,
    authRegister: authRegister,
 
}

export default userService