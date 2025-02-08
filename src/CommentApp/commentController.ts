import { Request, Response } from 'express'
import commentService from './commentService'

async function getCommentsByPostId(req: Request, res: Response) {
    const postId: number = Number(req.params.id)
    const context = await commentService.getCommentsByPostId(postId)
    if (context){
        res.render('comment', context)
    } else{
        res.render('error')
    }
}

async function createCommentForPost(req: Request, res: Response) {
    const postId: number = Number(req.params.id)
    const data = await req.body
    commentService.createCommentForPost(postId, data)
}


const commentController = {
    getCommentsByPostId: getCommentsByPostId,
    createCommentForPost: createCommentForPost
}

export default commentController