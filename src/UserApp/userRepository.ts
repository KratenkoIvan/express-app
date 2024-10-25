import prisma from "../client/prismaClient"
import { Prisma } from "@prisma/client"

async function  findUserByEmail(email: string) {
    try{
        let user = await prisma.user.findUnique({
            where: {
                email: email
            }
        })
        return user
    }catch(err){
        if (err instanceof Prisma.PrismaClientKnownRequestError){
            if (err.code == "P2002"){
                console.log(err.message)
                throw err
            }
        } else if (err instanceof Prisma.PrismaClientKnownRequestError){
            if (err.code == "P2015"){
                console.log(err.message)
                throw err
            }
        } else if (err instanceof Prisma.PrismaClientKnownRequestError){
            if (err.code == "P2019"){
                console.log(err.message)
                throw err
            }
        }
    }
}

async function createUser(data: {username: string, email: string, password: string}){
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
    } catch (err) {
        if (err instanceof Prisma.PrismaClientKnownRequestError){
            if (err.code == "P2002"){
                console.log(err.message)
                throw err
            }
        } else if (err instanceof Prisma.PrismaClientKnownRequestError){
            if (err.code == "P2015"){
                console.log(err.message)
                throw err
            }
        } else if (err instanceof Prisma.PrismaClientKnownRequestError){
            if (err.code == "P2019"){
                console.log(err.message)
                throw err
            }
        }
    }
}

const userRepository = {
    findUserByEmail: findUserByEmail,
    createUser: createUser
}

export default userRepository