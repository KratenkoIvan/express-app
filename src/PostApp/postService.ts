// Сервис работает с данными и возвращает их в контроллер
// Такая система упростит навигацию в проекте автору и возможным будущим авторам, сделает пользование проектом удобнее и улучшит его структуру
import {Prisma} from '@prisma/client'
import productRepository from "./postRepository"


async function getAllPosts() {
    const context = {
        posts: await productRepository.getAllPosts()
    }
    return context
}

async function getPostById(id: number) {
    const context = {
        post: await productRepository.getPostById(id)
    }

    if (context.post){
        return context
    }else {
        return undefined
    }
    
}

async function createPost(data: Prisma.PostCreateInput){
    await productRepository.createPost(data)
}

async function deletePost(id: number) {
    await productRepository.deletePost(id)
}

const postService = {
    getAllPosts: getAllPosts,
    getPostById: getPostById,
    createPost: createPost,
    deletePost: deletePost,
 
}

export default postService