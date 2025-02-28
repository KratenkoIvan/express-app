import express, { Router } from 'express'
import postController from './postController'
import { authMiddleware } from '../middlewares/authMiddleware'
import { userRoleMiddleware } from '../middlewares/userRoleMiddleware'

const router: Router = express.Router()

router.get('/all', postController.getAllPosts)

router.get('/:id', postController.getPostById)

router.post('/create', authMiddleware, userRoleMiddleware, postController.createPost)
router.post('/delete', authMiddleware, userRoleMiddleware, postController.deletePost)
export {router as postRouter}