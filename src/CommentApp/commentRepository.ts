import prisma from "../client/prismaClient"
import {Prisma} from '@prisma/client'
import { errors, IErrors } from "../config/errorCodes"

async function getCommentsByPostId(postId: number){
    try{
        let comments = await prisma.comment.findMany({
            where:{
                postId: postId
            }
        })
        return comments
    } catch (error) {
            if (error instanceof Prisma.PrismaClientKnownRequestError){
                if (error.code in Object.keys(errors)){
                    const errorKey: keyof IErrors = error.code
                    console.log(errors[errorKey])
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
    } catch (error) {
            if (error instanceof Prisma.PrismaClientKnownRequestError){
                if (error.code in Object.keys(errors)){
                    const errorKey: keyof IErrors = error.code
                    console.log(errors[errorKey])
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
    } catch (error) {
            if (error instanceof Prisma.PrismaClientKnownRequestError){
                if (error.code in Object.keys(errors)){
                    const errorKey: keyof IErrors = error.code
                    console.log(errors[errorKey])
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