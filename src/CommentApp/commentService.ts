import {Prisma} from '@prisma/client'
import commentRepository from "./commentRepository"

async function getCommentsByPostId(postId: number) {
    const context = {
        comments: await commentRepository.getCommentsByPostId(postId)
    }

    if (context.comments){
        return context
    }else {
        return undefined
    }
    
}

async function createCommentForPost(postId: number, data: Prisma.CommentCreateInput){
    await commentRepository.createCommentForPost(postId, data)
}

const commentService = {
    getCommentsByPostId: getCommentsByPostId,
    createCommentForPost: createCommentForPost,
}

export default commentService