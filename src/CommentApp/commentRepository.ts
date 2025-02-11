import prisma from "../client/prismaClient"
import {Prisma} from '@prisma/client'

async function getCommentsByPostId(postId: number){
    try{
        let comments = await prisma.comment.findMany({
            where:{
                postId: postId
            }
        })
        return comments
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

async function getCommentsByUserId(userId: number){
    try{
        let comments = await prisma.comment.findMany({
            where:{
                userId: userId
            }
        })
        return comments
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

async function createCommentForPost(postId: number, data: Prisma.CommentCreateInput) {
    try{
        let comment = await prisma.comment.create({
            data: data
        })
        return comment
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

const commentRepository = {
    getCommentsByPostId: getCommentsByPostId,
    getCommentsByUserId: getCommentsByUserId,
    createCommentForPost: createCommentForPost, 
}

export default commentRepository