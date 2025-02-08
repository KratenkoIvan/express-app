// Роутер получает HTTP-запросы и передает их контроллеру
// Такая система упростит навигацию в проекте автору и возможным будущим авторам, сделает пользование проектом удобнее и улучшит его структуру
import express, { Router } from 'express'
import postController from './postController'
import { authMiddleware } from '../middlewares/authMiddleware'
import { userRoleMiddleware } from '../middlewares/userRoleMiddleware'

const router: Router = express.Router()


router.use(authMiddleware)


router.get('/all', postController.getAllPosts)

router.get('/:id', postController.getPostById)

router.post('/create', userRoleMiddleware, postController.createPost)
router.post('/delete', postController.deletePost)
export {router as postRouter}