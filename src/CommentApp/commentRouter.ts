import express, { Router } from 'express'
import commentController from './commentController'

const router: Router = express.Router()

router.post('/create', commentController.createCommentForPost)
router.get('/:postId', commentController.getCommentsByPostId)

export {router as commentRouter}