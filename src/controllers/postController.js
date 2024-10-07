// Контроллер обрабатывает HTTP-запрос и формирует ответ
// Такая система упростит навигацию в проекте автору и возможным будущим авторам, сделает пользование проектом удобнее и улучшит его структуру
const postService = require('../services/postService')

function getAllPosts(req, res) {
    const context = postService.getAllPosts()
    res.render('posts', context)
}

function getPostById(req, res) {
    const id = req.params.id
    const data = postService.getPostById(id)
    if (id <= data.length && id > 0){
        res.render('post', data.context)
    } else{
        res.render('error')
    }
}

function createPost(req, res) {
    const data = req.body
    postService.createPost(data)
}


module.exports = {
    getAllPosts: getAllPosts,
    getPostById: getPostById,
    createPost: createPost,
}