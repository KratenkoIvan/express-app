// не нада
import {Prisma} from '@prisma/client'
import commentRepository from "./commentRepository"
import { IError, ISuccess } from '../types/types'
import { Comment, CreateComment } from './commentTypes'

async function getCommentsByPostId(postId: number): Promise<IError | ISuccess<Comment[]>>{
    const comments = await commentRepository.getCommentsByPostId(postId)

    if(!comments){
        return {status: 'error', message:'No comments by this post'}
    }
    return {status: 'success', data: comments}
}

async function getCommentsByUserId(userId: number): Promise<IError | ISuccess<Comment[]>> {
    const comments = await commentRepository.getCommentsByPostId(userId)

    if(!comments){
        return {status: 'error', message:'No comments by this user'}
    }
    return {status: 'success', data: comments}
}

async function createCommentForPost(postId: number, data: CreateComment): Promise<IError | ISuccess<Comment>>{
    let comment = await commentRepository.createCommentForPost(postId, data)

    if (!comment){
        return {
            status: 'error',
            message: 'Failed to create post'
        }
    }
    return {status:'success', data: comment}
}

const commentService = {
    getCommentsByPostId: getCommentsByPostId,
    getCommentsByUserId: getCommentsByUserId, 
    createCommentForPost: createCommentForPost,
}

export default commentService