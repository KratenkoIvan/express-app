import { IError, ISuccess } from "../types/types"
import userRepository from "./userRepository"
import { CreateUser, User } from "./userTypes"
import { sign } from "jsonwebtoken";
import { SECRET_KEY } from "../config/token";
import { compare, hash } from "bcryptjs"
async function authLogin(email: string, password: string): Promise< IError | ISuccess<string>> {
    const user = await userRepository.findUserByEmail(email)
    if (!user) {
        return {status: 'error', message: "User does not exist."}
    }
    
    const isMatch = await compare(password, user.password);
    
    if (!isMatch) {
        return {status: 'error', message: 'Incorrect password.'}
    }

    const token = sign({id: user.id}, SECRET_KEY, {expiresIn: '1d'})

    return {status:'success', data: token}
}



async function authRegister(data: CreateUser): Promise< IError | ISuccess<string> > {
    const user = await userRepository.findUserByEmail(data.email)

    if (user) {
        return {status: 'error', message: 'User already exists.'}
    }

    const hashedPassword = await hash(data.password, 10)

    const userData = {
        ...data,
        password: hashedPassword,
    }

    const newUser = await userRepository.createUser(userData)

    if (!newUser) {
        return {status: 'error', message: 'Failed to create user.'}
    }

    const token = sign({id: newUser.id}, SECRET_KEY, {expiresIn: '1d'})

    return {status:'success', data: token}
}

async function getUserById(userId: number): Promise< IError | ISuccess<User> > {
    const user = await userRepository.getUserById(userId)
    
    if(!user){
        return {
            status: 'error',
            message: 'User not found'
        }
    }
    
    const userData = {
        ...user,
        password: '',
    }
    return {status: 'success', data: userData}
}


const userService = {
    authLogin: authLogin,
    authRegister: authRegister,
    getUserById: getUserById,
 
}

export default userService