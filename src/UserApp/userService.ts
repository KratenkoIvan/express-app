import { IError, ISuccess } from "../types/types"
import userRepository from "./userRepository"
import { CreateUser, User } from "./userTypes"
import { compare, hash, hashSync } from 'bcrypt'

async function authLogin(email: string, password: string): Promise< IError | ISuccess<User>> {
    const user = await userRepository.findUserByEmail(email)
    if (!user) {
        return {status: 'error', message: "User does not exist."}
    }
    
    const match = await compare(password, user.password);
    
    if (!match) {
        return {status: 'error', message: 'Incorrect password.'}
    }

    return {status:'success', data: user}
}



async function authRegister(data: CreateUser): Promise< IError | ISuccess<User> > {
    const user = await userRepository.findUserByEmail(data.email)

    if (user) {
        return {status: 'error', message: 'User already exists.'}
    }

    const passwordHash = hashSync(data.password, 10)

    const newUser = await userRepository.createUser(
        {
            email: data.email,
            password: passwordHash,
            username: data.username,
            role: data.role,
        }
    )

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