// Сервис работает с данными и возвращает их в контроллер
// Такая система упростит навигацию в проекте автору и возможным будущим авторам, сделает пользование проектом удобнее и улучшит его структуру
const posts:{name: string, description: string, time: string, author: string}[] = [
    {
        'name': 'name1',
        'description': 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        'time': '11.09.2001',
        'author': 'author1',
    },
    {
        'name': 'name2',
        'description': 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        'time': '11.09.2001',
        'author': 'author2',
    },
    {
        'name': 'name3',
        'description': 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        'time': '11.09.2001',
        'author': 'author3',
    },
    {
        'name': 'name4',
        'description': 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        'time': '11.09.2001',
        'author': 'author4',
    },
    {
        'name': 'name5',
        'description': 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        'time': '11.09.2001',
        'author': 'author5',
    }
]

function getAllPosts(): {posts: {name: string, description: string, time: string, author: string}[]} {
    const context = {
        posts: posts
    }
    return context
}

function getPostById(id: number): {context: {}, length: number} {
    const context = {
        post: posts[id - 1]
    }
    return {
        context: context,
        length: posts.length,
    }
}

function createPost(data: { name: string, description: string, time: string, author: string}): undefined {
    posts.push(data);
}

const postService = {
    getAllPosts: getAllPosts,
    getPostById: getPostById,
    createPost: createPost,
}

export default postService