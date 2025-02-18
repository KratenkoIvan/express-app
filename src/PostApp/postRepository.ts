import prisma from "../client/prismaClient"
import {Prisma} from '@prisma/client'
import { errors, IErrors } from "../config/errorCodes"
import { CreatePost } from "./postTypes"

async function getAllPosts(){
    try{
        let posts = await prisma.post.findMany({

        })
        return posts
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError){
            if (error.code in Object.keys(errors)){
                const errorKey: keyof IErrors = error.code
                console.log(errors[errorKey])
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
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError){
            if (error.code in Object.keys(errors)){
                const errorKey: keyof IErrors = error.code
                console.log(errors[errorKey])
            }
        }
    }
}

async function createPost(data: CreatePost){
    try{
        let post = await prisma.post.create({
            data: data
        })
        return post
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError){
            if (error.code in Object.keys(errors)){
                const errorKey: keyof IErrors = error.code
                console.log(errors[errorKey])
            }
        }
    }
}

async function deletePost(id: number){
    try{
        let post = await prisma.post.delete({
            where: {
                id: id
            }
        })
        return post
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError){
            if (error.code in Object.keys(errors)){
                const errorKey: keyof IErrors = error.code
                console.log(errors[errorKey])
            }
        }
    }
}

async function getAllPostsWithComments(){
    try{
        let posts = await prisma.post.findMany({
            include: {
                comments: true
            }
        })
        return posts
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError){
            if (error.code in Object.keys(errors)){
                const errorKey: keyof IErrors = error.code
                console.log(errors[errorKey])
            }
        }
    }
}

async function getOnePostWithComments(id: number){
    try{
        let post = await prisma.post.findUnique({
            where: {
                id: id
            },
            include: {
                comments: true
            }
        })
        return post
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError){
            if (error.code in Object.keys(errors)){
                const errorKey: keyof IErrors = error.code
                console.log(errors[errorKey])
            }
        }
    }
}

const productRepository = {
    getAllPosts: getAllPosts,
    getPostById: getPostById,
    createPost: createPost,
    deletePost: deletePost,
    getOnePostWithComments
 };


export default productRepository