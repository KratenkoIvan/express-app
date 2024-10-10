// Контроллер обрабатывает HTTP-запрос и формирует ответ
// Такая система упростит навигацию в проекте автору и возможным будущим авторам, сделает пользование проектом удобнее и улучшит его структуру
import { Request, Response } from 'express'
import postService from '../services/postService'
function getAllPosts(req: Request, res: Response): undefined {
    const context = postService.getAllPosts()
    res.render('posts', context)
}

function getPostById(req: Request, res: Response): undefined {
    const id: number = Number(req.params.id)
    const data = postService.getPostById(id)
    if (id <= data.length && id > 0){
        res.render('post', data.context)
    } else{
        res.render('error')
    }
}


function createPost(req: Request, res: Response): undefined {
    const data = req.body
    postService.createPost(data)
}

const postController = {
    getAllPosts: getAllPosts,
    getPostById: getPostById,
    createPost: createPost,
}

export default postController