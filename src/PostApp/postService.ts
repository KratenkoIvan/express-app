import productRepository from "./postRepository"
import { IError, ISuccess } from '../types/types'
import { CreatePost, Post, PostWithComments } from './postTypes'


async function getAllPosts(): Promise<ISuccess<Post[]> | IError> {
    const posts = await productRepository.getAllPosts()

    if (!posts) {
        return {
            status: 'error',
            message: 'No posts found'
        }
    }
    return {status: 'success', data: posts}
}

async function getPostById(id: number): Promise<ISuccess<Post> | IError> {
    const post = await productRepository.getPostById(id)
    
    if(!post){
        return {
            status: 'error',
            message: 'Post not found'
        }
    }
    
    return {status: 'success', data: post}
}

async function getOnePostWithComments(id: number): Promise<ISuccess<PostWithComments> | IError> {
    const post = await productRepository.getOnePostWithComments(id)
    if (!post) {
        return {
            status: 'error',
            message: 'Post not found'
        }
    }
    return {status: 'success', data: post}
}

async function createPost(data: CreatePost): Promise<ISuccess<Post> | IError>{
    let post = await productRepository.createPost(data)
    if (!post){
        return {
            status: 'error',
            message: 'Failed to create post'
        }
    }
    return {status:'success', data: post}
}

async function deletePost(id: number):Promise<ISuccess<Post> | IError>{
    let post = await productRepository.deletePost(id)
    if (!post){
        return {
            status: 'error',
            message: 'Failed to delete post'
        }
    }
    return {status:'success', data: post}
}

const postService = {
    getAllPosts: getAllPosts,
    getPostById: getPostById,
    createPost: createPost,
    deletePost: deletePost,
    getOnePostWithComments: getOnePostWithComments,
 };


export default postService