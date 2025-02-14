import {PrismaClient} from '@prisma/client'
import { getPrismaClient } from '@prisma/client/runtime/library'

const prisma = new PrismaClient()

async function createPost(){
    const post = await prisma.post.create({
        data: {
            name: 'name1',
            description: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            time: '11.09.2001',
            author: 'author1',
        }
    })
    console.log(post)
}

async function createPosts(){
    const post = await prisma.post.createMany({
        data: [
        {
            name: 'name2',
            description: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            time: '11.09.2001',
            author: 'author2',
        },
        {
            name: 'name3',
            description: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            time: '11.09.2001',
            author: 'author3',
        },
    ]
        
    })
    console.log(post)
}

async function updatePost(){
    const post = await prisma.post.update({
        where: {
            id: 1
        },
        data: {
            name: 'updatedName',
            description: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            time: '11.09.2001',
            author: 'updatedAuthor',
        }
    })
    console.log(post)
}

async function findPost(){
    const post = await prisma.post.findUnique({
        where: {
            id: 1
        }
    })
    console.log(post)
}

async function findPosts(){
    const post = await prisma.post.findMany({
        where: {
            id: { in: [1,2,3] }
        }
    })
    console.log(post)
}

async function deletePost(){
    const post = await prisma.post.delete({
        where: {
            id: 1
        }
    })
    console.log(post)
}



async function createComment(){
    const comment = await prisma.comment.create({
        data: {
            body: 'first comment',
            title: 'comment1',
            postId: 1,
            userId: 1,
        }
    })
    console.log(comment)
}

async function createComments(){
    const comment = await prisma.comment.createMany({
        data: [
        {
            body: 'first comment',
            title: 'comment1',
            postId: 1,
            userId: 1,
        },
        {
            body: 'second comment',
            title: 'comment2',
            postId: 1,
            userId: 1,
        },
    ]
    })
    console.log(comment)
}

async function deleteComment(){
    const comment = await prisma.comment.delete({
        where: {
            id: 1
        }
    })
    console.log(comment)
}

async function findComment(){
    const comment = await prisma.comment.findUnique({
        where: {
            id: 1
        }
    })
    console.log(comment)
}

async function findCommentPost(){
    const comment = await prisma.comment.findUnique({
        where: {
            id: 1
        }
    })
    const post = await prisma.post.findUnique({
        where: {
            id: comment?.postId
        },

        include: {
            comments: true
        }
    })
    console.log(post)
}

async function findPostWithComments(){
    const post = await prisma.post.findUnique({
        where: {
            id: 1
        },

        include: {
            comments: true
        }
    })
    console.log(post)
}

async function updateComment(){
    const comment = await prisma.comment.update({
        where: {
            id: 2
        },

        data: {
            body: 'this comment has been updated',
            title: 'updated comment'
        }
    })
}

async function createAdmin(){
    const user = await prisma.user.create({
        data: {
            username: 'admin',
            email: 'admin@admin',
            password: 'admin',
            role: 'admin'
        },
    })
    console.log(user)
}

createPosts().then(() => {
    prisma.$disconnect()
}).catch((err) => {
    console.log(err)
    prisma.$disconnect()
})