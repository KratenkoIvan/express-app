// Контроллер обрабатывает HTTP-запрос и формирует ответ
// Такая система упростит навигацию в проекте автору и возможным будущим авторам, сделает пользование проектом удобнее и улучшит его структуру
import { Request, Response } from 'express'
import postService from './postService'

async function getAllPosts(req: Request, res: Response) {
    const context = await postService.getAllPosts()
    res.render('posts', context)
}

async function getPostById(req: Request, res: Response) {
    const id: number = Number(req.params.id)
    const context = await postService.getPostById(id)
    if (context){
        res.render('post', context)
    } else{
        res.render('error')
    }
}


async function createPost(req: Request, res: Response) {
    const data = await req.body
    postService.createPost(data)
}

const postController = {
    getAllPosts: getAllPosts,
    getPostById: getPostById,
    createPost: createPost,
}

export default postController