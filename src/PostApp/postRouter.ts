// Роутер получает HTTP-запросы и передает их контроллеру
// Такая система упростит навигацию в проекте автору и возможным будущим авторам, сделает пользование проектом удобнее и улучшит его структуру
import express, { Router } from 'express'
const router: Router = express.Router()
import postController from './postController'


router.get('/all', postController.getAllPosts)

router.get('/:id', postController.getPostById)

router.post('/create', postController.createPost)

export {router as postRouter}