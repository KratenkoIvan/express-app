// Контроллер обрабатывает HTTP-запрос и формирует ответ
// Такая система упростит навигацию в проекте автору и возможным будущим авторам, сделает пользование проектом удобнее и улучшит его структуру
import { Request, Response } from 'express'
import postService from './postService'

async function getAllPosts(req: Request, res: Response) {
    const context = await postService.getAllPosts()
    
    if (context.status === 'error'){
        res.send('error')
    } else{
        console.log(context.data)
        res.render('posts', {posts: context.data})
    }
}

async function getPostById(req: Request, res: Response) {
    const id: number = Number(req.params.id)
    const context = await postService.getPostById(id)
    if (context.status === 'error'){
        res.send('error')
    } else{
        res.render('post', {post: context.data})
    }
}


async function createPost(req: Request, res: Response) {
    const data = await req.body
    const result = await postService.createPost(data)
    
    if (result.status === 'error'){
        res.send('error')
    } else{
        res.send('ok')
    }
}

async function deletePost(req: Request, res: Response) {
    const id: number = Number(req.params.id)
    const result = postService.deletePost(id)
}

const postController = {
    getAllPosts: getAllPosts,
    getPostById: getPostById,
    createPost: createPost,
    deletePost: deletePost
}

export default postController