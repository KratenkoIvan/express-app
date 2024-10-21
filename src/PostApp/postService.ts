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
    return {
        context: context,
    }
}

async function createPost(data: Prisma.PostCreateInput){
    await productRepository.createPost(data)
}

const postService = {
    getAllPosts: getAllPosts,
    getPostById: getPostById,
    createPost: createPost,
}

export default postService