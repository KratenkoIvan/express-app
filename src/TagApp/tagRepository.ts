import prisma from "../client/prismaClient"
import {Prisma} from '@prisma/client'
import { errors, IErrors } from "../config/errorCodes"

async function getAllTags(){
    try{
        let tags = await prisma.tag.findMany({

        })
        return tags
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError){
            if (error.code in Object.keys(errors)){
                const errorKey: keyof IErrors = error.code
                console.log(errors[errorKey])
            }
        }
    }
} 

const tagRepository = {
    getAllTags: getAllTags,
}

export default tagRepository;