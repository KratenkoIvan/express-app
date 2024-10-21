import prisma from "../client/prismaClient"
import {Prisma} from '@prisma/client'

async function getAllPosts(){
    try{
        let posts = await prisma.post.findMany({

        })
        return posts
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


async function getPostById(id: number){
    try{
        let post = await prisma.post.findUnique({
            where: {
                id: id
            }
        })
        return post
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

async function createPost(data: Prisma.PostCreateInput){
    try{
        let post = await prisma.post.create({
            data: data
        })
        return post
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


const productRepository = {
    getAllPosts: getAllPosts,
    getPostById: getPostById,
    createPost: createPost,
    
}

export default productRepository