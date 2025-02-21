import prisma from "../client/prismaClient"
import { Prisma } from "@prisma/client"
import { errors, IErrors } from "../config/errorCodes"

async function  findUserByEmail(email: string) {
    try{
        let user = await prisma.user.findUnique({
            where: {
                email: email
            }
        })
        return user
    }catch (error) {
            if (error instanceof Prisma.PrismaClientKnownRequestError){
                if (error.code in Object.keys(errors)){
                    const errorKey: keyof IErrors = error.code
                    console.log(errors[errorKey])
                }
            }
        }
}

async function createUser(data: Prisma.UserCreateInput){
    try{
        let user = await prisma.user.create({
            data: {
                username: data.username,
                email: data.email,
                password: data.password,
                role: 'user'
            }
        })
        return user
    } catch (error) {
            if (error instanceof Prisma.PrismaClientKnownRequestError){
                if (error.code in Object.keys(errors)){
                    const errorKey: keyof IErrors = error.code
                    console.log(errors[errorKey])
                }
            }
        }
}

const userRepository = {
    findUserByEmail: findUserByEmail,
    createUser: createUser
}

export default userRepository