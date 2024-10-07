// Роутер получает HTTP-запросы и передает их контроллеру
// Такая система упростит навигацию в проекте автору и возможным будущим авторам, сделает пользование проектом удобнее и улучшит его структуру
const express = require('express')
const router = express.Router()
const postController = require('../controllers/postController')


router.get('/all', postController.getAllPosts)

router.get('/:id', postController.getPostById)

router.post('/create', postController.createPost)

module.exports = router